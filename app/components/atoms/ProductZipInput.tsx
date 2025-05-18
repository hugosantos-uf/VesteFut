export function ProductZipInput() {
  return (
    <div className="mt-4">
      <label className="text-sm text-gray-700">Calcule o frete:</label>
      <input
        type="text"
        placeholder="Digite seu CEP"
        className="border rounded px-3 py-2 mt-1 w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
}
