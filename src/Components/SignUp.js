import React from "react";
import "./SignUp.css";

function SignUp({ handleclick }) {
  return (
    <div className="SignUpWrapper">
      <form action="#">
        <label htmlFor="first_Name">
          <input
            className="Input setBorderTop"
            placeholder="Firstname"
            type="text"
            name="first_name"
            id="first_name"
          />
        </label>
        <br />
        <label htmlFor="last_name">
          <input
            className="Input"
            placeholder="Lastname"
            type="text"
            name="last_name"
            id="last_name"
          />
        </label>
        <br />
        <label htmlFor="email">
          <input
            className="Input"
            placeholder="eMail"
            type="email"
            name="email"
            id="email"
          />
        </label>
        <br />
        <label htmlFor="password">
          <input
            className="Input"
            placeholder="password min 8 char"
            type="password"
            name="password"
            id="password"
          />
        </label>
        <br />
        <input
          type="button"
          value="SignUp"
          className="SignUpButton setBorderBottom"
        />
        <br />
        <div className="SignInWrapper">
          <p className="alreadyAMember">already a member ?</p>
          <button className="SignInNow" onClick={() => handleclick(true)}>
            back to Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
