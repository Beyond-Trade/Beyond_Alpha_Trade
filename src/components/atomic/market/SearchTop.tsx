import * as React from "react";

function SearchTop({ handleSearch, search }: any) {
  return (
    <div className="flex border border-gray-500 mb-4 px-2">
      <img src="assets/Icons/searching.svg" alt="img" className="" />
      <input
        type="text"
        value={search}
        className="focus:outline-none bg-white w-full py-2 text-xs ml-2"
        placeholder="SEARCH"
        onChange={handleSearch}
      />
    </div>
  );
}

export default SearchTop;
