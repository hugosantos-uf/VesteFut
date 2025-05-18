import { AboutSection } from "../molecules/AboutSection";

const sections = [
  {
    title: "Nossa História",
    text: "A VestFut nasceu da paixão pelo futebol e pelo estilo. Desde 2023, oferecemos camisas de times que unem autenticidade e design moderno.",
    image: "/heroabout.jpg",
  },
  {
    title: "Nossa Motivação",
    text: "Queremos aproximar torcedores de seus clubes com produtos de alta qualidade, acessíveis e com forte identidade visual.",
    image: "/motivacao.jpg",
  },
  {
    title: "Nossos Valores",
    text: "Trabalhamos com ética, paixão pelo esporte, respeito à diversidade e um compromisso constante com a experiência do cliente.",
    image: "/valores.jpg",
  },
];

export function AboutContent() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      {sections.map((s, index) => (
        <AboutSection key={index} {...s} />
      ))}
    </div>
  );
}
