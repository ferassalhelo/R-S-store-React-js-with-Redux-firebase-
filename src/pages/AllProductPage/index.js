import React from "react";
import { useSelector } from "react-redux";
import Card from "../../components/Crad/index";
import img from "../../assets/imgs/empty.svg";

function AllProductPage() {
  const data = useSelector((reducers) => reducers.products.productsData);
  return (
    <>
      <div className="container m-auto my-5">
        <h1 className="text-uppercase">All products</h1>
        {[...data].length === 0 ? (
          <div className="w-100 m-auto row justify-content-center align-items-center">
            <p className="col-12 fs-1 text-uppercase fw-bold text-main text-center pb-5">
              empty!
            </p>
            <img src={img} alt="img" className="col-12 col-lg-7" />
          </div>
        ) : (
          <div className="row my-5">
            {data.map((item) => (
              <div key={item.id} className="p-2 col-6 col-lg-4 col-xl-3">
                <Card data={item} />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default AllProductPage;
