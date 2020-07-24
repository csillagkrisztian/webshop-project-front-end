import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../store/productCategories/actions";
import { selectCategories } from "../store/productCategories/selectors";
import ProductCards from "../components/productCards";
import { selectAllProducts } from "../store/products/selectors";
import { getAllProducts } from "../store/products/actions";
import { bootstrapLoginState } from "../store/auth/actions";

export default function HomePage() {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const products = useSelector(selectAllProducts);

  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getAllProducts());
    dispatch(bootstrapLoginState());
  }, [dispatch]);

  return !categories.categories.length && !products.products.length ? (
    <h3>
      Hey! It seems we still need some stuff to work properly! Just a moment...
    </h3>
  ) : (
    <div>
      <p>Home Page</p>
      <h1 className="title">Categories</h1>
      <div className="container">
        {categories.categories.map((c) => {
          return (
            <div key={c.id}>
              <ProductCards
                id={c.id}
                name={c.name}
                imageUrl={c.imageUrl}
                page={"category"}
              />
            </div>
          );
        })}
      </div>
      <br />
      <br />
      <h1 className="title">Products</h1>
      <div className="container">
        {products.products.map((p) => {
          return (
            <div key={Math.random()}>
              <ProductCards
                id={p.id}
                name={p.name}
                imageUrl={p.imageUrl}
                page={"product"}
                price={p.price}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
