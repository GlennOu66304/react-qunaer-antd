import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
interface ShoppingCart {
  items: any[];
  loading: boolean;
  error: string | null;
}

const initialState: ShoppingCart = {
  items: [],
  loading: false,
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

//get
export const getShopingCartItem = createAsyncThunk(
  "shoppingCart/getShopingCart",

  async (jwt: string, thunkAPI) => {
    const { data } = await axios.get(
      `http://123.56.149.216:8089/api/shoppingCart`,

      {
        headers: {
          Authorization: `bearer ${jwt}`
        }
      }
    )
    return data.shoppingCartItems;
  }
)

//add

export const addShopingCartItem = createAsyncThunk(
  "shoppingCart/addShopingCartItem",

  async (
    paramaters: {
      jwt: string;
      touristRouteId: string;
    },
    thunkAPI
  ) => {
    const { data } = await axios.post(
      `http://123.56.149.216:8089/api/shoppingCart/items`,
      { touristRouteId: paramaters.touristRouteId },
      {
        headers: {
          Authorization: `bearer ${paramaters.jwt}`,
        },
      }
    );
    return data.shoppingCartItems;
  }
);

//clear

export const clearShopingCartItem = createAsyncThunk(
  "shoppingCart/clearShopingCartItem",

  async (
    paramaters: {
      jwt: string;
      itemIds: number[];
    },
    thunkAPI
  ) => {
    return await axios.delete(
      `http://123.56.149.216:8089/api/shoppingCart/items/(${paramaters.itemIds.join(",")})`,

      {
        headers: {
          Authorization: `bearer ${paramaters.jwt}`,
        },
      }
    );
  }
);

export const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState,

  reducers: {},

  extraReducers: {
    // function as reducers object content

    // pending
    [getShopingCartItem.pending.type]: (state) => {
      state.loading = true;
    },

    // fulfilled
    [getShopingCartItem.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.items = action.payload;
    },
    // rejected

    [getShopingCartItem.rejected.type]: (
      state,
      action: PayloadAction<string | null>
    ) => {
      state.loading = false;
      state.error = action.payload;
    },

    // pending
    [addShopingCartItem.pending.type]: (state) => {
      state.loading = true;
    },

    // fulfilled
    [addShopingCartItem.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.items = action.payload;
    },
    // rejected

    [addShopingCartItem.rejected.type]: (
      state,
      action: PayloadAction<string | null>
    ) => {
      state.loading = false;
      state.error = action.payload;
    },

    // pending
    [clearShopingCartItem.pending.type]: (state) => {
        state.loading = true;
      },
  
      // fulfilled
      [clearShopingCartItem.fulfilled.type]: (state) => {
        state.loading =false;
        state.items = [];
        state.error = null;
      },
      // rejected
  
      [clearShopingCartItem.rejected.type]: (
        state,
        action: PayloadAction<string | null>
      ) => {
        state.loading = false;
        state.error = action.payload;
      },




  },
});
