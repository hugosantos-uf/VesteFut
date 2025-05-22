"use client";

import { Link, usePathname } from "@/i18n/navigation"; //
import { Globe } from "lucide-react";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

// Defina os locales disponíveis e suas respectivas bandeiras/nomes
// Certifique-se de que os caminhos das bandeiras correspondem aos arquivos em sua pasta `public/flags/`
const locales = [
  { code: "pt", name: "PT", flag: "/flags/br.jpg" }, // Português (Bandeira do Brasil)
  { code: "en", name: "EN", flag: "/flags/en.jpg" }, // Inglês (Bandeira dos EUA)
  { code: "es", name: "ES", flag: "/flags/es.jpg" }, // Espanhol (Bandeira da Espanha)
];

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Fecha o dropdown se clicar fora dele
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center p-2 rounded-md hover:bg-gray-100 transition-colors"
        aria-label="Mudar idioma"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <Globe size={20} />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-50 ring-1 ring-black ring-opacity-5">
          <ul
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {locales.map((locale) => (
              <li key={locale.code}>
                <Link
                  href={pathname}
                  locale={locale.code}
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  onClick={() => setIsOpen(false)}
                  role="menuitem"
                >
                  <Image
                    src={locale.flag}
                    alt={`Bandeira ${locale.name}`}
                    width={24}
                    height={18}
                    className="mr-3 rounded-sm"
                  />
                  {locale.name.toUpperCase()}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
