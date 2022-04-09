import { createSlice } from "@reduxjs/toolkit";
import { productType } from "../types";

type initialStateType = {
  products: productType[];
};

const initialState: initialStateType = {
  products: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    putProducts(state, action) {
      state.products = action.payload;
    },
  },
});

export const productsActions = productsSlice.actions;

export default productsSlice;
