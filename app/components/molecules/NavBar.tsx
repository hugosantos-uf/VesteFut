import React from "react";
import Li from "../atoms/Li";

export default function Navbar() {
  return (
    <>
      <nav>
        <ul className="flex gap-2">
          <Li link={"#"}>Home</Li>
          <Li link={"#"}>Produtos</Li>
          <Li link={"#"}>Sobre</Li>
          <Li link={"#"}>Contato</Li>
        </ul>
      </nav>
    </>
  );
}
