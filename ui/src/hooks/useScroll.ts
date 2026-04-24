import { useCallback } from "react";

function useScroll() {
  const scrollTo = useCallback(
    (target: string | number | HTMLElement | null) => {
      requestAnimationFrame(() => {
        if (typeof target === "number") {
          window.scrollTo({ top: target, behavior: "smooth" });
        } else if (typeof target === "string") {
          const el = document.getElementById(target);
          if (el) {
            el.scrollIntoView({ behavior: "smooth" });
          } else {
            console.warn(`Element with ID "${target}" not found.`);
          }
        } else if (target instanceof HTMLElement) {
          target.scrollIntoView({ behavior: "smooth" });
        } else {
          console.warn("Invalid scroll target:", target);
        }
      });
    },
    []
  );

  return scrollTo;
}

export default useScroll;
