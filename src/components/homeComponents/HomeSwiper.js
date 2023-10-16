import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "../styles/swiper.css"
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";

export default function HomeSwiper() {
  return (
    <div className="mb-8">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={false}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="my-swiper"
        modules={[EffectFade, Navigation, Pagination,Autoplay]}
      >
        <SwiperSlide className="">
          <div className="grid grid-cols-2 my-8  max-w-[80%] mx-auto bg-gradient-to-r from-[#CCDFE8] to-[#F5DCC2] relative rounded-[20px]">
            <div className="col-span-1 flex flex-col justify-center text-[20px] font-semibold px-8 h-[320px]">
              <p>Welcome To housa</p>
              <p className="text-[48px]">Manage Your Property</p>
              <p>
                You willhave enerything nearby supermarket, buses, stations,
                cinemas, theatres, the Carmen neighbourhood, ect.
              </p>
            </div>
            <div className="col-span-1 absolute right-[5%] top-1/2 transform -translate-y-1/2">
              <img className="h-[390px]" src="../assets/logo/swiper.png" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="grid grid-cols-2 my-8 gap-4 max-w-[80%] mx-auto bg-gradient-to-r from-[#CCDFE8] to-[#F5DCC2] relative rounded-[20px]">
            <div className="col-span-1 flex flex-col justify-center text-[20px] font-semibold px-8 h-[320px]">
              <p>Welcome To housa</p>
              <p className="text-[48px]">Manage Your Salam</p>
              <p>
                You willhave enerything nearby supermarket, buses, stations,
                cinemas, theatres, the Carmen neighbourhood, ect.
              </p>
            </div>
            <div className="col-span-1 absolute right-[5%] top-1/2 transform -translate-y-1/2">
              <img className="h-[390px]" src="../assets/logo/swiper2.jpg" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="">
          <div className="grid grid-cols-2 my-8 gap-4 max-w-[80%] mx-auto bg-gradient-to-r from-[#CCDFE8] to-[#F5DCC2] relative rounded-[20px]">
            <div className="col-span-1 flex flex-col justify-center text-[20px] font-semibold px-8 h-[320px]">
              <p>Welcome To housa</p>
              <p className="text-[48px]">Manage Your Constructor</p>
              <p>
                You willhave enerything nearby supermarket, buses, stations,
                cinemas, theatres, the Carmen neighbourhood, ect.
              </p>
            </div>
            <div className="col-span-1 absolute right-[5%] top-1/2 transform -translate-y-1/2">
              <img className="h-[390px]" src="../assets/logo/swiper6.png" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
