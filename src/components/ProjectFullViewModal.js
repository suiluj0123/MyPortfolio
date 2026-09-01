"use client";

import React, { useEffect } from "react";
import ImageModal from "./ImageModal";

export default function ProjectFullViewModal({
  isOpen,
  onClose,
  project,
  initialModuleTab = "all",
  onNext,
  onPrev
}) {
  const [lightboxState, setLightboxState] = React.useState({
    isOpen: false,
    images: [],
    initialIndex: 0
  });

  const [activeModuleTab, setActiveModuleTab] = React.useState(initialModuleTab || "all");

  useEffect(() => {
    setActiveModuleTab(initialModuleTab || "all");
  }, [project?.title, initialModuleTab]);

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

  const openLightbox = (imgList, imgIdx = 0) => {
    const imagesToDisplay = Array.isArray(imgList) && imgList.length > 0
      ? imgList
      : project.previews && project.previews.length > 0
      ? project.previews
      : [{ title: project.title, caption: project.description, src: project.imageUrl }];

    setLightboxState({
      isOpen: true,
      images: imagesToDisplay,
      initialIndex: imgIdx
    });
  };

  const allModuleScreenshots = project.modules
    ? project.modules.flatMap((m) => m.screenshots || [])
    : project.previews || [];

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
              onClick={() => openLightbox(allModuleScreenshots, 0)}
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

          {/* Project Objective Callout */}
          {project.objective && (
            <div className="mb-6 rounded-xl border border-[color:rgb(var(--g200))] bg-[color:rgb(var(--g50))] p-4 sm:p-5">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[color:rgb(var(--ink))] font-bold block mb-1.5">
                Project Objective:
              </span>
              <p className="text-xs sm:text-[13px] text-[color:rgb(var(--g600))] leading-relaxed">
                {project.objective}
              </p>
            </div>
          )}

          {/* AI Feature Spotlight */}
          {project.aiHighlight && (
            <div className="mb-6 rounded-xl border border-[color:rgb(var(--g200))] bg-[color:rgb(var(--g50))] p-4 sm:p-5">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[color:rgb(var(--ink))] font-bold">
                  Generative AI Integration — {project.aiHighlight.title}
                </span>
              </div>
              <p className="text-xs sm:text-[13px] text-[color:rgb(var(--g600))] leading-relaxed">
                {project.aiHighlight.summary}
              </p>
            </div>
          )}

          {/* Categorized System Modules Showcase (if modules present) */}
          {project.modules && project.modules.length > 0 ? (
            <div className="mb-6 rounded-2xl border border-[color:rgb(var(--g200))] bg-[color:rgb(var(--g50))] p-4 sm:p-5">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pb-3 border-b border-[color:rgb(var(--g200))]">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[color:rgb(var(--ink))] font-bold">
                    System Modules & Visual Previews ({allModuleScreenshots.length})
                  </span>
                </div>
                <span className="font-mono text-[10px] text-[color:rgb(var(--g500))]">
                  Click any image for high-res view ↗
                </span>
              </div>

              {/* Module Filter Tabs */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                <button
                  type="button"
                  onClick={() => setActiveModuleTab("all")}
                  className={`px-3 py-1 rounded-lg font-mono text-xs transition-all cursor-pointer ${
                    activeModuleTab === "all"
                      ? "bg-[color:rgb(var(--ink))] text-[color:rgb(var(--bg))] font-medium shadow-sm"
                      : "bg-[color:rgb(var(--bg))] border border-[color:rgb(var(--g200))] text-[color:rgb(var(--g600))] hover:border-[color:rgb(var(--g400))]"
                  }`}
                >
                  All Modules ({allModuleScreenshots.length})
                </button>
                {project.modules.map((mod) => (
                  <button
                    key={mod.id}
                    type="button"
                    onClick={() => setActiveModuleTab(mod.id)}
                    className={`px-3 py-1 rounded-lg font-mono text-xs transition-all cursor-pointer flex items-center gap-1.5 ${
                      activeModuleTab === mod.id
                        ? "bg-[color:rgb(var(--ink))] text-[color:rgb(var(--bg))] font-medium shadow-sm"
                        : "bg-[color:rgb(var(--bg))] border border-[color:rgb(var(--g200))] text-[color:rgb(var(--g600))] hover:border-[color:rgb(var(--g400))]"
                    }`}
                  >
                    <span>{mod.name.split(". ")[1] || mod.name}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                        activeModuleTab === mod.id
                          ? "bg-white/20 text-white"
                          : "bg-[color:rgb(var(--g100))] text-[color:rgb(var(--g600))]"
                      }`}
                    >
                      {mod.screenshots ? mod.screenshots.length : 0}
                    </span>
                  </button>
                ))}
              </div>

              {/* Displayed Modules: 1-Card-Per-Module Album Grid in 'All' View, or Expanded Grid in Single-Module View */}
              {activeModuleTab === "all" ? (
                /* Compact 2-Column Module Album Cards */
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.modules.map((mod, mIdx) => {
                    const screens = mod.screenshots || [];
                    const cover = screens[0];
                    const otherScreens = screens.slice(1, 4);
                    const remainingCount = screens.length > 4 ? screens.length - 4 : 0;

                    return (
                      <div
                        key={mod.id || mIdx}
                        className="group/modCard rounded-xl border border-[color:rgb(var(--g200))] bg-[color:rgb(var(--bg))] p-4 shadow-sm hover:shadow-md hover:border-[color:rgb(var(--g400))] transition-all flex flex-col justify-between"
                      >
                        <div>
                          {/* Module Header */}
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="font-mono text-[10px] text-[color:rgb(var(--g400))] font-semibold">
                                  MOD 0{mIdx + 1}
                                </span>
                                {mod.badge && (
                                  <span className="rounded bg-[color:rgb(var(--g100))] px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-[color:rgb(var(--g600))] font-medium">
                                    {mod.badge}
                                  </span>
                                )}
                              </div>
                              <h3 className="font-['Geist_Pixel'] text-sm text-[color:rgb(var(--ink))] mt-0.5 leading-snug">
                                {mod.name.split(". ")[1] || mod.name}
                              </h3>
                            </div>
                            <span className="shrink-0 font-mono text-[10px] bg-[color:rgb(var(--ink))] text-[color:rgb(var(--bg))] px-2 py-0.5 rounded-full font-medium shadow-2xs">
                              {screens.length} Screen{screens.length > 1 ? "s" : ""}
                            </span>
                          </div>

                          {mod.summary && (
                            <p className="text-xs text-[color:rgb(var(--g600))] mb-3 line-clamp-2 leading-relaxed">
                              {mod.summary}
                            </p>
                          )}

                          {/* Hero Cover Image (Clicking opens Album) */}
                          {cover && (
                            <button
                              type="button"
                              onClick={() => openLightbox(screens, 0)}
                              className="relative w-full aspect-video overflow-hidden rounded-lg border border-[color:rgb(var(--g200))] bg-black/5 cursor-pointer group/cover block text-left"
                              title="Click to browse module album in high resolution"
                            >
                              <img
                                src={cover.src}
                                alt={cover.title}
                                className="h-full w-full object-cover object-top transition-transform duration-500 group-hover/cover:scale-105"
                              />

                              {/* Hover Badge */}
                              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/cover:opacity-100 flex items-center justify-center transition-opacity text-white text-xs font-mono gap-1.5 backdrop-blur-2xs">
                                <span>📸 Open {screens.length} Screens Album</span>
                                <span>↗</span>
                              </div>

                              {/* Bottom caption overlay */}
                              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-2 pt-4 text-white">
                                <div className="font-['Geist_Pixel'] text-[11px] truncate">
                                  {cover.title}
                                </div>
                              </div>
                            </button>
                          )}

                          {/* Mini Thumbnail Stack (if multiple screens) */}
                          {screens.length > 1 && (
                            <div className="grid grid-cols-4 gap-1.5 mt-2">
                              {screens.slice(0, 4).map((s, sIdx) => {
                                const isFourth = sIdx === 3;
                                const extra = screens.length - 4;

                                return (
                                  <button
                                    key={sIdx}
                                    type="button"
                                    onClick={() => openLightbox(screens, sIdx)}
                                    className="relative aspect-video rounded overflow-hidden border border-[color:rgb(var(--g200))] hover:border-[color:rgb(var(--ink))] transition-all cursor-pointer bg-black/5"
                                    title={s.title}
                                  >
                                    <img
                                      src={s.src}
                                      alt={s.title}
                                      className="h-full w-full object-cover object-top"
                                    />
                                    {isFourth && extra > 0 && (
                                      <div className="absolute inset-0 bg-black/75 text-white font-mono text-[10px] font-bold flex items-center justify-center backdrop-blur-2xs">
                                        +{extra}
                                      </div>
                                    )}
                                  </button>
                                );
                              })}
                            </div>
                          )}
                        </div>

                        {/* Footer Action to expand or view */}
                        <div className="mt-3 pt-2.5 border-t border-[color:rgb(var(--g100))] flex items-center justify-between">
                          <button
                            type="button"
                            onClick={() => openLightbox(screens, 0)}
                            className="font-mono text-[11px] text-[color:rgb(var(--ink))] hover:underline flex items-center gap-1 cursor-pointer font-medium"
                          >
                            <span>View All ({screens.length})</span>
                            <span>↗</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => setActiveModuleTab(mod.id)}
                            className="font-mono text-[10px] text-[color:rgb(var(--g500))] hover:text-[color:rgb(var(--ink))] px-2 py-0.5 rounded border border-[color:rgb(var(--g200))] hover:border-[color:rgb(var(--g400))] transition-colors cursor-pointer"
                          >
                            Filter Module
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                /* Expanded View for Single Selected Module */
                <div className="flex flex-col gap-4">
                  {project.modules
                    .filter((mod) => activeModuleTab === mod.id)
                    .map((mod, mIdx) => (
                      <div
                        key={mod.id || mIdx}
                        className="rounded-xl border border-[color:rgb(var(--g200))] bg-[color:rgb(var(--bg))] p-4 shadow-sm"
                      >
                        {/* Module Title Header */}
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-2 pb-2 border-b border-[color:rgb(var(--g100))]">
                          <div className="flex items-center gap-2">
                            <h3 className="font-['Geist_Pixel'] text-sm text-[color:rgb(var(--ink))]">
                              {mod.name}
                            </h3>
                            {mod.badge && (
                              <span className="rounded bg-[color:rgb(var(--g100))] px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-[color:rgb(var(--g600))] font-medium">
                                {mod.badge}
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-[10px] text-[color:rgb(var(--g400))]">
                              {mod.screenshots ? mod.screenshots.length : 0} screen
                              {mod.screenshots && mod.screenshots.length > 1 ? "s" : ""}
                            </span>
                            <button
                              type="button"
                              onClick={() => setActiveModuleTab("all")}
                              className="font-mono text-[10px] text-[color:rgb(var(--ink))] underline cursor-pointer"
                            >
                              Show All Modules ↩
                            </button>
                          </div>
                        </div>

                        {mod.summary && (
                          <p className="text-xs text-[color:rgb(var(--g600))] mb-3.5 leading-relaxed">
                            {mod.summary}
                          </p>
                        )}

                        {/* Screenshots Grid for the single selected module */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                          {mod.screenshots &&
                            mod.screenshots.map((prev, pIdx) => (
                              <button
                                key={pIdx}
                                type="button"
                                onClick={() => openLightbox(mod.screenshots, pIdx)}
                                className="group/img relative flex flex-col text-left overflow-hidden rounded-xl border border-[color:rgb(var(--g200))] bg-[color:rgb(var(--g100))] hover:border-[color:rgb(var(--g400))] transition-all cursor-pointer shadow-sm hover:shadow-md"
                              >
                                <div className="relative aspect-video w-full overflow-hidden bg-black/5">
                                  <img
                                    src={prev.src}
                                    alt={prev.title}
                                    className="h-full w-full object-cover object-top transition-transform duration-300 group-hover/img:scale-105"
                                  />
                                  <div className="absolute inset-0 bg-black/35 opacity-0 group-hover/img:opacity-100 flex items-center justify-center transition-opacity text-white text-[11px] font-mono gap-1">
                                    <span>Full View ↗</span>
                                  </div>
                                </div>
                                <div className="p-2.5 border-t border-[color:rgb(var(--g200))] bg-[color:rgb(var(--bg))] w-full">
                                  <div className="font-['Geist_Pixel'] text-xs text-[color:rgb(var(--ink))]">
                                    {prev.title}
                                  </div>
                                  {prev.caption && (
                                    <p className="mt-0.5 font-mono text-[10px] text-[color:rgb(var(--g500))] line-clamp-2 leading-relaxed">
                                      {prev.caption}
                                    </p>
                                  )}
                                </div>
                              </button>
                            ))}
                        </div>
                      </div>
                    ))}
                </div>
              )}
            </div>
          ) : (
            /* Fallback Screenshot Previews Showcase (for flat previews) */
            project.previews &&
            project.previews.length > 0 && (
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[color:rgb(var(--ink))] font-bold">
                    System Previews & Screenshots ({project.previews.length}):
                  </span>
                  <span className="font-mono text-[10px] text-[color:rgb(var(--g500))]">
                    Click any image to view in high resolution ↗
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {project.previews.map((prev, pIdx) => (
                    <button
                      key={pIdx}
                      type="button"
                      onClick={() => openLightbox(project.previews, pIdx)}
                      className="group/img relative flex flex-col text-left overflow-hidden rounded-xl border border-[color:rgb(var(--g200))] bg-[color:rgb(var(--g100))] hover:border-[color:rgb(var(--g400))] transition-all cursor-pointer shadow-sm hover:shadow-md"
                    >
                      <div className="relative aspect-video w-full overflow-hidden bg-black/5">
                        <img
                          src={prev.src}
                          alt={prev.title}
                          className="h-full w-full object-cover object-top transition-transform duration-300 group-hover/img:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/35 opacity-0 group-hover/img:opacity-100 flex items-center justify-center transition-opacity text-white text-[11px] font-mono gap-1">
                          <span>Full View ↗</span>
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
            )
          )}

          {/* Customer Features (if present) */}
          {project.customerFeatures && project.customerFeatures.length > 0 && (
            <div className="mb-6">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[color:rgb(var(--ink))] font-bold block mb-2.5">
                Customer Experience Features:
              </span>
              <ul className="flex flex-col gap-2 pl-1 font-mono text-xs text-[color:rgb(var(--g600))]">
                {project.customerFeatures.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2">
                    <span className="text-[color:rgb(var(--ink))] font-bold shrink-0">↳</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Admin & Operations Features (if present) */}
          {project.adminFeatures && project.adminFeatures.length > 0 && (
            <div className="mb-6">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[color:rgb(var(--ink))] font-bold block mb-2.5">
                Store Operations & Admin Features:
              </span>
              <ul className="flex flex-col gap-2 pl-1 font-mono text-xs text-[color:rgb(var(--g600))]">
                {project.adminFeatures.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2">
                    <span className="text-[color:rgb(var(--ink))] font-bold shrink-0">↳</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Key Features & Architecture (for projects without separate customer/admin features) */}
          {!project.customerFeatures && project.keyFeatures && project.keyFeatures.length > 0 && (
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
