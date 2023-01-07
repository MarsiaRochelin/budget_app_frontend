import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/transactions`)
      .then((res) => {
        setTransactions(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  let array = [];
  let allCharges = transactions.map((transaction) =>
    array.push(+transaction.amount)
  );

  const transactionList = transactions.map((transaction, index) => {
    return (
      <li key={index}>
        {transaction.date}
        <Link to={`/transactions/${index}`}>{transaction.item_name}</Link>
        {transaction.amount}
      </li>
    );
  });

  const bankTotal = array.reduce((a, b) => a + b, 0);

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
