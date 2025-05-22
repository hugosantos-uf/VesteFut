"use client";

import React from "react";
import { useTranslations } from "next-intl";
import FooterText from "../atoms/FooterText";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="flex justify-center w-full bg-gray-100 py-8 px-6 mt-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-lg font-semibold mb-2 text-gray-700">VestFut</h2>
        <FooterText>{t("description")}</FooterText>
        <FooterText>{t("copyright")}</FooterText>
      </div>
    </footer>
  );
}
