"use client";

import React from "react";
import { portfolioData } from "../data/portfolio";

export default function TechStack({ sectionRef }) {
  return (
    <section id="techstack" ref={sectionRef} className="relative py-12 scroll-mt-6">
      <div className="mb-6 flex items-baseline justify-between">
        <h2 className="font-['Geist_Pixel'] text-sm text-[color:rgb(var(--g400))] uppercase tracking-wider">
          02 — tech stack
        </h2>
        <span className="font-mono text-[11px] text-[color:rgb(var(--g400))]">
          {portfolioData.techStack.reduce((acc, cat) => acc + cat.skills.length, 0)} Skills
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {portfolioData.techStack.map((category, idx) => (
          <div
            key={idx}
            className="relative flex flex-col justify-between rounded-xl border border-[color:rgb(var(--g200))] bg-[color:rgb(var(--bg))] p-4.5 transition-all hover:shadow-sm"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[color:rgb(var(--g400))]" />
                  <h3 className="font-mono text-xs uppercase tracking-wider font-semibold text-[color:rgb(var(--ink))]">
                    {category.category}
                  </h3>
                </div>
                <span className="font-mono text-[10px] text-[color:rgb(var(--g400))]">
                  {category.skills.length}
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="rounded-md border border-[color:rgb(var(--g200))] bg-[color:rgb(var(--g50))] px-2.5 py-1 font-mono text-[11px] text-[color:rgb(var(--g600))] hover:text-[color:rgb(var(--ink))] hover:border-[color:rgb(var(--g400))] transition-all hover:scale-[1.03]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
