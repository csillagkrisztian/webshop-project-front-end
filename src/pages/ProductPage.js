import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectProductById } from "../store/products/selectors";
import ProductMainCard from "../components/productMainCard";
import { getAllProducts } from "../store/products/actions";
import {
  addItemToCart,
  removeItemToCart,
} from "../store/shopping cart/actions";
import { selectCartItems } from "../store/shopping cart/selector";

export default function ProductPage() {
  const { productId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const product = useSelector(selectProductById(parseInt(productId)));
  const items = useSelector(selectCartItems);
  console.log(items);
  console.log(product);
  return !product ? (
    <h3>
      Hey! It seems we still need some stuff to work properly! Just a moment...
    </h3>
  ) : (
    <div>
      <ProductMainCard
        id={product.id}
        name={product.name}
        createdAt={product.createdAt}
        price={product.price}
        imageUrl={product.imageUrl}
        description={product.description}
      />
      {items.find((i) => i.id === product.id) ? (
        <button
          style={{ margin: "14px" }}
          onClick={() => {
            dispatch(removeItemToCart(product));
          }}
        >
          Remove From Cart
        </button>
      ) : (
        <button
          style={{ margin: "14px" }}
          onClick={() => {
            dispatch(addItemToCart(product));
          }}
        >
          Add To Cart
        </button>
      )}
    </div>
  );
}
