import React, { useState, useEffect } from "react";
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

  let transactionList = transactions.map((transaction, id) => {
    return (
      <li key={id}>
        {transaction.date}
        {transaction.item_name}
        {transaction.amount}
      </li>
    );
  });

  const bankTotal = transactions.reduce(
    (acc, transaction) => acc + transaction.amount,
    0
  );

  return (
    <div>
      <p>Bank Account Total:{bankTotal}</p>
      <ul>{transactionList}</ul>
    </div>
  );
}

export default Transactions;
