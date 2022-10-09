import React from "react";
import { useDispatch } from "react-redux";
import {
  DecreseItemCount,
  deleteItemFromCart,
  increseItemCount,

} from "../../redux/actions/cartActions";
import { productOutCart } from "../../redux/actions/productsActions";
import Counter from "../Counter";

function CartCard({ data }) {
  const dispatch = useDispatch();
  const deleteItem = (id) => {
    dispatch(deleteItemFromCart(id));
    dispatch(productOutCart(id))
  };

  let inc = () => {
    dispatch(increseItemCount(data.id));
  };

  let dec = () => {
    dispatch(DecreseItemCount(data.id));
  };

  return (
    <div className="p-3 p-md-3 border rounded-3 mb-4">
      <div className="row align-items-center text-center ">
        <div className="col-12 col-md-2 text-center">
          <img
            src={data.imgUrl}
            alt="img"
            className="rounded-3 mw-100"
            height={"120px"}
          />
        </div>
        <div className="col-12 col-md-4 text-center text-md-start my-3 my-md-0">
          <h4 className="mb-0 pb-2">{data.name} </h4>
          <small className="text-secondary">
            Supplier: <span className="text-black ">{data.supplierName}</span>
          </small>
        </div>
        <div className="col-12 col-md-2 text-center my-3 my-md-0 px-0">
          <Counter counter={data.count} dec={dec} inc={inc} />
        </div>
        <div className="col-10 col-md-3 text-center my-3 my-md-0">
          <h4 className="mb-0">{data.price} SR</h4>
        </div>
        <div
          onClick={() => deleteItem(data.id)}
          className="col-2 col-md-1 text-end my-3 my-md-0 btn"
        >
          <i className="fas fa-trash fa-lg text-danger"></i>
        </div>
      </div>
    </div>
  );
}

export default CartCard;
