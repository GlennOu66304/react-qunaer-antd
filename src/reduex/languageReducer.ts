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

export default (state = defaultState, action) => {
  return state;
};
