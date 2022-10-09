import { toast } from "react-toastify";
import {
  START_PROCCESS_CART,
  END_PROCCESS_CART,
  ADD_ITEM_TO_CART,
  DELETE_ITEM_FROM_CART,
  INCREASE_ITEM_COUNT,
  DECRESE_ITEM_COUNT,
  CLEAE_CART,
} from "../constant/cartConstant";

export const addItemToCart = (data) => {
  return (dispatch) => {
    dispatch({ type: START_PROCCESS_CART });
    dispatch({
      type: ADD_ITEM_TO_CART,
      payload: data,
    });
    dispatch({ type: END_PROCCESS_CART });
    toast.success("Product added to cart");
  };
};

export const deleteItemFromCart = (id) => {
  return (dispatch) => {
    dispatch({ type: START_PROCCESS_CART });
    dispatch({
      type: DELETE_ITEM_FROM_CART,
      payload: id,
    });
    toast.success("Product deleted from cart");
  };
};

export const DecreseItemCount = (id) => {
  return (dispatch) => {
    dispatch({ type: START_PROCCESS_CART });
    dispatch({
      type: DECRESE_ITEM_COUNT,
      payload: id,
    });
    dispatch({ type: END_PROCCESS_CART });
  };
};

export const increseItemCount = (id) => {
  return (dispatch) => {
    dispatch({ type: START_PROCCESS_CART });
    dispatch({
      type: INCREASE_ITEM_COUNT,
      payload: id,
    });
    dispatch({ type: END_PROCCESS_CART });
  };
};

export const clearCart = () => {
  return (dispatch) => {
    dispatch({
      type: CLEAE_CART,
    });
    toast.success("operation accomplished successfully");
  };
};
