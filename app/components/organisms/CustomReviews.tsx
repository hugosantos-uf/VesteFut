import ReviewCard from "../molecules/ReviewCard";

const reviews = [
  {
    avatar: "/avatars/avatar1.avif",
    name: "Carlos Souza",
    text: "Camisa de ótima qualidade! Chegou muito rápido.",
    stars: 5,
  },
  {
    avatar: "/avatars/avatar2.avif",
    name: "Mariana Lima",
    text: "Tecido confortável e excelente acabamento.",
    stars: 4,
  },
  {
    avatar: "/avatars/avatar3.avif",
    name: "João Pedro",
    text: "Gostei muito do atendimento e da entrega!",
    stars: 5,
  },
  {
    avatar: "/avatars/avatar4.avif",
    name: "Ana Beatriz",
    text: "O preço via pix compensou demais. Recomendo!",
    stars: 5,
  },
];

export default function CustomerReviews() {
  return (
    <section className="py-12 px-6">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
        Avaliações dos Clientes
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>
    </section>
  );
}
