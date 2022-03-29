import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
interface ProductSearchStates {
  data: any;
  loading: boolean;
  error: string | null;
  pagination: any;
}

const initialState: ProductSearchStates = {
  data: null,
  loading: true,
  error: null,
  pagination: null,
};

export const searchProduct = createAsyncThunk(
  "productSearch/searchProduct",

  async (
    paramaters: {
      keyword: string;
      nextPage: number | string;
      pageSize: number | string;
    },
    thunkAPI
  ) => {
    let url = `http://123.56.149.216:8089/api/touristRoutes/?pageNumber=${paramaters.nextPage}&pageSize=${paramaters.pageSize}`;

    //   const { data } = await axios.get(
    //     `http://123.56.149.216:8089/api/touristRoutes/${parameters}`
    //   );
    if (paramaters.keyword) {
      url = url + `&keyword=${paramaters.keyword}`;
    }
    const response = await axios.get(url);
    return {
      data: response.data,
      pagination: JSON.parse(response.headers["x-pagination"]),
    };
  }
);
export const productSearchSlice = createSlice({
  name: "productSearch",
  initialState,

  reducers: {},

  extraReducers: {
    // function as reducers object content

    // pending
    [searchProduct.pending.type]: (state) => {
      state.loading = true;
    },

    // fulfilled
    [searchProduct.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
      state.pagination = action.payload.pagination;
      state.error = null;
    },
    // rejected

    [searchProduct.rejected.type]: (
      state,
      action: PayloadAction<string | null>
    ) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
