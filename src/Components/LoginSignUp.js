import "./LoginSignUp.css";
import React from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import { useState } from "react";

function LoginSignUp() {
  const [active, setActive] = useState(true);
  const handleclick = (state) => {
    setActive(state);
  };

  return (
    <div className="LoginSingUpWrapper">
      {/* <h1 className="Greeting">Welcome to MovieNight beloved user!</h1> */}
      {active && <Login handleclick={handleclick} />}
      {!active && <SignUp handleclick={handleclick} />}
    </div>
  );
}

export default LoginSignUp;
