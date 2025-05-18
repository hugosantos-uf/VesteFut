import { HeroTitle } from "../atoms/HeroTitle";
import { HeroSubtitle } from "../atoms/HeroSubtitle";
import { HeroButton } from "../atoms/HeroButton";

export default function HeroTop() {
  return (
    <section
      className="w-full h-[500px] md:h-[600px] flex items-center bg-cover bg-center"
      style={{ backgroundImage: "url('/imghero2.jpg')" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-black/50 p-6 rounded-lg w-fit">
          <HeroTitle text="As camisas dos seus sonhos" />
          <HeroSubtitle text="Compre agora com até 10% de desconto no Pix!" />
          <HeroButton label="Ver ofertas" href="/products" />
        </div>
      </div>
    </section>
  );
}
