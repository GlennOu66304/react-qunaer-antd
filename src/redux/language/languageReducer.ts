import i18n from 'i18next'

// 1.import the actioncreator file;
import { CHANGE_LANGUAGE, ADD_LANGUAGE, LanguageActionTypes } from './languageActions';

// 2.interface option

export interface LanguageState {
  language: "en" | "zh";
  languageList: { name: string; code: string }[];
}

//2.1 sett the defaule state value:// it is a obeject

// language

// Code

const defaultState: LanguageState = {
  language: "zh",
  languageList: [
    { name: "中文", code: "zh" },
    { name: "English", code: "en" },
  ],
};

// How can I get rid of the warning import/no-anonymous-default-export in React?
// https://stackoverflow.com/questions/64729264/how-can-i-get-rid-of-the-warning-import-no-anonymous-default-export-in-react
// 3.axport the reducer
 const languageReducer =  (state = defaultState, action:LanguageActionTypes) => {
  // console.log(state,action);
  // switch is a fuction
  switch (action.type) {
    // 2)change the case type
    case CHANGE_LANGUAGE: {
      i18n.changeLanguage(action.payload);//3.reducer file update: language api use
      // 6.copay the previous state, then add the action payload
      return { ...state, language: action.payload };
    }
    case  ADD_LANGUAGE:{//3.redeucer update

         return { ...state, languageList: [...state.languageList, action.payload]};//copy the original state and state.languageList as well
    }
    default:
      return state;
  }
};

export default languageReducer

// cannot export const arrow function
// https://stackoverflow.com/questions/34676984/cannot-export-const-arrow-function