import { Link } from "react-router-dom";
import navbar from "../navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to={"/transactions"}>
        <button className="budgetApp">Budget App</button>
      </Link>
      <Link to={"/transactions/new"}>
        <button className="newTransaction">New Transaction</button>
      </Link>
    </div>
  );
}
