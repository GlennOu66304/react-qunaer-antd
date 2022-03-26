// 1.import combinereducer

import { createStore, combineReducers } from "redux";
import languageReducer from "./language/languageReducer";
import recommendProductReducer from "./recommendation/recommendationReducer";

// store value will be process by the reducer
// 2.make root reducer 

const rootReducer = combineReducers({
    language:languageReducer,
    recommendation:recommendProductReducer 
})
// 3.use it in the store
const store = createStore(rootReducer);
//3.Root State in the store.ts 
export type RootState = ReturnType <typeof store.getState>

export default store;
  