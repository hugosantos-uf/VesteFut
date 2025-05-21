import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Product from "./Product";

describe("Product Card", () => {
  it("renderiza corretamente um produto", () => {
    render(
      <Product id={4} image="/img.jpg" title="Camisa SPFC" price="R$ 199,90" />
    );
    expect(screen.getByText("Camisa SPFC")).toBeInTheDocument();
    expect(screen.getByText("R$ 199,90")).toBeInTheDocument();
    expect(screen.getByAltText("Camisa SPFC")).toBeInTheDocument();
  });
});
