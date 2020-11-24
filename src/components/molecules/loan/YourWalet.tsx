import React from "react";
function YourWalet() {
  return (
    <>
      <div className="bg-customGray-100 rounded mr-8 w-full mt-3 xl:text-xs xxl:text-base">
        <div className="rounded-t flex justify-between items-center bg-gray-300 text-gray-600 px-2 py-3 font-medium">
          <h5>YOUR WALET</h5>
        </div>
        <div className="flex justify-between p-4">
          <div className="flex justify-between w-full">
            <div>
              <h3 className="text-gray-600 py-2">sETH BALANCE</h3>
            </div>
            <div>
              <h3 className=" py-2">0.00</h3>
            </div>
          </div>
          <div className="flex justify-between w-full items-center ">
            <div className="border-r-2 w-full " style={{ height: "70%" }}></div>
            <div className="w-full h-1/2"></div>
          </div>
          <div className="flex justify-between w-full">
            <div>
              <h3 className="text-gray-600 py-2">ETH BALANCE</h3>
            </div>
            <div>
              <h3 className="py-2">0.00</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default YourWalet;
