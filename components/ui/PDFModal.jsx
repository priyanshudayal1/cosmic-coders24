"use client";

import React, { useState, useCallback, useMemo, memo } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { X, ChevronLeft, ChevronRight, Loader2, ZoomIn, ZoomOut, RotateCcw /*, Download */ } from "lucide-react";

// Use self-hosted worker for faster loading (avoids external CDN request)
pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";



function PDFModal({ isOpen, onClose, pdfUrl, title }) {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [loading, setLoading] = useState(true);
    const [pageRendering, setPageRendering] = useState(true);
    const [scale, setScale] = useState(1);
    const containerRef = React.useRef(null);

    // Memoize PDF.js options to prevent unnecessary document reloads
    const pdfOptions = useMemo(() => ({
        disableAutoFetch: false,
        disableStream: false,
        isEvalSupported: false,
    }), []);
    const autoFitPerformed = React.useRef(false);

    // Prevent background scrolling when modal is open
    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
            document.documentElement.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
            document.documentElement.style.overflow = 'unset';
        };
    }, [isOpen]);

    // Reset state when pdfUrl changes
    React.useEffect(() => {
        setPageNumber(1);
        setNumPages(null);
        setLoading(true);
        setPageRendering(true);
        setScale(1);
        autoFitPerformed.current = false;
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

            const scaleWidth = (clientWidth - 48) / originalWidth;
            const scaleHeight = (clientHeight - 48) / originalHeight;

            const isLandscape = originalWidth > originalHeight;
            const optimalScale = isLandscape ? Math.min(scaleWidth, scaleHeight) : scaleWidth;

            if (optimalScale > 0 && optimalScale < 10) {
                setScale(optimalScale);
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
        setScale(prev => Math.min(prev + 0.2, 2.5));
    }, []);

    const zoomOut = useCallback(() => {
        setScale(prev => Math.max(prev - 0.2, 0.4));
    }, []);

    const resetZoom = useCallback(() => {
        setScale(1);
    }, []);

    const handleBackdropClick = useCallback((e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    }, [onClose]);

    // Memoize the page class name to avoid recalculating on every render
    const pageClassName = useMemo(() =>
        `shadow-xl transition-opacity duration-300 ${pageRendering ? 'opacity-0' : 'opacity-100'}`,
        [pageRendering]
    );

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xs p-4"
            onClick={handleBackdropClick}
        >
            <div className="relative w-full max-w-5xl h-[90vh] bg-neutral-900 rounded-xl overflow-hidden shadow-2xl flex flex-col border border-white/10">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-white/10 bg-neutral-900/50">
                    <h3 className="text-white font-medium truncate pr-4">{title || "Document Viewer"}</h3>
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
                <div ref={containerRef} className="flex-1 overflow-auto overscroll-contain flex bg-neutral-950 relative [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-neutral-900 [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-white/20">
                    {(loading || pageRendering) && (
                        <div className="absolute inset-0 flex items-center justify-center z-20">
                            <Loader2 className="w-8 h-8 text-purple-500 animate-spin" />
                        </div>
                    )}

                    <div className="p-4 m-auto">
                        <div className="relative min-h-[50vh] flex items-center justify-center">
                            <Document
                                file={pdfUrl}
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
                <div className="p-4 border-t border-white/10 bg-neutral-900/50 flex items-center justify-center gap-4">
                    <button
                        type="button"
                        disabled={pageNumber <= 1}
                        onClick={previousPage}
                        className="p-2 text-white bg-white/10 rounded-lg hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        <ChevronLeft size={20} />
                    </button>

                    <span className="text-white text-sm">
                        Page {pageNumber} of {numPages || "--"}
                    </span>

                    <button
                        type="button"
                        disabled={pageNumber >= (numPages || 1)}
                        onClick={nextPage}
                        className="p-2 text-white bg-white/10 rounded-lg hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        <ChevronRight size={20} />
                    </button>

                    <div className="w-px h-6 bg-white/10 mx-2" />

                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            onClick={zoomOut}
                            className="p-2 text-white bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                            title="Zoom Out"
                        >
                            <ZoomOut size={20} />
                        </button>
                        <span className="text-white text-xs w-12 text-center">
                            {Math.round(scale * 100)}%
                        </span>
                        <button
                            type="button"
                            onClick={zoomIn}
                            className="p-2 text-white bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                            title="Zoom In"
                        >
                            <ZoomIn size={20} />
                        </button>
                        <button
                            type="button"
                            onClick={resetZoom}
                            className="p-2 text-white bg-white/10 rounded-lg hover:bg-white/20 transition-colors ml-1"
                            title="Reset Zoom"
                        >
                            <RotateCcw size={16} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default memo(PDFModal);
