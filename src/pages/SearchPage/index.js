import React, { useState } from "react";
import img from "../../assets/imgs/empty.svg";

import { useParams } from "react-router-dom";
import Card from "../../components/Crad";
import { useSelector } from "react-redux";

function SearchPage() {
  const data = useSelector((reducers) => reducers.products.productsData);
  const { text } = useParams();
  const [contain, setval] = useState(false);
  return (
    <div className="container m-auto">
      <h1 className="text-uppercase mt-5">
        Search <span className="text-main fw-bold">{text}</span>
      </h1>

      {contain === true ? null : (
        <div className="w-100 m-auto row justify-content-center align-items-center">
          <p className="col-12 fs-1 text-uppercase fw-bold text-main text-center pb-5">
            empty!
          </p>
          <img src={img} alt="img" className="col-12 col-lg-7" />
        </div>
      )}
      <div className="row my-5">
        {data.map((item) => {
          if (item.name.includes(text)) {
            if (contain === false) setval(true);
            return (
              <div key={item.id} className="p-2 col-6 col-lg-4 col-xl-3">
                <Card data={item} />
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default SearchPage;
