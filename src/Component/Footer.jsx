import React from "react";
import logo from "../images/logo.png";
import call from "../icons/Call.svg";
import message from "../icons/Message.svg";
import fb from "../icons/fb.svg";
import twiter from "../icons/twiter.svg";
import insta from "../icons/insta.svg";
import youtube from "../icons/youtube.svg";

const Footer = () => {
  return (
    <footer className="bg-[#121825]">
      <div className="cus-container lg:flex lg:space-x-44 lg:items-center">
        <div className="space-y-5 py-10 md:py-16 lg:py-24">
          <img src={logo} alt="" />
          <p className="w-[313px] text-white leading-6">
            Google Fonts is a library of 1493 open source font families and APIs
            for convenient use via CSS and Android. The library also has
            delightful and beautifully crafted icons for common actions and
            items.
          </p>
          <div>
            <div className="flex space-x-1">
              <img src={call} alt="" />
              <p className="text-white text-[14px]">Call: 281-204-8367</p>
            </div>
            <div className="flex space-x-1">
              <img src={message} alt="" />
              <p className="text-white text-[14px]">
                Gmail: info@spineandrehab.com
              </p>
            </div>
          </div>
          <div className="flex space-x-2">
            <img src={fb} alt="" />
            <img src={twiter} alt="" />
            <img src={insta} alt="" />
            <img src={youtube} alt="" />
          </div>
        </div>
        <div className="md:flex justify-between lg:space-x-44 lg:relative bottom-10">
          {[
            {
              id: 1,
              title: "DIGIFLEX",
              list1: "Digiflex",
              list2: "Devices",
              list3: "Blog",
              list4: "Contact",
            },
            {
              id: 2,
              title: "SUPPORT",
              list1: "FAQ",
              list2: "Help Center",
              list3: "Support",
              list4: "Account",
            },
            {
              id: 3,
              title: "POLICIES",
              list1: "Privacy Policy",
              list2: "Terms of Use",
              list3: "Legal Noticies",
              list4: "",
            },
          ].map(({ id, title, list1, list2, list3, list4 }) => (
            <div key={id} className="mb-10">
              <h2 className="mb-4 text-white text-[18px] font-semibold">
                {title}
              </h2>
              <nav className="list-none space-y-2">
                <li>
                  <a href="#" className="text-white hover:text-gray-800">
                    {list1}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-gray-800">
                    {list2}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-gray-800">
                    {list3}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white hover:text-gray-800">
                    {list4}
                  </a>
                </li>
              </nav>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#121A2B] py-4 md:py-10">
        <p className="text-[14px] text-white text-center">ⓒ 2023 Cinematic. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
