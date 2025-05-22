"use client";

import { useTranslations } from "next-intl";

interface Props {
  price: string;
}

export function ProductInstallments({ price }: Props) {
  const t = useTranslations("productDetails");
  const numericPrice = parseFloat(price.replace("R$", "").replace(",", "."));
  const installment = (numericPrice / 6).toFixed(2).replace(".", ",");

  return (
    <p className="text-gray-600 text-sm">
      {t("installments", { value: installment })}
    </p>
  );
}
