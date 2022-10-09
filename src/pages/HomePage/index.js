import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import StarsRating from "react-star-rate";
import Hero from "../../components/Hero";
import ProductsSlider from "../../components/productsSlider";
import ReviewsSlider from "../../components/reviewsSlider";
import { addReviews } from "../../redux/actions/reviewsActions";

const info = [
  { name: "chocolate", delay: 1800 },
  { name: "toffee", delay: 2500 },
  { name: "cake", delay: 3000 },
];

function Home() {
  const reducers = useSelector((reducers) => reducers);
  const dispatch = useDispatch();
  const [textarea, setStr] = useState("");
  const [modal, setVal] = useState(false);
  const [review, setRev] = useState(0);

  const handleTextArea = (e) => {
    let value = e.target.value;
    setStr(value);
  };

  const addReview = (e) => {
    e.preventDefault();
    dispatch(
      addReviews({
        imgUrl: reducers.user.userData.imgUrl,
        reviewValue: review,
        reviewUserName: reducers.user.userData.name,
        reviewString: textarea,
      })
    );
    setStr("");
    setRev(0);
    setVal(false);
  };

  return (
    <div>
      <Hero />
      {info.map((item) => {
        return (
          <div key={item.name} className="container m-auto my-5">
            <h1 className="text-uppercase text-center pt-5">{item.name}</h1>
            <ProductsSlider
              data={reducers.products.productsData}
              filter={item.name}
              delay={item.delay}
            />
          </div>
        );
      })}
      <div className="container m-auto my-5">
        <h1 className="text-uppercase text-center pt-5">reviews</h1>
        <ReviewsSlider data={reducers.reviews.reviews} delay={2800} />
      </div>
      {reducers.user.userData.name ? (
        <button
          onClick={() => setVal(true)}
          className="btn bg-main text-white fw-bold m-auto d-block mb-5 text-uppercase px-4 fs-5"
        >
          add review
        </button>
      ) : null}
      {modal ? (
        <div
          className="position-fixed top-0 end-0 start-0 bottom-0 row justify-content-center align-items-center bg-secondary bg-opacity-50"
          style={{ zIndex: 99999 }}
        >
          <div
            className="text-center p-4 p-xl-5 bg-white w-25 rounded-5 position-relative d-flex flex-column"
            style={{ minWidth: "300px" }}
          >
            <h3 className="fw-bold mb-3">
              Hello {reducers.user.userData.name}
            </h3>
            <StarsRating
              value={review}
              onChange={(value) => {
                setRev(value);
              }}
            />
            <form>
              <textarea
                className="my-3 p-2 d-block m-auto w-75"
                onChange={(e) => handleTextArea(e)}
                placeholder="write your review"
                maxLength={100}
              />
              <button
                type="submit"
                disabled={textarea === ""}
                onClick={(e) => addReview(e)}
                className="btn bg-main text-white fw-bold text-capitalize w-50 m-auto d-block mt-5"
              >
                add review
              </button>
            </form>
            <p
              onClick={() => setVal(false)}
              className="btn position-absolute top-0 end-0 text-danger fs-2 fw-bold p-0  me-3 border-0 me-4"
            >
              x
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Home;
