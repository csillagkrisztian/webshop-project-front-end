import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectCategoryById } from "../store/productCategories/selectors";
import { getAllCategories } from "../store/productCategories/actions";
import ProductCards from "../components/productCards";

export default function CategoryPage() {
  const { categoryId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  const category = useSelector(selectCategoryById(parseInt(categoryId)));

  console.log(category);
  return (
    <div>
      {!category ? (
        <h3>
          Hey! It seems we still need some stuff to work properly! Just a
          moment...
        </h3>
      ) : (
        <div>
          <h1>{category.name}</h1>
          <p>{category.description}</p>
          {category.products.map((c) => {
            return (
              <div key={c.id}>
                <ProductCards
                  id={c.id}
                  name={c.name}
                  imageUrl={c.imageUrl}
                  page={"product"}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
