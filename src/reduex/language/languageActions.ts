// export the defined  action import it in the languageReducer.ts file
export const CHANGE_LANGUAGE = "change_language";
export const ADD_LANGUAGE = "add_newLanguage";

// 2)interface AddLanguage type check
interface ChangeLanguageAction {
  type: typeof CHANGE_LANGUAGE;
  payload: "zh" | "en";
}
// 5)export language actioncreator import it into the Header.tsx
export const changeLanguageActionCreator = (
  languageCode: "zh" | "en"
): ChangeLanguageAction => {// once you defined the interface, you need to use it in the fucntion
  return {
    type: CHANGE_LANGUAGE,
    payload: languageCode,
  };
};

// 2)interface AddLanguage type check
interface AddLanguageAction {
  type: typeof ADD_LANGUAGE;
  payload: { name: string; code: string };
}

// 4)export addLanguage actioncreator and import it into the Header.tsx
export const addLanguageActionCreator = (
  name: string,
  code: string
): AddLanguageAction => {
  return {
    type: ADD_LANGUAGE,
    payload: { name, code },
  };
};
// 4)interface mix then import it into the language reducer file(types check)
export type LanguageActionTypes = ChangeLanguageAction | AddLanguageAction;
