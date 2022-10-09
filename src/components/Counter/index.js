import React from "react";

function Counter({ inc, dec, counter }) {
  return (
    <div
      className="row m-auto m-md-0 flex-nowrap"
      style={{ maxHeight: "40px", maxWidth: "250px" }}
    >
      <button
        className="btn btn-link text-main border h-100 rounded-start rounded-0 col px-0"
        onClick={() => dec()}
        disabled={counter === 1}
        style={{ width: "40px" }}
      >
        <i className="fas fa-minus"></i>
      </button>
      <div className="border row justify-content-center align-items-center m-0 col">
        {counter}
      </div>
      <button
        className="btn btn-link  text-main border h-100 rounded-end rounded-0 col px-0"
        onClick={() => inc()}
        style={{ width: "40px" }}
      >
        <i className="fas fa-plus"></i>
      </button>
    </div>
  );
}

export default Counter;
