import React from "react";
import { useSelector } from "react-redux";
import "../css/FeaturedProducts.css";
import Product from "./Product";

const FeaturedProducts = () => {
  const products = useSelector((state) => state.products);

  return (
    <div className="featuredProducts">
      <div className="title">
        <h2>Featured Products</h2>
        <div className="underline"></div>
      </div>
      <div className="featured">
        {products.slice(0, 3).map((product) => {
          return (
            <Product className="product-box" key={product.id} {...product} />
          );
        })}
      </div>
      <button>All Products</button>
    </div>
  );
};

export default FeaturedProducts;
