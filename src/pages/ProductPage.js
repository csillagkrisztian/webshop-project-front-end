import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectProductById } from "../store/products/selectors";
import ProductMainCard from "../components/productMainCard";

export default function ProductPage() {
  const { productId } = useParams();
  const product = useSelector(selectProductById(parseInt(productId)));
  return (
    <div>
      <ProductMainCard id={product.id} name={product.name} />
    </div>
  );
}
