//4. import the action type first
import {
  FETCH_RECOMMEND_PRODUCTS_START,
  FETCH_RECOMMEND_PRODUCTS_SUCCESS,
  FETCH_RECOMMEND_PRODUCTS_FAIL,
  RecommendProductActionTypes,
} from "./recommendationActions";

// 1.interface type check
export interface recommendationState {
  productList: any[];
  loading: boolean;
  error: string | null;
}
// 2. default state check

const defaultState: recommendationState = {
  productList: [],
  loading: true,
  error: null,
};

//3. return this reducer
 const recommendProductReducer = (state = defaultState, action: RecommendProductActionTypes) => {
  switch (action.type) {
    case FETCH_RECOMMEND_PRODUCTS_START: {
      return { ...state, loading: true };
    }

    case FETCH_RECOMMEND_PRODUCTS_SUCCESS: {
      return { ...state, loading: false, productList: action.payload };
    }
    case FETCH_RECOMMEND_PRODUCTS_FAIL: {
      return { ...state, loading: false, error: action.payload };
    }
    default:
      return state;
  }
};

export default recommendProductReducer