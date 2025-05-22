"use client";

import { useTranslations } from "next-intl";
import React, { useState, useEffect, useRef } from "react";
import Li from "../atoms/Li"; //
import LanguageSwitcher from "./LanguageSwitcher";
import { Menu, X } from "lucide-react";
import { Link } from "@/i18n/navigation"; //

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
      <div className="flex items-center md:hidden">
        <LanguageSwitcher />
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

      <nav className="hidden md:flex items-center gap-4">
        <ul className="flex gap-5 items-center">
          {navLinks.map((link) => (
            <Li key={link.href} link={link.href}>
              {link.label}
            </Li>
          ))}
        </ul>
        <LanguageSwitcher />
      </nav>

      {isMobileMenuOpen && (
        <div
          id="mobile-menu-dropdown"
          className="absolute top-full right-0 mt-2 w-56 bg-white shadow-lg rounded-md md:hidden z-50 ring-1 ring-black ring-opacity-5"
        >
          <ul className="flex flex-col py-1">
            {navLinks.map((link) => (
              <li key={link.href} className="w-full">
                <Link
                  href={link.href}
                  className="block px-4 py-2 text-base text-gray-700 hover:bg-gray-100 hover:text-green-600 transition-colors"
                  onClick={handleLinkClick}
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
