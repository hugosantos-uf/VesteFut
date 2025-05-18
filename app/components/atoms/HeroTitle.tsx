interface Props {
  text: string;
}

export function HeroTitle({ text }: Props) {
  return (
    <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg">
      {text}
    </h1>
  );
}
