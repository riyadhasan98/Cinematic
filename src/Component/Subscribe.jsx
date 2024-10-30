import React from "react";
import camera from "../icons/camera.svg";
import safe from '../icons/safe.svg'

function Subscribe() {
  return (
    <>
      <div className="bg-[#FF3434] py-[30px] md:py-[60px]">
        <div className="cus-container">
          <div>
            <h3 className="text-[18px] font-medium text-white capitalize text-center">
              START SECURE BROWSING
            </h3>
            <h1 className="text-[28px] md:text-[36px] lg:text-[48px] text-white font-bold text-center">
              Ready to Grab the Deal?
            </h1>
          </div>
          <div className="grid-res-cols gap-x-10 gap-y-5 mt-4 md:mt-8">
            {[
              {
                id: 1,
                month: "1-month plan",
                price: "9.99",
                doller: "$",
              },
              {
                id: 2,
                month: "12-months plan",
                price: "3.99",
                doller: "$",
              },
              {
                id: 3,
                month: "6-months plan",
                price: "6.99",
                doller: "$",
              },
            ].map(({ id, month, price, doller }) => {
              return (
                <div key={id} className="grid-card-3">
                  <div className="bg-white w-fit p-12 flex flex-col items-center space-y-5 rounded-[10px] max-sm:mx-auto">
                    <img src={camera} alt="" />
                    <p className="text-[16px] font-medium">{month}</p>
                    <div className="flex flex-col -space-y-4 items-center">
                      <h1 className="text-[20px] font-medium">
                        {doller}
                        <span className="text-[48px] font-bold">{price}</span>
                      </h1>
                      <p className="text-[12px] text-[#737780]">per month</p>
                    </div>
                    <button className="bg-[#FF3434] py-[18px] px-14 text-white rounded-[4px]">
                      GET THE DEAL
                    </button>
                    <div className="flex items-center space-x-2">
                      <img src={safe} alt="" />
                      <p className="text-[#3D424D] text-[16px]">
                        30-days money-back guarantee
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Subscribe;
