import React from "react";

function HomeLanding() {
  return (
    <>
      <div className="flex justify-around items-center py-11">
        <div className="w-1/3 ml-8">
          <h1 className="roboto-bold text-4xl">
            Connecting students with campus events
          </h1>
          <p className="roboto-regular text-lg mt-4">
            A one-stop solution for all the events happening on campus. Meeting,
            Connecting, Creating.{" "}
          </p>
          <div className="flex gap-10 mt-4">
            <button className="flex bg-gradient-to-r from-[#F15858] to-[#F67E4F] h-10 w-40 rounded-[20px] items-center justify-center gap-2">
              <p className="roboto-regular text-lg text-white">Get the App</p>
              <img src="./images/arrow.png" />
            </button>
            <button className="flex h-10 w-40 rounded-[20px] items-center justify-center gap-2 border-[#FC7E4D] border-2 hover:bg-[#FC7E4D] text-[#FC7E4D] hover:text-white">
              <p className="roboto-regular text-lg ">Know More</p>
            </button>
          </div>
        </div>
        <div>
          <img className="h-[70vh] w-auto" src="/images/hero_landing.svg" />
        </div>
      </div>
    </>
  );
}

export default HomeLanding;
