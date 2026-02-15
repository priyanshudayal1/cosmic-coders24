/**
 * Prefetch a PDF file on hover for faster perceived loading.
 * Inserts a <link rel="prefetch"> tag to start downloading the PDF
 * before the user actually clicks to open it.
 */
export function prefetchPdf(pdfPath) {
    if (typeof window === 'undefined') return;
    // Avoid duplicate prefetch links
    if (document.querySelector(`link[href="${pdfPath}"]`)) return;
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.as = 'fetch';
    link.href = pdfPath;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
}
