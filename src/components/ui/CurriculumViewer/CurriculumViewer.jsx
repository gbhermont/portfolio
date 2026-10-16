import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  FiDownload,
  FiExternalLink,
  FiMaximize2,
  FiZoomIn,
  FiZoomOut,
} from "react-icons/fi";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import CURRICULUM_CONFIG from "../../../data/curriculumConfig";
import "./CurriculumViewer.css";

// O PDF.js lê o PDF num "worker" (outra thread) para não travar a página.
// Precisa ser configurado no MESMO arquivo que usa <Document>.
import workerUrl from "pdfjs-dist/build/pdf.worker.min.mjs?url";

pdfjs.GlobalWorkerOptions.workerSrc = workerUrl;

const { FILES, ZOOM_MIN, ZOOM_MAX, ZOOM_STEP } = CURRICULUM_CONFIG;

/**
 * Visualizador de currículo em PDF (react-pdf / PDF.js).
 * Baseado no projeto CurriculumPDF do Prof. João Paulo Aramuni, adaptado para
 * JavaScript e para o tema do portfólio.
 */
export default function CurriculumViewer({ files = FILES }) {
  const { t, i18n } = useTranslation();
  const areaRef = useRef(null);
  // Começa pelo currículo no idioma atual do site (en → "en"), com fallback no 1º.
  const initial =
    files.find((f) => i18n.resolvedLanguage?.startsWith(f.id)) ?? files[0];
  const [current, setCurrent] = useState(initial);
  const [pages, setPages] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [width, setWidth] = useState(null);
  const [error, setError] = useState(false);

  // Com zoom 100%, a página ocupa a largura da área (acompanha a janela).
  useEffect(() => {
    const area = areaRef.current;
    if (!area) return undefined;
    const observer = new ResizeObserver(([entry]) =>
      setWidth(Math.max(240, Math.floor(entry.contentRect.width)))
    );
    observer.observe(area);
    return () => observer.disconnect();
  }, []);

  const changeFile = (file) => {
    if (file.id === current.id) return;
    setCurrent(file);
    setPages(0);
    setError(false);
  };

  const changeZoom = (delta) =>
    setZoom((z) => Math.min(ZOOM_MAX, Math.max(ZOOM_MIN, +(z + delta).toFixed(2))));

  const pageWidth = width ? Math.round(Math.min(width, 900) * zoom) : undefined;
  const loading = !error && pages === 0;

  return (
    <div className="cv-viewer">
      <div className="cv-toolbar">
        <div className="cv-toolbar-left">
          {files.length > 1 && (
            <div className="cv-langs" role="group" aria-label={t("curriculum.langGroupLabel")}>
              {files.map((file) => (
                <button
                  key={file.id}
                  type="button"
                  className={file.id === current.id ? "active" : ""}
                  aria-pressed={file.id === current.id}
                  onClick={() => changeFile(file)}
                >
                  {file.label}
                </button>
              ))}
            </div>
          )}
          {pages > 0 && (
            <span className="cv-pages">
              {pages} {pages === 1 ? t("curriculum.page") : t("curriculum.pages")}
            </span>
          )}
        </div>

        <div className="cv-zoom" role="group" aria-label={t("curriculum.zoomLabel")}>
          <button type="button" onClick={() => changeZoom(-ZOOM_STEP)} disabled={zoom <= ZOOM_MIN} title={t("curriculum.zoomOut")}>
            <FiZoomOut aria-hidden="true" />
          </button>
          <span className="cv-zoom-value" aria-live="polite">
            {Math.round(zoom * 100)}%
          </span>
          <button type="button" onClick={() => changeZoom(ZOOM_STEP)} disabled={zoom >= ZOOM_MAX} title={t("curriculum.zoomIn")}>
            <FiZoomIn aria-hidden="true" />
          </button>
          <button type="button" onClick={() => setZoom(1)} disabled={zoom === 1} title={t("curriculum.fitWidth")}>
            <FiMaximize2 aria-hidden="true" />
          </button>
        </div>

        <div className="cv-actions">
          <a className="cv-button primary" href={current.file} download={current.downloadName}>
            <FiDownload aria-hidden="true" /> {t("curriculum.download")}
          </a>
          <a className="cv-button" href={current.file} target="_blank" rel="noopener noreferrer">
            <FiExternalLink aria-hidden="true" /> {t("curriculum.open")}
          </a>
        </div>
      </div>

      <div className="cv-area" ref={areaRef}>
        {loading && (
          <p className="cv-status" role="status">
            <span className="cv-spinner" aria-hidden="true" /> {t("curriculum.loadingResume")}
          </p>
        )}

        {error ? (
          <p className="cv-status cv-error">
            {t("curriculum.errorPrefix")}
            <strong>{t("curriculum.download")}</strong>
            {t("curriculum.errorMid")}
            <strong>{t("curriculum.open")}</strong>
            {t("curriculum.errorSuffix")}
          </p>
        ) : (
          <Document
            key={current.file}
            file={current.file}
            onLoadSuccess={({ numPages }) => setPages(numPages)}
            onLoadError={(err) => {
              console.error("Currículo: falha ao abrir o PDF", err);
              setError(true);
            }}
            loading={null}
            error={null}
            externalLinkTarget="_blank"
            externalLinkRel="noopener noreferrer"
          >
            {pageWidth &&
              Array.from({ length: pages }, (_, i) => (
                <div key={i} className="cv-page">
                  <Page pageNumber={i + 1} width={pageWidth} loading={null} />
                </div>
              ))}
          </Document>
        )}
      </div>
    </div>
  );
}
