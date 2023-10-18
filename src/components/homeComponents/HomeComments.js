import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import { AiFillStar } from "react-icons/ai";
function HomeRecommend() {
  return (
    <div className="mb-8">
      <div className="max-w-[80%] mx-auto">
        <div className="font-semibold">
          <p className="tracking-[0.4px] text-[#1590e1]  text-[20px] ">
            LET`S FIND
          </p>
          <p className="text-[44px] tracking-[0.88px]">Testimonials</p>
        </div>
        <div className="my-4">
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            // pagination={{
            //   clickable: true,
            // }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="border-[1px] p-5 border-black rounded-[20px] font-semibold">
                <p className="text-[#101730] text-[16px]">
                  Lorem ipsum dolor sit amet consectetur. Vitae et ac lacus eu
                  suspendisse eu vel quis. Integer ipsum dolor sit amet
                </p>
                <div className="my-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="332"
                    height="4"
                    viewBox="0 0 332 4"
                    fill="none"
                  >
                    <path
                      d="M2 2H330"
                      stroke="url(#paint0_linear_112_1462)"
                      stroke-width="4"
                      stroke-linecap="round"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_112_1462"
                        x1="2"
                        y1="2"
                        x2="316.737"
                        y2="1.99995"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="white" stop-opacity="0" />
                        <stop
                          offset="0.5"
                          stop-color="#DFE5EF"
                          stop-opacity="0.62"
                        />
                        <stop offset="1" stop-color="white" stop-opacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                <div className="flex gap-2">
                  <div className="w-[50px] h-[50px] bg-gray-400 rounded-[50%]">
                    <img src="../assets/all/avatar.png" alt="" />
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
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="border-[1px] p-5 border-black rounded-[20px] font-semibold">
                <p className="text-[#101730] text-[16px]">
                  Lorem ipsum dolor sit amet consectetur. Vitae et ac lacus eu
                  suspendisse eu vel quis. Integer ipsum dolor sit amet
                </p>
                <div className="my-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="332"
                    height="4"
                    viewBox="0 0 332 4"
                    fill="none"
                  >
                    <path
                      d="M2 2H330"
                      stroke="url(#paint0_linear_112_1462)"
                      stroke-width="4"
                      stroke-linecap="round"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_112_1462"
                        x1="2"
                        y1="2"
                        x2="316.737"
                        y2="1.99995"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="white" stop-opacity="0" />
                        <stop
                          offset="0.5"
                          stop-color="#DFE5EF"
                          stop-opacity="0.62"
                        />
                        <stop offset="1" stop-color="white" stop-opacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                <div className="flex gap-2">
                  <div className="w-[50px] h-[50px] bg-gray-400 rounded-[50%]">
                    <img src="../assets/all/avatar.png" alt="" />
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
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="border-[1px] p-5 border-black rounded-[20px] font-semibold">
                <p className="text-[#101730] text-[16px]">
                  Lorem ipsum dolor sit amet consectetur. Vitae et ac lacus eu
                  suspendisse eu vel quis. Integer ipsum dolor sit amet
                </p>
                <div className="my-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="332"
                    height="4"
                    viewBox="0 0 332 4"
                    fill="none"
                  >
                    <path
                      d="M2 2H330"
                      stroke="url(#paint0_linear_112_1462)"
                      stroke-width="4"
                      stroke-linecap="round"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_112_1462"
                        x1="2"
                        y1="2"
                        x2="316.737"
                        y2="1.99995"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="white" stop-opacity="0" />
                        <stop
                          offset="0.5"
                          stop-color="#DFE5EF"
                          stop-opacity="0.62"
                        />
                        <stop offset="1" stop-color="white" stop-opacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                <div className="flex gap-2">
                  <div className="w-[50px] h-[50px] bg-gray-400 rounded-[50%]">
                    <img src="../assets/all/avatar.png" alt="" />
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
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="border-[1px] p-5 border-black rounded-[20px] font-semibold">
                <p className="text-[#101730] text-[16px]">
                  Lorem ipsum dolor sit amet consectetur. Vitae et ac lacus eu
                  suspendisse eu vel quis. Integer ipsum dolor sit amet
                </p>
                <div className="my-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="332"
                    height="4"
                    viewBox="0 0 332 4"
                    fill="none"
                  >
                    <path
                      d="M2 2H330"
                      stroke="url(#paint0_linear_112_1462)"
                      stroke-width="4"
                      stroke-linecap="round"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_112_1462"
                        x1="2"
                        y1="2"
                        x2="316.737"
                        y2="1.99995"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="white" stop-opacity="0" />
                        <stop
                          offset="0.5"
                          stop-color="#DFE5EF"
                          stop-opacity="0.62"
                        />
                        <stop offset="1" stop-color="white" stop-opacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                <div className="flex gap-2">
                  <div className="w-[50px] h-[50px] bg-gray-400 rounded-[50%]">
                    <img src="../assets/all/avatar.png" alt="" />
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
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="border-[1px] p-5 border-black rounded-[20px] font-semibold">
                <p className="text-[#101730] text-[16px]">
                  Lorem ipsum dolor sit amet consectetur. Vitae et ac lacus eu
                  suspendisse eu vel quis. Integer ipsum dolor sit amet
                </p>
                <div className="my-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="332"
                    height="4"
                    viewBox="0 0 332 4"
                    fill="none"
                  >
                    <path
                      d="M2 2H330"
                      stroke="url(#paint0_linear_112_1462)"
                      stroke-width="4"
                      stroke-linecap="round"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_112_1462"
                        x1="2"
                        y1="2"
                        x2="316.737"
                        y2="1.99995"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="white" stop-opacity="0" />
                        <stop
                          offset="0.5"
                          stop-color="#DFE5EF"
                          stop-opacity="0.62"
                        />
                        <stop offset="1" stop-color="white" stop-opacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                <div className="flex gap-2">
                  <div className="w-[50px] h-[50px] bg-gray-400 rounded-[50%]">
                    <img src="../assets/all/avatar.png" alt="" />
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
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="border-[1px] p-5 border-black rounded-[20px] font-semibold">
                <p className="text-[#101730] text-[16px]">
                  Lorem ipsum dolor sit amet consectetur. Vitae et ac lacus eu
                  suspendisse eu vel quis. Integer ipsum dolor sit amet
                </p>
                <div className="my-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="332"
                    height="4"
                    viewBox="0 0 332 4"
                    fill="none"
                  >
                    <path
                      d="M2 2H330"
                      stroke="url(#paint0_linear_112_1462)"
                      stroke-width="4"
                      stroke-linecap="round"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_112_1462"
                        x1="2"
                        y1="2"
                        x2="316.737"
                        y2="1.99995"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="white" stop-opacity="0" />
                        <stop
                          offset="0.5"
                          stop-color="#DFE5EF"
                          stop-opacity="0.62"
                        />
                        <stop offset="1" stop-color="white" stop-opacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                <div className="flex gap-2">
                  <div className="w-[50px] h-[50px] bg-gray-400 rounded-[50%]">
                    <img src="../assets/all/avatar.png" alt="" />
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
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default HomeRecommend;
