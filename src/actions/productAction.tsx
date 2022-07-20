import { fetchProduct } from "../reducer/productReducer";
import { getProductsApi } from "../../src/utils/api";
export function productAction() {
  const productEndPoint = "products";
  return async (dispatch: any) => {
    dispatch(fetchProduct());
    const response = await getProductsApi(productEndPoint);
    if (response?.status == 200) {
      dispatch(fetchProduct(response.data));
    } else {
      const errorMessage =
        response?.status == 400 ? response?.titile : response?.errors;
      dispatch(fetchProduct(errorMessage));
    }
  };
}
