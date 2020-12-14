import React, { useState } from "react";
function MarketSort({ sortOn, handleSort }: any) {
  const [activeButton, setActiveButton] = useState(1);
  return (
    <>
      {activeButton === 1 && (
        <img
          src="/assets/Icons/up-down-arrow.svg"
          alt="img"
          className="ml-1 h-2 cursor-pointer"
          onClick={() => {
            setActiveButton(2);
            handleSort(sortOn, "asc");
          }}
        />
      )}
      {activeButton === 2 && (
        <img
          src="/assets/Icons/sort-arrows-couple-pointing-up-and-down-1.svg"
          alt="img"
          className="ml-1 h-2 cursor-pointer"
          onClick={() => {
            setActiveButton(3);
            handleSort(sortOn, "desc");
          }}
        />
      )}
      {activeButton === 3 && (
        <img
          src="/assets/Icons/sort-arrows-couple-pointing-up-and-down.svg"
          alt="img"
          className="ml-1 h-2 cursor-pointer"
          onClick={() => {
            setActiveButton(1);
            handleSort(sortOn, "");
          }}
        />
      )}
    </>
  );
}
export default MarketSort;
