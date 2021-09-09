import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";

ReactDOM.render(<App />, document.getElementById("root"));
