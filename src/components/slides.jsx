import React from "react";

function Slide1(){
    return <>
    <div className="flex justify-around items-center">
        <img src="/images/carousel_1.svg"/>
        <div className="flex flex-col w-1/3 gap-8 justify-start items-start relative right-28">
            <h1 className="rubik-bold text-white text-4xl">PERSONALIZED EVENT ALERTS</h1>
            <p className="roboto-regular text-lg text-white">You can explore upcoming events and also auto-subscribe to clubs in order to get notification alerts about all their events.</p>
            <button><h2 className="roboto-bold text-xl text-white underline underline-offset-4">SEE DETAILS</h2></button>
        </div>
    </div>
    </>
}

function Slide2(){
    return <>
  <div className="flex justify-around items-center gap-0">
        <img src="/images/carousel_2.svg"/>
        <div className="flex flex-col w-1/3 gap-8 justify-start items-start relative right-28">
            <h1 className="rubik-bold text-white text-4xl">EVENTS CALENDAR SO YOU NEVER MISS ANY EVENTS</h1>
            <p className="roboto-regular text-lg text-white">Connect Nthusiast with Google Calendar and become a scheduling wiz in no time.</p>
            <button><h2 className="roboto-bold text-xl text-white underline underline-offset-4">SEE DETAILS</h2></button>
        </div>
    </div>
    </>
}

function Slide3(){
    return <>
    <div className="flex justify-around items-center">
        <img src="/images/carousel_3.svg"/>
        <div className="flex flex-col w-1/3 gap-8 justify-start items-start relative right-28">
            <h1 className="rubik-bold text-white text-4xl">SEE EACH EVENTS DETAILS TO GAUGE YOUR INTEREST</h1>
            <p className="roboto-regular text-lg text-white">Explore new clubs to break through the horizons of your interests.</p>
            <button><h2 className="roboto-bold text-xl text-white underline underline-offset-4">SEE DETAILS</h2></button>
        </div>
    </div>
    </>
}

export {Slide1, Slide2, Slide3};