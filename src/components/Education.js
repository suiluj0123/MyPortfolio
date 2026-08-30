"use client";

import React from "react";
import { portfolioData } from "../data/portfolio";

export default function Education({ sectionRef }) {
  return (
    <section id="education" ref={sectionRef} className="py-12 scroll-mt-6">
      <div className="mb-6 flex items-baseline justify-between">
        <h2 className="font-['Geist_Pixel'] text-sm text-[color:rgb(var(--g400))] uppercase tracking-wider">
          01 — education
        </h2>
        <span className="font-mono text-[11px] text-[color:rgb(var(--g400))]">
          Academic Background
        </span>
      </div>

      <div className="flex flex-col gap-4">
        {portfolioData.education.map((edu, idx) => (
          <div
            key={idx}
            className="group relative overflow-hidden rounded-xl border border-[color:rgb(var(--g200))] bg-[color:rgb(var(--bg))] p-6 shadow-sm transition-all hover:border-[color:rgb(var(--g400))] hover:shadow-md"
          >
            {/* Header with Degree & Period */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[color:rgb(var(--g100))] border border-[color:rgb(var(--g200))] text-sm">
                  🎓
                </span>
                <div>
                  <h3 className="font-['Geist_Pixel'] text-base text-[color:rgb(var(--ink))]">
                    {edu.degree}
                  </h3>
                  <p className="font-mono text-xs font-medium text-[color:rgb(var(--g600))]">
                    {edu.institution} {edu.location && `• ${edu.location}`}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 self-start sm:self-center">
                <span className="inline-flex items-center rounded-md bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 font-mono text-[10px] uppercase text-emerald-600 dark:text-emerald-400">
                  {edu.status || "Graduated"}
                </span>
                <span className="font-mono text-xs text-[color:rgb(var(--g500))]">
                  {edu.period}
                </span>
              </div>
            </div>

            {/* Description */}
            {edu.description && (
              <p className="mt-3 text-[13.5px] leading-relaxed text-[color:rgb(var(--g600))]">
                {edu.description}
              </p>
            )}

            {/* Key Highlights / Coursework */}
            {edu.highlights && edu.highlights.length > 0 && (
              <div className="mt-4 pt-4 border-t border-dashed border-[color:rgb(var(--g200))]">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[color:rgb(var(--ink))] font-bold block mb-2">
                  Academic Focus & Key Highlights:
                </span>
                <ul className="flex flex-col gap-1.5 pl-1 font-mono text-xs text-[color:rgb(var(--g600))]">
                  {edu.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2">
                      <span className="text-[color:rgb(var(--ink))] font-bold shrink-0">↳</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
