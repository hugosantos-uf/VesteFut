import React from "react";
import Li from "../atoms/Li";

export default function Navbar() {
  return (
    <>
      <nav>
        <ul className="flex gap-2">
          <Li link={"/home"}>Home</Li>
          <Li link={"/products"}>Produtos</Li>
          <Li link={"#"}>Sobre</Li>
          <Li link={"#"}>Contato</Li>
        </ul>
      </nav>
    </>
  );
}
