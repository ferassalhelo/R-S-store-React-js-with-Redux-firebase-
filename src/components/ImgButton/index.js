import React from "react";
import { Link } from "react-router-dom";

function ImgButton({ icon, text, count, link }) {
  return (
    <Link
      to={link}
      className="text-center text-white text-decoration-none me-3"
    >
      <div className="text-white position-relative">
        {icon}
        {count>=0 ? (
          <span
            className="position-absolute rounded-pill row justify-content-center align-items-center bg-main px-2 fw-bolder text-white"
            style={{ top: "-12px", right: "-5px" }}
          >
            {count}
          </span>
        ) : null}
      </div>
      <small className="d-block text-capitalize" style={{ minWidth: "auto" }}>
        {text}
      </small>
    </Link>
  );
}

export default ImgButton;
