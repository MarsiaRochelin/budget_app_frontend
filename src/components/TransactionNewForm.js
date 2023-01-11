import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import transactionNewForm from "../transactionNewForm.css";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

export default function TransactionNewForm() {
  const navigate = useNavigate();
  const [newTransaction, setNewTransaction] = useState({
    item_name: "",
    amount: 0,
    date: "",
    from: "",
    category: "",
  });

  const handleTextChange = (e) => {
    setNewTransaction({ ...newTransaction, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${API}/transactions`, newTransaction)
      .then(() => {
        navigate("/transactions");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="newForm">
      <form onSubmit={handleSubmit} className="new_form">
        <label htmlFor="item_name">Item Name:</label>
        <input
          type="text"
          value={newTransaction.item_name}
          onChange={handleTextChange}
          id="item_name"
          required
        />
        <br />
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          value={newTransaction.amount}
          onChange={handleTextChange}
          id="amount"
          required
        />
        <br />
        <label htmlFor="date">Date:</label>
        <input
          type="text"
          value={newTransaction.date}
          onChange={handleTextChange}
          id="date"
          required
        />
        <br />
        <label htmlFor="from">From:</label>
        <input
          type="text"
          value={newTransaction.from}
          onChange={handleTextChange}
          id="from"
          required
        />
        <br />
        <label htmlFor="category">Category:</label>
        <input
          type="text"
          value={newTransaction.category}
          onChange={handleTextChange}
          id="category"
          required
        />
        <br />
        <input type="submit" className="submit" />
        <Link to={"/transactions"}>
          <button className="backButton">Back</button>
        </Link>
      </form>
    </div>
  );
}
