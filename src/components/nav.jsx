import React from "react";
import { useState } from "react";

function Navbar({trigger}){
    
    return <>
    <nav className="flex justify-around py-5 items-center">
        <div className="flex justify-center items-center gap-2">
<img className="relative bottom-1" src="/images/logo.png"/>
<p className="roboto-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#F15858] to-[#F67E4F]">Nthusiast</p>
        </div>
<div className="flex roboto-regular gap-9">
    <button><a className={`flex gap-1 items-center ${trigger='home'?'underline decoration-[#FD7F4E] underline-offset-4':''}`}><p className="roboto-regular text-lg">Home</p><img className="h-1"src="/images/Group 1button_arrow.png"></img></a></button>
    <button><a className="flex gap-1 items-center"><p className="roboto-regular text-lg">Solutions</p><img className="h-1"src="/images/Group 1button_arrow.png"></img></a></button>
    <button><a className="flex gap-1 items-center"><p className="roboto-regular text-lg">Features</p><img className="h-1"src="/images/Group 1button_arrow.png"></img></a></button>
    <button><a className="flex gap-1 items-center"><p className="roboto-regular text-lg">About</p><img className="h-1"src="/images/Group 1button_arrow.png"></img></a></button>
    <button><a className="flex gap-1 items-center"><p className="roboto-regular text-lg">Contact</p><img className="h-1"src="/images/Group 1button_arrow.png"></img></a></button>
</div>
<button className="flex bg-gradient-to-r from-[#F15858] to-[#F67E4F] h-10 w-40 rounded-[20px] items-center justify-center gap-2">
<p className="roboto-regular text-lg text-white">Get the App</p><img src="./images/arrow.png"/>
</button>
    </nav>
    </>
}

export default Navbar