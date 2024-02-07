import Image from "next/image";
import image1 from "/public/images/acupuntura.png";
import image2 from "/public/images/terapia-floral.png";
import image3 from "/public/images/reiki.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/controller"
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/keyboard"

import "swiper/css/autoplay";

export function Carosel() {
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
        <SwiperSlide>
          <div className="h-auto w-full rounded-xl">
            <Image src={image1} className="w-full rounded-xl" alt="Slide Acumputura" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-auto w-full rounded-xl">
          <Image src={image2} className="w-full rounded-xl" alt="Slide Acumputura" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-auto w-full rounded-xl">
          <Image src={image3} className="w-full rounded-xl" alt="Slide Acumputura" />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
