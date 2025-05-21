import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
    >
      {children}
    </button>
  );
}
