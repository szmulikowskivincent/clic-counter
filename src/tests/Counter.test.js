import { render, fireEvent, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Counter from "../components/Counter";
import { act } from "react";

test("le compteur commence à 0, s'incrémente, se décrémente et se réinitialise correctement", () => {
  render(
    <MemoryRouter>
      <Counter />
    </MemoryRouter>
  );

  // Vérifie que le compteur commence à 0
  const counterValue = screen.getByText("0");
  expect(counterValue).toBeInTheDocument();

  // Bouton d'incrémentation
  const incrementButton = screen.getByText("+");
  // Bouton de décrémentation
  const decrementButton = screen.getByText("-");
  // Bouton de réinitialisation
  const resetButton = screen.getByText("Reset");

  // Incrémenter le compteur
  act(() => {
    fireEvent.click(incrementButton);
  });
  expect(screen.getByText("1")).toBeInTheDocument();

  // Décrémenter le compteur
  act(() => {
    fireEvent.click(decrementButton);
  });
  expect(screen.getByText("0")).toBeInTheDocument();

  // Incrémenter encore pour tester le reset
  act(() => {
    fireEvent.click(incrementButton);
  });
  expect(screen.getByText("1")).toBeInTheDocument();

  // Réinitialiser le compteur
  act(() => {
    fireEvent.click(resetButton);
  });
  expect(screen.getByText("0")).toBeInTheDocument();
});
