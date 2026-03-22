"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

// ─── SVG Icons ───────────────────────────────────────────────────────────────

const SnowflakeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6 text-white"
    aria-hidden="true"
  >
    {/* Vertical axis */}
    <line x1="12" y1="2" x2="12" y2="22" />
    {/* Horizontal axis */}
    <line x1="2" y1="12" x2="22" y2="12" />
    {/* Diagonal axes */}
    <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
    <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
    {/* Center crystal */}
    <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
    {/* End tips */}
    <circle cx="12" cy="3"  r="1" fill="currentColor" stroke="none" />
    <circle cx="12" cy="21" r="1" fill="currentColor" stroke="none" />
    <circle cx="3"  cy="12" r="1" fill="currentColor" stroke="none" />
    <circle cx="21" cy="12" r="1" fill="currentColor" stroke="none" />
    <circle cx="5.64" cy="5.64"   r="1" fill="currentColor" stroke="none" />
    <circle cx="18.36" cy="18.36" r="1" fill="currentColor" stroke="none" />
    <circle cx="18.36" cy="5.64"  r="1" fill="currentColor" stroke="none" />
    <circle cx="5.64"  cy="18.36" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const PhoneIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const EmailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4"
    aria-hidden="true"
  >
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const ChevronDownIcon = ({ rotated }: { rotated: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`w-4 h-4 transition-transform duration-200 ${rotated ? "rotate-180" : ""}`}
    aria-hidden="true"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const HamburgerIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
    aria-hidden="true"
  >
    <line x1="4" y1="6"  x2="20" y2="6"  />
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="4" y1="18" x2="20" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
    aria-hidden="true"
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

// ─── Nav data ─────────────────────────────────────────────────────────────────

const serviceDropdown = [
  { label: "Residential HVAC", href: "/residential" },
  { label: "Commercial HVAC",  href: "/commercial"  },
];

type NavLink =
  | { label: string; href: string; dropdown?: undefined }
  | { label: string; href: string; dropdown: typeof serviceDropdown };

const navLinks: NavLink[] = [
  { label: "Home",          href: "/"             },
  { label: "About",         href: "/about"        },
  { label: "Services",      href: "#", dropdown: serviceDropdown },
  { label: "Service Areas", href: "/service-areas" },
  { label: "Blog",          href: "/blog"         },
  { label: "Contact",       href: "/contact"      },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function Header() {
  const [scrolled,           setScrolled]           = useState(false);
  const [mobileOpen,         setMobileOpen]         = useState(false);
  const [desktopDropOpen,    setDesktopDropOpen]    = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Scroll shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close desktop dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDesktopDropOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const closeAll = () => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <>
      {/* ── Top info bar (desktop only) ─────────────────────────────────── */}
      <div className="bg-[#0d1219] text-white text-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-end gap-6">
          <a
            href="tel:8132916146"
            className="flex items-center gap-1.5 hover:text-blue-200 transition-colors font-medium"
          >
            <PhoneIcon />
            (813) 291-6146
          </a>
          <a
            href="mailto:office@northeastheatingcooling.com"
            className="flex items-center gap-1.5 hover:text-blue-200 transition-colors"
          >
            <EmailIcon />
            office@northeastheatingcooling.com
          </a>
        </div>
      </div>

      {/* ── Main sticky header ──────────────────────────────────────────── */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-[#0f1620] shadow-lg shadow-black/40"
            : "bg-[#0f1620]/97 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 shrink-0 group"
              onClick={closeAll}
            >
              <Image
                src="/logo.svg"
                alt="North East Heating and Cooling"
                width={240}
                height={68}
                className="h-[68px] w-auto"
                priority
              />
            </Link>

            {/* Desktop nav */}
            <nav
              className="hidden lg:flex items-center gap-0.5"
              aria-label="Main navigation"
            >
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.label} className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => setDesktopDropOpen((v) => !v)}
                      className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-gray-100 hover:text-white rounded-md hover:bg-white/10 transition-colors"
                      aria-expanded={desktopDropOpen}
                      aria-haspopup="true"
                    >
                      {link.label}
                      <ChevronDownIcon rotated={desktopDropOpen} />
                    </button>

                    {desktopDropOpen && (
                      <div className="absolute top-full left-0 mt-1.5 w-52 bg-white rounded-xl shadow-2xl border border-gray-100 py-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setDesktopDropOpen(false)}
                            className="flex items-center px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-red-50 hover:text-red-700 transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-3 py-2 text-sm font-semibold text-gray-100 hover:text-white rounded-md hover:bg-white/10 transition-colors"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* Desktop right: phone + CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:8132916146"
                className="flex items-center gap-1.5 text-gray-100 font-bold text-sm hover:text-white transition-colors"
              >
                <PhoneIcon />
                (813) 291-6146
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center px-5 py-2.5 bg-red-600 hover:bg-red-500 active:bg-red-700 text-white text-sm font-bold rounded-lg transition-colors shadow-sm hover:shadow-md"
              >
                Get Free Quote
              </Link>
            </div>

            {/* Mobile: phone icon + hamburger */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href="tel:8132916146"
                className="flex items-center justify-center w-9 h-9 rounded-lg bg-red-600 hover:bg-red-500 text-white transition-colors"
                aria-label="Call (813) 291-6146"
              >
                <PhoneIcon />
              </a>
              <button
                onClick={() => setMobileOpen((v) => !v)}
                className="flex items-center justify-center w-9 h-9 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
              >
                {mobileOpen ? <CloseIcon /> : <HamburgerIcon />}
              </button>
            </div>
          </div>
        </div>

        {/* ── Mobile menu ─────────────────────────────────────────────────── */}
        {mobileOpen && (
          <div
            id="mobile-menu"
            className="lg:hidden bg-[#0f1620] border-t border-white/10 shadow-xl"
          >
            {/* Contact strip */}
            <div className="bg-[#0d1219] px-4 py-3 flex flex-col gap-2">
              <a
                href="tel:8132916146"
                className="flex items-center gap-2 text-white text-sm font-semibold"
              >
                <PhoneIcon />
                (813) 291-6146
              </a>
              <a
                href="mailto:office@northeastheatingcooling.com"
                className="flex items-center gap-2 text-blue-200 text-xs"
              >
                <EmailIcon />
                office@northeastheatingcooling.com
              </a>
            </div>

            {/* Nav links */}
            <nav className="px-4 py-2 flex flex-col" aria-label="Mobile navigation">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <div key={link.label}>
                    <button
                      onClick={() => setMobileServicesOpen((v) => !v)}
                      className="w-full flex items-center justify-between py-3.5 text-base font-semibold text-gray-100 border-b border-white/10"
                      aria-expanded={mobileServicesOpen}
                    >
                      {link.label}
                      <ChevronDownIcon rotated={mobileServicesOpen} />
                    </button>
                    {mobileServicesOpen && (
                      <div className="pl-4 py-1">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={closeAll}
                            className="flex items-center gap-2 py-2.5 text-sm font-medium text-blue-200 hover:text-white border-b border-white/10/50 last:border-0 transition-colors"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeAll}
                    className="flex items-center py-3.5 text-base font-semibold text-gray-100 hover:text-white border-b border-white/10 last:border-0 transition-colors"
                  >
                    {link.label}
                  </Link>
                )
              )}

              {/* Mobile CTA */}
              <div className="py-4">
                <Link
                  href="/contact"
                  onClick={closeAll}
                  className="flex items-center justify-center w-full py-3.5 bg-red-600 hover:bg-red-500 active:bg-red-700 text-white font-bold rounded-xl transition-colors text-base shadow-sm"
                >
                  Get Free Quote
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
