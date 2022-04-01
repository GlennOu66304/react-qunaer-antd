// 1.export the defined  action import it in the languageReducer.ts file, just a name defined, does not affect alot the code performance
export const CHANGE_LANGUAGE = "change_language";
export const ADD_LANGUAGE = "add_language";

// 2. interface AddLanguage type check
interface ChangeLanguageAction {
  type: typeof CHANGE_LANGUAGE;
  payload: "zh" | "en";
}
// 2.2 export language actioncreator import it into the Header.tsx
export const changeLanguageActionCreator = (
  languageCode: "zh" | "en"
): ChangeLanguageAction => {// once you defined the interface, you need to use it in the fucntion
  return {
    type: CHANGE_LANGUAGE,
    payload: languageCode,
  };
};

// 3.interface AddLanguage type check
interface AddLanguageAction {
  type: typeof ADD_LANGUAGE;
  payload: { name: string; code: string };
}

// 3.1 export addLanguage actioncreator and import it into the Header.tsx
export const addLanguageActionCreator = (
  name: string,
  code: string
): AddLanguageAction => {
  return {
    type: ADD_LANGUAGE,
    payload: { name, code },
  };
};
// 4.interface mix then import it into the language reducer file(types check)
export type LanguageActionTypes = ChangeLanguageAction | AddLanguageAction;
