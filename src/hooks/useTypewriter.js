import { useEffect, useRef, useState } from "react";

/**
 * Hook de efeito "máquina de escrever" (typewriter).
 *
 * Digita cada frase letra por letra, pausa, apaga e passa para a próxima,
 * em loop. Retorna o texto parcial atual (para renderizar com um cursor).
 *
 * Respeita prefers-reduced-motion: se o usuário pede menos movimento, mostra
 * a primeira frase inteira e não anima.
 *
 * @param {string[]} phrases - frases que se alternam.
 * @param {object} [opts]
 * @param {number} [opts.typingSpeed=70]  - ms por letra ao digitar.
 * @param {number} [opts.deletingSpeed=35] - ms por letra ao apagar.
 * @param {number} [opts.pauseAfterType=1800] - ms de pausa com a frase completa.
 * @param {number} [opts.pauseAfterDelete=400] - ms de pausa com a frase vazia.
 */
export default function useTypewriter(
  phrases,
  {
    typingSpeed = 70,
    deletingSpeed = 35,
    pauseAfterType = 1800,
    pauseAfterDelete = 400,
  } = {}
) {
  const [text, setText] = useState("");
  const timeout = useRef(null);

  const phrasesKey = phrases.join("|");

  useEffect(() => {
    const list = phrasesKey.split("|");
    if (list.length === 0) return undefined;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    // Sem animação: mostra a primeira frase inteira.
    if (reduced) {
      setText(list[0]);
      return undefined;
    }

    let phraseIndex = 0;
    let charIndex = 0;
    let deleting = false;

    const tick = () => {
      const current = list[phraseIndex];

      if (!deleting) {
        charIndex += 1;
        setText(current.slice(0, charIndex));
        if (charIndex === current.length) {
          deleting = true;
          timeout.current = setTimeout(tick, pauseAfterType);
          return;
        }
        timeout.current = setTimeout(tick, typingSpeed);
      } else {
        charIndex -= 1;
        setText(current.slice(0, charIndex));
        if (charIndex === 0) {
          deleting = false;
          phraseIndex = (phraseIndex + 1) % list.length;
          timeout.current = setTimeout(tick, pauseAfterDelete);
          return;
        }
        timeout.current = setTimeout(tick, deletingSpeed);
      }
    };

    timeout.current = setTimeout(tick, typingSpeed);

    return () => {
      if (timeout.current) clearTimeout(timeout.current);
    };
  }, [phrasesKey, typingSpeed, deletingSpeed, pauseAfterType, pauseAfterDelete]);

  return text;
}
