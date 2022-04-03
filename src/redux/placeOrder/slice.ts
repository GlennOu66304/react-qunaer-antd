import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
import {checkout} from '../shoppingCart/slice'

interface OrderState {
  currentOrder: any;
  loading: boolean;
  error: string | null;
}

const initialState: OrderState = {
  currentOrder: null,
  loading: false,
  error: null,
};

//get
export const placeOrder = createAsyncThunk(
  "order/placeOrder",

  async (
    paramaters: {
      jwt: string;
      orderId: string;
    },
    thunkAPI
  ) => {
    const { data } = await axios.post(
      `http://123.56.149.216:8089/api/orders/${paramaters.orderId}/placeOrder`,
      null,

      {
        headers: {
          Authorization: `bearer ${paramaters.jwt}`,
        },
      }
    );
    return data;
  }
);

export const placeOrderSlice = createSlice({
  name: "placeOrder",
  initialState,

  reducers: {},

  extraReducers: {
    // function as reducers object content

    // pending
    [placeOrder.pending.type]: (state) => {
      state.loading = true;
    },

    // fulfilled
    [placeOrder.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.currentOrder = action.payload;
    },
    // rejected

    [placeOrder.rejected.type]: (
      state,
      action: PayloadAction<string | null>
    ) => {
      state.loading = false;
      state.error = action.payload;
    },
     // pending
     [checkout.pending.type]: (state) => {
        state.loading = true;
      },
  
      // fulfilled
      [checkout.fulfilled.type]: (state, action) => {
        state.loading = false;
        state.currentOrder = action.payload;
      },
      // rejected
  
      [checkout.rejected.type]: (
        state,
        action: PayloadAction<string | null>
      ) => {
        state.loading = false;
        state.error = action.payload;
      },
  },
});
