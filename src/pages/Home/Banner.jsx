import slider1Img from "../../assets/home-banner1.png";
import slider2Img from "../../assets/slider-2.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function Banner() {
  return (
    <section className="mx-56">
      <Carousel autoPlay infiniteLoop showThumbs={false} interval={3000}>
        <div>
          <img
            className="w-full h-[300px] rounded-2xl"
            src={slider1Img}
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full h-[300px] rounded-2xl"
            src={slider2Img}
            alt=""
          />
        </div>
      </Carousel>
    </section>
  );
}
