import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../store/productCategories/actions";
import { selectProducts } from "../store/productCategories/selectors";
import { Link } from "react-router-dom";

export default function HomePage() {
  const dispatch = useDispatch();
  const productsInCategories = useSelector(selectProducts);
  console.log(productsInCategories);
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  return (
    <div>
      <p>Home Page</p>
      <div className="container">
        {productsInCategories.categories.map((c) => {
          return (
            <div key={c.id}>
              <Link to={`category/${c.id}`} style={{ margin: "8px" }}>
                <img
                  src={c.imageUrl}
                  style={{ width: "200px", height: "auto" }}
                />
                <br />
                <h3>{c.name}</h3>
              </Link>
              {c.description}
            </div>
          );
        })}
      </div>
    </div>
  );
}
