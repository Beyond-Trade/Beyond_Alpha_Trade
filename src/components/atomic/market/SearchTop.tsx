import * as React from "react";

function SearchTop() {
  return (
    <div className="flex border border-gray-500 mb-4 px-2">
      <img src="assets/Icons/searching.svg" className="" />
      <input type="text" className="focus:outline-none bg-white w-full py-2 text-xs ml-2" placeholder="SEARCH" />
    </div>
  );
}

export default SearchTop;
