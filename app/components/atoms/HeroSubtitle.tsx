interface Props {
  text: string;
}

export function HeroSubtitle({ text }: Props) {
  return (
    <p className="text-white text-lg md:text-2xl mt-4 drop-shadow-md">{text}</p>
  );
}
