"use client";

import { useTranslations } from "next-intl";
import { Share } from "lucide-react";

export function ShareButton() {
  const t = useTranslations("productDetails");

  function handleShare() {
    navigator.clipboard.writeText(window.location.href);
    alert(t("shareAlert"));
  }

  return (
    <button
      onClick={handleShare}
      className="flex items-center gap-1 hover:text-green-600"
    >
      <Share size={20} />
      {t("share")}
    </button>
  );
}
