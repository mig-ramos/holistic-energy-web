import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/controller";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/keyboard";
import Slide from "@/data/db/models/Slide";
import { APP_SERV } from "@/data/config/configApp";

type BannerProps = {
  slide: Slide[];
};

export function Carosel<T>(props: BannerProps) {
  const pathImage = APP_SERV.pathBaseImages;

  let banner = props.slide;

  return (
    <section className={`mb-4`}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
        }}
        pagination={false}
        navigation={true}
        allowSlidePrev={true}
        allowSlideNext={true}
        allowTouchMove={true}
        touchMoveStopPropagation={true}
      >
        {banner.map((item) => {
          return (
            <SwiperSlide key={item.id}>
              <div className="bg-transparent rounded-xl">
                <img
                  src={`${pathImage}${item.name}`}
                  className="w-full rounded-t-xl opacity-80"
                  alt={`Slide ${item.name}.split("-")[1]}`}
                />
                <h1 className="z-99 bg-transparent text-md text-center md:text-3xl text-yellow-900 dark:text-yellow-600 p-2  md:p-4">
                  {item.slogan}
                </h1>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
