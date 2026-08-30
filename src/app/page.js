"use client";

import React, { useEffect, useState, useRef } from "react";
import { portfolioData } from "../data/portfolio";
import { useTheme } from "../context/ThemeContext";

// Modular Section Components
import Education from "../components/Education";
import TechStack from "../components/TechStack";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Certifications from "../components/Certifications";

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("education");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileImageIndex, setProfileImageIndex] = useState(0);

  const educationRef = useRef(null);
  const techstackRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const certificationsRef = useRef(null);

  const sectionsList = portfolioData.sections;

  // Handles smooth scrolling when clicking navigation items
  const scrollToSection = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Keyboard navigation event handler (WASD / Up-Down arrow keys)
  useEffect(() => {
    const handleKeyDown = (e) => {
      const activeIndex = sectionsList.findIndex(s => s.id === activeSection);
      if (activeIndex === -1) return;

      let nextIndex = activeIndex;
      if (e.key.toLowerCase() === "s" || e.key === "ArrowDown") {
        nextIndex = Math.min(activeIndex + 1, sectionsList.length - 1);
        e.preventDefault();
      } else if (e.key.toLowerCase() === "w" || e.key === "ArrowUp") {
        nextIndex = Math.max(activeIndex - 1, 0);
        e.preventDefault();
      }

      if (nextIndex !== activeIndex) {
        const nextId = sectionsList[nextIndex].id;
        setActiveSection(nextId);
        setMobileMenuOpen(false);
        const element = document.getElementById(nextId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeSection, sectionsList]);

  // Observer to track which section is currently scrolled into view (Scroll Spy)
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px",
      threshold: 0.1
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const elements = [
      educationRef.current,
      techstackRef.current,
      projectsRef.current,
      experienceRef.current,
      certificationsRef.current
    ].filter(Boolean);

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Interval timer for Profile Image carousel (slides every 5 seconds)
  useEffect(() => {
    const images = portfolioData.profile.images || [];
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setProfileImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen">

      {/* Desktop Left Sidebar */}
      <nav className="fixed inset-y-0 left-0 z-50 hidden w-56 flex-col border-r border-[color:rgb(var(--g200))] bg-[color:rgb(var(--bg))] px-7 py-8 lg:flex">
        <a href="#" className="shrink-0 font-['Geist_Pixel'] text-[15px] leading-none hover:opacity-60 text-[color:rgb(var(--ink))] transition-opacity">
          {portfolioData.profile.name}
        </a>

        {/* Section jumping links */}
        <div className="mt-9 flex flex-1 flex-col gap-4 overflow-y-auto font-mono text-[12px]">
          <div className="flex flex-col gap-1.5">
            {sectionsList.map((sec) => {
              const isActive = activeSection === sec.id;
              const cleanLabel = sec.label.replace(/^\d+\s*—\s*/, "");
              const capitalizedLabel = cleanLabel.split(" ").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

              return (
                <button
                  key={sec.id}
                  onClick={() => scrollToSection(sec.id)}
                  className={`text-left cursor-pointer transition-all duration-200 flex items-center justify-between px-2.5 py-1.5 rounded-lg ${
                    isActive
                      ? "bg-[color:rgb(var(--g100))] text-[color:rgb(var(--ink))] font-medium translate-x-1"
                      : "text-[color:rgb(var(--g500))] hover:text-[color:rgb(var(--ink))] hover:bg-[color:rgb(var(--g50))]"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className={`h-1.5 w-1.5 rounded-full transition-all ${isActive ? "bg-[color:rgb(var(--ink))]" : "bg-transparent"}`} />
                    <span>{capitalizedLabel}</span>
                  </div>
                  <span className={`font-mono text-[10px] transition-all ${isActive ? "opacity-100" : "opacity-0"}`}>
                    →
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Themes toggle, shortcuts list and footer in Sidebar */}
        <div className="mt-6 shrink-0 border-t border-[color:rgb(var(--g200))] pt-4">
          <div className="mb-4 flex items-center justify-between">
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg border border-[color:rgb(var(--g200))] hover:border-[color:rgb(var(--g400))] text-[color:rgb(var(--g600))] hover:text-[color:rgb(var(--ink))] cursor-pointer transition-all text-xs font-mono"
            >
              {theme === "dark" ? (
                <>
                  <svg className="h-3.5 w-3.5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                  </svg>
                  <span>Dark</span>
                </>
              ) : (
                <>
                  <svg className="h-3.5 w-3.5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  </svg>
                  <span>Light</span>
                </>
              )}
            </button>

            {/* Keyboard shortcut info */}
            <div className="hidden sm:flex items-center gap-1 text-[10px] text-[color:rgb(var(--g400))] font-mono">
              <span className="px-1 py-0.5 border border-[color:rgb(var(--g200))] rounded bg-[color:rgb(var(--g50))] text-[9px]">W</span>
              <span className="px-1 py-0.5 border border-[color:rgb(var(--g200))] rounded bg-[color:rgb(var(--g50))] text-[9px]">S</span>
            </div>
          </div>

          <p className="text-[10px] leading-normal text-[color:rgb(var(--g500))]">Direct Contact</p>
          <a
            href={`mailto:${portfolioData.profile.email}`}
            className="mt-1 inline-flex w-fit items-center gap-1.5 font-mono text-[11px] text-[color:rgb(var(--ink))] hover:opacity-75 transition-opacity"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-[14px] w-[14px] shrink-0 stroke-[1.6] stroke-current">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="M4 7l8 6 8-6" />
            </svg>
            {portfolioData.profile.email}
          </a>
        </div>
      </nav>

      {/* Mobile Top Bar */}
      <header className="sticky top-0 z-40 border-b border-[color:rgb(var(--g200))] bg-[color:rgb(var(--bg))]/90 backdrop-blur-md lg:hidden">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-3">
          <a href="#" className="font-['Geist_Pixel'] text-[14px] text-[color:rgb(var(--ink))]">
            {portfolioData.profile.name}
          </a>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-1.5 rounded-md border border-[color:rgb(var(--g200))] text-[color:rgb(var(--g600))]"
            >
              {theme === "dark" ? (
                <svg className="h-4 w-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                </svg>
              ) : (
                <svg className="h-4 w-4 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Open Menu"
              className="p-1.5 rounded-md border border-[color:rgb(var(--g200))] text-[color:rgb(var(--g700))] hover:text-[color:rgb(var(--ink))]"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
                {mobileMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-[color:rgb(var(--bg))] border-b border-[color:rgb(var(--g200))] py-4 px-6 font-mono text-[13px] flex flex-col gap-3 shadow-md lg:hidden animate-fadeIn">
            {sectionsList.map((sec) => (
              <button
                key={sec.id}
                onClick={() => scrollToSection(sec.id)}
                className={`text-left cursor-pointer ${
                  activeSection === sec.id ? "text-[color:rgb(var(--ink))] font-medium" : "text-[color:rgb(var(--g500))]"
                }`}
              >
                {sec.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Main Content Layout Container */}
      <main id="top" className="relative z-10 lg:pl-56">
        <div className="mx-auto max-w-2xl px-6">
          
          {/* Profile Hero Section */}
          <section className="relative pt-14 pb-12 sm:pt-20">
            {/* Status Pill Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 font-mono text-[11px] text-emerald-600 dark:text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Full-Stack & Generative AI Roles</span>
            </div>

            <div className="grid gap-8 sm:grid-cols-[14rem_1fr] sm:items-start sm:gap-10">
              
              {/* Profile Image Container with subtle ring */}
              <div className="mx-auto w-full max-w-[14rem] sm:mx-0">
                <div className="relative group aspect-square select-none overflow-hidden rounded-2xl border border-[color:rgb(var(--g200))] bg-[color:rgb(var(--g50))] p-2 shadow-sm transition-all hover:shadow-md">
                  {portfolioData.profile.images && portfolioData.profile.images.length > 0 ? (
                    <img
                      src={portfolioData.profile.images[profileImageIndex]}
                      alt="Profile picture"
                      className="h-full w-full object-top object-contain transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center border border-dashed border-[color:rgb(var(--g200))] rounded-xl">
                      <span className="font-['Geist_Pixel'] text-xl text-[color:rgb(var(--g300))]">
                        NO IMAGE
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Profile Intro Bio details */}
              <div>
                <h1 className="font-['Geist_Pixel'] text-3xl leading-none sm:text-[2.5rem] text-[color:rgb(var(--ink))]">
                  {portfolioData.profile.name}
                </h1>
                <p className="mt-2 font-mono text-xs uppercase tracking-wider text-[color:rgb(var(--g500))]">
                  {portfolioData.profile.title}
                </p>

                <p className="mt-4 text-[14px] leading-relaxed text-[color:rgb(var(--g600))]">
                  {portfolioData.profile.bio}
                </p>

                {/* Hero Quick CTA Action Buttons */}
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => scrollToSection("projects")}
                    className="inline-flex items-center gap-2 rounded-lg bg-[color:rgb(var(--ink))] text-[color:rgb(var(--bg))] px-4 py-2 font-mono text-xs font-medium hover:opacity-90 transition-all cursor-pointer shadow-sm"
                  >
                    Explore Projects ↓
                  </button>
                  <a
                    href={`mailto:${portfolioData.profile.email}`}
                    className="inline-flex items-center gap-2 rounded-lg border border-[color:rgb(var(--g200))] bg-[color:rgb(var(--bg))] px-4 py-2 font-mono text-xs text-[color:rgb(var(--ink))] hover:border-[color:rgb(var(--g400))] hover:bg-[color:rgb(var(--g50))] transition-all"
                  >
                    Get in Touch ✉
                  </a>
                </div>

                {/* Social contact links */}
                <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1.5 font-mono text-[11px] text-[color:rgb(var(--g500))]">
                  <a href={portfolioData.profile.github} target="_blank" rel="noopener" className="hover:text-[color:rgb(var(--ink))] transition-colors">
                    github ↗
                  </a>
                  <a href={portfolioData.profile.linkedin} target="_blank" rel="noopener" className="hover:text-[color:rgb(var(--ink))] transition-colors">
                    linkedin ↗
                  </a>
                  <a href={portfolioData.profile.instagram} target="_blank" rel="noopener" className="hover:text-[color:rgb(var(--ink))] transition-colors">
                    instagram ↗
                  </a>
                </div>
              </div>

            </div>
          </section>

          {/* Dotted separator divider line */}
          <div aria-hidden="true" className="halftone halftone-wide mask-fade-x my-2 h-6 w-full opacity-[0.12]"></div>

          {/* Render Modularized Sections */}
          <Education sectionRef={educationRef} />
          <TechStack sectionRef={techstackRef} />
          <Projects sectionRef={projectsRef} />
          <Experience sectionRef={experienceRef} />
          <Certifications sectionRef={certificationsRef} />

          {/* Clean Page Footer */}
          <footer className="mt-16 border-t border-[color:rgb(var(--g200))] py-10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[color:rgb(var(--g500))]">
            <div>
              © 2026 {portfolioData.profile.name}. All rights reserved.
            </div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex items-center gap-1.5 text-[color:rgb(var(--ink))] hover:underline cursor-pointer"
            >
              Back to top ↑
            </button>
          </footer>

        </div>
      </main>
    </div>
  );
}
