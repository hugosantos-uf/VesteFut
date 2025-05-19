import { Label } from "../atoms/Label";
import { Input } from "../atoms/Input";
import { TextArea } from "../atoms/TextArea";
import { Button } from "../atoms/Button";

export function ContactForm() {
  return (
    <form className="bg-white p-6 rounded-lg shadow-md max-w-xl w-full">
      <div>
        <Label htmlFor="name">Nome</Label>
        <Input id="name" placeholder="Seu nome completo" />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="seu@email.com" />
      </div>
      <div>
        <Label htmlFor="message">Mensagem</Label>
        <TextArea id="message" placeholder="Escreva sua mensagem aqui" />
      </div>
      <Button>Enviar Mensagem</Button>
    </form>
  );
}
