type Props = {
  id: string;
  placeholder?: string;
};

export function TextArea({ id, placeholder }: Props) {
  return (
    <textarea
      id={id}
      rows={5}
      placeholder={placeholder}
      className="w-full border border-gray-300 rounded-lg p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
    />
  );
}
