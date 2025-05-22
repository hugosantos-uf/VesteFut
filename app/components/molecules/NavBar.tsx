"use client";

import { useTranslations } from "next-intl";
import React, { useState, useEffect, useRef } from "react";
import Li from "../atoms/Li";
import LanguageSwitcher from "./LanguageSwitcher";
import { Menu, X } from "lucide-react"; // Import Menu and X icons
import { Link } from "@/i18n/navigation"; // For mobile dropdown links

export default function Navbar() {
  const t = useTranslations("navbar");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { href: "/home", label: t("home") },
    { href: "/products", label: t("products") },
    { href: "/about", label: t("about") },
    { href: "/contact", label: t("contact") },
    { href: "/signup", label: t("signup") },
  ];

  // Close mobile menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    }
    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div ref={navRef} className="relative flex items-center">
      {/* --- Mobile View --- */}
      <div className="flex items-center md:hidden">
        {/* Hamburger Icon */}

        <LanguageSwitcher />
        {/* Language Switcher (Mobile) - next to hamburger */}
        <div className="ml-2">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu-dropdown"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* --- Desktop View --- */}
      <nav className="hidden md:flex items-center gap-4">
        <ul className="flex gap-5 items-center">
          {navLinks.map((link) => (
            <Li key={link.href} link={link.href}>
              {link.label}
            </Li>
          ))}
        </ul>
        {/* Language Switcher (Desktop) */}
        <LanguageSwitcher />
      </nav>

      {/* Mobile Dropdown Menu Content */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu-dropdown"
          className="absolute top-full right-0 mt-2 w-full w-sm bg-white shadow-lg rounded-md md:hidden z-50 ring-1 ring-black ring-opacity-5"
        >
          <ul className="flex flex-col py-2">
            {navLinks.map((link) => (
              <li key={link.href} className="w-full">
                <Link
                  href={link.href}
                  className="block px-4 py-3 text-base text-gray-700 hover:bg-gray-100 hover:text-green-600 transition-colors"
                  onClick={handleLinkClick} // Close menu on link click
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
