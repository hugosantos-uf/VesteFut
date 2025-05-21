import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { LikeButton } from "./LikeButton";
import { FavoritesProvider } from "@/app/context/FavoritesContext";

describe("Like Button", () => {
  it("alterna entre Curtir e Curtido ao clicar", () => {
    render(
      <FavoritesProvider>
        <LikeButton title="Camisa Flamengo 23/24" />
      </FavoritesProvider>
    );
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(screen.getByText("Curtido")).toBeInTheDocument();
    fireEvent.click(button);
    expect(screen.getByText("Curtir")).toBeInTheDocument();
  });
});
