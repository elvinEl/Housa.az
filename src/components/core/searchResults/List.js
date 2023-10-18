import React, { useState } from "react";
import {
  AiFillStar,
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineLeft,
  AiOutlineRight,
} from "react-icons/ai";
function List() {
  const [activeHeart, setActiveHeart] = useState(false);

  const handleHeartClick = () => {
    setActiveHeart(!activeHeart);
  };
  

  return (
    <div className="grid grid-cols-5 justify-center items-center max-w-[75%] mx-auto gap-4 max-2xl:grid-cols-4 max-xl:grid-cols-3 max-lg:grid-cols-2">
      <div className="col-span-1 max-w-[300px]  border-[1px] rounded-[20px] card relative">
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
      <div className="col-span-1 max-w-[300px]  border-[1px] rounded-[20px] card relative">
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
      <div className="col-span-1 max-w-[300px]  border-[1px] rounded-[20px] card relative">
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
      <div className="col-span-1 max-w-[300px]  border-[1px] rounded-[20px] card relative">
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
      <div className="col-span-1 max-w-[300px]  border-[1px] rounded-[20px] card relative">
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
      <div className="col-span-1 max-w-[300px]  border-[1px] rounded-[20px] card relative">
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
      <div className="col-span-1 max-w-[300px]  border-[1px] rounded-[20px] card relative">
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
      <div className="col-span-1 max-w-[300px]  border-[1px] rounded-[20px] card relative">
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
      <div className="col-span-1 max-w-[300px]  border-[1px] rounded-[20px] card relative">
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
      <div className="col-span-1 max-w-[300px]  border-[1px] rounded-[20px] card relative">
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
      <div className="col-span-1 max-w-[300px]  border-[1px] rounded-[20px] card relative">
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
      <div className="col-span-1 max-w-[300px]  border-[1px] rounded-[20px] card relative">
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
   
    </div>
  );
}

export default List;
