import { createStore } from "redux";
import LanguageReducer from "./language/languageReducer";

// store value will be process by the reducer

const store = createStore(LanguageReducer);

export default store;
