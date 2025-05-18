interface Props {
  price: string;
}

export function ProductInstallments({ price }: Props) {
  const numericPrice = parseFloat(price.replace("R$", "").replace(",", "."));
  const installment = (numericPrice / 6).toFixed(2).replace(".", ",");

  return (
    <p className="text-gray-600 text-sm">ou 6x de R$ {installment} sem juros</p>
  );
}
