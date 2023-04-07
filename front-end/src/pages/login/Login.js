import React, { useContext, useRef } from "react";
import "./login.css";
import { loginCall } from "../../apiCall";
import { AuthContext } from "../../context/AuthContext";

function Login() {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);
  const data = useContext(AuthContext);
  console.log(data);
  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };
  console.log(user);
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
          <form className="loginBox" onSubmit={handleClick}>
            <input
              type="email"
              name=""
              id=""
              className="loginInput"
              ref={email}
              required
            />
            <input
              type="password"
              name=""
              id=""
              className="loginInput"
              ref={password}
              minLength="6"
              required
            />
            <button className="loginButton">Log in</button>
            <span className="loginForgot">Forgot password?</span>
            <button className="loginRegisterButton">
              Create a new Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
