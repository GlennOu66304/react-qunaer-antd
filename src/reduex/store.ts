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
import { combineReducers, configureStore } from "@reduxjs/toolkit";
const rootReducer = combineReducers({
  language: languageReducer,
  recommendation: recommendProductReducer,
  // need to add the reducer after the slice name
  productDetail: productDetailSlice.reducer,
  productSearch: productSearchSlice.reducer,
});
// 3.use it in the store

// const store = createStore(rootReducer,applyMiddleware(thunk,actionLog));//add the middle ware thunk
// const store = createStore(rootReducer,applyMiddleware(thunk));//add the middle ware thunk

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
  devTools: true, //enable the redux dev tool
});

//3.Root State in the store.ts
export type RootState = ReturnType<typeof store.getState>;

export default store;
