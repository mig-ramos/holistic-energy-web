import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/controller";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/keyboard";
import Slide from "@/data/db/home/slide/Slide";
import { APP_SERV } from "@/data/config/configApp";

type BannerProps = {
  slide: Slide[];
};

export function Carosel<T>(props: BannerProps) {
  const pathImage = APP_SERV.pathBaseImages;

  let banner = props.slide;

  return (
    <section className={``}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
        }}
        pagination={true}
        navigation={true}
        allowSlidePrev={true}
        allowSlideNext={true}
        allowTouchMove={true}
        touchMoveStopPropagation={true}
      >
        {banner.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div className="h-auto w-full rounded-xl">
                <img
                  src={pathImage + item.slide}
                  className="w-full rounded-xl"
                  alt={`Slide ${item.slide.split("-")[1]}`}
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
