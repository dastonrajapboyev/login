import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <div style={{display: "flex", justifyContent: "center", background:"#39ace7"}}>
      {/* <Login /> */}
      <SignUp />
    </div>
  </React.StrictMode>
);
