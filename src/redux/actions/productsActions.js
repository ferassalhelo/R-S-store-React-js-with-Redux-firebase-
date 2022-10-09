import { db, storage } from "../../firebase/firebaseConfig";
import { toast } from "react-toastify";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import {
  ADD_PRODUCT,
  DELETE_PRODUCT,
  END_PROCCESS_PRODUCT,
  GET_DATA_FAIL_PRODUCT,
  PRODUCT_IN_CART,
  PRODUCT_OUT_CART,
  SET_ALL_PRODUCTS,
  START_PROCCESS_PRODUCT,
} from "../constant/productsConstant";

// delete product

export const deletProduct = (id) => {
  return async (dispatch) => {
    dispatch({ type: START_PROCCESS_PRODUCT });
    await deleteDoc(doc(db, "products", `${id}`));
    dispatch({
      type: DELETE_PRODUCT,
      payload: id,
    });
    toast.success("The product has been deleted");
    dispatch({ type: END_PROCCESS_PRODUCT });
  };
};

// get all products

export const getAllProducts = () => {
  return async (dispatch) => {
    const arr = [];
    const querySnapshot = await getDocs(collection(db, "products"));
    querySnapshot.forEach((doc) => {
      arr.unshift({ ...doc.data(), id: doc.id });
    });

    dispatch({
      type: SET_ALL_PRODUCTS,
      payload: arr,
    });
  };
};

// Upload Img And add product
export const uploadImgAndAddProduct = (data, file) => {
  const storageRef = ref(storage, "Products Images/" + file.name);
  const uploadTask = uploadBytesResumable(storageRef, file);
  return async (dispatch) => {
    dispatch({ type: START_PROCCESS_PRODUCT });
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            return;
        }
      },
      (error) => {
        toast.error(error.message);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          try {
            await addDoc(collection(db, "products"), {
              ...data,
              imgUrl: downloadURL,
            }).then((res) => {
              let id = res._key.path.segments[1];
              console.log(id);
              dispatch({
                type: ADD_PRODUCT,
                payload: { ...data, imgUrl: downloadURL, id },
              });
              dispatch({ type: END_PROCCESS_PRODUCT });
              toast.success("Product added successfully");
            });
          } catch (error) {
            dispatch({ type: GET_DATA_FAIL_PRODUCT, payload: error.message });
            dispatch({ type: END_PROCCESS_PRODUCT });
            toast.error(error.message);
          }
        });
      }
    );
  };
};

// add item to cart

export const productInCart = (id) => {
  return (dispatch) => {
    dispatch({
      type: PRODUCT_IN_CART,
      payload: id,
    });
  };
};

// delet item from cart

export const productOutCart = (id) => {
  return (dispatch) => {
    dispatch({
      type: PRODUCT_OUT_CART,
      payload: id,
    });
  };
};
