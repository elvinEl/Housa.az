import React from "react";
import HomeFilter from "../homeComponents/HomeFilter";
import HomeRecommend from "../homeComponents/HomeRecommend";
import HomeSwiper from "../homeComponents/HomeSwiper";
function Home() {
  return (
    <div>
      <HomeSwiper />
      <HomeFilter />
      <HomeRecommend />
    </div>
  );
}

export default Home;
