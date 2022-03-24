// interface option

export interface LanguageState {
  language: "en" | "zh";
  languageList: { name: string; code: string }[];
}

// sett the defaule state value:// it is a obeject

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
export default (state = defaultState, action) => {
  // console.log(state,action);
  // switch is a fuction
  switch (action.type) {
    case "change_language": {
      // 6.copay the previous state, then add the action payload
      return { ...state, language: action.payload };
    }
    case  "add_newlanguage":{//3.redeucer update

         return { ...state, languageList: [...state.languageList, action.payload]};//copy the original state and state.languageList as well
    }
    default:
      return state;
  }
};
