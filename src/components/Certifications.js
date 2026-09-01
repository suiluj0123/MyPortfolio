"use client";

import React, { useState, useEffect, useCallback } from "react";
import { portfolioData } from "../data/portfolio";

export default function Certifications({ sectionRef }) {
  const [lightboxImg, setLightboxImg] = useState(null);

  const closeLightbox = useCallback(() => setLightboxImg(null), []);

  useEffect(() => {
    if (!lightboxImg) return;
    const handleKey = (e) => {
      if (e.key === "Escape") closeLightbox();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [lightboxImg, closeLightbox]);

  return (
    <section id="certifications" ref={sectionRef} className="py-12 scroll-mt-6">
      <div className="mb-6 flex items-baseline justify-between">
        <h2 className="font-['Geist_Pixel'] text-sm text-[color:rgb(var(--g400))] uppercase tracking-wider">
          05 — certifications
        </h2>
        <span className="font-mono text-[11px] text-[color:rgb(var(--g400))]">
          {portfolioData.certifications.length} Credentials
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {portfolioData.certifications.map((cert, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setLightboxImg(cert.logoUrl)}
            className="group relative flex items-center gap-4 rounded-xl border border-[color:rgb(var(--g200))] bg-[color:rgb(var(--bg))] p-4.5 transition-all hover:border-[color:rgb(var(--g400))] hover:shadow-sm text-left cursor-pointer"
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[color:rgb(var(--g500))]">
                  {cert.issuer}
                </span>
              </div>
              <h3 className="mt-1 text-sm font-semibold text-[color:rgb(var(--ink))] truncate">
                {cert.title}
              </h3>
            </div>

            <div className="shrink-0 font-mono text-[10px] text-[color:rgb(var(--g400))] group-hover:text-[color:rgb(var(--ink))] transition-colors">
              View ↗
            </div>
          </button>
        ))}
      </div>

      {/* Certificate Lightbox */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 backdrop-blur-sm cursor-pointer"
          onClick={closeLightbox}
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 flex items-center justify-center h-10 w-10 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors cursor-pointer backdrop-blur-md"
            aria-label="Close"
          >
            ✕
          </button>

          <img
            src={lightboxImg}
            alt="Certificate Full View"
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
