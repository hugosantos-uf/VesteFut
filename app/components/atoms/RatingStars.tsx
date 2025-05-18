interface RatingStarsProps {
  stars: number; // de 0 a 5
}

export function RatingStars({ stars }: RatingStarsProps) {
  return (
    <div className="flex gap-0.5 mt-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={i < stars ? "text-yellow-400" : "text-gray-300"}
        >
          ★
        </span>
      ))}
    </div>
  );
}
