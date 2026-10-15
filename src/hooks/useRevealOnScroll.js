import { useEffect, useRef, useState } from "react";

/**
 * Revela um elemento quando ele entra na viewport (fade-in ao rolar).
 *
 * Retorna uma ref (para o elemento observado) e um booleano `shown`.
 * Quando o elemento aparece pela primeira vez, `shown` vira true e permanece
 * (a animação roda uma única vez).
 *
 * Respeita prefers-reduced-motion: nesse caso já começa revelado.
 *
 * @param {object} [opts]
 * @param {number} [opts.threshold=0.15] - fração visível para disparar.
 * @param {string} [opts.rootMargin="0px 0px -10% 0px"] - margem de disparo.
 */
export default function useRevealOnScroll({
  threshold = 0.15,
  rootMargin = "0px 0px -10% 0px",
} = {}) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const reduced = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduced) {
      setShown(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect(); // anima uma vez só
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, shown };
}
