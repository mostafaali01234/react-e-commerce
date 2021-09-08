import React from "react";
import "./App.css";

import { connect } from "react-redux";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import Services from "./components/Services";
import Contact from "./components/Contact";

import { bindActionCreators } from "redux";
import { useEffect } from "react";

import fetchProductsAction from "./redux/fetchProducts";
import {
  getProductsError,
  getProducts,
  getProductsPending,
} from "./redux/fetchReducer";

// const products_url = "https://course-api.com/react-store-products";

//  const single_product_url = `https://course-api.com/react-store-single-product?id=`;

const App = (props) => {
  const { fetchProducts } = props;

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const { products, error, pending } = props;

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <Services />
      <Contact />
      <footer>
        © 2021 <span>&nbsp;ComfySloth&nbsp;</span> All rights reserved
      </footer>
    </div>
  );
};

const mapStateToProps = (state) => ({
  error: getProductsError(state),
  products: getProducts(state),
  pending: getProductsPending(state),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      fetchProducts: fetchProductsAction,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(App);
