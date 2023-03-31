import React from "react";
import "./register.css";

function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Lamasocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Lamasocial
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input
              type="text"
              placeholder="Username"
              name=""
              id=""
              className="loginInput"
            />
            <input
              type="email"
              placeholder="Email"
              name=""
              id=""
              className="loginInput"
            />
              <input
              type="password"
              placeholder="Password "
              name=""
              id=""
              className="loginInput"
            />
            <input
              type="password"
              placeholder="Password Again"
              name=""
              id=""
              className="loginInput"
            />
            <button className="loginButton">Sign up</button>

            <button className="loginRegisterButton"> Log into Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
