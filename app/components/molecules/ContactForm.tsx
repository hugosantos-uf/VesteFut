"use client";

import { useTranslations } from "next-intl";
import { Label } from "../atoms/Label";
import { Input } from "../atoms/Input";
import { TextArea } from "../atoms/TextArea";
import { Button } from "../atoms/Button";

export function ContactForm() {
  const t = useTranslations("contact");

  return (
    <form className="bg-white p-6 rounded-lg shadow-md max-w-xl w-full">
      <div>
        <Label htmlFor="name">{t("form.name.label")}</Label>
        <Input id="name" placeholder={t("form.name.placeholder")} />
      </div>
      <div>
        <Label htmlFor="email">{t("form.email.label")}</Label>
        <Input
          id="email"
          type="email"
          placeholder={t("form.email.placeholder")}
        />
      </div>
      <div>
        <Label htmlFor="message">{t("form.message.label")}</Label>
        <TextArea id="message" placeholder={t("form.message.placeholder")} />
      </div>
      <Button>{t("form.button")}</Button>
    </form>
  );
}
