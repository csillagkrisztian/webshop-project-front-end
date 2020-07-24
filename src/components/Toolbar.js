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
        margin: "5px",
        padding: "12px",
        background: "grey",
      }}
    >
      <div
        style={{
          textAlign: "left",
        }}
      >
        {" "}
        <Link to={"/"}>
          <button>Home</button>
        </Link>
        <Link to={"/auth/login"}>
          <button>Login</button>
        </Link>
        <Link to={"/cart"}>
          <button>Shopping Cart</button>
        </Link>
      </div>
    </div>
  ) : (
    <div
      style={{
        margin: "5px",
        padding: "12px",
        background: "grey",
      }}
    >
      <div style={{ textAlign: "left" }}>
        <Link to={"/"}>
          <button>Home</button>
        </Link>{" "}
        <button
          onClick={() => {
            dispatch(logout);
          }}
        >
          Logout
        </button>
        Welcome back <strong>{auth.user.firstName}</strong>!{" "}
        <Link to={"/cart"}>
          <button>Shopping Cart</button>
        </Link>
      </div>
    </div>
  );
}
