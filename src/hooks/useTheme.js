import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "theme";

/**
 * Hook de tema (claro/escuro).
 *
 * - Tema padrão: escuro (o conceito "cinema").
 * - A escolha do usuário é persistida no localStorage.
 * - Aplica o atributo data-theme no elemento <html>, que ativa os tokens
 *   do tema claro definidos em tokens.css.
 *
 * Retorna o tema atual ("dark" | "light") e uma função para alternar.
 */
function getInitialTheme() {
  if (typeof window === "undefined") return "dark";
  return localStorage.getItem(STORAGE_KEY) === "light" ? "light" : "dark";
}

export default function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  // Aplica o tema no <html> e persiste sempre que mudar.
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "light") {
      root.setAttribute("data-theme", "light");
    } else {
      root.removeAttribute("data-theme");
    }
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }, []);

  return { theme, toggleTheme };
}
