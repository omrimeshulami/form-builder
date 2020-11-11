import React from "react";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="border-b f p-3 flex justify-between items-center">
      <span className="font-bold">
        <Link to="/">Form-Builder</Link>
      </span>
      <Navigation />
    </div>
  );
}

export default Header;
