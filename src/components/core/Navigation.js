import React from "react";
import { NavLink } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
function Navigation() {
  return (
    <div className="max-w-[80%] mx-auto flex justify-between items-center bg-black text-white rounded-[49px]  pl-4 pr-2 gap-3  text-[14px]">
      <NavLink className="py-4" to="/">
        Properties
      </NavLink>
      <NavLink className="py-4" to="/marketintelligence">
        Market Intelligence
      </NavLink>
      <NavLink className="py-4" to="/realtorportal">
        Realtor Portal
      </NavLink>
      <NavLink className="py-4" to="/customizesearch">
        Costumize Search
      </NavLink>
      <button className="text-[22px] bg-[#323232] rounded-[50%] p-2">
        <BsSearch />
      </button>
    </div>
  );
}

export default Navigation;
