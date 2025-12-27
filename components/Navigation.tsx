"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "@/hooks/useTranslation";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const t = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/timetable", label: t.nav.timetable },
    { href: "/memberships", label: t.nav.memberships },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <>
      {/* Backdrop overlay when mobile menu is open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/95 z-[60] md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <nav
        className={`fixed top-0 left-0 right-0 z-[70] transition-all duration-300 ${
          isScrolled
            ? "bg-dark/95 backdrop-blur-sm shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <Logo />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 hover:text-primary group ${
                    pathname === link.href ? "text-primary" : "text-gray-300"
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                      pathname === link.href ? "scale-x-100" : ""
                    }`}
                  />
                </Link>
              ))}
              <LanguageSwitcher />
              <Link
                href="/memberships"
                className="px-6 py-2 bg-primary text-dark font-bold rounded-md hover:bg-primary-light transition-all duration-300 transform hover:scale-105"
              >
                {t.nav.joinNow}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white focus:outline-none z-[80] relative"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
                <span
                  className={`block h-0.5 w-6 bg-primary transition-all duration-300 ${
                    isOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-primary transition-all duration-300 ${
                    isOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-0.5 w-6 bg-primary transition-all duration-300 ${
                    isOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed top-20 left-0 right-0 bg-dark z-[75] transition-all duration-300 overflow-hidden border-t border-primary/20 ${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 pt-4 pb-6 space-y-2 max-h-[calc(100vh-5rem)] overflow-y-auto bg-dark">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-md text-base font-medium transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-primary bg-primary/10"
                    : "text-gray-300 hover:text-primary hover:bg-primary/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 py-3">
              <LanguageSwitcher />
            </div>
            <Link
              href="/memberships"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-4 bg-primary text-dark font-bold rounded-md text-center hover:bg-primary-light transition-all duration-300 mb-2"
            >
              {t.nav.joinNow}
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

