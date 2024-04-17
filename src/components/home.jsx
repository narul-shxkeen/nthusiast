import React from "react";
import Navbar from "./nav";
import HomeLanding from "./home_landing";

function Home(){
    return <>
    <Navbar trigger="home"/>
    <HomeLanding/>
    </>
}

export default Home