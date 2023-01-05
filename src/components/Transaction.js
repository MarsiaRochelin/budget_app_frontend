import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
const API = process.env.REACT_APP_API_URL;

function Transaction() {
  const [transaction, setTransaction] = useState([]);
  const { index } = useParams();

  useEffect(() => {
    axios
      .get(`${API}/transactions/${index}`)
      .then((res) => setTransaction(res.data))
      .catch((err) => console.log(err));
  }, [index]);

  return (
    <div className="transaction">
      <p>{transaction?.item_name}</p>
      <p>{transaction?.amount}</p>
      <p>{transaction?.date}</p>
      <p>{transaction?.from}</p>
      <p>{transaction?.category}</p>
      <Link to={"/transactions"}>
        <button>Back</button>
      </Link>
      <Link to={`/transactions/${index}/edit`}>
        <button>Edit</button>
      </Link>
      <button>Delete</button>
    </div>
  );
}

export default Transaction;
