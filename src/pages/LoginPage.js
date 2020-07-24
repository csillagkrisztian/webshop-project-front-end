import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../store/auth/actions";
import { selectAuth } from "../store/auth/selectors";

export default function LoginPage() {
  const auth = useSelector(selectAuth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();

    dispatch(login(email, password));
    if (!auth.user || !auth.token) {
      return <p>Please give us valid credentials!</p>;
    }
  }

  return (
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
      </form>
    </div>
  );
}
