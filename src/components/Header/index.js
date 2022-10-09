import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../assets/imgs/logo.png";
import ImgButton from "../ImgButton";
import Search from "../Seacch";
function Header() {
  const userData = useSelector((reducers) => reducers.user.userData);
  const count = useSelector((reducers) => reducers.cart.items.length);
  return (
    <div>
      <nav
        className="navbar bg-black position-fixed justify-content-center py-0 top-0 end-0 start-0 border-bottom"
        style={{ zIndex: "999" }}
      >
        <div className="container-fluid pt-3 pb-2 px-lg-5 row">
          <Link className="py-0 col" to="/">
            <img
              src={logo}
              height="50px"
              className="mw-100"
              width="120px"
              alt="logo"
            />
          </Link>
          <div className="col-lg order-lg-2 order-3 col-12 mt-lg-0 mt-2 ">
            <Search />
          </div>
          <div className="d-flex col justify-content-end p-0 order-2 order-lg-3">
            <ImgButton
              text={userData.name ? userData.name : "Signin"}
              icon={
                userData.imgUrl && userData.imgUrl !== "" ? (
                  <img
                    src={userData.imgUrl}
                    alt="user img"
                    width="28px"
                    height="26px"
                    style={{
                      border: "1px solid #ff5b38",
                      objectFit: "cover",
                    }}
                    className="rounded-4"
                  />
                ) : (
                  <i className="fa-solid fa-user fs-4"></i>
                )
              }
              link="profile"
            />
            {userData.userType === "retailer" ? (
              <ImgButton
                text="Cart"
                count={count}
                link="/cart"
                icon={<i className="fa-solid fa-cart-shopping fs-4"></i>}
              />
            ) : null}
            {userData.userType === "supplier" ? (
              <ImgButton
                link="/Dashboard"
                text="Dashboard"
                icon={<i className="fa-solid fa-clipboard-list fs-4"></i>}
              />
            ) : null}
          </div>
        </div>
      </nav>
      <div style={{ height: "100px" }}></div>
    </div>
  );
}

export default Header;
