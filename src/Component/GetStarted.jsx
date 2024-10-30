import React, { useState } from "react";

function GetStarted() {
    const [email, setEmail] = useState("");
    const [subscribe, setSubsceibe] = useState()
  
  return (
    <>
      <section className="">
        <div className="cus-container">
          <div className="py-12 md:py-28 lg:py-[163px] space-y-8 lg:space-y-12">
            <div className="space-y-3">
              <h1 className="text-[28px] md:text-[36px] lg:text-[48px] text-white font-bold text-center">
                Start for your first 30 days.
              </h1>
              <p className="text-white text-[18px] text-center">
                Ready to watch? Enter your email to create or restart your
                membership.
              </p>
            </div>
            <div className="relative w-fit mx-auto">
              <input
                className="py-3 md:py-5 pl-2 md:pl-5 outline-none w-96 md:w-[500px] lg:w-[748px] rounded-[5px]"
                type="email"
                placeholder="Type your email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <button onClick={()=>setSubsceibe(alert("You have subscribed"))} className="text-white font-medium py-3 bg-[#FF3434] rounded-[5px] px-4 md:py-5 md:px-10 absolute top-0 right-0">
                GET STARTED
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default GetStarted;
