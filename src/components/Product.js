import React from "react";
import { FaSearch } from "react-icons/fa";
import "../css/Product.css";

const formatPrice = (number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number / 100);
};

const Product = ({ image, name, price, id }) => {
  return (
    <div className="product">
      <div className="product-container">
        <img src={image} alt={name} />
        <span className="link">
          <FaSearch />
        </span>
      </div>
      <div className="product-footer">
        <h5>{name}</h5>
        <p>{formatPrice(price)}</p>
      </div>
    </div>
  );
};

export default Product;
