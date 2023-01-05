import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link to={"/transactions"}>Budget App</Link>
      <Link to={"/transactions/new"}>New Transaction</Link>
    </div>
  );
}

export default Navbar;
