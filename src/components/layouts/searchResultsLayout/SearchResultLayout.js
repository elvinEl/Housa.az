import React from "react";
import { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
function SearchResultLayout() {
  const [activeButton, setActiveButton] = useState("list");
  const handleButtonClick = (e) => {
    setActiveButton(e);
  };
  return (
    <div>
      <nav className="flex justify-center ">
        <div className="text-center border-[1px] py-1  rounded-[10px] border-[#E5E5E5]">
          <NavLink
            className={`px-4 py-2 rounded-[10px] text-[14px] font-medium ${
              activeButton === "list" ? "bg-black text-white" : ""
            }`}
            onClick={() => handleButtonClick("list")}
            to=""
          >
            List
          </NavLink>
          <NavLink
            className={`px-4 py-2 rounded-[10px] text-[14px] font-medium ${
              activeButton === "map" ? "bg-black text-white" : ""
            }`}
            onClick={() => handleButtonClick("map")}
            to="map"
          >
            Map
          </NavLink>
        </div>
      </nav>
      <main className="my-8">
        <Outlet />
      </main>
    </div>
  );
}

export default SearchResultLayout;
