import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../../redux/actions/cartActions";
import { addOrder } from "../../redux/actions/orderAction";
import { getAllProducts } from "../../redux/actions/productsActions";

function OrderSummary({ subTotal, orderItems, userData }) {
  const [modal, setVal] = useState(false);
  const dispatch = useDispatch();
  const PaiementWhenReceiving = () => {
    let data = { orderItems, userData };
    addOrder(data);
    dispatch(getAllProducts());
    dispatch(clearCart());
    setVal(false);
  };
  return (
    <div className="border rounded-3 px-3 py-4 mb-3">
      <h3>Order Summary:</h3>
      <div className="row justify-content-between py-2 mb-0 px-2">
        <p className="col m-0">Subtotal</p>
        <p className="fw-bold col text-end fs-5 m-0"> {subTotal} SR</p>
      </div>
      <div className="row justify-content-between  py-2 px-2">
        <p className="col m-0">Earnings</p>
        <p className="fw-bold col text-end fs-5 m-0">
          {subTotal > 0 ? ((subTotal / 100) * 2).toFixed(2) : 0} SR
        </p>
      </div>
      <div className="row justify-content-between  py-2 px-2">
        <p className="col m-0">Shipping</p>
        <p className="fw-bold col text-end fs-5 m-0">
          {subTotal > 0 ? 15 : 0} SR
        </p>
      </div>
      <div className="row justify-content-between border-top  pt-4 px-2">
        <p className="col m-0 fs-5 fw-bolder">Total</p>
        <p className="fw-bold col text-end fs-4 m-0">
          {console.log(((subTotal / 100) * 2).toFixed(2))}
          {subTotal > 0
            ? 15 + subTotal + +((subTotal / 100) * 2).toFixed(2)
            : 0}{" "}
          SR
        </p>
      </div>
      <button
        disabled={subTotal === 0}
        className="text-main text-decoration-underline py-3 ps-2 btn border-0"
        onClick={PaiementWhenReceiving}
      >
        Paiement when receiving?
      </button>
      <button
        disabled={subTotal === 0}
        className="btn bg-main w-100 rounded-3 fw-bold py-2 fs-5 text-white "
        onClick={() => setVal(true)}
      >
        <i className="fa-sharp fa-solid fa-credit-card pe-1"></i> Checkout
      </button>
      {modal ? (
        <div
          className="position-fixed top-0 end-0 start-0 bottom-0 row justify-content-center align-items-center bg-secondary bg-opacity-50"
          style={{ zIndex: 99999 }}
        >
          <div
            className="text-center p-5 bg-white w-25 rounded-5 position-relative"
            style={{ minWidth: "300px" }}
          >
            <h3 className="text-main ">Card Information</h3>
            <p>Card Number</p>
            <form>
              <input type="number" className="w-100" required={true} />
              <input type="date" className="w-50" required />
              <input type="number" className="w-50" required />
              <button
                type="submit"
                onClick={PaiementWhenReceiving}
                className="btn bg-main w-50 rounded-3 fw-bold fs-5 text-white mt-4"
              >
                <i className="fa-sharp fa-solid fa-credit-card pe-1"></i> buy
              </button>
            </form>

            <p
              onClick={() => setVal(false)}
              className="btn position-absolute top-0 end-0 text-danger fs-3 fw-bold p-0  me-3 border-0"
            >
              x
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default OrderSummary;
