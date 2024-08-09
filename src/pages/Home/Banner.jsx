import slider1Img from "../../assets/home-banner1.png";
import slider2Img from "../../assets/slider-2.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

export default function Banner() {
  return (
    // <section className="mx-56">
    //   <Carousel autoPlay infiniteLoop showThumbs={false} interval={3000}>
    //     <div>
    //       <img
    //         className="w-full h-[300px] rounded-2xl"
    //         src={slider1Img}
    //         alt=""
    //       />
    //     </div>
    //     <div>
    //       <img
    //         className="w-full h-[300px] rounded-2xl"
    //         src={slider2Img}
    //         alt=""
    //       />
    //     </div>
    //   </Carousel>
    // </section>

    <div className="mx-56">
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
        <div className="h-[30px]"></div>
      </Swiper>
    </div>
  );
}
