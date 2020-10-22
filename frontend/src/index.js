import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import store from "./store";
import "./style/landing.css";
import "./style/nav.css";
import "./style/app.css";
import "./style/card.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
