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
      `${process.env.REACT_APP_API}/api/shoppingCart`,

      {
        headers: {
          Authorization: `bearer ${jwt}`,
        },
      }
    );
    return data.shoppingCartItems;
  }
);

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
      `${process.env.REACT_APP_API}/api/shoppingCart/items`,
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
      `${process.env.REACT_APP_API}/api/shoppingCart/items/(${paramaters.itemIds.join(
        ","
      )})`,

      {
        headers: {
          Authorization: `bearer ${paramaters.jwt}`,
        },
      }
    );
  }
);

//check out
export const checkout = createAsyncThunk(
  "shoppingCart/checkout",

  async (jwt: string, thunkAPI) => {
    const {data} = await axios.post(
      `${process.env.REACT_APP_API}/api/shoppingCart/checkout`,
      null,

      {
        headers: {
          Authorization: `bearer ${jwt}`,
        },
      }
    );
    return data;
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
      state.loading = false;
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

    // pending
    [checkout.pending.type]: (state) => {
      state.loading = true;
    },

    // fulfilled
    [checkout.fulfilled.type]: (state) => {
      state.loading = false;
      state.items = [];
      state.error = null;
    },
    // rejected

    [checkout.rejected.type]: (state, action: PayloadAction<string | null>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Goal:

// 1.Header show the number of the purchased item(api get)
// 2.details page can show the add or delet the item option above the date section(add and delete)
// 3.the shopping Cart section will show the item purchased and total number, total price(get)

// I.Shopping Cart Page:UI
// 1.Main Layout
// 2.ProductList Component
// 3.Price and total number component
// 4.Header number of the item
// 5.details page shopping cart option

// II.Reduex section
// 1.slice page buid（Product Deail) get
// 2.import it to the store section
// 3.search function
// 1)function
// 2)slice section change
// 3)interface change
// 4)data change to the items
// 4.add function
// 5.delete function
