import React from "react";
import Logo from "../atoms/Logo";
import Navbar from "../molecules/NavBar";
import SearchInput from "../atoms/Search";

export default function Header() {
  return (
    <>
      <header className="w-full bg-white shadow-md px-6 py-4 flex items-center justify-between gap-4 sticky top-0 z-50">
        <Logo />
        <SearchInput />
        <Navbar />
      </header>
    </>
  );
}
