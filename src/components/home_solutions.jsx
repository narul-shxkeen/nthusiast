import React from "react";
import Carousel from "./custom_carousel";

function HomeSolutions(){
    return <>
    <div className="flex flex-col justify-center items-center py-11 px-60">
     
        <h3 className="w-1/2 roboto-medium text-4xl text-center leading-normal">Staying up-to-date with latest campus events made easy</h3>
     <p className="roboto-regular text-[#FD7F4E] mt-3 text-lg">Tech based solutions to enable students</p>
    </div>
    <Carousel/>
    </>
}

export default HomeSolutions;