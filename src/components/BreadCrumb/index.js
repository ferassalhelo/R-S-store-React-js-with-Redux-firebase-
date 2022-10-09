import React from "react";
import { Link } from "react-router-dom";

function BreadCrumb({ productName }) {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link to="/" className="text-black">
            Home
          </Link>
        </li>
        <li className="breadcrumb-item">
          <Link to="/allProducts" className="text-black">
            Products
          </Link>
        </li>
        <li className="breadcrumb-item active" aria-current="page">
          {productName}
        </li>
      </ol>
    </nav>
  );
}

export default BreadCrumb;
