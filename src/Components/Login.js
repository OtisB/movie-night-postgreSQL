import "./Login.css";
import { Link } from "react-router-dom";
import React from "react";

function Login({ handleclick }) {
  return (
    <div className="LoginWrapper">
      <form className="FormWrapper" action="#">
        <label htmlFor="Username">
          <input
            className="InputTop"
            placeholder="username"
            type="text"
            name="Username"
            id="Username"
          />
        </label>
        <br />
        <label htmlFor="Password">
          <input
            className="InputBottom"
            placeholder="password"
            type="password"
            name="Passwort"
            id="Passwort"
          />
        </label>
        <br />
        <Link to={"./main"}>
          <input type="button" value="Login" className="LoginButton" />
        </Link>
        <div className="SignUpWrapper">
          <p className="NotAMember">not a member ?</p>
          <button onClick={() => handleclick(false)} className="SignUpNow">
            Sign up now
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
