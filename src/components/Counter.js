import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [incrementClicks, setIncrementClicks] = useState(0);
  const [decrementClicks, setDecrementClicks] = useState(0);
  const [totalClicks, setTotalClicks] = useState(0);
  const navigate = useNavigate();

  const increment = () => {
    if (totalClicks >= 10) {
      navigate("/error");
      return;
    }

    if (incrementClicks < 10) {
      if (count >= 9) {
        navigate("/error");
      } else {
        setCount(count + 1);
        setIncrementClicks(incrementClicks + 1);
        setTotalClicks(totalClicks + 1);
      }
    }
  };

  const decrement = () => {
    if (totalClicks >= 10) {
      navigate("/error");
      return;
    }

    if (decrementClicks < 10) {
      if (count > 0) {
        setCount(count - 1);
        setDecrementClicks(decrementClicks + 1);
        setTotalClicks(totalClicks + 1);
      }
    }
  };

  const reset = () => {
    setCount(0);
    setIncrementClicks(0);
    setDecrementClicks(0);
    setTotalClicks(0);
  };

  return (
    <div className="counter-page">
      <Navbar />
      <div className="counter-container">
        <div className="button-group">
          <button
            onClick={decrement}
            className="counter-button"
            disabled={decrementClicks >= 10}
          >
            -
          </button>
          <span className="counter-value">{count}</span>
          <button
            onClick={increment}
            className="counter-button"
            disabled={incrementClicks >= 10}
          >
            +
          </button>
        </div>
        <br />
        <button onClick={reset} className="counter-button reset-button">
          Reset
        </button>
        <h3>Maximum de clic (10 *)</h3>
      </div>
      <Footer />
    </div>
  );
};

export default Counter;
