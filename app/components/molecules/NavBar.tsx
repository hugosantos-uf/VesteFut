import React from "react";
import Li from "../atoms/Li";

export default function Navbar() {
  return (
    <>
      <nav>
        <ul className="flex gap-5">
          <Li link={"/home"}>Home</Li>
          <Li link={"/products"}>Produtos</Li>
          <Li link={"/about"}>Sobre</Li>
          <Li link={"#"}>Contato</Li>
        </ul>
      </nav>
    </>
  );
}
