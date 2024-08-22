import React from "react";
import { Link } from "react-router-dom";
import "./ErrorPage.css";

const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1>⚠️ Erreur : Le compteur a atteint 10</h1>
      <p>Vous avez dépassé la limite autorisée.</p>
      <Link to="/">Retourner à l'accueil</Link>
    </div>
  );
};

export default ErrorPage;
