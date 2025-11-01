"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

type LinkItem = { href: string; label: string };

const LINKS: LinkItem[] = [
  { href: "#start", label: "Start" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

// TODO:
// - Make the background for the mobile dropdown fuzzy/blend better
// - Make the hamburger mobile icon turn into an X when its open

export default function NavBar(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("start");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    LINKS.forEach(({ href }) => {
      const sectionId = href.substring(1); // Remove the # from href
      const section = document.getElementById(sectionId);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <nav className="p-4 absolute z-10 bg-transparent w-full">
      <div className="mx-auto flex justify-between items-center relative z-10">
        {/* Logo */}
        <a href="/" id="logo" className="ml-2">
          <Image
            src="/ash.png"
            alt="Logo"
            width={170}
            height={32}
            className="relative z-10"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-4">
          {LINKS.map(({ href, label }) => {
            const sectionId = href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={href}
                href={href}
                className={`text_nav_link ${isActive ? "active" : ""}`}
              >
                {label}
                <span className="navbar-link-suffix">/&gt;</span>
              </a>
            );
          })}
        </div>

        {/* Mobile trigger */}
        <div className="relative z-10 md:hidden">
          <button
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation"
            className="text-primary"
          >
            <svg
              className="h-12 w-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={`
    md:hidden fixed inset-x-0 top-16 z-40 text-center
    grid transition-[grid-template-rows,opacity] duration-300 ease-in-out
    ${isMenuOpen ? "grid-rows-[1fr] opacity-100" : "pointer-events-none grid-rows-[0fr] opacity-0"}
  `}
      >
        {/* wrapper row to clip content */}
        <div className="overflow-hidden">
          {/* Panel background (reuse your gradient + shadow class) */}
          <div className="navbar-dropdown px-4 pb-4 pt-2">
            <nav className="space-y-1">
              {LINKS.map(({ href, label }) => {
                const sectionId = href.substring(1);
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={href}
                    href={href}
                    onClick={closeMenu}
                    className={`block py-2 text_nav_link ${isActive ? "active" : ""}`}
                  >
                    {label}
                    <span className="navbar-link-suffix">/&gt;</span>
                  </a>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </nav>
  );
}
