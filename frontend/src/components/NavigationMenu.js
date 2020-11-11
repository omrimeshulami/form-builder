import React from "react";
import { Link } from "react-router-dom";
function NavigationMenu(props) {
  return (
    <div>
      <span className="font-bold">Menu</span>
      <ul>
        <li>
          <Link to="/" className="text-blue-500" onClick={props.closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/formbuilder"
            className="text-blue-500"
            onClick={props.closeMenu}
          >
            Form Builder
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-blue-500" onClick={props.closeMenu}>
            About
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default NavigationMenu;
