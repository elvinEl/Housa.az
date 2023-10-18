import React from "react";

function HomeMap() {
  return (
    <div className="max-w-[80%] mx-auto mb-8">
      <div className="text-center my-8">
        <p className="text-[44px] tracking-[0.88px] font-semibold">Map</p>
        <p className="text-[#C1C1C1] font-semibold text-[20px]">
          Lorem ipsum dolor sit amet consectetur. Vitae et ac lacus eu
          suspendisse eu vel quis. Integer
        </p>
      </div>

      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa6ddf21506a9085b08f375fda117ba0f87f039590577d289c9b366904caacbdc&amp;source=constructor"
        width="100%"
        height="500"
        frameborder="0"
      ></iframe>
    </div>
  );
}

export default HomeMap;
