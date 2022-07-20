import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productDetails: [] as any,
  errorMessage: "",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    fetchProduct: (state, { payload }) => {
      state.productDetails = [];
      state.errorMessage = "";
    },
  },
});

const { reducer, actions } = productSlice;

export const { fetchProduct } = actions;

export default reducer;
