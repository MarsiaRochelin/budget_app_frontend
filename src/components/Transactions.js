import React, { useState, useEffect } from "react";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function Transactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/transactions`)
      .then((res) => setTransactions(res.data))
      .catch((err) => console.log(err));
  }, []);

  let transactionList = transactions.map((transaction) => {
    return (
      <li>
        {transaction.date}
        {transaction.item_name}
        {transaction.amount}
      </li>
    );
  });

  return (
    <div>
      <ul>{transactionList}</ul>
    </div>
  );
}

export default Transactions;
