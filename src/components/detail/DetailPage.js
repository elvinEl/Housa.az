import React, { useEffect, useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { LuShare } from "react-icons/lu";
import imgData from "../data/img.json";

function DetailPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(imgData);
  }, []);

  return (
    <div className="max-w-[75%] mx-auto font-semibold">
      <div>
        <p className="uppercase text-[20px] py-2">
          Cheerful 1-bedroom in a townhouse with parking
        </p>
        <div className="flex justify-between text-[14px]">
          <div className="flex gap-8">
            <p>Nerimanov, Abseron, Azerbaycan</p>
            <p className="gap-1 flex">
              Added:<span className="font-normal">21 Apr 2023</span>
            </p>
          </div>
          <div className="flex gap-8">
            <button className="flex items-center gap-2 p-1">
              <span className="text-[#FF5151] text-[18px]">
                <AiFillHeart />
              </span>{" "}
              Kaydet
            </button>
            <button className="flex items-center gap-2 p-1">
              <span className="text-[18px]">
                <LuShare />
              </span>{" "}
              Paylaş
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8 my-4 ">
        <div className="col-span-1">
          <div className="h-[550px] hover:scale-105 duration-200">
            <img
              className="w-full h-full rounded-lg"
              src={data[0] && data[0].img}
              alt=""
            />
          </div>
        </div>
        <div className="col-span-1 grid grid-cols-2 gap-4">
          {data.slice(1).map((item, index) => (
            <div
              key={index}
              className=" hover:scale-105 h-[265px] duration-200"
            >
              <img
                className="w-full h-full rounded-lg"
                src={item && item.img}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <div className="col-span-1 my-4  flex items-centere= justify-between">
          <div>
            <p className="text-[#101010] text-[20px]">
              Tüm ev : Ev sahibi: Arif Mustafazade
            </p>
            <p className="text-[12px] text-[#0d0d0da3]">
              5 misafir . 2 yatak odası . 4 yatak . 2 banyo
            </p>
          </div>
          <div>
            <img
              className="h-[55px] w-[55px] rounded-[50%]"
              src="../assets/all/a.png"
              alt=""
            />
          </div>
        </div>
        <div className="col-span-1 rounded-[20px] px-5 py-2 text-[#101730] shadow-custom">
          <p className="text-[28px] tracking-[0.56px]">$ 16,340 </p>
          <div className="">
            <p className="font-normal tracking-[0.32px]">
              Property tour arrangem
            </p>
            <div className="flex gap-4 my-2">
              <input
                className="bg-[#F9F8FA] rounded-[8px] placeholder-[#7c7c7d] w-full px-4 py-2 focus:outline-none"
                type="text"
                placeholder="Name"
              />
              <input className="bg-[#F9F8FA] rounded-[8px] placeholder-[#7c7c7d] w-full px-4 py-2 focus:outline-none" type="text" placeholder="Last name" />
            </div>
            <input type="text" className="bg-[#F9F8FA] rounded-[8px] placeholder-[#7c7c7d] w-full px-4 py-2 focus:outline-none" placeholder="Email"  />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
