import { Suspense, lazy, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FiX } from "react-icons/fi";
import "./CurriculumModal.css";

// Carrega o visualizador (e o react-pdf, ~600 kB) só quando o modal abre.
const CurriculumViewer = lazy(() => import("./CurriculumViewer.jsx"));

/**
 * Modal que exibe o visualizador de currículo em PDF sobre a página.
 * Fecha ao clicar fora, no botão X ou com a tecla Esc.
 */
function CurriculumModal({ open, onClose }) {
  const { t } = useTranslation();

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="cv-overlay"
      role="dialog"
      aria-modal="true"
      aria-label={t("curriculum.modalTitle")}
      onClick={onClose}
    >
      <div className="cv-modal" onClick={(e) => e.stopPropagation()}>
        <div className="cv-modal-head">
          <span className="cv-modal-title">{t("curriculum.modalTitle")}</span>
          <button type="button" className="cv-close" onClick={onClose} aria-label={t("curriculum.close")}>
            <FiX aria-hidden="true" />
          </button>
        </div>
        <div className="cv-modal-body">
          <Suspense
            fallback={
              <p className="cv-status" role="status">
                <span className="cv-spinner" aria-hidden="true" /> {t("curriculum.loading")}
              </p>
            }
          >
            <CurriculumViewer />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

export default CurriculumModal;
