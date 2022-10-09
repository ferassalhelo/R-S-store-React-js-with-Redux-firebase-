import {
  END_PROCCESS_USER,
  GET_DATA_FAIL,
  SET_USER_DATA,
  SIGN_OUT_USER,
  START_PROCCESS_USER,
} from "../constant/userConstant";

export default function userReducer(
  state = { userData: {}, errorMessage: "", userProccess: false },
  action
) {
  switch (action.type) {
    case START_PROCCESS_USER:
      return { ...state, userProccess: true };
    case END_PROCCESS_USER:
      return { ...state, userProccess: false };
    case SET_USER_DATA:
      return { ...state, userData: action.payload };
    case SIGN_OUT_USER:
      return { ...state, userData: {} };
    case GET_DATA_FAIL:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
}
