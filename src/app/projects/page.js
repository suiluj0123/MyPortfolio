"use client";

import React, { useState } from "react";
import Link from "next/link";
import { portfolioData } from "../../data/portfolio";
import ImageModal from "../../components/ImageModal";

export default function ProjectsPage() {
  const [modalState, setModalState] = useState({
    isOpen: false,
    images: [],
    initialIndex: 0
  });

  const [activeModuleTabs, setActiveModuleTabs] = useState({});

  const setProjectModuleTab = (projTitle, tabId) => {
    setActiveModuleTabs((prev) => ({ ...prev, [projTitle]: tabId }));
  };

  const openLightbox = (imagesList, initialIdx = 0) => {
    const imagesToDisplay = Array.isArray(imagesList) && imagesList.length > 0
      ? imagesList
      : [{ title: "Preview", caption: "", src: "" }];

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
                onClick={() => {
                  const allScreens = proj.modules
                    ? proj.modules.flatMap((m) => m.screenshots || [])
                    : proj.previews || [];
                  openLightbox(allScreens, 0);
                }}
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
            <p className="text-sm leading-relaxed text-[color:rgb(var(--g600))] mb-4">
              {proj.description}
            </p>

            {/* Project Objective Callout */}
            {proj.objective && (
              <div className="mb-6 rounded-xl border border-[color:rgb(var(--g200))] bg-[color:rgb(var(--g50))] p-4 sm:p-5">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[color:rgb(var(--ink))] font-bold block mb-1.5">
                  Project Objective:
                </span>
                <p className="text-xs sm:text-[13px] text-[color:rgb(var(--g600))] leading-relaxed">
                  {proj.objective}
                </p>
              </div>
            )}

            {/* AI Feature Spotlight */}
            {proj.aiHighlight && (
              <div className="mb-6 rounded-xl border border-[color:rgb(var(--g200))] bg-[color:rgb(var(--g50))] p-4 sm:p-5">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[color:rgb(var(--ink))] font-bold">
                    Generative AI Integration — {proj.aiHighlight.title}
                  </span>
                </div>
                <p className="text-xs sm:text-[13px] text-[color:rgb(var(--g600))] leading-relaxed">
                  {proj.aiHighlight.summary}
                </p>
              </div>
            )}

            {/* Divider */}
            <div className="h-px bg-dashed border-t border-[color:rgb(var(--g200))] my-6"></div>

            {/* Dynamic Features & Placeholders Section */}
            <div className="flex flex-col gap-6 font-mono text-xs text-[color:rgb(var(--g600))] leading-relaxed mb-6">
              
              {/* Customer Features (if present) */}
              {proj.customerFeatures && proj.customerFeatures.length > 0 && (
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[color:rgb(var(--ink))] font-bold block mb-2">
                    Customer Experience Features:
                  </span>
                  <ul className="flex flex-col gap-2 pl-1 text-[color:rgb(var(--g600))] text-xs">
                    {proj.customerFeatures.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <span className="text-[color:rgb(var(--ink))] font-bold shrink-0">↳</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Admin & Operations Features (if present) */}
              {proj.adminFeatures && proj.adminFeatures.length > 0 && (
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[color:rgb(var(--ink))] font-bold block mb-2">
                    Store Operations & Admin Management Features:
                  </span>
                  <ul className="flex flex-col gap-2 pl-1 text-[color:rgb(var(--g600))] text-xs">
                    {proj.adminFeatures.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <span className="text-[color:rgb(var(--ink))] font-bold shrink-0">↳</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Key Features (for projects without separate customer/admin features) */}
              {!proj.customerFeatures && proj.keyFeatures && proj.keyFeatures.length > 0 && (
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[color:rgb(var(--ink))] font-bold block mb-2">
                    Key Features & Architectural Highlights:
                  </span>
                  <ul className="flex flex-col gap-2 pl-1 text-[color:rgb(var(--g600))] text-xs">
                    {proj.keyFeatures.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <span className="text-[color:rgb(var(--ink))] font-bold shrink-0">↳</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* System Preview & Interfaces Section */}
              {proj.modules && proj.modules.length > 0 ? (
                <div className="rounded-2xl border border-[color:rgb(var(--g200))] bg-[color:rgb(var(--g50))] p-4 sm:p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pb-3 border-b border-[color:rgb(var(--g200))]">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] uppercase tracking-wider text-[color:rgb(var(--ink))] font-bold font-mono">
                        System Modules & Visual Interfaces ({proj.modules.flatMap((m) => m.screenshots || []).length})
                      </span>
                    </div>
                    <span className="font-mono text-[10px] text-[color:rgb(var(--g500))]">
                      Click image for fullscreen view 🔍
                    </span>
                  </div>

                  {/* Module Tabs Selector */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    <button
                      type="button"
                      onClick={() => setProjectModuleTab(proj.title, "all")}
                      className={`px-3 py-1 rounded-lg font-mono text-xs transition-all cursor-pointer ${
                        (activeModuleTabs[proj.title] || "all") === "all"
                          ? "bg-[color:rgb(var(--ink))] text-[color:rgb(var(--bg))] font-medium shadow-sm"
                          : "bg-[color:rgb(var(--bg))] border border-[color:rgb(var(--g200))] text-[color:rgb(var(--g600))] hover:border-[color:rgb(var(--g400))]"
                      }`}
                    >
                      All Modules ({proj.modules.flatMap((m) => m.screenshots || []).length})
                    </button>
                    {proj.modules.map((mod) => (
                      <button
                        key={mod.id}
                        type="button"
                        onClick={() => setProjectModuleTab(proj.title, mod.id)}
                        className={`px-3 py-1 rounded-lg font-mono text-xs transition-all cursor-pointer flex items-center gap-1.5 ${
                          (activeModuleTabs[proj.title] || "all") === mod.id
                            ? "bg-[color:rgb(var(--ink))] text-[color:rgb(var(--bg))] font-medium shadow-sm"
                            : "bg-[color:rgb(var(--bg))] border border-[color:rgb(var(--g200))] text-[color:rgb(var(--g600))] hover:border-[color:rgb(var(--g400))]"
                        }`}
                      >
                        <span>{mod.name.split(". ")[1] || mod.name}</span>
                        <span
                          className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                            (activeModuleTabs[proj.title] || "all") === mod.id
                              ? "bg-white/20 text-white"
                              : "bg-[color:rgb(var(--g100))] text-[color:rgb(var(--g600))]"
                          }`}
                        >
                          {mod.screenshots ? mod.screenshots.length : 0}
                        </span>
                      </button>
                    ))}
                  </div>

                  {/* Filtered Modules Display: 1-Card-Per-Module in 'All' View, Expanded Grid in Single-Module View */}
                  {(activeModuleTabs[proj.title] || "all") === "all" ? (
                    /* Compact 2-Column Module Album Cards */
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {proj.modules.map((mod, mIdx) => {
                        const screens = mod.screenshots || [];
                        const cover = screens[0];

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
                                <p className="text-xs text-[color:rgb(var(--g600))] mb-3 line-clamp-2 leading-relaxed font-sans">
                                  {mod.summary}
                                </p>
                              )}

                              {/* Hero Cover Image */}
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

                            {/* Footer Action */}
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
                                onClick={() => setProjectModuleTab(proj.title, mod.id)}
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
                      {proj.modules
                        .filter((mod) => (activeModuleTabs[proj.title] || "all") === mod.id)
                        .map((mod, mIdx) => (
                          <div
                            key={mod.id || mIdx}
                            className="rounded-xl border border-[color:rgb(var(--g200))] bg-[color:rgb(var(--bg))] p-4 shadow-sm"
                          >
                            {/* Module Header */}
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
                                  onClick={() => setProjectModuleTab(proj.title, "all")}
                                  className="font-mono text-[10px] text-[color:rgb(var(--ink))] underline cursor-pointer"
                                >
                                  Show All Modules ↩
                                </button>
                              </div>
                            </div>

                            {mod.summary && (
                              <p className="text-xs text-[color:rgb(var(--g600))] mb-3.5 leading-relaxed font-sans">
                                {mod.summary}
                              </p>
                            )}

                            {/* Screenshots Grid for Single Module */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                              {mod.screenshots &&
                                mod.screenshots.map((preview, pIdx) => (
                                  <button
                                    key={pIdx}
                                    type="button"
                                    onClick={() => openLightbox(mod.screenshots, pIdx)}
                                    className="group/img relative flex flex-col text-left overflow-hidden rounded-xl border border-[color:rgb(var(--g200))] bg-[color:rgb(var(--g100))] hover:border-[color:rgb(var(--g400))] hover:shadow-lg transition-all cursor-pointer"
                                  >
                                    <div className="relative aspect-video w-full overflow-hidden bg-black/5">
                                      <img
                                        src={preview.src}
                                        alt={preview.title}
                                        className="h-full w-full object-cover object-top transition-transform duration-300 group-hover/img:scale-105"
                                      />
                                      <div className="absolute inset-0 bg-black/35 opacity-0 group-hover/img:opacity-100 flex items-center justify-center transition-opacity text-white text-xs font-mono gap-1.5">
                                        <svg
                                          className="h-4 w-4"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke="currentColor"
                                          strokeWidth={2}
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                                          />
                                        </svg>
                                        Fullscreen
                                      </div>
                                    </div>
                                    <div className="p-3 border-t border-[color:rgb(var(--g200))] bg-[color:rgb(var(--bg))] w-full">
                                      <div className="font-['Geist_Pixel'] text-xs text-[color:rgb(var(--ink))] flex items-center justify-between">
                                        <span>{preview.title}</span>
                                        <span className="font-mono text-[10px] text-[color:rgb(var(--g400))] group-hover/img:text-[color:rgb(var(--ink))]">
                                          ↗
                                        </span>
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
                        ))}
                    </div>
                  )}
                </div>
              ) : proj.previews && proj.previews.length > 0 ? (
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
                        onClick={() => openLightbox(proj.previews, pIdx)}
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
