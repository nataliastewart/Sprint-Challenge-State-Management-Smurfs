import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

//import for my store, provider and my middleware
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTESION_COMPOSE || compose;

//create store and middleware

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
