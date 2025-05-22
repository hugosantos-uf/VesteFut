"use client";

import { useTranslations } from "next-intl";
import { HeroTitle } from "../atoms/HeroTitle";
import { HeroSubtitle } from "../atoms/HeroSubtitle";
import { HeroButton } from "../atoms/HeroButton";

export default function HeroTop() {
  const t = useTranslations("hero");

  return (
    <section
      className="w-full h-[500px] md:h-[600px] flex items-center bg-cover bg-center"
      style={{ backgroundImage: "url('/imghero2.jpg')" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-black/50 p-6 rounded-lg w-fit">
          <HeroTitle text={t("title")} />
          <HeroSubtitle text={t("subtitle")} />
          <HeroButton label={t("button")} href="/products" />
        </div>
      </div>
    </section>
  );
}
