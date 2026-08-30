"use client";

import React, { useEffect, useState } from "react";

export default function ImageModal({ isOpen, onClose, images = [], initialIndex = 0 }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex, isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight") {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      } else if (e.key === "ArrowLeft") {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, images.length, onClose]);

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex] || images[0];

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-black/85 backdrop-blur-md p-4 sm:p-6 transition-all animate-fadeIn"
      onClick={onClose}
    >
      {/* Top Bar: Title, Counter & Close Button */}
      <div
        className="w-full max-w-5xl flex items-center justify-between z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3">
          <span className="font-['Geist_Pixel'] text-sm sm:text-base text-white">
            {currentImage.title || "Project Preview"}
          </span>
          <span className="font-mono text-[11px] px-2 py-0.5 rounded-full bg-white/10 text-white/70 border border-white/15">
            {currentIndex + 1} / {images.length}
          </span>
        </div>

        <button
          onClick={onClose}
          className="flex items-center justify-center h-8 w-8 rounded-full bg-white/10 text-white hover:bg-white/20 border border-white/15 transition-colors cursor-pointer font-mono text-sm"
          aria-label="Close Preview"
        >
          ✕
        </button>
      </div>

      {/* Main Image Viewport with Previous & Next navigation */}
      <div
        className="relative flex-1 w-full max-w-5xl flex items-center justify-center my-4 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {images.length > 1 && (
          <button
            onClick={() => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)}
            className="absolute left-2 sm:left-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/90 border border-white/20 transition-all cursor-pointer text-lg"
            aria-label="Previous image"
          >
            ‹
          </button>
        )}

        <div className="relative max-h-[75vh] max-w-full flex items-center justify-center rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-zinc-950/50">
          <img
            src={currentImage.src}
            alt={currentImage.title || "Screenshot Preview"}
            className="max-h-[75vh] w-auto max-w-full object-contain rounded-lg"
          />
        </div>

        {images.length > 1 && (
          <button
            onClick={() => setCurrentIndex((prev) => (prev + 1) % images.length)}
            className="absolute right-2 sm:right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/90 border border-white/20 transition-all cursor-pointer text-lg"
            aria-label="Next image"
          >
            ›
          </button>
        )}
      </div>

      {/* Bottom Bar: Caption and Thumbnail Filmstrip */}
      <div
        className="w-full max-w-5xl flex flex-col items-center gap-3 z-10"
        onClick={(e) => e.stopPropagation()}
      >
        {currentImage.caption && (
          <p className="font-mono text-xs text-center text-zinc-300 max-w-2xl px-4 py-1.5 rounded-lg bg-black/40 border border-white/10 backdrop-blur-sm">
            {currentImage.caption}
          </p>
        )}

        {images.length > 1 && (
          <div className="flex items-center gap-2 overflow-x-auto py-1 px-2 max-w-full">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`relative h-12 w-20 shrink-0 overflow-hidden rounded-md border transition-all cursor-pointer ${
                  idx === currentIndex
                    ? "border-white scale-105 shadow-md shadow-white/10"
                    : "border-white/20 opacity-50 hover:opacity-100 hover:border-white/40"
                }`}
              >
                <img
                  src={img.src}
                  alt={img.title || `Thumbnail ${idx + 1}`}
                  className="h-full w-full object-cover object-top"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
