import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOutAction } from "../../redux/actions/userAction";
import img from "../../assets/imgs/user.jpg";
import { getAllProducts } from "../../redux/actions/productsActions";
function UserPage() {
  const userData = useSelector((reducers) => reducers.user.userData);
  const dispatch = useDispatch();
  const signOut = () => {
    dispatch(signOutAction());
    dispatch(getAllProducts());
  };
  return (
    <div className="container m-auto my-5">
      <h1 className="text-uppercase my-5">My Profile</h1>
      <div className="row pt-3 mx-0">
        <div className="col-12 col-md-5 pe-md-4 col-lg-4 col-xl-3 text-center mb-5  mb-md-0">
          {userData.imgUrl !== "" ? (
            <img
              src={userData.imgUrl}
              style={{ objectFit: "cover" }}
              className="rounded-4 border-5 border-main w-100 "
              alt="img"
            />
          ) : (
            <img
              src={img}
              style={{ objectFit: "cover" }}
              className="rounded-4  w-100 "
              alt="img"
            />
          )}

          <p className="fs-3 fw-bold text-center mt-4 mb-2 text-uppercase">
            {userData.name}
          </p>
          <small className="text-main">Wholesaler Of Dessert</small>
        </div>
        <div className="col-12 col-md-7 col-lg-8 col-xl-9 border-start border-end px-2 px-md-4 px-lg-5 row mx-0 align-items-center">
          <p className="col-12 col-lg-6 text-center text-lg-start fs-5">
            Email: <span className="text-secondary">{userData.email}</span>
          </p>
          <p className="col-12 col-lg-6 text-center text-lg-start fs-5">
            Password:{" "}
            <span className="text-secondary">{userData.password}</span>
          </p>{" "}
          <p className="col-12 col-lg-6 text-center text-lg-start fs-5">
            Phone: <span className="text-secondary">{userData.phone}</span>
          </p>
          <p className="col-12 col-lg-6 text-center text-lg-start fs-5">
            IBAN: <span className="text-secondary">{userData.ipnNumber}</span>
          </p>
          <p className="col-12 col-lg-6 text-center text-lg-start fs-5">
            Commercial Registration No:{" "}
            <span className="text-secondary">
              {userData.CommercialRegistrationNo}
            </span>
          </p>
          <p className="col-12 col-lg-6 text-center text-lg-start fs-5">
            User Type:{" "}
            <span className="text-secondary">{userData.userType}</span>
          </p>
          <button
            onClick={signOut}
            className="btn bg-main fw-bold d-block my-5 px-5 py-2 col-12 col-md-5 text-uppercase text-white"
          >
            sign out
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserPage;
