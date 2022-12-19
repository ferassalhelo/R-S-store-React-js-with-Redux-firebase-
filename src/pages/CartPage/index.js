import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartCard from "../../components/CartCard";
import OrderSummary from "../../components/OrderSummary";
import img from "../../assets/imgs/empty.svg";

function CartPage() {
  const reducers = useSelector((reducers) => reducers);
  let [subTotal, setSubTotal] = useState(0);
  useEffect(() => {
    if (reducers.cart.items.length) {
      let count = 0;
      [...reducers.cart.items].map(
        (item) => (count += item.price * item.count)
      );
      setSubTotal(count);
    } else if (reducers.cart.items.length === 0) setSubTotal(0);
  }, [reducers]);
  return (
    <div className="container m-auto">
      <h1 className="text-uppercase mt-5">cart</h1>
      <h4 className="mb-5">{reducers.cart.items.length} items</h4>
      <div className="row">
        <div className="col-12 col-lg-8 col-xl-9 order-2 order-lg-0 px-5 px-md-0">
          {reducers.cart.items.length === 0 ? (
            <div className="w-100 m-auto row justify-content-center align-items-center mb-5">
              <p className="col-12 fs-1 text-uppercase fw-bold text-main text-center pb-5">
                empty!
              </p>
              <img src={img} alt="img" className="col-12 col-lg-7" />
            </div>
          ) : (
            reducers.cart.items.map((item) => (
              
              <CartCard key={item.id} data={item} />
            ))
          )}
        </div>
        <div className="col-12 col-lg-4 col-xl-3 ps-lg-3 px-5 px-md-0">
          <OrderSummary
            subTotal={subTotal}
            orderItems={reducers.cart.items}
            userData={reducers.user.userData}
          />
        </div>
      </div>
    </div>
  );
}

export default CartPage;
