import React from "react";
import { Link } from "react-router-dom";

export default function productCards(props) {
  return (
    <div>
      <Link to={`/${props.page}/${props.id}`} style={{ margin: "8px" }}>
        <img
          alt={props.description}
          src={props.imageUrl}
          style={{ width: "200px", height: "auto" }}
        />
        <br />
        <h3>{props.name}</h3>
        <h3>{props.price}</h3>
      </Link>
    </div>
  );
}
