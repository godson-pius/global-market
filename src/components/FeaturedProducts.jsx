import React from "react";
import react from "../assets/react.svg";

const FeaturedProducts = () => {
  return (
    <>
      <div className="w-full featured md:flex flex-col hidden">
        <h1 className="text-lg mb-1">Featured Products</h1> <hr />
        <div className="flex items-center mt-4 gap-2">
          <img src={react} alt="" />
          <div className="flex flex-col">
            <h3 className="text-sm">Television HDR Smart</h3>
            <span className="font-extrabold text-md text-orange-500">
              ₦150,000
            </span>
          </div>
        </div>
        <div className="flex items-center mt-4 gap-2">
          <img src={react} alt="" />
          <div className="flex flex-col">
            <h3 className="text-sm">Television HDR Smart</h3>
            <span className="font-extrabold text-md text-orange-500">
              ₦150,000
            </span>
          </div>
        </div>
        <div className="flex items-center mt-4 gap-2">
          <img src={react} alt="" />
          <div className="flex flex-col">
            <h3 className="text-sm">Television HDR Smart</h3>
            <span className="font-extrabold text-md text-orange-500">
              ₦150,000
            </span>
          </div>
        </div>
        <div className="flex items-center mt-4 gap-2">
          <img src={react} alt="" />
          <div className="flex flex-col">
            <h3 className="text-sm">Television HDR Smart</h3>
            <span className="font-extrabold text-md text-orange-500">
              ₦150,000
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedProducts;
