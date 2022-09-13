import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
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

// Goal : Store section and data fetch issue fix(same like hompage.tsx)

// 1.git new branch
// 2.store issue fix:
// 3.data issue fix:
// 4.pending issue fix:
// 5.extra reeducers
// 5.redux dev tool fix

// createAsyncThunk usage https://redux-toolkit.js.org/api/createAsyncThunk

export const giveMeProductDetails = createAsyncThunk(
  "productDetails/getProductDetails",

  async (touristRouteId: string, thunkAPI) => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API}/api/touristRoutes/${touristRouteId}`
    );
    return data;
  }
);
export const productDetailSlice = createSlice({
  name: "productDetail",
  initialState,

  reducers: {},

  extraReducers: {
    // function as reducers object content

    // pending
    [giveMeProductDetails.pending.type]: (state) => {
      state.loading = true;
    },

    // fulfilled
    [giveMeProductDetails.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    // rejected

    [giveMeProductDetails.rejected.type]: (
      state,
      action: PayloadAction<string | null>
    ) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
