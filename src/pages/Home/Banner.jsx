import slider1Img from "../../assets/home-banner1.png";
import slider2Img from "../../assets/slider-2.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

export default function Banner() {
  return (
    <div>
      <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{
        delay:2500,
        disableOnInteraction:false
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      >
        <SwiperSlide>
          <div>
            <img
              className="w-full h-[300px] rounded-2xl"
              src={slider1Img}
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img
              className="w-full h-[300px] rounded-2xl"
              src={slider2Img}
              alt=""
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
