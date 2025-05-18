export function ProductSizeSelector() {
  const sizes: string[] = ["P", "M", "G", "GG"];
  return (
    <div className="mt-4">
      <p className="mb-1 text-sm font-medium">Tamanho</p>
      <div className="flex gap-2">
        {sizes.map((size) => (
          <button
            key={size}
            className="border px-3 py-1 rounded hover:bg-gray-100"
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}
