import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import reactLogo from "../assets/logo-REACT.png";
import "../css/Home.css";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <header className="home-header">
        <img src={reactLogo} className="home-logo" alt="React logo" />
      </header>
      <Footer />
    </div>
  );
};

export default Home;
