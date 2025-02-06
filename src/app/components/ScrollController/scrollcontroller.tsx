"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const ScrollToTop = () => {
  const pathname = usePathname(); // Ottieni la route corrente

  useEffect(() => {
    window.scrollTo(0, 0) // Sposta la finestra in alto
  }, [pathname]);

  return null; // Nessun output visibile
};

export default ScrollToTop;