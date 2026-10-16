import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import ptBR from "./locales/pt-BR/translation.json";
import en from "./locales/en/translation.json";

/**
 * Configuração do i18next (padrão do projeto Internacionalizacao_i18n do
 * Prof. João Paulo Aramuni). Dois idiomas: português (pt-BR) e inglês (en).
 *
 * - LanguageDetector: na 1ª visita usa o idioma do navegador; depois, a escolha
 *   salva no localStorage.
 * - A detecção usa só localStorage e navigator (não htmlTag), para o <html lang>
 *   do index.html não vencer o idioma do navegador.
 */
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      "pt-BR": { translation: ptBR },
      en: { translation: en },
    },
    supportedLngs: ["pt-BR", "en"],
    fallbackLng: "pt-BR",
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    interpolation: { escapeValue: false },
  });

export default i18n;
