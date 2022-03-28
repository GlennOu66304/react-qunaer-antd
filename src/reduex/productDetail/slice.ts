import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductDetailStates {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: ProductDetailStates = {
  data: null,
  loading: true,
  error: null,
};

export const productDetailSlice = createSlice({
  name: "productDetail",
  initialState,

  reducers: {
    // function as reducers object content
    fetchStart: (state) => {
      state.loading = true;
    },

    fetchSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },

    fetchFail: (state, action: PayloadAction<string | null>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
