"use client";

import { useTranslations } from "next-intl";
import ReviewCard from "../molecules/ReviewCard";

const reviews = [
  {
    avatar: "/avatars/avatar1.avif",
    name: "Carlos Souza",
    translationKey: "review1",
    stars: 5,
  },
  {
    avatar: "/avatars/avatar2.avif",
    name: "Mariana Lima",
    translationKey: "review2",
    stars: 4,
  },
  {
    avatar: "/avatars/avatar3.avif",
    name: "João Pedro",
    translationKey: "review3",
    stars: 5,
  },
  {
    avatar: "/avatars/avatar4.avif",
    name: "Ana Beatriz",
    translationKey: "review4",
    stars: 5,
  },
];

export default function CustomerReviews() {
  const t = useTranslations("main");

  return (
    <section className="py-12 px-6">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
        {t("reviewsTitle")}
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            avatar={review.avatar}
            name={review.name}
            stars={review.stars}
            text={t(review.translationKey)}
          />
        ))}
      </div>
    </section>
  );
}
