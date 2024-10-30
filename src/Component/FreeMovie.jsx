import React from "react";
import m1 from "../images/m1.png";
import m2 from "../images/m2.png";
import m3 from "../images/m3.png";
import m4 from "../images/m4.png";
import imdb from "../images/imdb.png";
import play from "../icons/play.svg";
import rightArrow from "../icons/ChevronRightOutline.svg";
import leftArrow from "../icons/ChevronLeftOutline.svg";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
// import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Reveal from "../animation/Reveal";

function FreeMovie() {
  return (
    <>
      <div className="cus-container">
 
          <div className="flex justify-between items-center mt-20">
            <h1 className="text[26px] md:[36px] lg:text-[48px] font-bold text-white">
              Watch For Free: Movie Mania
            </h1>
            <button className="bg-[#FF3434] text-white py-1 px-2 md:py-3 md:px-7 rounded-[5px]">
              View All
            </button>
          </div>
     

        <Swiper
          speed={1000}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={4}
          spaceBetween={30}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          navigation={{
            nextEl: ".button-next-slide-free",
            prevEl: ".button-prev-slide-free",
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation, Pagination]}
        >
          {[
            {
              id: 1,
              name: "Run 2020 American film",
              bg: m1,
            },
            {
              id: 2,
              name: "Run 2020 American film",
              bg: m2,
            },
            {
              id: 3,
              name: "Run 2020 American film",
              bg: m3,
            },
            {
              id: 4,
              name: "Run 2020 American film",
              bg: m4,
            },
            {
              id: 5,
              name: "Run 2020 American film",
              bg: m3,
            },
            {
              id: 6,
              name: "Run 2020 American film",
              bg: m4,
            },
            {
              id: 7,
              name: "Run 2020 American film",
              bg: m2,
            },
            {
              id: 8,
              name: "Run 2020 American film",
              bg: m1,
            },
          ].map(({ id, bg, name }) => {
            return (
              <SwiperSlide key={id}>
                <div className="w-[278px] space-y-3 mx-auto mt-5 md:mt-8 pb-12">
                  <div>
                    <img src={bg} alt="" />
                  </div>
                  <div>
                    <h2 className="text-[18px] text-white font-medium">
                      {name}
                    </h2>
                  </div>
                  <div className=" flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <div className="relative">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16.5"
                          height="16.5"
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
                        <h2 className="font-bold text-white text-[8px] absolute top-[2px] left-[2px]">
                          7.8
                        </h2>
                      </div>
                      <div className="w-[33px] h-[16px]">
                        <img src={imdb} alt="" />
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-[7px] h-[7px] bg-white rounded-full"></div>
                        <h2 className="font-medium text-white text-[11px]">
                          2022
                        </h2>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-[7px] h-[7px] bg-white rounded-full"></div>
                        <h2 className="font-medium text-red-500 text-[11px]">
                          Action
                        </h2>
                      </div>
                    </div>
                    <div className="flex bg-[#FF3434] w-fit space-x-2 py-[7px] px-[6px] rounded-[2px]">
                      <img src={play} alt="" />
                      <button className="text-white font-medium">
                        Play Now
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className="flex justify-between mx-[15px] md:mx-4 lg:mx-12 2xl:mx-20 relative bottom-[350px] md:bottom-[370px] z-20">
        <div className="button-prev-slide-free bg-white w-fit md:p-3 rounded-full bg-opacity-10 hover:bg-opacity-30">
          <img src={leftArrow} alt="" />
        </div>
        <div className="button-next-slide-free bg-white w-fit md:p-3 rounded-full bg-opacity-10 hover:bg-opacity-30">
          <img src={rightArrow} alt="" />
        </div>
      </div>
    </>
  );
}

export default FreeMovie;
