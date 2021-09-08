import React from "react";
import { Link } from "react-router-dom";
import "../css/PageAddress.css";

const PageAddress = ({ title, product }) => {
  return (
    <div className="center">
      <h3>
        <Link className="link" to="/">
          Home{" "}
        </Link>
        {product && <Link to="/products">/ Products</Link>}/ {title}
      </h3>
    </div>
  );
};

export default PageAddress;
