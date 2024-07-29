import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";

// A retailer offers a rewards program to its customers, awarding points based on each recorded purchase.
//
// A customer receives 2 points for every dollar spent over $100 in each transaction, plus 1 point for every dollar spent between $50 and $100 in each transaction.
// (e.g. a $120 purchase = 2x$20 + 1x$50 = 90 points).
//
// Given a record of every transaction during a three month period, calculate the reward points earned for each customer per month and total.
//

function App() {
  const [data, setData] = useState({});

  const calculatePoints = (amount) => {
    if (amount <= 50) {
      return 0;
    } else if (amount <= 100) {
      return amount - 50;
    } else {
      return (amount - 100) * 2 + 50;
    }
  };

  useEffect(() => {}, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
