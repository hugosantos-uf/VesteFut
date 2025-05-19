import { Title } from "../atoms/Title";
import { ContactForm } from "../molecules/ContactForm";

export function ContactContent() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12 flex flex-col items-center">
      <Title>Fale com a VestFut</Title>
      <p className="text-gray-600 mb-8 text-center max-w-2xl">
        Se você tiver dúvidas, sugestões ou quiser entrar em contato com nosso
        time, preencha o formulário abaixo. Teremos o maior prazer em responder!
      </p>
      <ContactForm />
    </section>
  );
}
