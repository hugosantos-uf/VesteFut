interface ReviewTextProps {
  text: string;
}

export function ReviewText({ text }: ReviewTextProps) {
  return <p className="text-sm text-gray-600 mt-2">{text}</p>;
}
