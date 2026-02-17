"use client";

import React, {
  useState,
  useCallback,
  useMemo,
  useEffect,
  useRef,
  memo,
} from "react";
import { Document, Page, pdfjs } from "react-pdf";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Loader2,
  ZoomIn,
  ZoomOut,
  RotateCcw /*, Download */,
} from "lucide-react";
import { getCachedPdf, awaitPdfCache } from "@/lib/prefetchPdf";

// Use self-hosted worker for faster loading (avoids external CDN request)
pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

function PDFModal({ isOpen, onClose, pdfUrl, title }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);
  const [pageRendering, setPageRendering] = useState(true);
  const [scale, setScale] = useState(1);
  const [pdfSource, setPdfSource] = useState(null);
  const containerRef = useRef(null);
  const pinchRef = useRef({
    initialDistance: 0,
    initialScale: 1,
    active: false,
  });

  // Memoize PDF.js options — disableAutoFetch: true fetches only the viewed page
  const pdfOptions = useMemo(
    () => ({
      disableAutoFetch: true,
      disableStream: false,
      isEvalSupported: false,
      cMapPacked: true,
    }),
    [],
  );
  const autoFitPerformed = useRef(false);
  const autoFitScale = useRef(1);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
    };
  }, [isOpen]);

  // Pinch-to-zoom for touch devices
  useEffect(() => {
    const container = containerRef.current;
    if (!container || !isOpen) return;

    const getDistance = (t1, t2) => {
      const dx = t1.clientX - t2.clientX;
      const dy = t1.clientY - t2.clientY;
      return Math.hypot(dx, dy);
    };

    const onTouchStart = (e) => {
      if (e.touches.length === 2) {
        e.preventDefault();
        pinchRef.current = {
          initialDistance: getDistance(e.touches[0], e.touches[1]),
          initialScale: scale,
          active: true,
        };
      }
    };

    const onTouchMove = (e) => {
      if (e.touches.length === 2 && pinchRef.current.active) {
        e.preventDefault();
        const currentDistance = getDistance(e.touches[0], e.touches[1]);
        const ratio = currentDistance / pinchRef.current.initialDistance;
        const newScale = Math.min(
          Math.max(pinchRef.current.initialScale * ratio, 0.4),
          2.5,
        );
        setScale(newScale);
      }
    };

    const onTouchEnd = () => {
      pinchRef.current.active = false;
    };

    container.addEventListener("touchstart", onTouchStart, { passive: false });
    container.addEventListener("touchmove", onTouchMove, { passive: false });
    container.addEventListener("touchend", onTouchEnd);

    return () => {
      container.removeEventListener("touchstart", onTouchStart);
      container.removeEventListener("touchmove", onTouchMove);
      container.removeEventListener("touchend", onTouchEnd);
    };
  }, [isOpen, scale]);

  // Reset state when pdfUrl changes and resolve cached data
  useEffect(() => {
    setPageNumber(1);
    setNumPages(null);
    setLoading(true);
    setPageRendering(true);
    setScale(1);
    autoFitPerformed.current = false;
    setPdfSource(null);

    if (!pdfUrl) return;

    // Try synchronous cache first, then await pending prefetch
    const cached = getCachedPdf(pdfUrl);
    if (cached && typeof cached === "object") {
      setPdfSource(cached);
    } else {
      let cancelled = false;
      awaitPdfCache(pdfUrl).then((source) => {
        if (!cancelled) setPdfSource(source);
      });
      return () => {
        cancelled = true;
      };
    }
  }, [pdfUrl]);

  // Memoized callbacks to prevent unnecessary re-renders
  const onDocumentLoadSuccess = useCallback(({ numPages }) => {
    setNumPages(numPages);
    setLoading(false);
  }, []);

  const onPageLoadSuccess = useCallback((page) => {
    if (containerRef.current && !autoFitPerformed.current) {
      const { clientWidth, clientHeight } = containerRef.current;
      const originalWidth = page.originalWidth || page.width;
      const originalHeight = page.originalHeight || page.height;

      const padding = clientWidth < 640 ? 16 : 48;
      const scaleWidth = (clientWidth - padding) / originalWidth;
      const scaleHeight = (clientHeight - padding) / originalHeight;

      const isLandscape = originalWidth > originalHeight;
      const optimalScale = isLandscape
        ? Math.min(scaleWidth, scaleHeight)
        : scaleWidth;

      if (optimalScale > 0 && optimalScale < 10) {
        setScale(optimalScale);
        autoFitScale.current = optimalScale;
        autoFitPerformed.current = true;
      }
    }
  }, []);

  const onPageRenderSuccess = useCallback(() => {
    setPageRendering(false);
  }, []);

  const onLoadError = useCallback((error) => {
    console.error("Error loading PDF:", error);
    setLoading(false);
    setPageRendering(false);
  }, []);

  const changePage = useCallback((offset) => {
    setPageNumber((prevPageNumber) => {
      setPageRendering(true);
      autoFitPerformed.current = false;
      return prevPageNumber + offset;
    });
  }, []);

  const previousPage = useCallback(() => changePage(-1), [changePage]);
  const nextPage = useCallback(() => changePage(1), [changePage]);

  const zoomIn = useCallback(() => {
    setScale((prev) => Math.min(prev + 0.2, 2.5));
  }, []);

  const zoomOut = useCallback(() => {
    setScale((prev) => Math.max(prev - 0.2, 0.4));
  }, []);

  const resetZoom = useCallback(() => {
    setScale(autoFitScale.current);
  }, []);

  const handleBackdropClick = useCallback(
    (e) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    },
    [onClose],
  );

  // Memoize the page class name to avoid recalculating on every render
  const pageClassName = useMemo(
    () =>
      `shadow-xl transition-opacity duration-300 ${pageRendering ? "opacity-0" : "opacity-100"}`,
    [pageRendering],
  );

  if (!isOpen || !pdfSource) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/80 backdrop-blur-xs p-0 sm:p-4"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full sm:max-w-5xl h-dvh sm:h-[90vh] bg-neutral-900 sm:rounded-xl overflow-hidden shadow-2xl flex flex-col border-0 sm:border border-white/10">
        {/* Header */}
        <div className="flex items-center justify-between p-3 sm:p-4 border-b border-white/10 bg-neutral-900/50">
          <h3 className="text-white text-sm sm:text-base font-medium truncate pr-2 sm:pr-4">
            {title || "Document Viewer"}
          </h3>
          <div className="flex items-center gap-2">
            {/* <a
                            href={pdfUrl}
                            download
                            className="p-2 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors"
                            title="Download PDF"
                        >
                            <Download size={20} />
                        </a> */}
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div
          ref={containerRef}
          className="flex-1 overflow-auto overscroll-contain flex bg-neutral-950 relative touch-pan-x touch-pan-y [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-neutral-900 [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-white/20"
        >
          {(loading || pageRendering) && (
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <Loader2 className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500 animate-spin" />
            </div>
          )}

          <div className="p-2 sm:p-4 m-auto">
            <div className="relative min-h-[40vh] sm:min-h-[50vh] flex items-center justify-center">
              <Document
                file={pdfSource}
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={onLoadError}
                loading={null}
                className="flex justify-center"
                options={pdfOptions}
              >
                <Page
                  pageNumber={pageNumber}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                  className={pageClassName}
                  scale={scale}
                  devicePixelRatio={1}
                  onLoadSuccess={onPageLoadSuccess}
                  onRenderSuccess={onPageRenderSuccess}
                  loading={null}
                />
              </Document>
            </div>
          </div>
        </div>

        {/* Footer / Controls */}
        <div className="p-2 sm:p-4 border-t border-white/10 bg-neutral-900/50 flex items-center justify-center gap-2 sm:gap-4 flex-wrap">
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              type="button"
              disabled={pageNumber <= 1}
              onClick={previousPage}
              className="p-1.5 sm:p-2 text-white bg-white/10 rounded-lg hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <span className="text-white text-xs sm:text-sm whitespace-nowrap">
              {pageNumber} / {numPages || "--"}
            </span>

            <button
              type="button"
              disabled={pageNumber >= (numPages || 1)}
              onClick={nextPage}
              className="p-1.5 sm:p-2 text-white bg-white/10 rounded-lg hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          <div className="w-px h-5 sm:h-6 bg-white/10 mx-1 sm:mx-2 hidden sm:block" />

          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              type="button"
              onClick={zoomOut}
              className="p-1.5 sm:p-2 text-white bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              title="Zoom Out"
            >
              <ZoomOut className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <span className="text-white text-[10px] sm:text-xs w-10 sm:w-12 text-center">
              {Math.round(scale * 100)}%
            </span>
            <button
              type="button"
              onClick={zoomIn}
              className="p-1.5 sm:p-2 text-white bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              title="Zoom In"
            >
              <ZoomIn className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              type="button"
              onClick={resetZoom}
              className="p-1.5 sm:p-2 text-white bg-white/10 rounded-lg hover:bg-white/20 transition-colors ml-0.5 sm:ml-1"
              title="Reset Zoom"
            >
              <RotateCcw className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(PDFModal);
