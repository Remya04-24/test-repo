import React, { useState, useEffect } from "react";

function Rewards({ customerData }) {
  const [data, setData] = useState([]);
  const monthObj = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
  };

  // function to calculate the reward points
  const getPoints = (amount) => {
    if (amount <= 50) {
      return 0;
    } else if (amount <= 100) {
      return amount - 50;
    } else {
      return (amount - 100) * 2 + 50;
    }
  };

  // to calculate the reward points by customer monthly
  const getMonthlyTransactionOfCustomer = (transactions) => {
    const rewardData = {};
    transactions.forEach((transaction) => {
      const { customerId, transactionDate, transactionAmount } = transaction;
      const month = new Date(transactionDate).getMonth() + 1;
      console.log("month", month);
      const points = getPoints(transactionAmount);

      if (!rewardData[customerId]) {
        rewardData[customerId] = {
          customerId,
          monthlyPoints: {},
          totalPoints: 0,
        };
      }
      if (!rewardData[customerId].monthlyPoints[month]) {
        rewardData[customerId].monthlyPoints[month] = 0;
      }

      rewardData[customerId].monthlyPoints[month] += points;
      rewardData[customerId].totalPoints += points;
    });

    return rewardData;
  };

  useEffect(() => {
    if (customerData) {
      const groupedData = getMonthlyTransactionOfCustomer(customerData);
      setData(groupedData);
    }
  }, [customerData]);
  return (
    <div>
      <h1>Customer Reward Points</h1>
      <table>
        <tr>
          <th>Customers</th>
          <th>Montly Reward Points</th>
          <th>Total Points</th>
        </tr>

        {Object.entries(data).map(
          ([customerId, { totalPoints, monthlyPoints }]) => (
            <tr key={customerId}>
              <td>{customerId}</td>

              <td>
                <table>
                  <th>Months</th>
                  <th>Reward Points</th>
                  {Object.entries(monthlyPoints).map(
                    ([monthIndex, rewardPoints]) => (
                      <tr key={monthIndex}>
                        <td>{monthObj[monthIndex]}</td>
                        <td>{rewardPoints} points</td>
                      </tr>
                    )
                  )}
                </table>
              </td>
              <td>{totalPoints}</td>
            </tr>
          )
        )}
      </table>
    </div>
  );
}

export default Rewards;
