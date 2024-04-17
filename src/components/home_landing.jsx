import React from "react";

function HomeLanding(){
    return <>
    <div className="flex justify-around items-center py-11">
        <div className="w-1/3 ml-8">
<h1 className="roboto-bold text-4xl">Connecting students with campus events</h1>
<p className="roboto-regular text-lg mt-4">A one-stop solution for all the events happening on campus. Meeting, Connecting, Creating.  </p>
<div className="flex gap-10 mt-4">
<button className="flex bg-gradient-to-r from-[#F15858] to-[#F67E4F] h-10 w-40 rounded-[20px] items-center justify-center gap-2">
<p className="roboto-regular text-lg text-white">Get the App</p><img src="./images/arrow.png"/>
</button>
    <button className="flex h-10 w-40 rounded-[20px] items-center justify-center gap-2"></button>
</div>
        </div>
        <div>
            <img className="h-[70vh] w-auto" src="/images/hero_img_landing.png"/>
        </div>
    </div></>
}

export default HomeLanding