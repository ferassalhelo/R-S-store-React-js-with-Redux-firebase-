import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../Crad";
const ProductsSlider = ({ data, filter, delay }) => {
  return (
    <Swiper
      className="py-7"
      modules={[Pagination, Navigation, Autoplay]}
      loop
      autoplay={{
        delay: delay,
        disableOnInteraction: false,
      }}
      slidesPerView={2}
      spaceBetween={7}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1424: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
      }}
    >
      {data.map((item) => {
        if (item.category.includes(filter)) {
          return (
            <SwiperSlide key={item.id}>
              <Card data={item} />
            </SwiperSlide>
          );
        }
        return null;
      })}
    </Swiper>
  );
};

export default ProductsSlider;
