/**
 * Configuração do currículo em PDF.
 * Baseado no projeto CurriculumPDF do Prof. João Paulo Aramuni.
 *
 * Para trocar o currículo: coloque o PDF em public/ e ajuste "file" e
 * "downloadName" abaixo. Com mais de um item em FILES, aparecem botões de
 * idioma automaticamente.
 */
const CURRICULUM_CONFIG = {
  FILES: [
    {
      id: "pt",
      label: "Português",
      file: "/curriculo-pt.pdf",
      downloadName: "Curriculo-Gabriel-Hermont.pdf",
    },
    {
      id: "en",
      label: "English",
      file: "/curriculo-en.pdf",
      downloadName: "Resume-Gabriel-Hermont.pdf",
    },
  ],
  ZOOM_MIN: 0.5,
  ZOOM_MAX: 2,
  ZOOM_STEP: 0.25,
};

export default CURRICULUM_CONFIG;
