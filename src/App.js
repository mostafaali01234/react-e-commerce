import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import About from "./components/About";
import Navbar from "./components/Navbar";

import { connect } from "react-redux";
import { useEffect } from "react";
import { bindActionCreators } from "redux";
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

  // const { products, error, pending } = props;

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        <footer>
          © 2021 <span>&nbsp;ComfySloth&nbsp;</span> All rights reserved
        </footer>
      </div>
    </Router>
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
