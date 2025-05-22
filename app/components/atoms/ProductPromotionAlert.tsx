"use client";

import { useTranslations } from "next-intl";

export function ProductPromotionAlert() {
  const t = useTranslations("productDetails");

  return (
    <p className="bg-yellow-100 text-yellow-800 text-sm px-4 py-2 rounded mt-4">
      {t("promotion")}
    </p>
  );
}
