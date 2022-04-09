import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./slices/categories/categoriesSlice";
import productsSlice from "./slices/products/productsSlice";

export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    categories: categoriesSlice.reducer,
  },
});
