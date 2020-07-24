import React from "react";
import { selectAuth } from "../store/auth/selectors";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store/auth/actions";

export default function Toolbar() {
  const auth = useSelector(selectAuth);
  const dispatch = useDispatch();
  console.log(auth.user);
  return !auth.user && !auth.token ? (
    <div
      style={{
        textAlign: "left",
        margin: "5px",
        padding: "12px",
        background: "grey",
      }}
    >
      {" "}
      <Link to={"/auth/login"}>
        <button>Login</button>
      </Link>
    </div>
  ) : (
    <div
      style={{
        textAlign: "left",
        margin: "5px",
        padding: "12px",
        background: "grey",
      }}
    >
      Welcome back <strong>{auth.user.firstName}</strong>!{" "}
      <button
        onClick={() => {
          dispatch(logout);
        }}
      >
        Logout
      </button>
    </div>
  );
}
