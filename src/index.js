import React from "react";
import { render } from "react-dom";
import App from "./App";
import GlobalState from "./globalState";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

render(
  <GlobalState>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </GlobalState>,
  document.getElementById("root")
);
