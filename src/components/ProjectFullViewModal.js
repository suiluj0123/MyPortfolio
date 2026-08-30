"use client";

import React, { useEffect } from "react";
import ImageModal from "./ImageModal";

export default function ProjectFullViewModal({
  isOpen,
  onClose,
  project,
  onNext,
  onPrev,
  onOpenSimulator
}) {
  const [lightboxState, setLightboxState] = React.useState({
    isOpen: false,
    images: [],
    initialIndex: 0
  });

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        if (lightboxState.isOpen) {
          setLightboxState((prev) => ({ ...prev, isOpen: false }));
        } else {
          onClose();
        }
      } else if (e.key === "ArrowRight" && !lightboxState.isOpen && onNext) {
        onNext();
      } else if (e.key === "ArrowLeft" && !lightboxState.isOpen && onPrev) {
        onPrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, lightboxState.isOpen, onClose, onNext, onPrev]);

  if (!isOpen || !project) return null;

  const isBakas = project.title.toLowerCase().includes("bakas");

  const openLightbox = (imgIdx = 0) => {
    const imagesToDisplay = project.previews && project.previews.length > 0
      ? project.previews
      : [{ title: project.title, caption: project.description, src: project.imageUrl }];

    setLightboxState({
      isOpen: true,
      images: imagesToDisplay,
      initialIndex: imgIdx
    });
  };

  return (
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6 animate-fadeIn overflow-y-auto"
        onClick={onClose}
      >
        <div
          className="relative w-full max-w-3xl rounded-2xl border border-[color:rgb(var(--g200))] bg-[color:rgb(var(--bg))] p-6 sm:p-8 shadow-2xl transition-all my-auto max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Bar: Badges & Controls */}
          <div className="flex items-center justify-between gap-3 mb-4 pb-4 border-b border-[color:rgb(var(--g200))]">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center rounded-full bg-[color:rgb(var(--ink))] px-3 py-0.5 font-mono text-[10px] uppercase tracking-wider text-[color:rgb(var(--bg))] font-medium">
                {project.badge}
              </span>
              <span className="font-mono text-xs text-[color:rgb(var(--g500))]">
                Full Project View
              </span>
            </div>

            <div className="flex items-center gap-2">
              {onPrev && (
                <button
                  onClick={onPrev}
                  className="h-8 w-8 rounded-lg border border-[color:rgb(var(--g200))] hover:border-[color:rgb(var(--g400))] text-[color:rgb(var(--ink))] flex items-center justify-center transition-colors font-mono text-sm cursor-pointer"
                  title="Previous Project (← key)"
                >
                  ←
                </button>
              )}
              {onNext && (
                <button
                  onClick={onNext}
                  className="h-8 w-8 rounded-lg border border-[color:rgb(var(--g200))] hover:border-[color:rgb(var(--g400))] text-[color:rgb(var(--ink))] flex items-center justify-center transition-colors font-mono text-sm cursor-pointer"
                  title="Next Project (→ key)"
                >
                  →
                </button>
              )}
              <button
                onClick={onClose}
                className="h-8 w-8 rounded-lg border border-[color:rgb(var(--g200))] bg-[color:rgb(var(--g50))] hover:bg-[color:rgb(var(--g100))] text-[color:rgb(var(--ink))] flex items-center justify-center transition-colors font-mono text-sm cursor-pointer ml-1"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Project Title & Hero Header */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
            <div
              onClick={() => openLightbox(0)}
              className="h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-[color:rgb(var(--g200))] bg-[color:rgb(var(--g50))] p-1 shadow-sm cursor-pointer group relative"
              title="Click to view image"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="h-full w-full object-cover rounded-lg group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity text-white text-xs">
                🔍
              </div>
            </div>
            <div>
              <h2 className="font-['Geist_Pixel'] text-xl sm:text-2xl text-[color:rgb(var(--ink))]">
                {project.title}
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-[color:rgb(var(--g600))] leading-relaxed">
                {project.description}
              </p>
            </div>
          </div>

          {/* Action Links Bar */}
          <div className="flex flex-wrap gap-2.5 items-center mb-6 pb-6 border-b border-dashed border-[color:rgb(var(--g200))]">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono border border-[color:rgb(var(--ink))] bg-[color:rgb(var(--ink))] text-[color:rgb(var(--bg))] px-3.5 py-2 rounded-lg hover:opacity-90 transition-opacity font-medium shadow-sm"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Launch Live App ↗
              </a>
            )}

            {isBakas && onOpenSimulator && (
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenSimulator();
                }}
                className="inline-flex items-center gap-1.5 text-xs font-mono border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-3.5 py-2 rounded-lg hover:bg-emerald-500/20 transition-all font-medium cursor-pointer shadow-sm"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                📱 Launch Interactive Mobile Simulator ➔
              </button>
            )}

            {project.githubUrl && project.githubUrl !== "#" && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono border border-[color:rgb(var(--g300))] bg-[color:rgb(var(--bg))] px-3.5 py-2 rounded-lg hover:bg-[color:rgb(var(--g100))] text-[color:rgb(var(--ink))] transition-colors"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
                GitHub Repository ↗
              </a>
            )}
          </div>

          {/* Screenshot Previews Showcase */}
          {project.previews && project.previews.length > 0 && (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[color:rgb(var(--ink))] font-bold">
                  System Previews & Screenshots ({project.previews.length}):
                </span>
                <span className="font-mono text-[10px] text-[color:rgb(var(--g500))]">
                  Click any image to view in high resolution 🔍
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {project.previews.map((prev, pIdx) => (
                  <button
                    key={pIdx}
                    type="button"
                    onClick={() => openLightbox(pIdx)}
                    className="group/img relative flex flex-col text-left overflow-hidden rounded-xl border border-[color:rgb(var(--g200))] bg-[color:rgb(var(--g100))] hover:border-[color:rgb(var(--g400))] transition-all cursor-pointer shadow-sm hover:shadow-md"
                  >
                    <div className="relative aspect-video w-full overflow-hidden bg-black/5">
                      <img
                        src={prev.src}
                        alt={prev.title}
                        className="h-full w-full object-cover object-top transition-transform duration-300 group-hover/img:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/35 opacity-0 group-hover/img:opacity-100 flex items-center justify-center transition-opacity text-white text-[11px] font-mono gap-1">
                        <span>🔍 Full View</span>
                      </div>
                    </div>
                    <div className="p-2.5 border-t border-[color:rgb(var(--g200))] bg-[color:rgb(var(--bg))] w-full">
                      <div className="font-['Geist_Pixel'] text-xs text-[color:rgb(var(--ink))]">
                        {prev.title}
                      </div>
                      {prev.caption && (
                        <p className="mt-0.5 font-mono text-[10px] text-[color:rgb(var(--g500))] line-clamp-1">
                          {prev.caption}
                        </p>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Key Features & Architecture */}
          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <div className="mb-6">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[color:rgb(var(--ink))] font-bold block mb-2.5">
                Key Features & Engineering Highlights:
              </span>
              <ul className="flex flex-col gap-2 pl-1 font-mono text-xs text-[color:rgb(var(--g600))]">
                {project.keyFeatures.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2">
                    <span className="text-[color:rgb(var(--ink))] font-bold shrink-0">↳</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack Tags Breakdown */}
          <div>
            <span className="font-mono text-[11px] uppercase tracking-wider text-[color:rgb(var(--ink))] font-bold block mb-2">
              Technologies & Tools:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="rounded-md border border-[color:rgb(var(--g200))] bg-[color:rgb(var(--g50))] px-2.5 py-1 font-mono text-xs text-[color:rgb(var(--ink))]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Nested Lightbox for High-Res Zoom */}
      <ImageModal
        isOpen={lightboxState.isOpen}
        onClose={() => setLightboxState((prev) => ({ ...prev, isOpen: false }))}
        images={lightboxState.images}
        initialIndex={lightboxState.initialIndex}
      />
    </>
  );
}
