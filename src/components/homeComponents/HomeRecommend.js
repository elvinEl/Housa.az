import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import {
  AiFillStar,
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineLeft,
  AiOutlineRight,
} from "react-icons/ai";

function HomeRecommend() {
  const [activeButton, setActiveButton] = useState("rent");
  const [activePropertyType, setActivePropertyType] = useState("");
  const [activeHeart, setActiveHeart] = useState(false);
  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
  };
  const handleHeartClick = () => {
    setActiveHeart(!activeHeart);
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
            slidesPerView={5}
            spaceBetween={30}
            // pagination={{
            //   clickable: true,
            // }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="border-[1px] rounded-[20px] card relative">
                <div className="h-[300px] relative">
                  <button
                    onClick={handleHeartClick}
                    className="absolute right-[5%] top-[5%] bg-white p-2 border-[1px] border-[#e0def7] rounded-[8px] "
                  >
                    <span className="heart">
                      {activeHeart ? (
                        <span className="text-red-600">
                          <AiFillHeart />
                        </span>
                      ) : (
                        <AiOutlineHeart />
                      )}
                    </span>
                  </button>
                  <img
                    className="h-full w-full rounded-[20px]"
                    src="../assets/all/h.png"
                    alt=""
                  />
                  <div className="right-button absolute top-1/2 right-[5%] transform -translate-y-1/2">
                    <button className="bg-white p-2 border-[1px] border-[#e0def7] rounded-[50%]">
                      <AiOutlineRight />
                    </button>
                  </div>
                  <div className="left-button absolute top-1/2 left-[5%] transform -translate-y-1/2">
                    <button className="bg-white p-2 border-[1px] border-[#e0def7] rounded-[50%]">
                      <AiOutlineLeft />
                    </button>
                  </div>
                </div>
                <div className="p-3 font-semibold text-[#101730] anima absolute w-full bottom-0 rounded-b-[20px]  bg-white">
                  <p className="text-[14px]">Ağ şəhər</p>
                  <div className="my-2 flex text-[#FF8A00]">
                    <span>
                      <AiFillStar />
                    </span>
                    <span>
                      <AiFillStar />
                    </span>
                    <span>
                      <AiFillStar />
                    </span>
                    <span>
                      <AiFillStar />
                    </span>
                    <span>
                      <AiFillStar />
                    </span>
                  </div>
                  <div className="flex justify-between">
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
              <div className="border-[1px] rounded-[20px] card relative">
                <div className="h-[300px] relative">
                  <button
                    onClick={handleHeartClick}
                    className="absolute right-[5%] top-[5%] bg-white p-2 border-[1px] border-[#e0def7] rounded-[8px] "
                  >
                    <span className="heart">
                      {activeHeart ? (
                        <span className="text-red-600">
                          <AiFillHeart />
                        </span>
                      ) : (
                        <AiOutlineHeart />
                      )}
                    </span>
                  </button>
                  <img
                    className="h-full w-full rounded-[20px]"
                    src="../assets/all/h1.png"
                    alt=""
                  />
                  <div className="right-button absolute top-1/2 right-[5%] transform -translate-y-1/2">
                    <button className="bg-white p-2 border-[1px] border-[#e0def7] rounded-[50%]">
                      <AiOutlineRight />
                    </button>
                  </div>
                  <div className="left-button absolute top-1/2 left-[5%] transform -translate-y-1/2">
                    <button className="bg-white p-2 border-[1px] border-[#e0def7] rounded-[50%]">
                      <AiOutlineLeft />
                    </button>
                  </div>
                </div>
                <div className="p-3 font-semibold text-[#101730] anima absolute w-full bottom-0 rounded-b-[20px]  bg-white">
                  <p className="text-[14px]">Ağ şəhər</p>
                  <div className="my-2 flex text-[#FF8A00]">
                    <span>
                      <AiFillStar />
                    </span>
                    <span>
                      <AiFillStar />
                    </span>
                    <span>
                      <AiFillStar />
                    </span>
                    <span>
                      <AiFillStar />
                    </span>
                    <span>
                      <AiFillStar />
                    </span>
                  </div>
                  <div className="flex justify-between">
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
              <div className="  border-[1px] rounded-[20px] card relative">
                <div className="h-[300px] relative">
                  <button
                    onClick={handleHeartClick}
                    className="absolute right-[5%] top-[5%] bg-white p-2 border-[1px] border-[#e0def7] rounded-[8px] "
                  >
                    <span className="heart">
                      {activeHeart ? (
                        <span className="text-red-600">
                          <AiFillHeart />
                        </span>
                      ) : (
                        <AiOutlineHeart />
                      )}
                    </span>
                  </button>
                  <img
                    className="h-full w-full rounded-[20px]"
                    src="../assets/all/h2.png"
                    alt=""
                  />
                  <div className="right-button absolute top-1/2 right-[5%] transform -translate-y-1/2">
                    <button className="bg-white p-2 border-[1px] border-[#e0def7] rounded-[50%]">
                      <AiOutlineRight />
                    </button>
                  </div>
                  <div className="left-button absolute top-1/2 left-[5%] transform -translate-y-1/2">
                    <button className="bg-white p-2 border-[1px] border-[#e0def7] rounded-[50%]">
                      <AiOutlineLeft />
                    </button>
                  </div>
                </div>
                <div className="p-3 font-semibold text-[#101730] anima absolute w-full bottom-0 rounded-b-[20px]  bg-white">
                  <p className="text-[14px]">Ağ şəhər</p>
                  <div className="my-2 flex text-[#FF8A00]">
                    <span>
                      <AiFillStar />
                    </span>
                    <span>
                      <AiFillStar />
                    </span>
                    <span>
                      <AiFillStar />
                    </span>
                    <span>
                      <AiFillStar />
                    </span>
                    <span>
                      <AiFillStar />
                    </span>
                  </div>
                  <div className="flex justify-between">
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
              <div className="  border-[1px] rounded-[20px] card relative">
                <div className="h-[300px] relative">
                  <button
                    onClick={handleHeartClick}
                    className="absolute right-[5%] top-[5%] bg-white p-2 border-[1px] border-[#e0def7] rounded-[8px] "
                  >
                    <span className="heart">
                      {activeHeart ? (
                        <span className="text-red-600">
                          <AiFillHeart />
                        </span>
                      ) : (
                        <AiOutlineHeart />
                      )}
                    </span>
                  </button>
                  <img
                    className="h-full w-full rounded-[20px]"
                    src="../assets/all/h4.png"
                    alt=""
                  />
                  <div className="right-button absolute top-1/2 right-[5%] transform -translate-y-1/2">
                    <button className="bg-white p-2 border-[1px] border-[#e0def7] rounded-[50%]">
                      <AiOutlineRight />
                    </button>
                  </div>
                  <div className="left-button absolute top-1/2 left-[5%] transform -translate-y-1/2">
                    <button className="bg-white p-2 border-[1px] border-[#e0def7] rounded-[50%]">
                      <AiOutlineLeft />
                    </button>
                  </div>
                </div>
                <div className="p-3 font-semibold text-[#101730] anima absolute w-full bottom-0 rounded-b-[20px]  bg-white">
                  <p className="text-[14px]">Ağ şəhər</p>
                  <div className="my-2 flex text-[#FF8A00]">
                    <span>
                      <AiFillStar />
                    </span>
                    <span>
                      <AiFillStar />
                    </span>
                    <span>
                      <AiFillStar />
                    </span>
                    <span>
                      <AiFillStar />
                    </span>
                    <span>
                      <AiFillStar />
                    </span>
                  </div>
                  <div className="flex justify-between">
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
              <div className="  border-[1px] rounded-[20px] card relative">
                <div className="h-[300px] relative">
                  <button
                    onClick={handleHeartClick}
                    className="absolute right-[5%] top-[5%] bg-white p-2 border-[1px] border-[#e0def7] rounded-[8px] "
                  >
                    <span className="heart">
                      {activeHeart ? (
                        <span className="text-red-600">
                          <AiFillHeart />
                        </span>
                      ) : (
                        <AiOutlineHeart />
                      )}
                    </span>
                  </button>
                  <img
                    className="h-full w-full rounded-[20px]"
                    src="../assets/all/h.png"
                    alt=""
                  />
                  <div className="right-button absolute top-1/2 right-[5%] transform -translate-y-1/2">
                    <button className="bg-white p-2 border-[1px] border-[#e0def7] rounded-[50%]">
                      <AiOutlineRight />
                    </button>
                  </div>
                  <div className="left-button absolute top-1/2 left-[5%] transform -translate-y-1/2">
                    <button className="bg-white p-2 border-[1px] border-[#e0def7] rounded-[50%]">
                      <AiOutlineLeft />
                    </button>
                  </div>
                </div>
                <div className="p-3 font-semibold text-[#101730] anima absolute w-full bottom-0 rounded-b-[20px]  bg-white">
                  <p className="text-[14px]">Ağ şəhər</p>
                  <div className="my-2 flex text-[#FF8A00]">
                    <span>
                      <AiFillStar />
                    </span>
                    <span>
                      <AiFillStar />
                    </span>
                    <span>
                      <AiFillStar />
                    </span>
                    <span>
                      <AiFillStar />
                    </span>
                    <span>
                      <AiFillStar />
                    </span>
                  </div>
                  <div className="flex justify-between">
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
              <div className="  border-[1px] rounded-[20px] card relative">
                <div className="h-[300px] relative">
                  <button
                    onClick={handleHeartClick}
                    className="absolute right-[5%] top-[5%] bg-white p-2 border-[1px] border-[#e0def7] rounded-[8px] "
                  >
                    <span className="heart">
                      {activeHeart ? (
                        <span className="text-red-600">
                          <AiFillHeart />
                        </span>
                      ) : (
                        <AiOutlineHeart />
                      )}
                    </span>
                  </button>
                  <img
                    className="h-full w-full rounded-[20px]"
                    src="../assets/all/h1.png"
                    alt=""
                  />
                  <div className="right-button absolute top-1/2 right-[5%] transform -translate-y-1/2">
                    <button className="bg-white p-2 border-[1px] border-[#e0def7] rounded-[50%]">
                      <AiOutlineRight />
                    </button>
                  </div>
                  <div className="left-button absolute top-1/2 left-[5%] transform -translate-y-1/2">
                    <button className="bg-white p-2 border-[1px] border-[#e0def7] rounded-[50%]">
                      <AiOutlineLeft />
                    </button>
                  </div>
                </div>
                <div className="p-3 font-semibold text-[#101730] anima absolute w-full bottom-0 rounded-b-[20px]  bg-white">
                  <p className="text-[14px]">Ağ şəhər</p>
                  <div className="my-2 flex text-[#FF8A00]">
                    <span>
                      <AiFillStar />
                    </span>
                    <span>
                      <AiFillStar />
                    </span>
                    <span>
                      <AiFillStar />
                    </span>
                    <span>
                      <AiFillStar />
                    </span>
                    <span>
                      <AiFillStar />
                    </span>
                  </div>
                  <div className="flex justify-between">
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
              <div className="  border-[1px] rounded-[20px] card relative">
                <div className="h-[300px] relative">
                  <button
                    onClick={handleHeartClick}
                    className="absolute right-[5%] top-[5%] bg-white p-2 border-[1px] border-[#e0def7] rounded-[8px] "
                  >
                    <span className="heart">
                      {activeHeart ? (
                        <span className="text-red-600">
                          <AiFillHeart />
                        </span>
                      ) : (
                        <AiOutlineHeart />
                      )}
                    </span>
                  </button>
                  <img
                    className="h-full w-full rounded-[20px]"
                    src="../assets/all/h2.png"
                    alt=""
                  />
                  <div className="right-button absolute top-1/2 right-[5%] transform -translate-y-1/2">
                    <button className="bg-white p-2 border-[1px] border-[#e0def7] rounded-[50%]">
                      <AiOutlineRight />
                    </button>
                  </div>
                  <div className="left-button absolute top-1/2 left-[5%] transform -translate-y-1/2">
                    <button className="bg-white p-2 border-[1px] border-[#e0def7] rounded-[50%]">
                      <AiOutlineLeft />
                    </button>
                  </div>
                </div>
                <div className="p-3 font-semibold text-[#101730] anima absolute w-full bottom-0 rounded-b-[20px]  bg-white">
                  <p className="text-[14px]">Ağ şəhər</p>
                  <div className="my-2 flex text-[#FF8A00]">
                    <span>
                      <AiFillStar />
                    </span>
                    <span>
                      <AiFillStar />
                    </span>
                    <span>
                      <AiFillStar />
                    </span>
                    <span>
                      <AiFillStar />
                    </span>
                    <span>
                      <AiFillStar />
                    </span>
                  </div>
                  <div className="flex justify-between">
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
              <div className="  border-[1px] rounded-[20px] card relative">
                <div className="h-[300px] relative">
                  <button
                    onClick={handleHeartClick}
                    className="absolute right-[5%] top-[5%] bg-white p-2 border-[1px] border-[#e0def7] rounded-[8px] "
                  >
                    <span className="heart">
                      {activeHeart ? (
                        <span className="text-red-600">
                          <AiFillHeart />
                        </span>
                      ) : (
                        <AiOutlineHeart />
                      )}
                    </span>
                  </button>
                  <img
                    className="h-full w-full rounded-[20px]"
                    src="../assets/all/h4.png"
                    alt=""
                  />
                  <div className="right-button absolute top-1/2 right-[5%] transform -translate-y-1/2">
                    <button className="bg-white p-2 border-[1px] border-[#e0def7] rounded-[50%]">
                      <AiOutlineRight />
                    </button>
                  </div>
                  <div className="left-button absolute top-1/2 left-[5%] transform -translate-y-1/2">
                    <button className="bg-white p-2 border-[1px] border-[#e0def7] rounded-[50%]">
                      <AiOutlineLeft />
                    </button>
                  </div>
                </div>
                <div className="p-3 font-semibold text-[#101730] anima absolute w-full bottom-0 rounded-b-[20px]  bg-white">
                  <p className="text-[14px]">Ağ şəhər</p>
                  <div className="my-2 flex text-[#FF8A00]">
                    <span>
                      <AiFillStar />
                    </span>
                    <span>
                      <AiFillStar />
                    </span>
                    <span>
                      <AiFillStar />
                    </span>
                    <span>
                      <AiFillStar />
                    </span>
                    <span>
                      <AiFillStar />
                    </span>
                  </div>
                  <div className="flex justify-between">
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
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default HomeRecommend;
