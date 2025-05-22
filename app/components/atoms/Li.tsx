import React from "react";
import { Link } from "@/i18n/navigation"; // Changed to next-intl's Link

type LiProps = {
  children: string;
  link: string;
  onClick?: () => void; // For closing mobile menu
};

export default function Li({ children, link, onClick }: LiProps) {
  return (
    <li
      className="font-medium hover:text-green-600 transition-colors duration-200"
      onClick={onClick}
    >
      <Link href={link}>{children}</Link>
    </li>
  );
}
