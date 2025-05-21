import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { ProductZipInput } from "./ProductZipInput";

describe("Product Zip Input", () => {
  it("aceita apenas números no campo de CEP", () => {
    render(<ProductZipInput />);
    const input = screen.getByPlaceholderText("Digite seu CEP");
    fireEvent.change(input, { target: { value: "abc123" } });
    expect(input).toHaveValue("123");
  });
});
