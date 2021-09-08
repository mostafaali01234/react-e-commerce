import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import productsReducer from "./fetchReducer";

const store = createStore(productsReducer, applyMiddleware(thunk));

export default store;
