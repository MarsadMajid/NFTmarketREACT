import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "bootstrap/dist/css/bootstrap.min.css";
import "./VerticalSlider.css"; // Import the custom CSS file

export default function VerticalSlider(prop ) {
  return (
    <div className="vertical-slider">
      <Swiper
        freeMode={true}
        grabCursor={true}
        className="mySwiper"
        breakpoints={{
          0: { slidesPerView: 5, spaceBetween: 10 },
          480: { slidesPerView: 6, spaceBetween: 10 },
          768: { slidesPerView: 12, spaceBetween: 15 },
        }}
      >
        <SwiperSlide  >{prop.card1}</SwiperSlide>
        <SwiperSlide  >{prop.card2}</SwiperSlide>
        <SwiperSlide  >{prop.card3}</SwiperSlide>
        <SwiperSlide  >{prop.card4}</SwiperSlide>
        <SwiperSlide  >{prop.card5}</SwiperSlide>
        <SwiperSlide  >{prop.card6}</SwiperSlide>
        
      </Swiper>
    </div>
  );
}
