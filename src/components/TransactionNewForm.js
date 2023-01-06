import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function TransactionNewForm() {
  const navigate = useNavigate();
  const [newTransaction, setNewTransaction] = useState({
    item_name: "",
    amount: 0,
    date: "",
    from: "",
    category: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post(`${API}/transactions`, newTransaction)
      .then(() => {
        navigate("/transactions");
      })
      .catch((err) => console.log(err));
  }

  function handleTextChange(e) {
    setNewTransaction({ ...newTransaction, [e.target.id]: e.target.value });
  }

  return (
    <div className="newForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="item_name">Item Name:</label>
        <input
          type="text"
          value={newTransaction.item_name}
          onChange={handleTextChange}
          id="item_name"
          required
        />
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          value={newTransaction.amount}
          onChange={handleTextChange}
          id="amount"
          required
        />
        <label htmlFor="date">Date:</label>
        <input
          type="text"
          value={newTransaction.date}
          onChange={handleTextChange}
          id="date"
          required
        />
        <label htmlFor="from">From:</label>
        <input
          type="text"
          value={newTransaction.from}
          onChange={handleTextChange}
          id="from"
          required
        />
        <label htmlFor="category">Category:</label>
        <input
          type="text"
          value={newTransaction.category}
          onChange={handleTextChange}
          id="category"
          required
        />
        <input type="submit" />
      </form>
      <Link to={"/transactions"}>
        <button>Back</button>
      </Link>
    </div>
  );
}

export default TransactionNewForm;
