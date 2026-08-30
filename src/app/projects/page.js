"use client";

import React, { useState } from "react";
import Link from "next/link";
import { portfolioData } from "../../data/portfolio";
import ImageModal from "../../components/ImageModal";
import MobileSimulator from "../../components/MobileSimulator";

export default function ProjectsPage() {
  const [isSimulatorOpen, setIsSimulatorOpen] = useState(false);
  const [modalState, setModalState] = useState({
    isOpen: false,
    images: [],
    initialIndex: 0
  });

  const openLightbox = (proj, initialIdx = 0) => {
    const imagesToDisplay = proj.previews && proj.previews.length > 0
      ? proj.previews
      : [{ title: proj.title, caption: proj.description, src: proj.imageUrl }];

    setModalState({
      isOpen: true,
      images: imagesToDisplay,
      initialIndex: initialIdx
    });
  };

  const closeLightbox = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="mx-auto max-w-3xl px-6 py-12 md:py-24">
      {/* Back button */}
      <div className="mb-12">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider text-[color:rgb(var(--g500))] hover:text-[color:rgb(var(--ink))] transition-colors"
        >
          ← Back to Portfolio
        </Link>
      </div>

      {/* Header */}
      <header className="mb-16 border-b border-[color:rgb(var(--g200))] pb-8">
        <h1 className="font-['Geist_Pixel'] text-3xl sm:text-4xl text-[color:rgb(var(--ink))]">
          Projects — Full View
        </h1>
        <p className="mt-4 font-mono text-xs text-[color:rgb(var(--g500))]">
          A comprehensive deep-dive into the software architecture, live preview interfaces, and key engineering features I have built.
        </p>
      </header>

      {/* Projects List Grid */}
      <div className="flex flex-col gap-16">
        {portfolioData.projects.map((proj, idx) => (
          <article
            key={idx}
            className="group relative border border-[color:rgb(var(--g200))] bg-[color:rgb(var(--bg))] p-6 sm:p-8 rounded-2xl shadow-sm transition-all"
          >
            {/* Project Header badge */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="inline-flex items-center rounded-full bg-[color:rgb(var(--ink))] px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-[color:rgb(var(--bg))]">
                {proj.badge}
              </span>
              {proj.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="rounded-full border border-[color:rgb(var(--g200))] px-2 py-0.5 font-mono text-[9px] uppercase tracking-wider text-[color:rgb(var(--g500))]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title & Clickable Thumbnail */}
            <div className="flex items-center gap-4 mb-3">
              <button
                type="button"
                onClick={() => openLightbox(proj, 0)}
                className="group/thumb relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-[color:rgb(var(--g200))] bg-[color:rgb(var(--g100))] hover:scale-105 transition-transform cursor-pointer"
                title="Click to view full preview"
              >
                <img src={proj.imageUrl} alt="" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/thumb:opacity-100 flex items-center justify-center transition-opacity text-white text-xs">
                  🔍
                </div>
              </button>
              <h2 className="font-['Geist_Pixel'] text-xl sm:text-2xl text-[color:rgb(var(--ink))]">
                {proj.title}
              </h2>
            </div>

            {/* Overview / Subtitle */}
            <p className="text-sm leading-relaxed text-[color:rgb(var(--g600))] mb-6">
              {proj.description}
            </p>

            {/* Divider */}
            <div className="h-px bg-dashed border-t border-[color:rgb(var(--g200))] my-6"></div>

            {/* Dynamic Features & Placeholders Section */}
            <div className="flex flex-col gap-6 font-mono text-xs text-[color:rgb(var(--g600))] leading-relaxed mb-6">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[color:rgb(var(--ink))] font-bold block mb-1">
                  Key Features:
                </span>
                <ul className="list-disc list-inside flex flex-col gap-1.5 pl-1 text-[color:rgb(var(--g600))] text-xs">
                  {proj.keyFeatures ? (
                    proj.keyFeatures.map((feat, fIdx) => (
                      <li key={fIdx}>{feat}</li>
                    ))
                  ) : proj.title.includes("TrustElect") ? (
                    <>
                      <li>Interactive Candidate Administration Panel for quick management.</li>
                      <li>Double-Voting prevention logic with absolute voter anonymity.</li>
                      <li>Secure JWT session states coupled with One-Time Password (OTP) verification steps.</li>
                      <li>IP origin verification restricting votes strictly to verified computer lab gateways.</li>
                    </>
                  ) : (
                    <>
                      <li>Real-time database integration mapping in-app client messaging.</li>
                      <li>Flutter frontend components optimized for smooth, platform-independent mobile scaling.</li>
                      <li>Secured transaction ledger logging key data variables locally.</li>
                    </>
                  )}
                </ul>
              </div>

              {/* System Preview & Interfaces Section */}
              {proj.previews && proj.previews.length > 0 ? (
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] uppercase tracking-wider text-[color:rgb(var(--ink))] font-bold font-mono">
                      System Preview & Interfaces:
                    </span>
                    <span className="font-mono text-[10px] text-[color:rgb(var(--g500))]">
                      Click image to view in fullscreen 🔍
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {proj.previews.map((preview, pIdx) => (
                      <button
                        key={pIdx}
                        type="button"
                        onClick={() => openLightbox(proj, pIdx)}
                        className="group/img relative flex flex-col text-left overflow-hidden rounded-xl border border-[color:rgb(var(--g200))] bg-[color:rgb(var(--g100))] hover:border-[color:rgb(var(--g400))] hover:shadow-lg transition-all cursor-pointer"
                      >
                        <div className="relative aspect-video w-full overflow-hidden bg-black/5">
                          <img
                            src={preview.src}
                            alt={preview.title}
                            className="h-full w-full object-cover object-top transition-transform duration-300 group-hover/img:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/35 opacity-0 group-hover/img:opacity-100 flex items-center justify-center transition-opacity text-white text-xs font-mono gap-1.5">
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                            </svg>
                            View Fullscreen
                          </div>
                        </div>
                        <div className="p-3 border-t border-[color:rgb(var(--g200))] bg-[color:rgb(var(--bg))] w-full">
                          <div className="font-['Geist_Pixel'] text-xs text-[color:rgb(var(--ink))] flex items-center justify-between">
                            <span>{preview.title}</span>
                            <span className="font-mono text-[10px] text-[color:rgb(var(--g400))] group-hover/img:text-[color:rgb(var(--ink))]">↗</span>
                          </div>
                          {preview.caption && (
                            <p className="mt-1 font-mono text-[10px] text-[color:rgb(var(--g500))] line-clamp-2 leading-relaxed">
                              {preview.caption}
                            </p>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[color:rgb(var(--ink))] font-bold block mb-2 font-mono">
                    System Preview & Interfaces:
                  </span>
                  <div className="grid grid-cols-2 gap-4 mt-1">
                    <div className="aspect-video bg-[color:rgb(var(--g100))] border border-[color:rgb(var(--g200))] rounded-lg flex items-center justify-center relative overflow-hidden">
                      <span className="font-['Geist_Pixel'] text-[10px] text-[color:rgb(var(--g400))]">
                        [ Preview Image 01 ]
                      </span>
                      <div className="halftone halftone-dense absolute inset-0 opacity-[0.1]"></div>
                    </div>
                    <div className="aspect-video bg-[color:rgb(var(--g100))] border border-[color:rgb(var(--g200))] rounded-lg flex items-center justify-center relative overflow-hidden">
                      <span className="font-['Geist_Pixel'] text-[10px] text-[color:rgb(var(--g400))]">
                        [ Preview Image 02 ]
                      </span>
                      <div className="halftone halftone-dense absolute inset-0 opacity-[0.1]"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Links footer */}
            {/* Footer action buttons */}
            <div className="flex flex-wrap gap-3 items-center">
              {proj.liveUrl && (
                <a
                  href={proj.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[11px] font-mono border border-[color:rgb(var(--ink))] bg-[color:rgb(var(--ink))] text-[color:rgb(var(--bg))] px-3 py-1.5 rounded hover:opacity-90 transition-opacity"
                >
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Visit Live Demo ↗
                </a>
              )}
              {proj.title.toLowerCase().includes("bakas") && (
                <button
                  type="button"
                  onClick={() => setIsSimulatorOpen(true)}
                  className="inline-flex items-center gap-1.5 text-[11px] font-mono border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-3 py-1.5 rounded hover:bg-emerald-500/20 transition-all cursor-pointer"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  📱 Launch Mobile Simulator ➔
                </button>
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
                  GitHub Repository ↗
                </a>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* Bakas Mobile Simulator Modal */}
      {isSimulatorOpen && (
        <MobileSimulator onClose={() => setIsSimulatorOpen(false)} />
      )}

      {/* Lightbox Modal */}
      <ImageModal
        isOpen={modalState.isOpen}
        onClose={closeLightbox}
        images={modalState.images}
        initialIndex={modalState.initialIndex}
      />
    </div>
  );
}
