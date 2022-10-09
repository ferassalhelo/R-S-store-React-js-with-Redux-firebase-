import { auth, db, storage } from "../../firebase/firebaseConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {
  END_PROCCESS_USER,
  GET_DATA_FAIL,
  SET_USER_DATA,
  SIGN_OUT_USER,
  START_PROCCESS_USER,
} from "../constant/userConstant";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { toast } from "react-toastify";

// sign in
export const signInAction = ({ email, password }) => {
  return async (dispatch) => {
    dispatch({ type: START_PROCCESS_USER });
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        let docSnap = await getDoc(doc(db, "users", userCredential.user.uid));
        if (docSnap.exists()) {
          dispatch({
            type: SET_USER_DATA,
            payload: docSnap.data(),
          });
          dispatch({ type: END_PROCCESS_USER });
          localStorage.setItem("userData", JSON.stringify(docSnap.data()));
        }
      })
      .catch((error) => {
        toast.error(error.message);
        dispatch({ type: GET_DATA_FAIL, payload: error.message });
        dispatch({ type: END_PROCCESS_USER });
      });
  };
};

// sign out
export const signOutAction = () => {
  return async (dispatch) => {
    dispatch({ type: START_PROCCESS_USER });
    signOut(auth)
      .then(() => {
        dispatch({
          type: SIGN_OUT_USER,
        });
        dispatch({ type: END_PROCCESS_USER });
        localStorage.removeItem("userData");
      })
      .catch((error) => {
        toast.error(error.message);
        dispatch({ type: GET_DATA_FAIL, payload: error.message });
        dispatch({ type: END_PROCCESS_USER });
      });
  };
};

// Upload Img And SignUp
export const uploadImgAndSignUpAction = (data, file) => {
  const storageRef = ref(storage, "Users Images/" + file.name);
  const uploadTask = uploadBytesResumable(storageRef, file);
  return async (dispatch) => {
    dispatch({ type: START_PROCCESS_USER });
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
        toast.error(error.message)
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          try {
            await createUserWithEmailAndPassword(
              auth,
              data.email,
              data.password
            ).then(async (res) => {
              await setDoc(doc(db, "users", res.user.uid), {
                ...data,
                imgUrl: typeof file === "object" ? downloadURL : "",
              });

              dispatch({
                type: SET_USER_DATA,
                payload: {
                  ...data,
                  imgUrl: typeof file === "object" ? downloadURL : "",
                },
              });
              dispatch({ type: END_PROCCESS_USER });
              localStorage.setItem(
                "userData",
                JSON.stringify({
                  ...data,
                  imgUrl: typeof file === "object" ? downloadURL : "",
                })
              );
            });
          } catch (error) {
            toast.error(error.message);
            dispatch({ type: GET_DATA_FAIL, payload: error.message });
            dispatch({ type: END_PROCCESS_USER });
          }
        });
      }
    );
  };
};
