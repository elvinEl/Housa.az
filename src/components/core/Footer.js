import React from "react";
import { BsInstagram, BsFacebook } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
function Footer() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-12 max-w-[80%] mx-auto text-[#C1C1C1]">
        <div className="col-span-1 bg-[#F7F7F7] py-6 px-4  rounded-[10px]">
          <div className="flex items-center gap-2 mb-4">
            <span>
              <img src="../assets/logo/logo2.png" alt="" />
            </span>
            <span>
              <img src="../assets/logo/housa.png" alt="" />
            </span>
          </div>
          <div className="mb-4">
            <p >
              Lorem ipsum dolor sit amet consectetur. Vitae et ac lacus eu
              suspendisse eu vel quis. Integer Lorem ipsum dolor sit amet
              consectetur. Vitae et ac lacus eu suspendisse eu vel quis. Integer
            </p>
          </div>
          <div className="flex gap-6 text-[24px]">
            <a target="_blank" href="https://www.instagram.com/">
              <BsInstagram />
            </a>
            <a target="_blank" href="https://www.facebook.com/">
              <BsFacebook />
            </a>
            <a
              target="_blank"
              href="https://twitter.com/X?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
            >
              <RiTwitterXFill />
            </a>
          </div>
        </div>
        <div className="col-span-1 grid grid-cols-3 gap-4">
          <div>
            <p className="text-[#101730] text-[20px] font-bold tracking-[0.4px]">Pages</p>
            <div className="mt-2 font-semibold leading-7">
              <p>Home</p>
              <p>Home</p>
              <p>Home</p>
              <p>Home</p>
            </div>
          </div>
          <div>
            <p className="text-[#101730] text-[20px] font-bold tracking-[0.4px]">Information</p>
            <div className="mt-2 font-semibold leading-7">
              <p>Home</p>
              <p>Home</p>
              <p>Home</p>
              <p>Home</p>
            </div>
          </div>
          <div>
            <p className="text-[#101730] text-[20px] font-bold tracking-[0.4px]">My Account</p>
            <div className="mt-2 font-semibold leading-7">
              <p>Home</p>
              <p>Home</p>
              <p>Home</p>
              <p>Home</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
