import React from "react";
import logo from "../img/logo.svg";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="nav-center">
        <Link to="/" className="nav-header">
          <img src={logo} alt="logo" />
        </Link>

        <ul className="nav-links">
          <li>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/">
              Product
            </Link>
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
