import React, { useEffect } from "react";
import AllCat from "../components/AllCat";
import Hero from "../components/Hero";
import Info from "../components/Info";
import Newsletter from "../components/Newsletter";
import Recommended from "../components/Recommended";
import TopSelling from "../components/TopSelling";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="w-full" data-aos="fade-in" data-aos-duration="2000">
        <Info />
        <Hero />
        <TopSelling />
        <Recommended />
        <AllCat />
        <Newsletter />
      </div>
    </>
  );
};

export default Home;
