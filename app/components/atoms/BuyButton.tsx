"use client";

import { useTranslations } from "next-intl";

export function BuyButton() {
  const t = useTranslations("productDetails");

  return (
    <button className="mt-6 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
      {t("buyButton")}
    </button>
  );
}
