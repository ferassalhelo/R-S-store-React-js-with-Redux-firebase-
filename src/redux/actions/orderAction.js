// get all products

import {
  addDoc,
  collection,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../../firebase/firebaseConfig";
import {
  DONE_ORDER,
  END_PROCCESS_ORDER,
  GET_ALL_ORDERS,
  START_PROCCESS_ORDER,
} from "../constant/ordersConstant";

export const getAllOrders = () => {
  return async (dispatch) => {
    dispatch({ type: START_PROCCESS_ORDER });
    try {
      const arr = [];
      const querySnapshot = await getDocs(collection(db, "orders"));
      querySnapshot.forEach((doc) => {
        arr.unshift({ ...doc.data(), id: doc.id });
      });

      dispatch({
        type: GET_ALL_ORDERS,
        payload: arr,
      });
      dispatch({ type: END_PROCCESS_ORDER });
    } catch (error) {
      toast.error(error.message);
      dispatch({ type: END_PROCCESS_ORDER });
    }
  };
};

export const addOrder = async (data) => {
  try {
    await addDoc(collection(db, "orders"), {
      ...data,
    });
  } catch (error) {
    toast.error(error.message);
  }
};

export const doneOrder = (id, item) => {
  return async (dispatch) => {
    dispatch({ type: START_PROCCESS_ORDER });
    try {
      await updateDoc(doc(db, "orders", id), {
        ...item,
        done: true,
      });
      dispatch({
        type: DONE_ORDER,
        payload: id,
      });
      toast.success("order has been done");
      dispatch({ type: END_PROCCESS_ORDER });
    } catch (error) {
      toast.error(error.message);
      dispatch({ type: END_PROCCESS_ORDER });
    }
  };
};
