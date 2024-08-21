import React from "react";
import Home from './components/Home';
import Counter from './components/Counter';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
