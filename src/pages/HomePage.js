import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../store/productCategories/actions";
import { selectProducts } from "../store/productCategories/selectors";
import { Link } from "react-router-dom";

export default function HomePage() {
  const dispatch = useDispatch();
  const categories = useSelector(selectProducts);
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  return !categories ? (
    <h3>
      Hey! It seems we still need some stuff to work properly! Just a moment...
    </h3>
  ) : (
    <div>
      <p>Home Page</p>
      <div className="container">
        {categories.categories.map((c) => {
          return (
            <div key={c.id}>
              <Link to={`category/${c.id}`} style={{ margin: "8px" }}>
                <img
                  alt={c.description}
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
