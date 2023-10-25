import React, { useEffect, useState } from "react";
import {
  AiFillStar,
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineLeft,
  AiOutlineRight,
} from "react-icons/ai";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import data from "../../data.json";
function List() {
  const [cardsData, setCardsData] = useState([]);
  const [activeHearts, setActiveHearts] = useState(
    Array(data.length).fill(false)
  );
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 12;
  const pageCount = Math.ceil(cardsData.length / cardsPerPage);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };
  useEffect(() => {
    setCardsData(data);
    console.log(data);
  });
  const handleHeartClick = (index) => {
    setActiveHearts((prevHearts) => {
      const newHearts = [...prevHearts];
      newHearts[index] = !prevHearts[index];
      return newHearts;
    });
  };

  ///////////////////////////
  const [imageIndices, setImageIndices] = useState(Array(data.length).fill(0));

  const handleNextImage = (index) => {
    setImageIndices((prevIndices) => {
      const newIndices = [...prevIndices];
      newIndices[index] =
        (prevIndices[index] + 1) % cardsData[index].img.length;
      return newIndices;
    });
  };

  const handlePreviousImage = (index) => {
    setImageIndices((prevIndices) => {
      const newIndices = [...prevIndices];
      const newIndex =
        (prevIndices[index] - 1 + cardsData[index].img.length) %
        cardsData[index].img.length;
      newIndices[index] =
        newIndex >= 0 ? newIndex : cardsData[index].img.length - 1;
      return newIndices;
    });
  };

  ////////////////////
  const allCards = cardsData.map((data, index) => {
    const currentImageIndex = imageIndices[index];
    return (
      <div
        key={index}
        className="col-span-1 border-[1px] rounded-[20px] card relative"
      >
        <div className="h-[300px] relative">
          <button
            onClick={() => handleHeartClick(index)}
            className="absolute right-[5%] top-[5%] bg-white p-2 border-[1px] border-[#e0def7] rounded-[8px] "
          >
            <span className="heart">
              {activeHearts[index] ? (
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
            src={data.img[currentImageIndex]}
            alt=""
          />
          <div className="right-button absolute top-1/2 right-[5%] transform -translate-y-1/2">
            <button
              onClick={() => handleNextImage(index)}
              className="bg-white p-2 border-[1px] border-[#e0def7] rounded-[50%]"
            >
              <AiOutlineRight />
            </button>
          </div>
          <div className="left-button absolute top-1/2 left-[5%] transform -translate-y-1/2">
            <button
              onClick={() => handlePreviousImage(index)}
              className="bg-white p-2 border-[1px] border-[#e0def7] rounded-[50%]"
            >
              <AiOutlineLeft />
            </button>
          </div>
        </div>
        <div className="p-3 font-semibold text-[#101730] anima absolute w-full bottom-0 rounded-b-[20px]  bg-white">
          <p className="text-[14px]">{data.title}</p>
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
            <p className="text-[16px]">{data.price}</p>
            <button className="text-[#51aeea] text-[14px] flex items-center gap-2">
              Explore More
              <span>
                <AiOutlineRight />
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  });
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = allCards.slice(indexOfFirstCard, indexOfLastCard);
  return (
    <div>
      <div className="grid grid-cols-4 justify-center items-center max-w-[80%] mx-auto gap-8 max-2xl:grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1 ">
        {currentCards}
      </div>
      <div className="flex justify-center items-center mt-8">
        <Stack spacing={2}>
          <Pagination
            count={pageCount}
            shape="rounded"
            onChange={handlePageChange}
          />
        </Stack>
      </div>
    </div>
  );
}

export default List;
