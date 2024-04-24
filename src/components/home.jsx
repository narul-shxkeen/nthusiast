import React from "react";
import Navbar from "./nav";
import HomeLanding from "./home_landing";
import HomeSolutions from "./home_solutions";
import TESTIMONIALS from "./testimonials";
import Footer from "./footer";

function Home(){
    return <>
    <Navbar trigger="home"/>
    <HomeLanding/>
    <HomeSolutions/>
    <TESTIMONIALS/>
    <Footer/>
    </>
}

export default Home