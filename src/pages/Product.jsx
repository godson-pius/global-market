import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { HiOutlineStar, HiStar } from "react-icons/hi";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
} from "react-share";
import { FiCalendar, FiEdit3, FiFacebook, FiLinkedin, FiTwitter } from "react-icons/fi";
import { AiOutlineWhatsApp } from "react-icons/ai";

const Product = () => {
  const [quantity, setQuantity] = useState(1);
  const [isDescription, setIsDescription] = useState(true);
  const [isReview, setIsReview] = useState(false);

  const showDescription = () => {
    setIsDescription(true);
    setIsReview(false);
  };

  const showReview = () => {
    setIsReview(true);
    setIsDescription(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <>
      <div className="w-full" data-aos="fade-in" data-aos-duration="2000">
        <div className="w-full mt-16 gap-5 justify-center lg:flex px-10 items-center">
          {/* Product Images */}
          <div className="md:w-[40rem] lg:w-[45rem]">
            <Carousel>
              <div>
                <img
                  src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/41/109817/1.jpg?8356"
                  alt="Product Image"
                  className="w-10"
                />
              </div>

              <div>
                <img
                  src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/41/109817/2.jpg?8356"
                  alt="Product Image"
                  className="w-10"
                />
              </div>

              <div>
                <img
                  src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/41/109817/3.jpg?8356"
                  alt="Product Image"
                  className="w-10"
                />
              </div>

              <div>
                <img
                  src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/41/109817/4.jpg?8356"
                  alt="Product Image"
                  className="w-10"
                />
              </div>
            </Carousel>
          </div>

          {/* Product Details */}
          <div className="w-full flex flex-col details">
            <h1 className="text-xl">
              Summer Men's Loose Short Sleeve Hawaii Beach Shirt - Grey
            </h1>

            {/* Ratings */}
            <div className="rating flex items-end gap-2">
              <div className="stars flex">
                <span className="text-orange-300 text-xl">
                  <HiStar />
                </span>
                <span className="text-orange-300 text-xl">
                  <HiStar />
                </span>
                <span className="text-orange-300 text-xl">
                  <HiStar />
                </span>
                <span className="text-orange-300 text-xl">
                  <HiOutlineStar />
                </span>
                <span className="text-orange-300 text-xl">
                  <HiOutlineStar />
                </span>
              </div>

              <h5 className="text-xs">Satisfied</h5>
            </div>

            {/* Price */}
            <h1 className="font-bold text-xl mt-2 text-orange-600">$3000</h1>

            {/* Description */}
            <p className="text-sm mt-5 text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
              minima sint blanditiis alias? Consectetur, magni. Nesciunt
              doloremque iure sunt quibusdam asperiores deleniti, optio placeat
              earum amet tenetur laborum sit maxime? Tempore temporibus, dicta
              dignissimos numquam, quod minus aut fugiat molestiae mollitia rem
              quis expedita consequuntur quos dolor placeat, beatae labore quas
              praesentium exercitationem? Tempora in vitae minus voluptate
              consectetur, illo illum magnam sequi voluptas iure aliquam
              possimus pariatur perspiciatis, harum deleniti et. Ex sunt velit
              enim minima culpa autem dolores suscipit voluptatum aliquam.
              Aperiam eligendi deserunt odit reprehenderit! Reiciendis ratione
              neque ad delectus unde. Libero sunt perspiciatis saepe. Illum,
              dicta.
            </p>

            {/* Add to cart */}
            <div className="flex gap-3 mt-8 items-center">
              <input
                type="number"
                onChange={(e) => setQuantity(e.target.value)}
                value={quantity}
                className="ring-2 ring-orange-300 w-20 outline-none duration-500 focus:translate-x-1 focus:shadow-lg text-center p-2 font-bold rounded"
              />

              <button className="bg-orange-400 text-white p-[0.7rem] rounded text-sm duration-500 hover:translate-x-[-2px] hover:shadow-lg">
                Add to cart
              </button>
            </div>

            {/* Category and Share */}
            <div className="share">
              <p className="mt-3 text-sm text-gray-700">
                Category: <span className="text-gray-600">Clothing</span>
              </p>
              <div className="flex items-center gap-2 mt-2">
                <p className="text-sm text-gray-700">Share this product: </p>
                <FacebookShareButton
                  hashtag={"#metanosdog..."}
                  url="https://www.worldbraintechnology.com/academy/"
                  quote={"I saw this awesome product on Meta Nosdog"}
                >
                  <FiFacebook
                    size={15}
                    round={true}
                    className="hover:translate-y-1 hover:shadow-lg duration-500 text-gray-400"
                  />
                </FacebookShareButton>

                <TwitterShareButton
                  title={"Bolt from Meta Nosdog"}
                  hashtags={"#metanosdog..."}
                  via=""
                >
                  <FiTwitter
                    size={15}
                    round={true}
                    className="hover:translate-y-1 hover:shadow-lg duration-500 text-gray-400"
                  />
                </TwitterShareButton>

                <WhatsappShareButton
                  title={"Bolt from Meta Nosdog"}
                  separator={"https://www.worldbraintechnology.com/"}
                >
                  <AiOutlineWhatsApp
                    size={17}
                    round={true}
                    className="hover:translate-y-1 hover:shadow-lg duration-500 text-gray-400"
                  />
                </WhatsappShareButton>

                <LinkedinShareButton
                  title="Bolt from Meta Nosdog"
                  source="https://www.worldbraintechnology.com/"
                  summary="Enjoy"
                >
                  <FiLinkedin
                    size={15}
                    round={true}
                    className="hover:translate-y-1 hover:shadow-lg duration-500 text-gray-400"
                  />
                </LinkedinShareButton>
              </div>
            </div>
          </div>
        </div>
        {/* <hr className="mx-20"/> */}

        {/* Description and Review */}
        <div className="w-full py-10">
          <div className="w-full flex mb-7 justify-center gap-7 items-center">
            <p
              onClick={showDescription}
              className={`text-gray-600 text-sm hover:text-orange-300 cursor-pointer duration-500 ${
                isDescription ? "font-bold text-orange-400" : null
              }`}
            >
              Description
            </p>
            <p
              onClick={showReview}
              className={`text-gray-600 text-sm hover:text-orange-300 cursor-pointer duration-500 ${
                isReview ? "font-bold text-orange-400" : null
              }`}
            >
              Review
            </p>
          </div>

          <div className="w-full justify-center text-sm text-gray-600 px-4 md:px-20 content">
            {isDescription ? (
              <p data-aos="flip-right">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
                quis qui, similique atque quibusdam delectus molestias
                exercitationem, debitis eveniet reprehenderit nesciunt eos hic
                quidem quaerat aut ab! Magnam perferendis perspiciatis corrupti,
                ullam enim eum praesentium. Itaque saepe sapiente illum
                obcaecati, deleniti reiciendis officia asperiores odio nostrum
                inventore corrupti cumque facere ducimus debitis laudantium
                dolor commodi temporibus numquam, culpa, placeat aperiam!
              </p>
            ) : null}

            {isReview ? (
              <div className="w-full" data-aos="flip-left">
                <div className="reviews grid md:grid-cols-2 gap-4 py-5">
                  <div className="single w-full p-5 bg-gray-100 rounded hover:shadow-lg duration-500">
                    <div className="flex justify-between">
                      <h1 className="font-bold">John Lake</h1>
                      <div className="stars flex">
                        <span className="text-orange-300 text-xl">
                          <HiStar />
                        </span>
                        <span className="text-orange-300 text-xl">
                          <HiStar />
                        </span>
                        <span className="text-orange-300 text-xl">
                          <HiStar />
                        </span>
                        <span className="text-orange-300 text-xl">
                          <HiOutlineStar />
                        </span>
                        <span className="text-orange-300 text-xl">
                          <HiOutlineStar />
                        </span>
                      </div>
                    </div> <hr className="my-3" />

                    {/* desc */}
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit amet, iure qui delectus cupiditate quia nihil facere corporis quisquam id nam rerum blanditiis odio est quo consequatur aliquam iste quibusdam velit beatae, suscipit corrupti dicta. Doloribus quibusdam, laborum tenetur amet ipsa veniam eligendi suscipit aut impedit tempora alias quo quam.</p>

                    {/* Date */}
                    <div className="flex items-center mt-3 gap-2">
                      <FiCalendar className="text-orange-400" />
                      <p className="text-xs text-orange-400">23/08/2022</p>
                    </div>
                  </div>

                  <div className="single w-full p-5 bg-gray-100 rounded hover:shadow-lg duration-500">
                    <div className="flex justify-between">
                      <h1 className="font-bold">Mike Houstin</h1>
                      <div className="stars flex">
                        <span className="text-orange-300 text-xl">
                          <HiStar />
                        </span>
                        <span className="text-orange-300 text-xl">
                          <HiStar />
                        </span>
                        <span className="text-orange-300 text-xl">
                          <HiStar />
                        </span>
                        <span className="text-orange-300 text-xl">
                          <HiOutlineStar />
                        </span>
                        <span className="text-orange-300 text-xl">
                          <HiOutlineStar />
                        </span>
                      </div>
                    </div> <hr className="my-3" />

                    {/* desc */}
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit amet, iure qui delectus cupiditate quia nihil facere corporis quisquam id nam rerum blanditiis odio est quo consequatur aliquam iste quibusdam velit beatae, suscipit corrupti dicta. Doloribus quibusdam, laborum tenetur amet ipsa veniam eligendi suscipit aut impedit tempora alias quo quam.</p>

                    {/* Date */}
                    <div className="flex items-center mt-3 gap-2">
                      <FiCalendar className="text-orange-400" />
                      <p className="text-xs text-orange-400">23/08/2022</p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex items-center gap-2 py-3">
                <FiEdit3 />
                <h1>Add review</h1>
                </div>

                <div
                  className="w-full flex flex-col bg-gray-200 p-5 rounded"
                >
                  <form>
                    <input
                      type="text"
                      readOnly
                      className="w-full p-1 ring-2 ring-gray-400 outline-none duration-500 px-3 text-sm font-medium focus:bg-gray-300 mb-3 placeholder:italic bg-gray-200"
                      value="John Lake"
                    />

                    <select className="w-full p-1 ring-2 ring-white outline-none duration-500 px-3 text-sm font-medium focus:bg-orange-200 mb-3">
                      <option value="null" disabled selected>
                        Rate product
                      </option>
                      <option value="1">Not satisfactory (1)</option>
                      <option value="2">Almost satisfactory (2)</option>
                      <option value="3">satisfactory (3)</option>
                      <option value="4">Very satisfactory (4)</option>
                      <option value="5">Excellent (5)</option>
                    </select>

                    <textarea className="w-full p-1 ring-2 ring-white outline-none duration-500 px-3 text-sm font-medium focus:bg-orange-200"></textarea>

                    <button className='w-full bg-orange-300 p-2 text-black font-bold hover:shadow-lg duration-700 mt-4 hover:text-white'>Post review</button>
                  </form>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
