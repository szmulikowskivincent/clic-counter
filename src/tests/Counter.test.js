import { render, fireEvent, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Counter from "../components/Counter";

test("le compteur commence à 0, s'incrémente, se décrémente et se réinitialise correctement", () => {
  render(
    <MemoryRouter>
      <Counter />
    </MemoryRouter>
  );

  // Vérifier que le compteur commence à 0
  expect(screen.getByText("0")).toBeInTheDocument();

  // Récupérer les boutons
  const incrementButton = screen.getByText("+");
  const decrementButton = screen.getByText("-");
  const resetButton = screen.getByText("Reset");

  // Incrémenter le compteur
  fireEvent.click(incrementButton);
  expect(screen.getByText("1")).toBeInTheDocument();

  // Décrémenter le compteur
  fireEvent.click(decrementButton);
  expect(screen.getByText("0")).toBeInTheDocument();

  // Incrémenter encore pour tester le reset
  fireEvent.click(incrementButton);
  expect(screen.getByText("1")).toBeInTheDocument();

  // Réinitialiser le compteur
  fireEvent.click(resetButton);
  expect(screen.getByText("0")).toBeInTheDocument();
});
