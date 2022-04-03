// 1.import combinereducer

// import { createStore, applyMiddleware } from "redux";
import languageReducer from "./language/languageReducer";
import recommendProductReducer from "./recommendation/recommendationReducer";
// import the thunk first
// import thunk from "redux-thunk";
// store value will be process by the reducer
// 2.make root reducer
// import {actionLog} from './middleware/actionlog'
// 4) import this reducer in the store section as well
import { productDetailSlice } from "./productDetail/slice";
import { productSearchSlice } from "./search/slice";
import { userSlice } from "./user/slice";
import {shoppingCartSlice} from './shoppingCart/slice'
import {placeOrderSlice} from './placeOrder/slice'
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {persistStore, persistReducer} from 'redux-persist'

import storage from "redux-persist/lib/storage"

const persistConfig={
  key:"root",
  storage,
  whitelist:["user"]
}

const rootReducer = combineReducers({
  language: languageReducer,
  recommendation: recommendProductReducer,
  // need to add the reducer after the slice name
  productDetail: productDetailSlice.reducer,
  productSearch: productSearchSlice.reducer,
  user: userSlice.reducer,
  shoppingCart:shoppingCartSlice.reducer,
 order: placeOrderSlice.reducer,
});
// 3.use it in the store

// const store = createStore(rootReducer,applyMiddleware(thunk,actionLog));//add the middle ware thunk
// const store = createStore(rootReducer,applyMiddleware(thunk));//add the middle ware thunk

const persistedReducer = persistReducer(persistConfig,rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
  devTools: true, //enable the redux dev tool
});

const persistor = persistStore(store)

//3.Root State in the store.ts
export type RootState = ReturnType<typeof store.getState>;

export default {store,persistor};
