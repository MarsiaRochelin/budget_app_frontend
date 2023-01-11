import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import transaction from "../transaction.css";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

export default function Transaction() {
  const [transaction, setTransaction] = useState([]);
  const { index } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/transactions/${index}`)
      .then((res) => setTransaction(res.data))
      .catch((err) => console.log(err));
  }, [index]);

  const handleDelete = () => {
    axios
      .delete(`${API}/transactions/${index}`)
      .then(() => {
        navigate("/transactions");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="transaction">
      <p className="itemName">{transaction?.item_name}</p>
      <p className="amount">${transaction?.amount}</p>
      <p className="date">{transaction?.date}</p>
      <p className="from">{transaction?.from}</p>
      <p className="category">{transaction?.category}</p>
      <Link to={"/transactions"}>
        <button className="backButton">Back</button>
      </Link>
      <span> &nbsp; &nbsp; &nbsp;</span>
      <Link to={`/transactions/${index}/edit`}>
        <button className="editButton">Edit</button>
      </Link>
      <span> &nbsp; &nbsp; &nbsp;</span>
      <button onClick={handleDelete} className="deleteButton">
        Delete
      </button>
    </div>
  );
}
