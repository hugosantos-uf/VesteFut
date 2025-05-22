"use client";

import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/app/components/atoms/InputForm";
import { Button } from "@/app/components/atoms/ButtonForm";
import { Title } from "@/app/components/atoms/Title";

export default function RegisterPage() {
  const t = useTranslations("signup");

  const registerSchema = z
    .object({
      name: z.string().min(1, t("errors.name")),
      email: z.string().email(t("errors.email")),
      password: z.string().min(6, t("errors.password")),
      confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: t("errors.confirmPassword"),
      path: ["confirmPassword"],
    });

  type RegisterData = z.infer<typeof registerSchema>;

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
      <Title>{t("title")}</Title>
      <p className="text-gray-600 mb-8 text-center max-w-2xl">
        {t("subtitle")}
      </p>
      <div className="max-w-xl w-full mx-auto p-6 bg-white rounded-lg shadow">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Input placeholder={t("placeholders.name")} {...register("name")} />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>
          <div>
            <Input
              placeholder={t("placeholders.email")}
              type="email"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div>
            <Input
              placeholder={t("placeholders.password")}
              type="password"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>
          <div>
            <Input
              placeholder={t("placeholders.confirmPassword")}
              type="password"
              {...register("confirmPassword")}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
          <Button type="submit">{t("button")}</Button>
        </form>
      </div>
    </section>
  );
}
