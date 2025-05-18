import React from "react";
import Link from "next/link";

type LiProps = {
  children: string;
  link: string;
};

export default function Li({ children, link }: LiProps) {
  return (
    <li className="font-medium hover:text-green-600 transition-colors duration-200">
      <Link href={link}>{children}</Link>
    </li>
  );
}
