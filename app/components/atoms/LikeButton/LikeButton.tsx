"use client";

import { useTranslations } from "next-intl";
import { useFavorites } from "@/app/context/FavoritesContext";
import { Heart } from "lucide-react";

export function LikeButton({ title }: { title: string }) {
  const t = useTranslations("productDetails");
  const { favorites, toggleFavorite } = useFavorites();
  const isFavorite = favorites.includes(title);

  return (
    <button
      onClick={() => toggleFavorite(title)}
      className="flex items-center gap-1 hover:text-red-600"
    >
      <Heart
        size={20}
        className={isFavorite ? "fill-red-500 text-red-500" : "text-gray-800"}
      />
      <span className={isFavorite ? "text-red-500" : "text-gray-800"}>
        {isFavorite ? t("liked") : t("like")}
      </span>
    </button>
  );
}
