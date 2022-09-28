import React from "react";
import {
  FiExternalLink,
  FiTruck,
  FiDownloadCloud,
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiLinkedin,
  FiLogIn,
  FiUserPlus,
  FiUser,
  FiShoppingCart,
  FiActivity,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import react from "../assets/react.svg";

const Navbar = () => {
  return (
    <>
      <div className="w-full flex flex-col gap-8">
        <div className="w-full hidden md:flex justify-between bg-orange-400 py-3 px-12">
          {/* First one */}
          <div className="flex gap-5">
            <div className="flex gap-2 items-center text-white font-black hover:text-orange-900">
              <FiExternalLink size={16} />
              <Link className="text-sm hover:text-bold duration-500" to="/vendor">
                Sell on Global Market
              </Link>
            </div>{" "}
            <span className="text-white">|</span>
            <div className="flex gap-2 items-center text-white font-black hover:text-orange-900">
              <FiTruck size={16} />
              <Link className="text-sm hover:text-bold duration-500" to="/">
                Track order
              </Link>
            </div>{" "}
            <span className="text-white">|</span>
            <div className="flex gap-2 items-center text-white font-black hover:text-orange-900">
              <FiDownloadCloud size={16} />
              <Link className="text-sm hover:text-bold duration-500" to="/">
                Download App
              </Link>
            </div>{" "}
            <span className="text-white">|</span>
            <div className="flex gap-2 items-center text-white font-black">
              <Link to="/" className="duration-300 hover:text-orange-900">
                <FiFacebook size={13} className="font-bold" />
              </Link>
              <Link to="/" className="duration-300 hover:text-orange-900">
                <FiInstagram size={13} className="font-bold" />
              </Link>
              <Link to="/" className="duration-300 hover:text-orange-900">
                <FiTwitter size={13} className="font-bold" />
              </Link>
              <Link to="/" className="duration-300 hover:text-orange-900">
                <FiLinkedin size={13} className="font-bold" />
              </Link>
            </div>
          </div>

          {/* Second one */}
          <div className="flex gap-5">
            <div className="flex gap-2 items-center text-white font-black hover:text-orange-900">
              <FiUserPlus size={16} />
              <Link className="text-sm hover:text-bold duration-500" to="/sign-up">
                Sign Up
              </Link>
            </div>{" "}
            <span className="text-white">|</span>
            <div className="flex gap-2 items-center text-white font-black hover:text-orange-900">
              <FiLogIn size={16} />
              <Link className="text-sm hover:text-bold duration-500" to="/sign-in">
                Sign In
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-between w-full md:px-12 px-7 py-5 md:py-0 items-center gap-2">
          <div className="first">
            <Link to="/">
              <img src={react} alt="" />
            </Link>
          </div>

          <div className="second">
            <div className="flex">
              <input
                className="rounded-l-full md:w-[48rem] text-orange-800 p-1 bg-gray-100 text-sm px-5 outline-none duration-300 focus:ring-1 focus:ring-orange-400"
                type="text"
                name="query"
                id="query"
                placeholder="What are you looking for..."
              />
              <button className="bg-orange-400 hover:bg-orange-600 duration-500 text-xs rounded-r-full p-2 text-white">
                Search
              </button>
            </div>
          </div>

          <div className="third flex gap-2 md:gap-5">
            <div className="flex gap-2 items-center text-slate-700 font-black hover:text-orange-400">
              <FiUser className="" size={16} />
              <Link
                className="hidden md:block text-sm hover:text-bold duration-500 hover:font-extrabold"
                to="/sign-in"
              >
                Account
              </Link>
            </div>{" "}
            <span className="hidden md:block text-slate-700">|</span>
            <div className="flex md:gap-5 items-center text-slate-700 font-black">
              <Link to="/" className="duration-300 hover:text-orange-900">
                <FiShoppingCart size={16} className="font-bold hover:text-orange-900 duration-500" />
              </Link>
              <Link
                to="/"
                className="hidden md:block duration-300 hover:text-orange-900"
              >
                <FiActivity size={16} className="font-bold hover:text-orange-900 duration-500" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
