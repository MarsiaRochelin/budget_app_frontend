import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function Transactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/transactions`)
      .then((res) => {
        setTransactions(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const transactionList = transactions.map((transaction, index) => {
    return (
      <li key={index}>
        {transaction.date}
        <Link to={`/transactions/${index}`}>{transaction.item_name}</Link>
        {transaction.amount}
      </li>
    );
  });

  const bankTotal = transactions.reduce(
    (acc, transaction) => acc + transaction.amount,
    0
  );

  return (
    <div className="transactions">
      <p>Bank Account Total:{bankTotal}</p>
      <ul>{transactionList}</ul>
      <Link to={"/"}>
        <button>Back</button>
      </Link>
    </div>
  );
}

export default Transactions;
