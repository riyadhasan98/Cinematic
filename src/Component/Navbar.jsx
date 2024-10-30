import React, { useState } from "react";
import { useRef } from "react";
import logo from "../images/logo.png";
import x from "../icons/X.svg";
import menu from "../icons/MenuOutline.svg";
import search from "../icons/search.svg";
import user from "../icons/User.svg";

function Navbar() {
  let mobileNav = useRef();
  const [clickToHide, setClickToHide] = useState(false);
  

  const show = () => {
    mobileNav.current.classList.remove("max-sm:hidden");
  };
  const hide = () => {
    mobileNav.current.classList.add("max-sm:hidden");
  };
  return (
    <>
      <section className="bg-[#0F1523] py-3">
        <div className="cus-container max-sm:relative">
          <div className="flex justify-between items-center">
            <div>
              <img className="max-sm:w-[100px]" src={logo} alt="" />
            </div>
            <div ref={mobileNav} className="max-sm:hidden">
              <ul className="max-sm:bg-white max-sm:w-fit max-sm:p-5 max-sm:absolute right-0 -top-3 md:flex md:text-white md:space-x-8 max-sm:space-y-3 z-10">
                <img
                  onClick={hide}
                  className="hidden max-sm:block relative left-12 bottom-3"
                  src={x}
                  alt=""
                />
                <li className="hover:text-gray-300">
                  <a href="#">Home</a>
                </li>
                <li className="hover:text-gray-300">
                  <a href="#">Movies</a>
                </li>
                <li className="hover:text-gray-300">
                  <a href="#">Tv Shows</a>
                </li>
                <li className="hover:text-gray-300">
                  <a href="#">Sports</a>
                </li>
              </ul>
            </div>
            <div className="md:hidden">
              <img onClick={show} src={menu} alt="" />
            </div>
            <div className="flex max-sm:hidden space-x-5 items-center">
              <div
                className={`max-sm:hidden relative ${
                  clickToHide ? "" : "hidden"
                }`}
              >
                <input
                  className="px-2 py-2 rounded-[4px] border-none"
                  type="text"
                  placeholder="Search"
                />
                <button className="bg-[#FF3434] p-2 rounded-[4px] text-white absolute right-0">
                  Search
                </button>
              </div>
              <img
                onClick={() => setClickToHide(true)}
                className={`${clickToHide ? "hidden" : ""}`}
                src={search}
                alt=""
              />
              <img src={user} alt="" />
              <button className="bg-[#FF3434] rounded-[5px] py-3 px-5 text-white font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Navbar;
