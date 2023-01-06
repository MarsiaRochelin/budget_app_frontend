import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function TransactionEditForm() {
  const { index } = useParams();
  const navigate = useNavigate();
  const [editTransaction, setEditTransaction] = useState({
    item_name: "",
    amount: 0,
    date: "",
    from: "",
    category: "",
  });

  useEffect(() => {
    axios
      .get(`${API}/transactions/${index}`)
      .then((res) => setEditTransaction(res.data))
      .catch((err) => console.log(err));
  }, [index, navigate]);

  const handleTextChange = (e) => {
    setEditTransaction({ ...editTransaction, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`${API}/transactions/${index}`, editTransaction)
      .then((res) => {
        setEditTransaction(res.data);
        navigate(`/transaction/${index}`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="editForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="item_name">Item Name:</label>
        <input
          type="text"
          value={editTransaction.item_name}
          onChange={handleTextChange}
          id="item_name"
          required
        />
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          value={editTransaction.amount}
          onChange={handleTextChange}
          id="amount"
          required
        />
        <label htmlFor="date">Date:</label>
        <input
          type="text"
          value={editTransaction.date}
          onChange={handleTextChange}
          id="date"
          required
        />
        <label htmlFor="from">From:</label>
        <input
          type="text"
          value={editTransaction.from}
          onChange={handleTextChange}
          id="from"
          required
        />
        <label htmlFor="category">Category:</label>
        <input
          type="text"
          value={editTransaction.category}
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

export default TransactionEditForm;
