import "react-responsive-carousel/lib/styles/carousel.min.css";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { useGetAllBannersQuery } from "../../redux/features/lottery/lotteryApi";
import { Link } from "react-router-dom";
import BannerSekeleton from "./BannerSekeleton";

export default function Banner() {
  const { data, isLoading, isError } = useGetAllBannersQuery();
  if (isLoading && !isError) {
    return <BannerSekeleton />;
  }
  if (!isLoading && isError) {
    return (
      <h1 className="text-center text-red-500 py-[5rem]">
        There was something wrong!
      </h1>
    );
  }
  return (
    <div>
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
      >
        {data?.response?.Banners?.map(({ _id, ExternalLink, BannerImg }) => (
          <SwiperSlide ke={_id}>
            <Link to={ExternalLink} target="_blank">
              <div>
                <img
                  className="rounded-2xl h-[300px] min-w-[100%]"
                  src={BannerImg}
                  alt=""
                />
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
