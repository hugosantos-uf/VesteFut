import React from "react";

export default function FooterText({
  children,
}: {
  children: React.ReactNode;
}) {
  return <p className="text-sm text-gray-500">{children}</p>;
}
