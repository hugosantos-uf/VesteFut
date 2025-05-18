interface ReviewerNameProps {
  name: string;
}

export function ReviewerName({ name }: ReviewerNameProps) {
  return <p className="font-semibold text-sm">{name}</p>;
}
