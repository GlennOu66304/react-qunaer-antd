import { createStore } from "redux";
import LanguageReducer from "./language/languageReducer";

// store value will be process by the reducer

const store = createStore(LanguageReducer);
//3.Root State in the store.ts 
export type RootState = ReturnType <typeof store.getState>

export default store;
