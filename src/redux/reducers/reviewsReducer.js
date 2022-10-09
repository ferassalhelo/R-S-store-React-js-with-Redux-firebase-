import {
  ADD_REVIEWS,
  END_PROCCESS_REVIEWS,
  GET_ALL_REVIEWS,
  START_PROCCESS_REVIEWS,
} from "../constant/reviewsConstant";
import {} from "../constant/userConstant";

export default function reviewsReducer(
  state = { reviews: [], reviewsProccess: false },
  action
) {
  switch (action.type) {
    case START_PROCCESS_REVIEWS:
      return { ...state, reviewsProccess: true };
    case END_PROCCESS_REVIEWS:
      return { ...state, reviewsProccess: false };
    case ADD_REVIEWS:
      return { ...state, reviews: [...state.reviews, { ...action.payload }] };
    case GET_ALL_REVIEWS:
      return { ...state, reviews: [...action.payload] };

    default:
      return state;
  }
}
