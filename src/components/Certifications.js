"use client";

import React from "react";
import { portfolioData } from "../data/portfolio";

export default function Certifications({ sectionRef }) {
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
          <a
            key={idx}
            href={cert.verifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-4 rounded-xl border border-[color:rgb(var(--g200))] bg-[color:rgb(var(--bg))] p-4.5 transition-all hover:border-[color:rgb(var(--g400))] hover:shadow-sm"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-[color:rgb(var(--g200))] bg-[color:rgb(var(--g50))] p-2">
              <img
                src={cert.logoUrl}
                alt=""
                className="h-full w-full object-contain"
              />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[color:rgb(var(--g500))]">
                  {cert.issuer}
                </span>
                <span className="inline-flex items-center text-[9px] font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-1.5 py-0.2 rounded">
                  ✓ Verified
                </span>
              </div>
              <h3 className="mt-1 text-sm font-semibold text-[color:rgb(var(--ink))] group-hover:text-[color:rgb(var(--ink))] truncate">
                {cert.title}
              </h3>
            </div>

            <div className="shrink-0 font-mono text-xs text-[color:rgb(var(--g400))] group-hover:text-[color:rgb(var(--ink))] transition-colors">
              ↗
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
