// In-memory cache for PDF ArrayBuffers
const pdfCache = new Map();
const pendingFetches = new Map();

/**
 * Prefetch a PDF file on hover by fetching the full ArrayBuffer into memory.
 * When the PDF is opened, the cached data is passed directly to react-pdf,
 * avoiding a second network request entirely.
 */
export function prefetchPdf(pdfPath) {
  if (typeof window === "undefined") return;
  if (pdfCache.has(pdfPath) || pendingFetches.has(pdfPath)) return;

  const fetchPromise = fetch(pdfPath)
    .then((res) => {
      if (!res.ok) throw new Error(`Failed to fetch PDF: ${res.status}`);
      return res.arrayBuffer();
    })
    .then((buffer) => {
      pdfCache.set(pdfPath, buffer);
      pendingFetches.delete(pdfPath);
      return buffer;
    })
    .catch(() => {
      pendingFetches.delete(pdfPath);
    });

  pendingFetches.set(pdfPath, fetchPromise);
}

/**
 * Get a cached PDF as an ArrayBuffer, or return the URL if not yet cached.
 * react-pdf accepts both {data: ArrayBuffer} and a URL string.
 */
export function getCachedPdf(pdfPath) {
  if (!pdfPath) return null;
  const cached = pdfCache.get(pdfPath);
  if (cached) return { data: new Uint8Array(cached) };
  return pdfPath;
}

/**
 * Wait for a pending prefetch to complete, then return cached data or URL.
 */
export async function awaitPdfCache(pdfPath) {
  if (!pdfPath) return null;
  if (pdfCache.has(pdfPath))
    return { data: new Uint8Array(pdfCache.get(pdfPath)) };
  const pending = pendingFetches.get(pdfPath);
  if (pending) {
    await pending;
    const cached = pdfCache.get(pdfPath);
    if (cached) return { data: new Uint8Array(cached) };
  }
  return pdfPath;
}
