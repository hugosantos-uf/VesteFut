import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { ProductSizeSelector } from "./ProductSize";

describe("ProductSizeSelector", () => {
  it("renderiza os botões de tamanho", () => {
    render(<ProductSizeSelector />);

    expect(screen.getByText("P")).toBeInTheDocument();
    expect(screen.getByText("M")).toBeInTheDocument();
    expect(screen.getByText("G")).toBeInTheDocument();
    expect(screen.getByText("GG")).toBeInTheDocument();
  });

  it("seleciona o tamanho corretamente ao clicar", async () => {
    render(<ProductSizeSelector />);
    const button = screen.getByText("M");

    expect(button).not.toHaveClass("bg-gray-200");
    fireEvent.click(button);

    expect(button).toHaveClass("bg-gray-200");
    expect(button).toHaveAttribute("aria-pressed", "true");
  });
});
