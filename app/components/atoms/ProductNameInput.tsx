"use client";

import { useTranslations } from "next-intl";

export function ProductNameInput() {
  const t = useTranslations("productDetails");

  return (
    <div className="mt-4">
      <label className="text-sm text-gray-700">{t("nameLabel")}</label>
      <input
        type="text"
        placeholder={t("namePlaceholder")}
        className="border rounded px-3 py-2 mt-1 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
}
