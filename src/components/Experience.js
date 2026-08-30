"use client";

import React, { useState } from "react";
import { portfolioData } from "../data/portfolio";
import MobileSimulator from "./MobileSimulator";

export default function Experience({ sectionRef }) {
  const [expandedExperience, setExpandedExperience] = useState(0);
  const [isSimulatorOpen, setIsSimulatorOpen] = useState(false);

  return (
    <section id="experience" ref={sectionRef} className="py-12 scroll-mt-6">
      <div className="mb-6 flex items-baseline justify-between">
        <h2 className="font-['Geist_Pixel'] text-sm text-[color:rgb(var(--g400))] uppercase tracking-wider">
          04 — experience
        </h2>
        <span className="font-mono text-[11px] text-[color:rgb(var(--g400))]">
          {portfolioData.experiences.length} Positions
        </span>
      </div>

      <div className="flex flex-col gap-4">
        {portfolioData.experiences.map((exp, idx) => {
          const isExpanded = expandedExperience === idx;
          const isBakas = exp.company.includes("CMV") || exp.role.includes("Flutter") || (exp.details?.subtitle && exp.details.subtitle.includes("Bakas"));

          return (
            <div
              key={idx}
              className={`overflow-hidden rounded-xl border transition-all ${
                isExpanded
                  ? "border-[color:rgb(var(--ink))] bg-[color:rgb(var(--bg))] shadow-sm"
                  : "border-[color:rgb(var(--g200))] bg-[color:rgb(var(--bg))] hover:border-[color:rgb(var(--g400))]"
              }`}
            >
              {/* Header Row */}
              <button
                onClick={() => setExpandedExperience(isExpanded ? null : idx)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left transition-colors cursor-pointer"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3">
                  <span className="inline-flex items-center rounded-md bg-[color:rgb(var(--g100))] border border-[color:rgb(var(--g200))] px-2.5 py-0.5 font-mono text-xs text-[color:rgb(var(--ink))] font-medium">
                    {exp.year}
                  </span>
                  <div>
                    <h3 className="font-['Geist_Pixel'] text-sm sm:text-base text-[color:rgb(var(--ink))]">
                      {exp.role}
                    </h3>
                    <p className="font-mono text-xs text-[color:rgb(var(--g500))]">
                      {exp.company}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="hidden sm:inline-block font-mono text-[11px] text-[color:rgb(var(--g400))]">
                    {exp.period}
                  </span>
                  <div className={`flex h-7 w-7 items-center justify-center rounded-full border border-[color:rgb(var(--g200))] text-[color:rgb(var(--ink))] transition-transform ${isExpanded ? "rotate-180 bg-[color:rgb(var(--ink))] text-[color:rgb(var(--bg))]" : "bg-[color:rgb(var(--g50))]"}`}>
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </button>

              {/* Expandable Details Container */}
              {isExpanded && (
                <div className="px-5 pb-6 pt-2 border-t border-dashed border-[color:rgb(var(--g200))] animate-fadeIn flex flex-col gap-5">
                  {exp.details && (
                    <>
                      <p className="text-[13.5px] leading-relaxed text-[color:rgb(var(--g600))]">
                        {exp.details.subtitle}
                      </p>

                      {/* Interactive Simulator Trigger for Bakas */}
                      {isBakas && (
                        <div className="my-1">
                          <button
                            type="button"
                            onClick={() => setIsSimulatorOpen(true)}
                            className="inline-flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-2 font-mono text-xs text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/20 transition-all cursor-pointer shadow-sm hover:scale-[1.01]"
                          >
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            📱 Launch Interactive Bakas App Simulator ➔
                          </button>
                        </div>
                      )}

                      {exp.skills && (
                        <div>
                          <span className="font-mono text-[11px] uppercase tracking-wider text-[color:rgb(var(--ink))] font-bold block mb-1.5">
                            Technologies Used:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {exp.skills.map((skill, sIdx) => (
                              <span key={sIdx} className="rounded bg-[color:rgb(var(--g100))] border border-[color:rgb(var(--g200))] px-2 py-0.5 font-mono text-[10px] uppercase text-[color:rgb(var(--ink))]">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {exp.details.contributions && (
                        <div>
                          <span className="font-mono text-[11px] uppercase tracking-wider text-[color:rgb(var(--ink))] font-bold block mb-2">
                            Key Contributions:
                          </span>
                          <ul className="flex flex-col gap-2 pl-1 font-mono text-xs text-[color:rgb(var(--g600))]">
                            {exp.details.contributions.map((con, cIdx) => (
                              <li key={cIdx} className="flex items-start gap-2">
                                <span className="text-[color:rgb(var(--ink))] font-bold shrink-0">↳</span>
                                <span>{con}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {exp.details.impacts && (
                        <div className="rounded-lg bg-[color:rgb(var(--g50))] border border-[color:rgb(var(--g200))] p-3.5">
                          <span className="font-mono text-[11px] uppercase tracking-wider text-[color:rgb(var(--ink))] font-bold block mb-1">
                            Measured Impact:
                          </span>
                          <p className="font-mono text-xs text-[color:rgb(var(--g600))] leading-relaxed">
                            {exp.details.impacts[0]}
                          </p>
                        </div>
                      )}
                    </>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Interactive Bakas Mobile Phone Simulator */}
      {isSimulatorOpen && (
        <MobileSimulator onClose={() => setIsSimulatorOpen(false)} />
      )}
    </section>
  );
}
