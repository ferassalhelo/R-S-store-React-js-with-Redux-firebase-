import React from "react";
import boxImg from "../../assets/imgs/box.png";
import "./style.css";
function Hero() {
  return (
    <div className="bg-img py-5">
      <div className="container m-auto row justify-content-between align-items-center py-5 ">
        <div className="fw-bolder col-12 col-lg-6 p-3 text-center text-lg-start">
          <h1 style={{ fontSize: "3.5rem" }}>R & S store for wholesales desserts</h1>
          <p className="fs-5 mt-5 fw-light">
            Here as a retailer you will find all kinds of dessert or sweets from
            chocolate, toffee, Arabic sweets, cake, caramel, biscuit and others.
            And as a supplier, you can offer your products at the right price.
          </p>
        </div>
        <div className="col-12 col-lg-6 p-3 text-center text-lg-end">
          <img src={boxImg} alt="img" className="mw-100 img" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
