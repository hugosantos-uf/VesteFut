"use client";

import { useTranslations } from "next-intl";
import React from "react";
import Li from "../atoms/Li";
import LanguageSwitcher from "./LanguageSwitcher";
export default function Navbar() {
  const t = useTranslations("navbar");
  return (
    <>
      <div className="flex items-center gap-5">
        <nav>
          <ul className="flex gap-5 items-center">
            <Li link={"/home"}>{t("home")}</Li>
            <Li link={"/products"}>{t("products")}</Li>
            <Li link={"/about"}>{t("about")}</Li>
            <Li link={"/contact"}>{t("contact")}</Li>
            <Li link={"/signup"}>{t("signup")}</Li>
          </ul>
        </nav>
        <LanguageSwitcher />
      </div>
    </>
  );
}
