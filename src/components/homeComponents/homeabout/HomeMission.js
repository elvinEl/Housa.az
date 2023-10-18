import React from "react";

function HomeMission() {
  return (
    <div className="mb-12">
      <div className="grid grid-cols-2 max-w-[80%] mx-auto gap-8">
        <div className="col-span-1 flex flex-col justify-between">
          <div>
            <div className="flex flex-col font-semibold">
              <p className="text-[20px] tracking-[0.4px] text-[#1590e1]">
                LET`S FIND
              </p>
              <p className="text-[44px] tracking-[0.88px]">Our Mission</p>
            </div>
            <div className="my-12">
              <p className="text-[#C1C1C1] font-semibold text-[20px]">
                Lorem ipsum dolor sit amet consectetur. Vitae et ac lacus eu
                suspendisse eu vel quis. Integer Lorem ipsum dolor sit amet
                consectetur. Vitae et ac lacus eu suspendisse eu vel quis.
                Integer Lorem ipsum dolor sit amet consectetur. Vitae et ac
                lacus eu suspendisse eu vel quis. Integer Lorem ipsum dolor sit
                amet consectetur. Vitae et ac lacus eu suspendisse eu vel quis.
                Integer Lorem ipsum dolor sit amet consectetur. Vitae et ac
                lacus eu suspendisse eu vel quis. Integer Lorem ipsum dolor sit
                amet consectetur. Vitae et ac lacus eu suspendisse eu vel quis.
                Integer Lorem
              </p>
            </div>
          </div>
          <div>
            <button className="bg-black text-white px-16 py-2 rounded-[8px]">
              Tour
            </button>
          </div>
        </div>
        <div className="col-span-1 grid grid-cols-2   gap-8 relative">
          <div className="col-span-1 flex flex-col items-center gap-4">
          <div className="w-[278px]">
            <img className="w-full h-full" src="../assets/all/v.png" alt="" />
          </div>
          <div className="w-[278px]">
            <img className="w-full h-full" src="../assets/all/m.png" alt="" />
          </div>
          </div>
          <div className="col-span-1 flex flex-col gap-4 absolute top-4 right-2 ">
            <div className="w-[280px]">
              <img className="w-full rounded-[20px]" src="../assets/all/m1.png" alt="" />
            </div>
            <div className="w-[280px]">
              <img className="w-full " src="../assets/all/m2.png" alt="" />
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
}

export default HomeMission;
