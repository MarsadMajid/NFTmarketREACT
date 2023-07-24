// import {Swiper , SwiperSlide} from "swiper/react"
// import {FreeMode} from "swiper"
// import "swiper/css"
// import "swiper/css/free-mode"
// import "bootstrap/dist/css/bootstrap.min.css"
// import BundlesCard from "../BundlesCard/BundlesCard"
// export default function MoveCard() {
//   return (
//     <div className="container py-4 px-4 justify-center" >
//         <Swiper 
//         freeMode={true}
//         grabCursor={true}
//         modules={[FreeMode]}
//         className="mySwiper"
//         slidesPerView={5}
//         spaceBetween={30}
//         >
//            <SwiperSlide>
//                 <BundlesCard/>
//            </SwiperSlide>
//            <SwiperSlide>
//                 <BundlesCard/>
//            </SwiperSlide>
//            <SwiperSlide>
//                 <BundlesCard/>
//            </SwiperSlide>
//            <SwiperSlide>
//                 <BundlesCard/>
//            </SwiperSlide>
//            <SwiperSlide>
//                 <BundlesCard/>
//            </SwiperSlide>
//         </Swiper>
//     </div>
//   )
// }

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "bootstrap/dist/css/bootstrap.min.css";

export default function MoveCard( prop) {
  return (
    <div >
      <Swiper 
        freeMode={true}
        grabCursor={true}
        className="mySwiper "
        breakpoints={{
          0: {slidesPerView: 1,
           spaceBetween:10,},
          480: {slidesPerView: 2,
           spaceBetween:10,},
          768: {slidesPerView: 3,
           spaceBetween:15,}
          
        }}
        
      >
        <SwiperSlide>
          {prop.card}
        </SwiperSlide>
        <SwiperSlide>
          {prop.card2}
        </SwiperSlide>
        <SwiperSlide>
          {prop.card3}
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
