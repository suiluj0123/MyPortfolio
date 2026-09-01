"use client";

import React, { useState } from "react";
import { portfolioData } from "../data/portfolio";
import ProjectFullViewModal from "./ProjectFullViewModal";

export default function Projects({ sectionRef }) {
  const [projectIndex, setProjectIndex] = useState(0);
  const [selectedProjectForFullView, setSelectedProjectForFullView] = useState(null);

  const getDeckClass = (idx) => {
    const total = portfolioData.projects.length;
    if (total <= 2) {
      return idx === projectIndex ? "is-center" : "is-right";
    }
    const diff = (idx - projectIndex + total) % total;
    if (diff === 0) return "is-center";
    if (diff === 1 || diff === -2) return "is-right";
    return "is-left";
  };

  const handleCardClick = (idx, currentClass) => {
    if (currentClass !== "is-center") {
      setProjectIndex(idx);
    } else {
      setSelectedProjectForFullView(portfolioData.projects[idx]);
    }
  };

  const handleNextProject = () => {
    const nextIdx = (projectIndex + 1) % portfolioData.projects.length;
    setProjectIndex(nextIdx);
    setSelectedProjectForFullView(portfolioData.projects[nextIdx]);
  };

  const handlePrevProject = () => {
    const prevIdx = (projectIndex - 1 + portfolioData.projects.length) % portfolioData.projects.length;
    setProjectIndex(prevIdx);
    setSelectedProjectForFullView(portfolioData.projects[prevIdx]);
  };

  return (
    <section id="projects" ref={sectionRef} className="py-12 scroll-mt-6">
      {/* Section Header */}
      <div className="mb-6 flex items-baseline justify-between">
        <h2 className="font-['Geist_Pixel'] text-sm text-[color:rgb(var(--g400))] uppercase tracking-wider">
          03 — projects
        </h2>
        <a
          href="/projects"
          className="inline-flex items-center gap-1.5 font-mono text-xs text-[color:rgb(var(--g500))] hover:text-[color:rgb(var(--ink))] transition-colors px-2 py-1 rounded border border-transparent hover:border-[color:rgb(var(--g300))]"
        >
          <span>Full View</span>
          <span>↗</span>
        </a>
      </div>

      {/* Quick Project Selector Pills */}
      <div className="flex items-center gap-2 mb-3 overflow-x-auto pb-1">
        {portfolioData.projects.map((proj, idx) => (
          <button
            key={idx}
            onClick={() => setProjectIndex(idx)}
            className={`px-3 py-1 rounded-full font-mono text-[11px] border transition-all cursor-pointer whitespace-nowrap ${
              idx === projectIndex
                ? "border-[color:rgb(var(--ink))] bg-[color:rgb(var(--ink))] text-[color:rgb(var(--bg))] shadow-sm"
                : "border-[color:rgb(var(--g200))] bg-[color:rgb(var(--bg))] text-[color:rgb(var(--g500))] hover:text-[color:rgb(var(--ink))] hover:border-[color:rgb(var(--g400))]"
            }`}
          >
            0{idx + 1} {proj.title.split(":")[0]}
          </button>
        ))}
      </div>

      {/* 3D Stacked Deck */}
      <div className="deck mt-2">
        {portfolioData.projects.map((proj, idx) => {
          const currentClass = getDeckClass(idx);
          const isCenter = currentClass === "is-center";

          return (
            <article
              key={idx}
              onClick={() => handleCardClick(idx, currentClass)}
              className={`deck-card ${currentClass} rounded-xl border border-[color:rgb(var(--g200))] bg-[color:rgb(var(--bg))] p-5 transition-all select-none flex flex-col justify-between min-h-[22rem] ${
                isCenter ? "cursor-pointer hover:border-[color:rgb(var(--g400))]" : ""
              }`}
              role="button"
              tabIndex={0}
              title={isCenter ? "Click card to open Full View" : `Switch to ${proj.title}`}
            >
              <div>
                {/* Badge and Tag pills */}
                <div className="flex flex-wrap items-center justify-between gap-1.5 mb-1">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="inline-flex items-center rounded-full bg-[color:rgb(var(--ink))] px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-[color:rgb(var(--bg))]">
                      {proj.badge}
                    </span>
                    {proj.tags.slice(0, 3).map((tag, tIdx) => (
                      <span key={tIdx} className="rounded-full border border-[color:rgb(var(--g200))] px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-[color:rgb(var(--g500))]">
                        {tag}
                      </span>
                    ))}
                    {proj.tags.length > 3 && (
                      <span className="font-mono text-[9px] text-[color:rgb(var(--g400))]">
                        +{proj.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {isCenter && (
                    <span className="font-mono text-[9px] text-[color:rgb(var(--g400))] flex items-center gap-0.5">
                      Full View ↗
                    </span>
                  )}
                </div>

                {/* Project Title & Avatar */}
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-10 w-10 shrink-0 overflow-hidden rounded-lg border border-[color:rgb(var(--g200))] shadow-sm bg-[color:rgb(var(--g50))]">
                    <img src={proj.imageUrl} alt="" className="h-full w-full object-cover" />
                  </div>
                  <h3 className="font-['Geist_Pixel'] text-[15px] leading-tight text-[color:rgb(var(--ink))]">
                    {proj.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="mt-3 text-xs leading-relaxed text-[color:rgb(var(--g600))] line-clamp-3">
                  {proj.description}
                </p>

                {/* Previews Thumbnail Mini-Strip (Uniform across all cards) */}
                {proj.previews && proj.previews.length > 0 && (
                  <div className="mt-3.5 pt-3 border-t border-dashed border-[color:rgb(var(--g200))]">
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-1.5">
                        <span className="font-mono text-[10px] uppercase text-[color:rgb(var(--g500))]">
                          Previews ({proj.previews.length})
                        </span>
                        {proj.modules && proj.modules.length > 0 && (
                          <span className="font-mono text-[9px] bg-[color:rgb(var(--g100))] text-[color:rgb(var(--g600))] px-1.5 py-0.2 rounded font-medium">
                            {proj.modules.length} Modules
                          </span>
                        )}
                      </div>
                      <span className="font-mono text-[10px] text-[color:rgb(var(--ink))] hover:underline">
                        View all ↗
                      </span>
                    </div>
                    <div className="grid grid-cols-3 gap-1.5">
                      {proj.previews.slice(0, 3).map((prevImg, pIdx) => (
                        <div
                          key={pIdx}
                          className="group/strip relative aspect-video overflow-hidden rounded border border-[color:rgb(var(--g200))] hover:border-[color:rgb(var(--g400))] transition-all"
                        >
                          <img
                            src={prevImg.src}
                            alt={prevImg.title}
                            className="h-full w-full object-cover object-top transition-transform group-hover/strip:scale-105"
                          />
                          {pIdx === 2 && proj.previews.length > 3 && (
                            <div className="absolute inset-0 bg-black/60 backdrop-blur-2xs flex items-center justify-center text-white font-mono text-[10px] font-bold">
                              +{proj.previews.length - 3}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Action Buttons Footer */}
              <div
                className="mt-4 flex flex-wrap gap-2 items-center pt-2"
                onClick={(e) => e.stopPropagation()}
              >
                {proj.liveUrl && (
                  <a
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[11px] font-mono border border-[color:rgb(var(--ink))] bg-[color:rgb(var(--ink))] text-[color:rgb(var(--bg))] px-2.5 py-1.5 rounded hover:opacity-90 transition-opacity"
                  >
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                )}

                {proj.githubUrl && proj.githubUrl !== "#" && (
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[11px] font-mono border border-[color:rgb(var(--g300))] px-2.5 py-1.5 rounded hover:bg-[color:rgb(var(--g100))] text-[color:rgb(var(--ink))] transition-colors"
                  >
                    <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" />
                    </svg>
                    GitHub
                  </a>
                )}

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProjectForFullView(proj);
                  }}
                  className="inline-flex items-center gap-1.5 text-[11px] font-mono border border-[color:rgb(var(--g300))] px-2.5 py-1.5 rounded hover:bg-[color:rgb(var(--g100))] text-[color:rgb(var(--ink))] transition-colors cursor-pointer ml-auto"
                >
                  Full View ➔
                </button>
              </div>
            </article>
          );
        })}
      </div>

      {/* Deck Controls */}
      <div className="mt-20 flex items-center justify-center gap-3 font-mono text-xs">
        <button
          onClick={() => setProjectIndex((prev) => (prev - 1 + portfolioData.projects.length) % portfolioData.projects.length)}
          className="p-1.5 rounded border border-[color:rgb(var(--g200))] text-[color:rgb(var(--g500))] hover:text-[color:rgb(var(--ink))] hover:border-[color:rgb(var(--g400))] transition-colors cursor-pointer"
          aria-label="Previous Project"
        >
          ←
        </button>
        <div className="flex items-center gap-1.5">
          {portfolioData.projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setProjectIndex(idx)}
              className={`h-1.5 rounded-full transition-all cursor-pointer ${
                idx === projectIndex
                  ? "w-6 bg-[color:rgb(var(--ink))]"
                  : "w-1.5 bg-[color:rgb(var(--g300))] hover:bg-[color:rgb(var(--g500))]"
              }`}
              aria-label={`Go to project ${idx + 1}`}
            />
          ))}
        </div>
        <button
          onClick={() => setProjectIndex((prev) => (prev + 1) % portfolioData.projects.length)}
          className="p-1.5 rounded border border-[color:rgb(var(--g200))] text-[color:rgb(var(--g500))] hover:text-[color:rgb(var(--ink))] hover:border-[color:rgb(var(--g400))] transition-colors cursor-pointer"
          aria-label="Next Project"
        >
          →
        </button>
      </div>

      {/* Project Full View Modal */}
      {selectedProjectForFullView && (
        <ProjectFullViewModal
          isOpen={Boolean(selectedProjectForFullView)}
          onClose={() => setSelectedProjectForFullView(null)}
          project={selectedProjectForFullView}
          onNext={handleNextProject}
          onPrev={handlePrevProject}
        />
      )}
    </section>
  );
}

