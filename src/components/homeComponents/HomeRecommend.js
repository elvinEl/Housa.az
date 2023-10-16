import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import { AiOutlineRight } from "react-icons/ai";

function HomeRecommend() {
  const [activeButton, setActiveButton] = useState("rent");
  const [activePropertyType, setActivePropertyType] = useState("");
  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
  };
  const handlePropertyTypeClick = (buttonType) => {
    setActivePropertyType(buttonType);
  };
  return (
    <div className="mb-8">
      <div className="max-w-[80%] mx-auto">
        <div className="mb-4 max-w-[70%]">
          <p className="uppercase text-[44px] font-semibold tracking-[0.88px] text-[#101730]">
            recommendations of our consultants
          </p>
        </div>

        <div className="flex items-center gap-6 mb-8">
          <div className="bg-white rounded-[10px] inline-block  border-[1px] border-[#E5E5E5]">
            <button
              className={`px-4 py-2 rounded-[10px] text-[14px] font-medium  ${
                activeButton === "rent" ? "bg-black text-white" : ""
              }`}
              onClick={() => handleButtonClick("rent")}
            >
              For Rent
            </button>
            <button
              className={`px-4 py-2 rounded-[10px] text-[14px] font-medium  ${
                activeButton === "sale" ? "bg-black text-white " : ""
              }`}
              onClick={() => handleButtonClick("sale")}
            >
              For Sale
            </button>
          </div>
          <select className="border-[1px] rounded-[8px] text-[14px] py-2  px-4">
            <option value="" key="">
              Azerbaijan
            </option>
            <option value="" key="">
              Russia
            </option>
            <option value="" key="">
              Azerbaijan
            </option>
          </select>
          <div>
            <button
              className={`border-[1px] rounded-[8px] text-[14px] py-2 px-4 ${
                activePropertyType === "Villas" ? "bg-black text-white" : ""
              }`}
              onClick={() => handlePropertyTypeClick("Villas")}
            >
              Villas
            </button>
          </div>
          <div>
            <button
              className={`border-[1px] rounded-[8px] text-[14px] py-2  px-4 ${
                activePropertyType === "Lands" ? "bg-black text-white" : ""
              }`}
              onClick={() => handlePropertyTypeClick("Lands")}
            >
              Lands
            </button>
          </div>
          <div>
            <button
              className={`border-[1px] rounded-[8px] text-[14px] py-2  px-4 ${
                activePropertyType === "Offices" ? "bg-black text-white" : ""
              }`}
              onClick={() => handlePropertyTypeClick("Offices")}
            >
              Offices
            </button>
          </div>
          <div>
            <button
              className={`border-[1px] rounded-[8px] text-[14px] py-2  px-4 ${
                activePropertyType === "Apartment" ? "bg-black text-white" : ""
              }`}
              onClick={() => handlePropertyTypeClick("Apartment")}
            >
              Apartment
            </button>
          </div>
        </div>
        <div className="">
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
              <div className="h-[360px] w-[300px] border-[1px] rounded-[20px]">
                <div className="h-[250px]">
                  <img
                    className="h-full w-full rounded-t-[20px]"
                    src="../assets/all/h.png"
                    alt=""
                  />
                </div>
                <div className="p-3 font-semibold text-[#101730]">
                  <p className="text-[14px]">Ağ şəhər</p>
                  <div className="flex justify-between mt-8">
                    <p className="text-[16px]">$ 125 000</p>
                    <button className="text-[#51aeea] text-[14px] flex items-center gap-2">
                      Explore More
                      <span>
                        <AiOutlineRight />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[360px] w-[300px] border-[1px] rounded-[20px]">
                <div className="h-[250px]">
                  <img
                    className="h-full w-full rounded-t-[20px]"
                    src="../assets/all/h1.png"
                    alt=""
                  />
                </div>
                <div className="p-3 font-semibold text-[#101730]">
                  <p className="text-[14px]">Mərdəkan</p>
                  <div className="flex justify-between mt-8">
                    <p className="text-[16px]">$ 95 000</p>
                    <button className="text-[#51aeea] text-[14px] flex items-center gap-2">
                      Explore More
                      <span>
                        <AiOutlineRight />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[360px] w-[300px] border-[1px] rounded-[20px]">
                <div className="h-[250px]">
                  <img
                    className="h-full w-full rounded-t-[20px]"
                    src="../assets/all/h2.png"
                    alt=""
                  />
                </div>
                <div className="p-3 font-semibold text-[#101730]">
                  <p className="text-[14px]">Ağ şəhər</p>
                  <div className="flex justify-between mt-8">
                    <p className="text-[16px]">$ 125 000</p>
                    <button className="text-[#51aeea] text-[14px] flex items-center gap-2">
                      Explore More
                      <span>
                        <AiOutlineRight />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-[360px] w-[300px] border-[1px] rounded-[20px]">
                <div className="h-[250px]">
                  <img
                    className="h-full w-full rounded-t-[20px]"
                    src="../assets/all/h4.png"
                    alt=""
                  />
                </div>
                <div className="p-3 font-semibold text-[#101730]">
                  <p className="text-[14px]">Ağ şəhər</p>
                  <div className="flex justify-between mt-8">
                    <p className="text-[16px]">$ 125 000</p>
                    <button className="text-[#51aeea] text-[14px] flex items-center gap-2">
                      Explore More
                      <span>
                        <AiOutlineRight />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default HomeRecommend;
