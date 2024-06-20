"use client";
import { useEffect } from "react";
// import { eventBanners } from "./eventBannerData";
import "../../events/index.scss";

const Carousel = () => {
  useEffect(() => {
    const init = async () => {
      const { Carousel, initTWE } = await import("tw-elements");
      initTWE({ Carousel });
    };
    init();
  }, []);

  return (
    <div
      id="eventCarousel"
      data-twe-carousel-init
      data-twe-ride="carousel"
      data-twe-interval="6000"
    >
      {/* <!--Carousel indicators--> */}
      <div className="carousel-indicators" data-twe-carousel-indicators>
        <button
          type="button"
          data-twe-target="#eventCarousel"
          data-twe-slide-to="0"
          data-twe-carousel-active
          className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-twe-target="#eventCarousel"
          data-twe-slide-to="1"
          className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-twe-target="#eventCarousel"
          data-twe-slide-to="2"
          className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
          aria-label="Slide 3"
        ></button>
      </div>

      {/* <!--Carousel items--> */}
      <div className="carousel-items">
        {/* <!--First item--> */}
        <div
          className="carousel-item"
          data-twe-carousel-active
          data-twe-carousel-item
        >
          <img
            src="https://lh3.googleusercontent.com/drive-viewer/AKGpihaRAzI2LPT2cZ4S9b17f7XhpxzDfZjwX1EXz5H4AURqJSXc2o8oWjFRVGH5eFcsT0HlKYXLsnl1vyVF7opWPjzhcdlC1gP_Ty8=s1600-rw-v1"
            className="carousel-img"
            alt="event1"
          />
        </div>

        {/* <!--Second item--> */}
        <div className="carousel-item hidden" data-twe-carousel-item>
          <img
            src="https://lh3.googleusercontent.com/drive-viewer/AKGpihbsDveYiyCvLpCR22G-XojGm0Y5Alv0yDEmim62hNxtC8EiWtLYT4S5S1g3buqdAYgnIpiqP_qzGpC1Y8nA5sifymltMkteWwE=s1600-rw-v1"
            className="carousel-img"
            alt="event2"
          />
        </div>

        {/* <!--Third item--> */}
        <div className="carousel-item hidden" data-twe-carousel-item>
          <img
            src="https://lh3.googleusercontent.com/drive-viewer/AKGpihbOUXuq2I8PYmNbThAx5ZC0srYU2eqS-i2RiG0BNSD4kv7dFcfBnAChjGT_EH_OemIzsXad5Pc_3gsPCLfWqWFu2zHaBRPZ3A=s1600-rw-v1"
            className="carousel-img"
            alt="event3"
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
