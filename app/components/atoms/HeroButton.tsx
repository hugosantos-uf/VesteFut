import { Link } from "@/i18n/navigation";
interface Props {
  label: string;
  href: string;
}

export function HeroButton({ label, href }: Props) {
  return (
    <Link
      href={href}
      className="mt-6 inline-block bg-white text-black px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-100 transition"
    >
      {label}
    </Link>
  );
}
