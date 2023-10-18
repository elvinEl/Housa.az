import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import { AiFillStar } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";

function HomeAdvice() {
  return (
    <div className="bg-[#212121] mb-8  py-12 ">
      <div className="font-semibold text-center mb-8">
        <p className="text-[#F2A056] tracking-[0.4px] text-[20px]">
          LET`S FIND
        </p>
        <p className="text-[44px] text-white tracking-[0.88px]">Danisman</p>
      </div>
      <div className="max-w-[95%] mx-auto">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          // pagination={{
          //   clickable: true,
          // }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="text-white bg-[#282828] p-4 flex flex-col gap-4 rounded-[20px] ">
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Vitae et ac lacus eu
                  suspendisse eu vel quis. Integer ipsum dolor sit ametLorem
                  ipsum dolor sit amet consectetur. Vitae et ac lacus eu
                  suspendisse eu vel quis. Integer ipsum dolor sit amet
                </p>
              </div>

              <div className="flex gap-2 ">
                <div className="w-[50px] h-[50px]">
                  <img className="rounded-[50%]" src="../assets/all/avatar.png" alt="" />
                </div>
                <div className="flex flex-col">
                  <p className="text-[18px]">Arif Mustafazade</p>
                  <p className="text-[14px] flex items-center gap-1">
                    <span className="text-[#FF8A00] text-[17px]">
                      <AiFillStar />
                    </span>
                    4,5
                  </p>
                </div>
              </div>
              <div className="max-w-[420px] relative">
                <img className="w-full" src="../assets/all/a.png" alt="" />
                <div className="absolute bottom-2 left-0 p-4 text-white">
                  <div className="text-[18px] font-semibold mb-2">
                    <p>Luxury Comfort Stays Home</p>
                    <p>Əhmədli</p>
                  </div>
                  <div>
                    <p className="text-[14px] ">Xətai,Əhmədli</p>
                  </div>
                </div>
                <span className="absolute bottom-6 text-[24px] right-5">
                    <BsArrowRight/>
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-white bg-[#282828] p-4 flex flex-col gap-4 rounded-[20px] ">
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Vitae et ac lacus eu
                  suspendisse eu vel quis. Integer ipsum dolor sit ametLorem
                  ipsum dolor sit amet consectetur. Vitae et ac lacus eu
                  suspendisse eu vel quis. Integer ipsum dolor sit amet
                </p>
              </div>

              <div className="flex gap-2 ">
                <div className="w-[50px] h-[50px]">
                  <img className="rounded-[50%]" src="../assets/all/avatar.png" alt="" />
                </div>
                <div className="flex flex-col">
                  <p className="text-[18px]">Arif Mustafazade</p>
                  <p className="text-[14px] flex items-center gap-1">
                    <span className="text-[#FF8A00] text-[17px]">
                      <AiFillStar />
                    </span>
                    4,5
                  </p>
                </div>
              </div>
              <div className="max-w-[420px] relative">
                <img className="w-full" src="../assets/all/a.png" alt="" />
                <div className="absolute bottom-2 left-0 p-4 text-white">
                  <div className="text-[18px] font-semibold mb-2">
                    <p>Luxury Comfort Stays Home</p>
                    <p>Əhmədli</p>
                  </div>
                  <div>
                    <p className="text-[14px] ">Xətai,Əhmədli</p>
                  </div>
                </div>
                <span className="absolute bottom-6 text-[24px] right-5">
                    <BsArrowRight/>
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-white bg-[#282828] p-4 flex flex-col gap-4 rounded-[20px] ">
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Vitae et ac lacus eu
                  suspendisse eu vel quis. Integer ipsum dolor sit ametLorem
                  ipsum dolor sit amet consectetur. Vitae et ac lacus eu
                  suspendisse eu vel quis. Integer ipsum dolor sit amet
                </p>
              </div>

              <div className="flex gap-2 ">
                <div className="w-[50px] h-[50px]">
                  <img className="rounded-[50%]" src="../assets/all/avatar.png" alt="" />
                </div>
                <div className="flex flex-col">
                  <p className="text-[18px]">Arif Mustafazade</p>
                  <p className="text-[14px] flex items-center gap-1">
                    <span className="text-[#FF8A00] text-[17px]">
                      <AiFillStar />
                    </span>
                    4,5
                  </p>
                </div>
              </div>
              <div className="max-w-[420px] relative">
                <img className="w-full" src="../assets/all/a.png" alt="" />
                <div className="absolute bottom-2 left-0 p-4 text-white">
                  <div className="text-[18px] font-semibold mb-2">
                    <p>Luxury Comfort Stays Home</p>
                    <p>Əhmədli</p>
                  </div>
                  <div>
                    <p className="text-[14px] ">Xətai,Əhmədli</p>
                  </div>
                </div>
                <span className="absolute bottom-6 text-[24px] right-5">
                    <BsArrowRight/>
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-white bg-[#282828] p-4 flex flex-col gap-4 rounded-[20px] ">
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Vitae et ac lacus eu
                  suspendisse eu vel quis. Integer ipsum dolor sit ametLorem
                  ipsum dolor sit amet consectetur. Vitae et ac lacus eu
                  suspendisse eu vel quis. Integer ipsum dolor sit amet
                </p>
              </div>

              <div className="flex gap-2 ">
                <div className="w-[50px] h-[50px]">
                  <img className="rounded-[50%]" src="../assets/all/avatar.png" alt="" />
                </div>
                <div className="flex flex-col">
                  <p className="text-[18px]">Arif Mustafazade</p>
                  <p className="text-[14px] flex items-center gap-1">
                    <span className="text-[#FF8A00] text-[17px]">
                      <AiFillStar />
                    </span>
                    4,5
                  </p>
                </div>
              </div>
              <div className="max-w-[420px] relative">
                <img className="w-full" src="../assets/all/a.png" alt="" />
                <div className="absolute bottom-2 left-0 p-4 text-white">
                  <div className="text-[18px] font-semibold mb-2">
                    <p>Luxury Comfort Stays Home</p>
                    <p>Əhmədli</p>
                  </div>
                  <div>
                    <p className="text-[14px] ">Xətai,Əhmədli</p>
                  </div>
                </div>
                <span className="absolute bottom-6 text-[24px] right-5">
                    <BsArrowRight/>
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-white bg-[#282828] p-4 flex flex-col gap-4 rounded-[20px] ">
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Vitae et ac lacus eu
                  suspendisse eu vel quis. Integer ipsum dolor sit ametLorem
                  ipsum dolor sit amet consectetur. Vitae et ac lacus eu
                  suspendisse eu vel quis. Integer ipsum dolor sit amet
                </p>
              </div>

              <div className="flex gap-2 ">
                <div className="w-[50px] h-[50px]">
                  <img className="rounded-[50%]" src="../assets/all/avatar.png" alt="" />
                </div>
                <div className="flex flex-col">
                  <p className="text-[18px]">Arif Mustafazade</p>
                  <p className="text-[14px] flex items-center gap-1">
                    <span className="text-[#FF8A00] text-[17px]">
                      <AiFillStar />
                    </span>
                    4,5
                  </p>
                </div>
              </div>
              <div className="max-w-[420px] relative">
                <img className="w-full" src="../assets/all/a.png" alt="" />
                <div className="absolute bottom-2 left-0 p-4 text-white">
                  <div className="text-[18px] font-semibold mb-2">
                    <p>Luxury Comfort Stays Home</p>
                    <p>Əhmədli</p>
                  </div>
                  <div>
                    <p className="text-[14px] ">Xətai,Əhmədli</p>
                  </div>
                </div>
                <span className="absolute bottom-6 text-[24px] right-5">
                    <BsArrowRight/>
                </span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default HomeAdvice;
