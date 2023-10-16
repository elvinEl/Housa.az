import React from "react";
import Navigation from "./Navigation";

function Header() {
  return (
    <div
      className="grid grid-cols-4 items-center py-2 px-4 border-[2px] border-[#EAEAEA] rounded-[10px] "
      style={{
        background:
          "linear-gradient(249deg, rgba(255, 255, 255, 0.80) 12.52%, rgba(246, 243, 255, 0.80) 58.19%)",
      }}
    >
      <div className="col-span-1 flex items-center">
        <span>
          <img src="../assets/logo/logo.png" alt="" />
        </span>
        <span>
          <img src="../assets/logo/logo1.png" alt="" />
        </span>
      </div>
      <div className="col-span-2 h-full">
        <Navigation />
      </div>
      <div className="col-span-1 justify-self-end">
        <p>Sign In</p>
      </div>
    </div>
  );
}

export default Header;
