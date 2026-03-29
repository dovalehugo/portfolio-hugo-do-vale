"use client";

import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 z-50 flex w-full justify-center pb-4 pt-6 backdrop-blur-[2px] bg-gradient-to-t from-black/20 to-transparent">
      <button
        onClick={scrollToTop}
        aria-label="Volver arriba"
        className="rounded-full border border-white/15 bg-zinc-900/80 px-4 py-3 text-2xl text-white shadow-xl transition hover:bg-zinc-800"
      >
        ↑
      </button>
    </div>
  );
}