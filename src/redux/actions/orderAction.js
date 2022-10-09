// get all products

import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../../firebase/firebaseConfig";
import { DELETE_ORDER, GET_ALL_ORDERS } from "../constant/ordersConstant";

export const getAllOrders = () => {
  return async (dispatch) => {
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
    } catch (error) {
      toast.error(error.message);
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

export const deletOrder = (id) => {
  console.log(id);
  return async (dispatch) => {
    try {
      await deleteDoc(doc(db, "orders", `${id}`));
      dispatch({
        type: DELETE_ORDER,
        payload: id,
      });
      toast.success("order has been deleted");
    } catch (error) {
      toast.error(error.message);
    }
  };
};
