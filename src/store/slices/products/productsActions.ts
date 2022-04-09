import fetchData from "../../../utils/fetchData";
import { productsActions } from "./productsSlice";

const createLink = (categoryId = 0) => {
  let link = `https://test2.sionic.ru/api/Products?range=[0,100]`;
  if (categoryId) {
    link += `&filter={"category_id":${categoryId}}`;
  }
  return link;
};

export const fetchProducts = (categoryId = 0) => {
  return async (dispatch: any) => {
    try {
      const DATA = await fetchData(createLink(categoryId));
      dispatch(productsActions.putProducts(DATA));
    } catch (err) {
      console.log("error");
    }
  };
};
