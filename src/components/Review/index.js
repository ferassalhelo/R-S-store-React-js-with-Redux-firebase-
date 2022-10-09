import React from "react";
import StarsRating from "react-star-rate";

function Review({ data }) {
  return (
    <div className="border border-1 text-center rounded-3 p-5">
      <h5 className="text-main fs-4 fw-bold">
        <img
          src={data.imgUrl}
          width="50px"
          height="50px"
          alt="user img"
          className="rounded-5"
        />{" "}
        {data.reviewUserName}
      </h5>
      <StarsRating defaultValue={data.reviewValue} disabled />
      <p style={{height:'50px'}} className='m-0 mt-3'>{data.reviewString}</p>
    </div>
  );
}

export default Review;
