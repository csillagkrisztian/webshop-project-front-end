import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectCategoryById } from "../store/productCategories/selectors";
import { getAllProducts } from "../store/productCategories/actions";
import ProductCards from "../components/productCards";

export default function CategoryPage() {
  const { categoryId } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
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
          <ProductCards name={category.products[0].name} />
        </div>
      )}
    </div>
  );
}
