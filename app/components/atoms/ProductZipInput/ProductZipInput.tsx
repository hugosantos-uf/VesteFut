import { useState } from "react";

export function ProductZipInput() {
  const [zip, setZip] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value.replace(/\D/g, ""); // remove qualquer caractere não numérico
    setZip(value);
  }

  return (
    <div className="mt-4">
      <label className="text-sm text-gray-700">Calcule o frete:</label>
      <input
        type="text"
        placeholder="Digite seu CEP"
        value={zip}
        onChange={handleChange}
        className="border rounded px-3 py-2 mt-1 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
}
