interface Props {
  price: string;
}

export function ProductPixPrice({ price }: Props) {
  const numericPrice = parseFloat(price.replace("R$", "").replace(",", "."));
  const pixPrice = (numericPrice * 0.9).toFixed(2).replace(".", ",");

  return (
    <p className="text-green-600 text-md">R$ {pixPrice} no Pix (10% off)</p>
  );
}
