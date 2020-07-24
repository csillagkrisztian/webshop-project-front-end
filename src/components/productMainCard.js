import React from "react";
import moment from "moment";

export default function productMainCard(props) {
  return (
    <div className="mainCard">
      <img
        src={props.imageUrl}
        alt={props.description}
        style={{
          "max-height": "400px",
          width: "auto",
          border: "solid 5px black",
          margin: "8px",
        }}
      />
      <br></br>
      <h1>{props.name}</h1>
      <h2>{props.price}</h2>
      {`This product was uploaded to our store at ${moment(
        props.createdAt
      ).format("DD-MM-YYYY")}`}
      <br></br>
      {props.description}
    </div>
  );
}
