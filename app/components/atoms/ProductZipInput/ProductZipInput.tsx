"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export function ProductZipInput() {
  const t = useTranslations("productDetails");
  const [zip, setZip] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value.replace(/\D/g, "");
    setZip(value);
  }

  return (
    <div className="mt-4">
      <label className="text-sm text-gray-700">{t("zipLabel")}</label>
      <input
        type="text"
        placeholder={t("zipPlaceholder")}
        value={zip}
        onChange={handleChange}
        className="border rounded px-3 py-2 mt-1 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
}
