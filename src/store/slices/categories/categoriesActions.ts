import fetchData from "../../../utils/fetchData";
import { productsActions } from "../products/productsSlice";
import { categoriesActions } from "./categoriesSlice";

export const fetchCategories = () => {
  return async (dispatch: any) => {
    try {
      const DATA = await fetchData("https://test2.sionic.ru/api/Categories");
      dispatch(categoriesActions.putCategories(DATA));
      if (DATA?.length < 1) {
        throw new Error("Error from fetching categories");
      }
      dispatch(categoriesActions.selectCategory(DATA[0]));
    } catch (err) {
      console.log("error");
    }
  };
};

export const selectCategory = (category: any) => {
  return (dispatch: any) => {
    dispatch(categoriesActions.selectCategory(category));
  };
};
