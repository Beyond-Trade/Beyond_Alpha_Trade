import NewsAndBlogBanner from "../components/atomic/NewsAndBolg/NewsAndBolgBanner";
import React, { useEffect } from "react";

function NewsAndBlog() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])
  return (
    <div>
      <NewsAndBlogBanner />
      <div className="xl:flex lg:flex px-8 md:px-16 xl:px-24 lg:px-24 mt-8"></div>
      <div className=" lg:flex px-8 md:px-16 xl:px-24 lg:px-24 h-auto xl:my-8 xxl:my-16">
        <div className="flex justify-center w-full ">
          {/* 1 */}
          <div className="grid grid-cols-3 gap-4">
            <div className="flex-col flex items-center justify-center">
              <div className="w-full xl:h-48 xxl:h-64 flex-col flex items-center justify-center">
                <img
                  src="/assets/Images/samplepost.png"
                  alt="img"
                  className="w-full h-full content-end"
                />
              </div>
              <div className="w-full xl:h-16 xxl:h-24 flex flex-col items-center justify-center">
                <p className="xl:text-xs xxl:text-lg mb-1">Aug 05, 2020</p>
                <h1 className="xxl:text-3xl font-bold text-customBlue-500">YOU GONNA BE RICH</h1>
              </div>
            </div>
            {/* 2 */}
            <div className="flex-col flex items-center justify-center">
              <div className="w-full xl:h-48 xxl:h-64 flex-col flex items-center justify-center">
                <img
                  src="/assets/Images/samplepost.png"
                  alt="img"
                  className="w-full h-full content-end"
                />
              </div>
              <div className="w-full xl:h-16 xxl:h-24 flex flex-col items-center justify-center">
                <p className="xl:text-xs xxl:text-lg mb-1">Aug 05, 2020</p>
                <h1 className="xxl:text-3xl font-bold text-customBlue-500">YOU GONNA BE RICH</h1>
              </div>
            </div>
            {/* 3 */}
            <div className="flex-col flex items-center justify-center">
              <div className="w-full xl:h-48 xxl:h-64 flex-col flex items-center justify-center">
                <img
                  src="/assets/Images/samplepost.png"
                  alt="img"
                  className="w-full h-full content-end"
                />
              </div>
              <div className="w-full xl:h-16 xxl:h-24 flex flex-col items-center justify-center">
                <p className="xl:text-xs xxl:text-lg mb-1">Aug 05, 2020</p>
                <h1 className="xxl:text-3xl font-bold text-customBlue-500">YOU GONNA BE RICH</h1>
              </div>
            </div>
            {/* 4 */}
            <div className="flex-col flex items-center justify-center">
              <div className="w-full xl:h-48 xxl:h-64 flex-col flex items-center justify-center">
                <img
                  src="/assets/Images/samplepost.png"
                  alt="img"
                  className="w-full h-full content-end"
                />
              </div>
              <div className="w-full xl:h-16 xxl:h-24 flex flex-col items-center justify-center">
                <p className="xl:text-xs xxl:text-lg mb-1">Aug 05, 2020</p>
                <h1 className="xxl:text-3xl font-bold text-customBlue-500">YOU GONNA BE RICH</h1>
              </div>
            </div>
            {/* 5 */}
            <div className="flex-col flex items-center justify-center">
              <div className="w-full xl:h-48 xxl:h-64 flex-col flex items-center justify-center">
                <img
                  src="/assets/Images/samplepost.png"
                  alt="img"
                  className="w-full h-full content-end"
                />
              </div>
              <div className="w-full xl:h-16 xxl:h-24 flex flex-col items-center justify-center">
                <p className="xl:text-xs xxl:text-lg mb-1">Aug 05, 2020</p>
                <h1 className="xxl:text-3xl font-bold text-customBlue-500">YOU GONNA BE RICH</h1>
              </div>
            </div>
            {/* 6 */}
            <div className="flex-col flex items-center justify-center">
              <div className="w-full xl:h-48 xxl:h-64 flex-col flex items-center justify-center">
                <img
                  src="/assets/Images/samplepost.png"
                  alt="img"
                  className="w-full h-full content-end"
                />
              </div>
              <div className="w-full xl:h-16 xxl:h-24 flex flex-col items-center justify-center">
                <p className="xl:text-xs xxl:text-lg mb-1">Aug 05, 2020</p>
                <h1 className="xxl:text-3xl font-bold text-customBlue-500">YOU GONNA BE RICH</h1>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
}
export default NewsAndBlog;
