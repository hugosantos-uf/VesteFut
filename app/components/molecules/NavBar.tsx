"use client";

import { useTranslations } from "next-intl";
import React from "react";
import Li from "../atoms/Li";

export default function Navbar() {
  const t = useTranslations("navbar");
  return (
    <>
      <nav>
        <ul className="flex gap-5">
          <Li link={"/home"}>{t("home")}</Li>
          <Li link={"/products"}>{t("products")}</Li>
          <Li link={"/about"}>{t("about")}</Li>
          <Li link={"/contact"}>{t("contact")}</Li>
          <Li link={"/signup"}>{t("signup")}</Li>
        </ul>
      </nav>
    </>
  );
}
