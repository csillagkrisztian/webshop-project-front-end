import React from "react";

export default function productMainCard(props) {
  return (
    <div>
      {props.id}
      {props.imageUrl}
      {props.price}
      {props.createdAt}
      {props.name}
    </div>
  );
}
