import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
      .then((res) => {
        setNewTransaction(res.data);
        navigate("/transactions");
      })
      .catch((err) => console.log(err));
  }

  function handleTextChange(e) {
    setNewTransaction({ ...newTransaction, [e.target.id]: e.target.value });
  }

  useEffect(() => {
    axios
      .post(`${API}/transactions`)
      .then((res) => {
        setNewTransaction(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="newForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="item_name">Item Name:</label>
        <input
          type="text"
          value={newTransaction.item_name}
          onChange={handleTextChange}
          id="item_Name"
        />
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          value={newTransaction.amount}
          onChange={handleTextChange}
          id="amount"
        />
        <label htmlFor="date">Date:</label>
        <input
          type="text"
          value={newTransaction.date}
          onChange={handleTextChange}
          id="date"
        />
        <label htmlFor="from">From:</label>
        <input
          type="text"
          value={newTransaction.from}
          onChange={handleTextChange}
          id="from"
        />
        <label htmlFor="category">Category:</label>
        <input
          type="text"
          value={newTransaction.category}
          onChange={handleTextChange}
          id="category"
        />
        <input type="submit"></input>
      </form>
    </div>
  );
}

export default TransactionNewForm;
