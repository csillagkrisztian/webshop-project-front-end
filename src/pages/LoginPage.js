import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../store/auth/actions";
import { selectAuth } from "../store/auth/selectors";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const auth = useSelector(selectAuth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();

    dispatch(login(email, password));
  }

  return !auth.user || !auth.token ? (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <p>
          <label>
            Email:{" "}
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </p>
        <p>
          <label>
            Password:{" "}
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </p>
        <p>
          <button type="submit">Login</button>
        </p>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <p>If you don't have an account, sign up here!</p>
        <Link to={"/auth/signup"}>
          <button
            style={{
              width: "100px",
              height: "auto",
              margin: "5px",
              fontSize: "20px",
            }}
          >
            Sign Up
          </button>
        </Link>
      </form>
    </div>
  ) : (
    <div>
      <h1>{`You are already logged in ${auth.user.firstName}!`}</h1>
      <div>
        If you would like to log in as a different user, you can do so by
        clicking the Logout
      </div>{" "}
      button below!
      <br></br>
      <br></br>
      <button
        style={{
          width: "200px",
          height: "60px",
          margin: "5px",
          fontSize: "40px",
        }}
        onClick={() => {
          dispatch(logout);
        }}
      >
        Log Out
      </button>
      <br></br>
      <br></br>
      <br></br>
      If you want to continue <strong>shopping</strong>, click the home page
      button below!
      <br></br>
      <br></br>
      <Link to={"/"}>
        <button
          style={{
            width: "200px",
            height: "auto",
            margin: "5px",
            fontSize: "40px",
          }}
        >
          Home Page
        </button>
      </Link>
    </div>
  );
}
