import { createSlice } from "@reduxjs/toolkit";
import { categoryType } from "../types";

type initialStateType = {
  categories: categoryType[];
  selectedCategory: categoryType | null;
};

const initialState: initialStateType = {
  categories: [],
  selectedCategory: { id: 0, name: "" },
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    putCategories(state, action) {
      state.categories = action.payload;
    },
    selectCategory(state, action) {
      state.selectedCategory = action.payload;
    },
  },
});

export const categoriesActions = categoriesSlice.actions;

export default categoriesSlice;
