import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

function AppTwo() {
  return <h1>This is the Second App</h1>;
}
ReactDOM.render(
  <div>
    <App />
    <AppTwo />
  </div>,
  document.getElementById("root")
);
