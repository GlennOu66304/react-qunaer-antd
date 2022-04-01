import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
interface UserStates {
 
  loading: boolean;
  error: string | null;
  token: string | null;
}

const initialState: UserStates = {

  loading: false,
  error: null,
  token: null,
};

export const signIn = createAsyncThunk(
  "user/singIn",

  async (
    paramaters: {
      email: string;
      password: string;
    },
    thunkAPI
  ) => {
    const { data } = await axios.post(`http://123.56.149.216:8089/auth/login`, {
      email: paramaters.email,
      password: paramaters.password,
    });
    return data;
  }
);
export const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    logOut: (state) => {
      state.token = null;
      state.error = null;
      state.loading = false;
    },
  },

  extraReducers: {
    // function as reducers object content

    // pending
    [signIn.pending.type]: (state) => {
      state.loading = true;
    },

    // fulfilled
    [signIn.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.token = action.payload;
      state.error = null;
    },
    // rejected

    [signIn.rejected.type]: (state, action: PayloadAction<string | null>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
