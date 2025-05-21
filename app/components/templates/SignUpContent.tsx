"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/app/components/atoms/InputForm";
import { Button } from "@/app/components/atoms/ButtonForm";
import { Title } from "@/app/components/atoms/Title";

const registerSchema = z
  .object({
    name: z.string().min(1, "Nome é obrigatório"),
    email: z.string().email("E-mail inválido"),
    password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });

type RegisterData = z.infer<typeof registerSchema>;

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterData) => {
    console.log("Dados cadastrados:", data);
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-12 flex flex-col items-center">
      <Title>Criar conta na VestFut</Title>
      <p className="text-gray-600 mb-8 text-center max-w-2xl">
        Crie sua conta agora e ganhe 10% de desconto em suas três primeiras
        compras e outras promoções imperdíveis!
      </p>
      <div className="max-w-xl w-full mx-auto p-6 bg-white rounded-lg shadow">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Input placeholder="Nome" {...register("name")} />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>
          <div>
            <Input placeholder="E-mail" type="email" {...register("email")} />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div>
            <Input
              placeholder="Senha"
              type="password"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>
          <div>
            <Input
              placeholder="Confirmar Senha"
              type="password"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
          <Button type="submit">Cadastrar</Button>
        </form>
      </div>
    </section>
  );
}
