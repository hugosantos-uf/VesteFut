import { Avatar } from "../atoms/Avatar";
import { ReviewerName } from "../atoms/ReviewerName";
import { ReviewText } from "../atoms/ReviewText";
import { RatingStars } from "../atoms/RatingStars";

interface ReviewCardProps {
  avatar: string;
  name: string;
  text: string;
  stars: number;
}

export default function ReviewCard({
  avatar,
  name,
  text,
  stars,
}: ReviewCardProps) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full max-w-xs">
      <div className="flex items-center gap-3">
        <Avatar src={avatar} alt={name} />
        <div>
          <ReviewerName name={name} />
          <RatingStars stars={stars} />
        </div>
      </div>
      <ReviewText text={text} />
    </div>
  );
}
