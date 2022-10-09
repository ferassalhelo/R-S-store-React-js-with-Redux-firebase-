import React from "react";
import { Link } from "react-router-dom";
import footerImg from "../../assets/imgs/footer.png";
function Footer() {
  return (
    <footer className="row m-auto justify-content-between align-items-center border-top container-fluid">
      <div className="col-12 py-4 text-center">
        <img src={footerImg} alt="img" className="mw-100" />
      </div>
      <div className="col-12 col-lg-4 px-5 py-3 text-center">
        <p className="fs-6 fw-bold text-main">Enquiries</p>
        <p className="mt-2 fs-5 fw-bold"> rs62a6@gmail.com</p>
      </div>
      <div className="col-12 col-lg-4 px-5 py-3 text-center">
        <p className="fs-6 fw-bold text-main">Address</p>
        <p className="mt-2 fs-5 fw-bold">
          Saudi Arabia, Riyadh, king Fahad street
        </p>
      </div>
      <div className="col-12 col-lg-4 px-5 py-3 text-center">
        <p className="fs-6 fw-bold text-main">Phone</p>
        <p className="mt-2 fs-5 fw-bold">966 551 416 432</p>
      </div>
      <div className="col-12 mb-3 text-center">
        <Link to="/" className="text-black me-4 text-decoration-none fs-4">
          <i className="fab fa-facebook-f"></i>
        </Link>
        <Link to="/" className="me-4 text-black text-decoration-none fs-4">
          <i className="fab fa-instagram"></i>
        </Link>
        <Link to="/" className="me-4 text-black text-decoration-none fs-5">
          <i className="fa-brands fa-twitter"></i>
        </Link>
      </div>

      <div className="col-12 text-center pb-2">
        Copyright © 2022 by Rakan & Saud
      </div>
    </footer>
  );
}

export default Footer;
