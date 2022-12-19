import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BreadCrumb from "../../components/BreadCrumb";
import Counter from "../../components/Counter";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../redux/actions/cartActions";
import { productInCart } from "../../redux/actions/productsActions";

function ProductPage() {
  const data = useSelector((reducers) => reducers.products.productsData);
  const user = useSelector((reducers) => reducers.user.userData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  let [counter, setValue] = useState(1);
  let item = [...data].find((element) => element.id === id);

  let inc = () => {
    setValue((value) => (value += 1));
  };

  let dec = () => {
    setValue((value) => (value -= 1));
  };

  let addItem = (data) => {
    if (user.name) {
      console.log(data, "datt");
      dispatch(addItemToCart(data));
      return dispatch(productInCart(item.id));
    } else {
      navigate("/signin");
    }
  };

  return (
    <div className="container m-auto my-5">
      <BreadCrumb productName={item.name} />
      <div className="row my-5 align-items-center">
        <div className="col-12 col-md-6 text-center text-md-start mb-5">
          <img
            src={item.imgUrl}
            alt="img"
            className="mw-100 rounded-3"
            width={"550px"}
          />
        </div>
        <div className="col-12 col-md-6 text-center text-md-start">
          <div className="row">
            <h2 className="col">{item.name}</h2>
            <h2 className="col text-end fw-bold">{item.price} SR</h2>
          </div>
          <p className="my-5">{item.description}</p>
          <Counter inc={inc} dec={dec} counter={counter} />
          <div className="row">
            <p className="mt-5 col-12 col-md-6 fs-5">
              category: <span className="text-secondary">{item.category}</span>
            </p>
            <p className="mt-5 col-12 col-md-6 fs-5">
              supplier:{" "}
              <span className="text-secondary">{item.supplierName}</span>
            </p>
            {item.allergens !== "" ? (
              <p className="mt-5 col-12 col-md-12 fs-5">
                allergens:
                <span className="text-secondary"> {item.allergens}</span>
              </p>
            ) : null}
          </div>

          <button
            className="btn bg-main fw-bold d-block  px-5 py-2 w-100 my-5 text-uppercase col text-white"
            onClick={() => addItem({ ...item, count: counter })}
            disabled={user.userType === "supplier" || item.inCart}
          >
            {item.inCart ? "in cart" : " add to cart"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
