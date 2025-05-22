"use client";

import { useTranslations } from "next-intl";
import { Title } from "../atoms/Title";
import { ContactForm } from "../molecules/ContactForm";

export function ContactContent() {
  const t = useTranslations("contact");

  return (
    <section className="max-w-6xl mx-auto px-4 py-12 flex flex-col items-center">
      <Title>{t("title")}</Title>
      <p className="text-gray-600 mb-8 text-center max-w-2xl">
        {t("description")}
      </p>
      <ContactForm />
    </section>
  );
}
