import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Counter from "../components/Counter";

test("le compteur commence à 0, s'incrémente, se décrémente et se réinitialise correctement", () => {
  const { getByText } = render(
    <MemoryRouter>
      <Counter />
    </MemoryRouter>
  );

  // Vérifie que le compteur commence à 0
  const counterValue = getByText("0");

  // Bouton d'incrémentation
  const incrementButton = getByText("+");

  // Bouton de décrémentation
  const decrementButton = getByText("-");

  // Bouton de réinitialisation
  const resetButton = getByText("Reset");

  // Incrémenter le compteur
  fireEvent.click(incrementButton);
  expect(getByText("1")).toBeInTheDocument();

  // Décrémenter le compteur
  fireEvent.click(decrementButton);
  expect(getByText("0")).toBeInTheDocument();

  // Incrémenter encore pour tester le reset
  fireEvent.click(incrementButton);
  expect(getByText("1")).toBeInTheDocument();

  // Réinitialiser le compteur
  fireEvent.click(resetButton);
  expect(getByText("0")).toBeInTheDocument();
});
