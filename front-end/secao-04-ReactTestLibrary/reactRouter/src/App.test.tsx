import { screen } from '@testing-library/react';
import App from './App';
import renderWithRouter from './helpers/renderWithRouter';

describe("Teste dos Componentes", () => {

  it("renderiza o texto inicial na pagina", async () => {
    const { user } = renderWithRouter(<App />);

    const textInitial = screen.getByText("Você está na página Início");
    expect(textInitial).toBeInTheDocument();

    const aboutLink = screen.getByRole('link', { name: /Sobre/i});
    await user.click(aboutLink);
    expect(screen.getByText(/Você está na página Sobre/i)).toBeInTheDocument(); 
  });

  it("começa na rota about e volta para home", async () => {
    const { user } = renderWithRouter(<App />, { route: '/about'});

    const textInitial = screen.getByText("Você está na página Sobre");
    expect(textInitial).toBeInTheDocument();
    const homeLink = screen.getByRole('link', { name: /Início/i});
    await user.click(homeLink);
    expect(screen.getByText("Você está na página Início")).toBeInTheDocument();
  });
})