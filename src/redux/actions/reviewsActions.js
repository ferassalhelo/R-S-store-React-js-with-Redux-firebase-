// get all products

import { addDoc, collection, getDocs } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../../firebase/firebaseConfig";
import {
  ADD_REVIEWS,
  END_PROCCESS_REVIEWS,
  GET_ALL_REVIEWS,
  START_PROCCESS_REVIEWS,
} from "../constant/reviewsConstant";

export const getAllReviews = () => {
  return async (dispatch) => {
    dispatch({ type: START_PROCCESS_REVIEWS });
    try {
      const arr = [];
      const querySnapshot = await getDocs(collection(db, "reviews"));
      querySnapshot.forEach((doc) => {
        arr.unshift({ ...doc.data(), id: doc.id });
      });

      dispatch({
        type: GET_ALL_REVIEWS,
        payload: arr,
      });
      dispatch({ type: END_PROCCESS_REVIEWS });
    } catch (error) {
      toast.error(error.message);
      dispatch({ type: END_PROCCESS_REVIEWS });
    }
  };
};

export const addReviews = (data) => {
  return async (dispatch) => {
    dispatch({ type: START_PROCCESS_REVIEWS });
    try {
      await addDoc(collection(db, "reviews"), {
        ...data,
      }).then((res) => {
        let id = res._key.path.segments[1];

        dispatch({
          type: ADD_REVIEWS,
          payload: { ...data, id },
        });
        dispatch({ type: END_PROCCESS_REVIEWS });
        toast.success("Review added successfully");
      });
    } catch (error) {
      toast.error(error.message);
      dispatch({ type: END_PROCCESS_REVIEWS });
    }
  };
};
