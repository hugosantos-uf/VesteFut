import { useState } from "react";

export function ProductSizeSelector() {
  const sizes: string[] = ["P", "M", "G", "GG"];
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  return (
    <div className="mt-4">
      <p className="mb-1 text-sm font-medium">Tamanho</p>
      <div className="flex gap-2">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => setSelectedSize(size)}
            className={`border px-3 py-1 rounded hover:bg-gray-100 ${
              selectedSize === size ? "bg-gray-200 font-semibold" : ""
            }`}
            aria-pressed={selectedSize === size}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}
