import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCategories, selectCategory } from "../store/slices/categories/categoriesActions";
import { fetchProducts } from "../store/slices/products/productsActions";
import { categoryType, productType } from "../store/slices/types";

type RootState = {
  products: {
    products: productType[];
    isLastPage: boolean;
  };
  categories: {
    categories: categoryType[];
    selectedCategory: categoryType;
  };
};

function ProductsPage() {
  const categories = useSelector((state: RootState) => state.categories.categories);
  const selectedCategory = useSelector((state: RootState) => state.categories.selectedCategory);
  const products = useSelector((state: RootState) => state.products.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchProducts(selectedCategory.id));
  }, [dispatch, selectedCategory]);

  return (
    <>
      <div>
        <ul className="categor">
          {categories?.map((item, index) => {
            if (item.name === selectedCategory.name) {
              return (
                <li id={item.id.toString()} className="selected">
                  {item.name}
                </li>
              );
            }
            return (
              <li
                onClick={() => {
                  dispatch(selectCategory(item));
                }}
              >
                {item.name}
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <ul>
          {products?.map((item) => {
            return (
              <li id={item.id.toString()}>
                <Link to={`/products/${item.id}`}>
                  {item.name} ||| {item.id}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default ProductsPage;
