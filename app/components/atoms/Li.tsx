import React from "react";
import Link from "next/link";

type LiProps = {
  children: string;
  link: string;
};

export default function Li({ children, link }: LiProps) {
  return (
    <>
      <li>
        <Link href={link}>{children}</Link>
      </li>
    </>
  );
}
