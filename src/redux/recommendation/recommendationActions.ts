import { ThunkAction } from "redux-thunk";
import { RootState } from "../store";
import axios from "axios";

export const FETCH_RECOMMEND_PRODUCTS_START = "FETCH_RECOMMEND_PRODUCTS_START";
export const FETCH_RECOMMEND_PRODUCTS_SUCCESS =
  "FETCH_RECOMMEND_PRODUCTS_SUCCESS";
export const FETCH_RECOMMEND_PRODUCTS_FAIL = "FETCH_RECOMMEND_PRODUCTS_FAIL";

interface FetchRecommendProductStartAction {
  type: typeof FETCH_RECOMMEND_PRODUCTS_START;
}

//mix export the types

export type RecommendProductActionTypes =
  | FetchRecommendProductStartAction
  | FetchRecommendProductSuccessAction
  | FetchRecommendProductFailAction;

export const FetchRecommendProductStartActionCreator =
  (): FetchRecommendProductStartAction => {
    return {
      type: FETCH_RECOMMEND_PRODUCTS_START,
    };
  };

interface FetchRecommendProductSuccessAction {
  type: typeof FETCH_RECOMMEND_PRODUCTS_SUCCESS;
  payload: any;
}

export const FetchRecommendProductSuccessActionCreator = (
  data
): FetchRecommendProductSuccessAction => {
  return {
    type: FETCH_RECOMMEND_PRODUCTS_SUCCESS,
    payload: data,
  };
};

interface FetchRecommendProductFailAction {
  type: typeof FETCH_RECOMMEND_PRODUCTS_FAIL;
  payload: any;
}

export const FetchRecommendProductFailtActionCreator = (
  error
): FetchRecommendProductFailAction => {
  return {
    type: FETCH_RECOMMEND_PRODUCTS_FAIL,
    payload: error,
  };
};
export const giveMeDataActionCreator =
  (): ThunkAction<void, RootState, unknown, RecommendProductActionTypes> =>
  async (dispatch, getState) => {
    dispatch(FetchRecommendProductStartActionCreator());
    try {
      const { data } = await axios.get(
        "http://123.56.149.216:8089/api/productCollections"
      );
      dispatch(FetchRecommendProductSuccessActionCreator(data));
      // console.log(this.state.productList);
    } catch (error: any) {
      // console.log(error);
      dispatch(FetchRecommendProductFailtActionCreator(error.message));
    }
  };
