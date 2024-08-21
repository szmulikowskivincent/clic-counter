import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  const increment = () => {
    if (count >= 9) {
      navigate("/error");
    } else {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter-page">
      <Navbar />
      <div className="counter-container">
        <div className="button-group">
          <button onClick={decrement} className="counter-button">
            -
          </button>
          <span className="counter-value">{count}</span>
          <button onClick={increment} className="counter-button">
            +
          </button>
        </div>
        <button onClick={reset} className="counter-button reset-button">
          Reset
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Counter;
