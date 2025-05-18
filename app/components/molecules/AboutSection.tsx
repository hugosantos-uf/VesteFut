import { Title } from "../atoms/Title";
import { Paragraph } from "../atoms/Paragraph";
import { Image } from "../atoms/AboutImg";

type Props = {
  title: string;
  text: string;
  image: string;
};

export function AboutSection({ title, text, image }: Props) {
  return (
    <section className="flex flex-col md:flex-row gap-8 items-center mb-12">
      <div className="md:w-1/2">
        <Image src={image} alt={title} />
      </div>
      <div className="md:w-1/2">
        <Title>{title}</Title>
        <Paragraph>{text}</Paragraph>
      </div>
    </section>
  );
}
