// app/register/page.test.tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SignUpPage from "./page";

describe("RegisterPage", () => {
  it("renderiza o formulário corretamente", () => {
    render(<SignUpPage />);
    expect(screen.getByPlaceholderText("Nome")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("E-mail")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Senha")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Confirmar Senha")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Cadastrar" })
    ).toBeInTheDocument();
  });

  it("mostra erro se os campos estiverem vazios", async () => {
    const user = userEvent.setup();
    render(<SignUpPage />);
    await user.click(screen.getByRole("button", { name: "Cadastrar" }));
    expect(await screen.findByText("Nome é obrigatório")).toBeInTheDocument();
    expect(await screen.findByText("E-mail inválido")).toBeInTheDocument();
    expect(
      await screen.findByText("A senha deve ter pelo menos 6 caracteres")
    ).toBeInTheDocument();
  });

  it("mostra erro se as senhas não coincidirem", async () => {
    const user = userEvent.setup();
    render(<SignUpPage />);
    await user.type(screen.getByPlaceholderText("Nome"), "João");
    await user.type(screen.getByPlaceholderText("E-mail"), "joao@email.com");
    await user.type(screen.getByPlaceholderText("Senha"), "123456");
    await user.type(screen.getByPlaceholderText("Confirmar Senha"), "abcdef");
    await user.click(screen.getByRole("button", { name: "Cadastrar" }));

    expect(
      await screen.findByText("As senhas não coincidem")
    ).toBeInTheDocument();
  });

  it("envia o formulário corretamente com dados válidos", async () => {
    const user = userEvent.setup();
    const consoleSpy = jest.spyOn(console, "log").mockImplementation();

    render(<SignUpPage />);
    await user.type(screen.getByPlaceholderText("Nome"), "Maria");
    await user.type(screen.getByPlaceholderText("E-mail"), "maria@email.com");
    await user.type(screen.getByPlaceholderText("Senha"), "123456");
    await user.type(screen.getByPlaceholderText("Confirmar Senha"), "123456");
    await user.click(screen.getByRole("button", { name: "Cadastrar" }));

    expect(consoleSpy).toHaveBeenCalledWith("Dados cadastrados:", {
      name: "Maria",
      email: "maria@email.com",
      password: "123456",
      confirmPassword: "123456",
    });

    consoleSpy.mockRestore();
  });
});
