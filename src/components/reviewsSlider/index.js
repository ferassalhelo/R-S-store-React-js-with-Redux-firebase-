import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/modules/navigation/navigation.min.css";
import "swiper/modules/pagination/pagination.min.css";
import Review from "../Review";

const ReviewsSlider = ({ data, delay }) => {
  return (
    <Swiper
      className="py-7"
      modules={[Pagination, Navigation, Autoplay]}
      loop
      autoplay={{
        delay: delay,
        disableOnInteraction: false,
      }}
      slidesPerView={1}
      spaceBetween={7}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        992: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1424: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
    >
      {data.map((item, index) => (
        <SwiperSlide key={index}>
          <Review data={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ReviewsSlider;
