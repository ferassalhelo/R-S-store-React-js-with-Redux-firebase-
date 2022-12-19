import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addItemToCart } from "../../redux/actions/cartActions";
import { productInCart } from "../../redux/actions/productsActions";

function Card({ data }) {
  const user = useSelector((reducers) => reducers.user.userData);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let addToCart = () => {
    if (user.name) {
      dispatch(addItemToCart({ ...data, count: 1 }));
      return dispatch(productInCart(data.id));
    } else {
      navigate("/signin");
    }
  };
  return (
    <div className="card text-center w-100 h-100">
      <Link
        to={`/product/${data.id}`}
        className="text-decoration-none text-black"
      >
        <img src={data.imgUrl} className="card-img-top cardImg" alt="img" />
        <div className="card-body">
          <h5
            className="card-title fw-bold mb-0 fs-4"
            style={{ height: "50px" }}
          >
            {data.name}
          </h5>
          <p className="card-text mt-1 text-danger fs-2 fw-bold">
            {data.price} SR
          </p>
          <p className="card-text my-2">category: {data.category}</p>
        </div>
      </Link>
      <button
        className="btn bg-main text-white fw-bold text-uppercase px-4  m-auto text-white mb-3"
        onClick={addToCart}
        disabled={user.userType === "supplier" || data.inCart}
      >
        {data.inCart ? "in cart" : " add to cart"}
      </button>
    </div>
  );
}

export default Card;
