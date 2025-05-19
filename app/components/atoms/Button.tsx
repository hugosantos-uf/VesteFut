export function Button({ children }: { children: string }) {
  return (
    <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-all">
      {children}
    </button>
  );
}
