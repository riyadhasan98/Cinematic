import React, { useRef, useState } from "react";
import bg1 from "../images/bg1.png";
import bg2 from "../images/bg2.png";
import bg3 from "../images/bg3.png";
import imdb from "../images/imdb.png";
import play from "../icons/play.svg";
import rightArrow from "../icons/ChevronRightOutline.svg";
import leftArrow from "../icons/ChevronLeftOutline.svg";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "./header.css";

import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";

export default function Header() {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={2000}
        spaceBetween={30}
        effect={"fade"}
        navigation={{
          nextEl: ".button-next-slide",
          prevEl: ".button-prev-slide",
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        {[
          {
            id: 1,
            title: "Shutter Island",
            bg: bg1,
            duration: "2hr 13min",
            rating: "7.8",
            year: "2022",
          },
          {
            id: 2,
            title: "Avatar The Way of Water",
            bg: bg2,
            duration: "2hr 55min",
            rating: "8.6",
            year: "2022",
          },
          {
            id: 3,
            title: "A Quiet Place Day One",
            bg: bg3,
            duration: "1hr 50min",
            rating: "6.8",
            year: "2019",
          },
        ].map(({ id, title, bg, rating, duration, year }) => {
          return (
            <SwiperSlide>
              <section
                key={id}
                className="w-full h-[500px] md:h-[720px] bg-cover bg-no-repeat bg-center z-0"
                style={{
                  backgroundImage: `url(${bg})`,
                }}
              >
                <div className="cus-container">
                  <div className="space-y-4 md:space-y-8 relative top-12 md:top-28">
                    {/* most viewed */}
                    <div className="flex space-x-2">
                      <div className="w-[2px] h-8 bg-[#FF3434]"></div>
                      <h2 className="text-[18px] font-bold text-white">
                        MOST VIEWED
                      </h2>
                    </div>
                    {/* movie name */}
                    <div>
                      <h1 className="text-[28px] md:text-[36px] lg:text-[56px] font-bold text-white">
                        {title}
                      </h1>
                    </div>
                    {/* rating duration  */}
                    <div className="flex space-x-3 items-center md:space-x-8">
                      <div className="relative">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="40"
                          viewBox="0 0 33 33"
                          fill="none"
                        >
                          <circle
                            cx="16.5"
                            cy="16.5"
                            r="15.5"
                            stroke="white"
                            stroke-width="1"
                          />
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M0 16.5C0 25.6127 7.3873 33 16.5 33C25.6127 33 33 25.6127 33 16.5C33 7.3873 25.6127 0 16.5 0C13.3843 0 10.4703 0.863584 7.98429 2.36445L9.06646 4.04782C11.2402 2.7474 13.7828 2 16.5 2C24.5081 2 31 8.49187 31 16.5C31 24.5081 24.5081 31 16.5 31C8.49187 31 2 24.5081 2 16.5H0Z"
                            fill="#FF3434"
                          />
                        </svg>
                        <h2 className="font-bold text-white absolute top-2 left-2">
                          {rating}
                        </h2>
                      </div>
                      <div className="max-sm:w-12">
                        <img src={imdb} alt="" />
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-[10px] h-[10px] bg-white rounded-full"></div>
                        <h2 className="font-semibold text-white">{duration}</h2>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-[10px] h-[10px] bg-white rounded-full"></div>
                        <h2 className="font-semibold text-white">{year}</h2>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-[10px] h-[10px] bg-white rounded-full"></div>
                        <button className="bg-[#FF3434] text-white py-[2px] px-2 rounded-[3px]">
                          Action
                        </button>
                      </div>
                    </div>
                    {/* description    */}
                    <div>
                      <p className=" text-white w-[500px]">
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum."
                      </p>
                    </div>
                    {/* cast genre tags */}
                    <div className="space-y-2">
                      <p className="text-white text-[14px]">
                        <span className="text-red-500">Cast</span> Anna
                        Romanson, Robert Romansos
                      </p>
                      <p className="text-white text-[14px]">
                        <span className="text-red-500">Genre</span> Action,
                        Thriller, Romance
                      </p>
                      <p className="text-white text-[14px]">
                        <span className="text-red-500">Tags</span> 4K Ultra,
                        Thriller, Dubbing
                      </p>
                    </div>
                    {/* play button  */}
                    <div className="flex bg-[#FF3434] w-fit space-x-2 py-3 px-4 rounded-[5px]">
                      <img src={play} alt="" />
                      <button className="text-white font-medium">
                        Play Now
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="flex justify-between mx-[15px] md:mx-2 2xl:mx-20 relative bottom-12 md:bottom-[400px] z-20">
        <div className="button-prev-slide bg-white w-fit md:p-3 rounded-full bg-opacity-10 hover:bg-opacity-30">
          <img src={leftArrow} alt="" />
        </div>
        <div className="button-next-slide bg-white w-fit md:p-3 rounded-full bg-opacity-10 hover:bg-opacity-30">
          <img src={rightArrow} alt="" />
        </div>
      </div>
    </>
  );
}
