import React from "react";
import logo from "../img/logo.svg";
import { FaShoppingCart } from "react-icons/fa";
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" />
        </div>

        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Product</a>
          </li>
        </ul>
        <div>
          <a className="cart-btn">
            Cart
            <span className="cart-container">
              <FaShoppingCart />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
