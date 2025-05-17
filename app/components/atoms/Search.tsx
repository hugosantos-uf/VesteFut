import React from "react";

export default function SearchInput() {
  return (
    <>
      <input
        type="text"
        placeholder="O que você está buscando?"
        className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
      />
    </>
  );
}
