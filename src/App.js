import React, { Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Spinner from "./components/Spinner";
import Root from "./routs/Root";
import "react-toastify/dist/ReactToastify.css";
import { SET_USER_DATA } from "./redux/constant/userConstant";
import { getAllProducts } from "./redux/actions/productsActions";
import { getAllReviews } from "./redux/actions/reviewsActions";
import { getAllOrders } from "./redux/actions/orderAction";

function App() {
  let sel = useSelector((state) => state);
  let dispatch = useDispatch();
  console.log(sel);
  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllReviews());
    dispatch(getAllOrders());
    const userData = localStorage.getItem("userData");
    if (userData) {
      dispatch({ type: SET_USER_DATA, payload: JSON.parse(userData) });
    }
  }, []);

  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <Header />
        <Root />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
