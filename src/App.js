// import './App.css';
import React, { useState } from "react";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

function App() {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleSignUp = (a) => {
    setIsSignUp(a);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        background: "#39ace7",
      }}>
      {isSignUp ? (
        <SignUp toggleSignUp={toggleSignUp} />
      ) : (
        <Login toggleSignUp={toggleSignUp} />
      )}
    </div>
  );
}

export default App;
