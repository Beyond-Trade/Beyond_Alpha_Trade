import * as React from "react";

function SearchTop({ handleSearch, search }: any) {
  let firstInput: any = React.useRef(null);
  let firstDiv: any = React.useRef(null);
  React.useEffect(() => {
    window.onclick = function (event: any) {
      if (firstInput.current === document.activeElement) {
        firstDiv.current.classList.add("border-customBlack-550");
      } else {
        firstDiv?.current?.classList?.remove("border-customBlack-550");
      }
    };
  }, []);
  return (
    <div ref={firstDiv} className="flex border border-gray-500 mb-4 px-2 hover:shadow-custom hover:border-customBlack-550">
      <img
        src="/assets/Icons/searching.svg"
        alt="img"
        className="xl:w-4 xxl:w-6"
      />
      <input
      ref={firstInput}
        type="text"
        value={search}
        className="focus:outline-none bg-white w-full py-2 text-xs xxl:text-sm ml-2"
        placeholder="SEARCH"
        onChange={handleSearch}
      />
    </div>
  );
}

export default SearchTop;
