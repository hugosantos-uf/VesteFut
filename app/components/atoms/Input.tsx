type Props = {
  id: string;
  type?: string;
  placeholder?: string;
};

export function Input({ id, type = "text", placeholder }: Props) {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      className="w-full border border-gray-300 rounded-lg p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
    />
  );
}
