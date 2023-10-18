import React from "react";
import HomeMission from "../homeComponents/homeabout/HomeMission";
import HomeVision from "../homeComponents/homeabout/HomeVision";
import HomeFilter from "../homeComponents/HomeFilter";
import HomeMap from "../homeComponents/HomeMap";
import HomeRecommend from "../homeComponents/HomeRecommend";
import HomeSwiper from "../homeComponents/HomeSwiper";
import HomeComments from "../homeComponents/HomeComments";
import HomeAdvice from "../homeComponents/HomeAdvice";
function Home() {
  return (
    <div>
      <HomeSwiper />
      <HomeFilter />
      <HomeRecommend />
      <HomeVision />
      <HomeMission />
      <HomeMap />
      <HomeComments />
      <HomeAdvice />
    </div>
  );
}

export default Home;
