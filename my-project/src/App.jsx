import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Items from "./components/Items/Items";
import Banner from "./components/Banner/Banner";
import PopularItems from "./components/PopularItems/PopularItems";
import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer";


const App = () => {
  return <div className="overflow-x-hidden bg-white2 text-dark">
    <div className="relative overflow-hidden">
    <Navbar/>
    <Hero/>
    </div>
    <Items/>
    <Banner/>
    <PopularItems/>
    <Testimonial/>
    <Footer/>
   
  </div>;
};

export default App;