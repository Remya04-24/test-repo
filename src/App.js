import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import Rewards from "./Rewards";

// A retailer offers a rewards program to its customers, awarding points based on each recorded purchase.
//
// A customer receives 2 points for every dollar spent over $100 in each transaction, plus 1 point for every dollar spent between $50 and $100 in each transaction.
// (e.g. a $120 purchase = 2x$20 + 1x$50 = 90 points).

// Given a record of every transaction during a three month period, calculate the reward points earned for each customer per month and total.
//

function App() {
  const [customerData, setCustomerData] = useState([]);

  // to fetch the json data (db.json)
  useEffect(() => {
    fetch("http://localhost:1050/retailer")
      .then((response) => response.json())
      .then((data) => {
        setCustomerData(data);
      })
      .catch((error) => console.error("Error fetching transactions:", error));
  }, []);

  return (
    <div className="App">
      <Rewards customerData={customerData} />
    </div>
  );
}

export default App;
