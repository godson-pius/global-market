import React from "react";
import { Link } from 'react-router-dom'
import react from "../assets/react.svg";

const LatestProducts = () => {
  return (
    <>
      <div className="featured flex flex-col w-full">
        <h1 className="text-lg mb-1">Latest Products</h1> <hr />
        <div className="flex items-center mt-4 gap-2">
          <img src={react} alt="" />
          <div className="flex flex-col">
            <Link className="text-sm hover:text-orange-400 duration-500">Television HDR Smart</Link>
            <span className="font-extrabold text-md text-orange-500">
              ₦150,000
            </span>
          </div>
        </div>
        <div className="flex items-center mt-4 gap-2">
          <img src={react} alt="" />
          <div className="flex flex-col">
            <Link className="text-sm hover:text-orange-400 duration-500">Television HDR Smart</Link>
            <span className="font-extrabold text-md text-orange-500">
              ₦150,000
            </span>
          </div>
        </div>
        <div className="flex items-center mt-4 gap-2">
          <img src={react} alt="" />
          <div className="flex flex-col">
            <Link className="text-sm hover:text-orange-400 duration-500">Television HDR Smart</Link>
            <span className="font-extrabold text-md text-orange-500">
              ₦150,000
            </span>
          </div>
        </div>
        <div className="flex items-center mt-4 gap-2">
          <img src={react} alt="" />
          <div className="flex flex-col">
            <Link className="text-sm hover:text-orange-400 duration-500">Television HDR Smart</Link>
            <span className="font-extrabold text-md text-orange-500">
              ₦150,000
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestProducts;
