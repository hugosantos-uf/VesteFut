"use client";

import { AboutSection } from "../molecules/AboutSection";
import { useTranslations } from "next-intl";

export function AboutContent() {
  const t = useTranslations();

  const sections = [
    {
      title: t("about.story.title"),
      text: t("about.story.text"),
      image: "/heroabout.jpg",
    },
    {
      title: t("about.motivation.title"),
      text: t("about.motivation.text"),
      image: "/motivacao.jpg",
    },
    {
      title: t("about.values.title"),
      text: t("about.values.text"),
      image: "/valores.jpg",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      {sections.map((s, index) => (
        <AboutSection key={index} {...s} />
      ))}
    </div>
  );
}
