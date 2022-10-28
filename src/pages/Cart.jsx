import React, { useEffect } from "react";
import { FiFileText, FiMoreHorizontal, FiX } from "react-icons/fi";

const Cart = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <>
      <div className="w-full" data-aos="fade-in" data-aos-duration="2000">
        <div className="w-full py-10">
          <h1 className="text-3xl font-bold md:mx-12 mx-2">Your Cart</h1>

          {/* Order summary */}
          <div className="w-full px-2 md:px-12 py-5 grid grid-cols-1 md:flex gap-3">
            <div className="recent__order__content w-full flex flex-col gap-4">
              <div className="each w-full bg-orange-100 p-5 rounded flex justify-between items-center duration-500 hover:translate-y-[-3px]">
                <div className="each__content">
                  <h1 className="font-bold text-sm">Nike Air Max 90</h1>
                  <p className="text-gray-400 text-xs">Product</p>
                </div>

                <div className="each__content">
                  <h1 className="font-bold text-sm">$635.67</h1>
                  <p className="text-gray-400 text-xs">Price</p>
                </div>

                <div className="each__content">
                  <input
                    type="number"
                    className="rounded-full p-1 bg-transparent ring-2 ring-orange-300 w-16 text-sm text-center"
                  />
                  {/* <p className="text-gray-400 text-xs">Quantity</p> */}
                </div>

                <div className="each__content flex items-center gap-1 ring-2 ring-orange-300 p-2 w-28 rounded-full justify-center hover:text-white hover:bg-orange-200 cursor-pointer duration-500">
                  <p className="text-black text-sm">$635.67</p>
                </div>

                <div className="each__content">
                  <FiX
                    size={20}
                    className="font-bold cursor-pointer ring-2 ring-orange-300 hover:bg-orange-200 rounded-full p-1"
                  />
                </div>
              </div>

              <div className="each w-full bg-orange-100 p-5 rounded flex justify-between items-center duration-500 hover:translate-y-[-3px]">
                <div className="each__content">
                  <h1 className="font-bold text-sm">Nike Air Max 90</h1>
                  <p className="text-gray-400 text-xs">Product</p>
                </div>

                <div className="each__content">
                  <h1 className="font-bold text-sm">$635.67</h1>
                  <p className="text-gray-400 text-xs">Price</p>
                </div>

                <div className="each__content">
                  <input
                    type="number"
                    className="rounded-full p-1 bg-transparent ring-2 ring-orange-300 w-16 text-sm text-center"
                  />
                  {/* <p className="text-gray-400 text-xs">Quantity</p> */}
                </div>

                <div className="each__content flex items-center gap-1 ring-2 ring-orange-300 p-2 w-28 rounded-full justify-center hover:text-white hover:bg-orange-200 cursor-pointer duration-500">
                  <p className="text-black text-sm">$635.67</p>
                </div>

                <div className="each__content">
                  <FiX
                    size={20}
                    className="font-bold cursor-pointer ring-2 ring-orange-300 hover:bg-orange-200 rounded-full p-1"
                  />
                </div>
              </div>

              <div className="each w-full bg-orange-100 p-5 rounded flex justify-between items-center duration-500 hover:translate-y-[-3px]">
                <div className="each__content">
                  <h1 className="font-bold text-sm">Nike Air Max 90</h1>
                  <p className="text-gray-400 text-xs">Product</p>
                </div>

                <div className="each__content">
                  <h1 className="font-bold text-sm">$635.67</h1>
                  <p className="text-gray-400 text-xs">Price</p>
                </div>

                <div className="each__content">
                  <input
                    type="number"
                    className="rounded-full p-1 bg-transparent ring-2 ring-orange-300 w-16 text-sm text-center"
                  />
                  {/* <p className="text-gray-400 text-xs">Quantity</p> */}
                </div>

                <div className="each__content flex items-center gap-1 ring-2 ring-orange-300 p-2 w-28 rounded-full justify-center hover:text-white hover:bg-orange-200 cursor-pointer duration-500">
                  <p className="text-black text-sm">$635.67</p>
                </div>

                <div className="each__content">
                  <FiX
                    size={20}
                    className="font-bold cursor-pointer ring-2 ring-orange-300 hover:bg-orange-200 rounded-full p-1"
                  />
                </div>
              </div>
            </div>

            <div className="cart bg-orange-300 w-96 p-4 rounded">
              <h1 className="font-bold mb-3">Order summary</h1>
              <hr />

              <div className="subtotal flex justify-between text-sm p-3 mt-2">
                <p>Subtotal</p>
                <p>$635</p>
              </div>

              <div className="subtotal flex justify-between text-sm p-3">
                <p>Shipping</p>
                <p>$0</p>
              </div>

              <div className="subtotal flex justify-between rounded-full text-sm bg-orange-200 p-3 mt-4">
                <p>Total</p>
                <p className="font-bold">$635</p>
              </div>

              <div className="flex gap-2">
                <button className="w-full text-xs bg-orange-600 rounded text-white p-2 font-bold hover:shadow-lg duration-700 mt-4 hover:text-orange-100">
                  PAY THROUGH US
                </button>

                <button className="w-full text-xs bg-orange-400 rounded text-white p-2 font-bold hover:shadow-lg duration-700 mt-4 hover:text-orange-100">
                  PAY DIRECT
                </button>
              </div>
            </div>
          </div>
          {/* <hr className="" /> */}

          <div className="info md:px-12 p-2">
            <h1 className="text-xl">Add billing address</h1>
            <span className="text-sm text-gray-400 font-bold">
              If left empty, account default address will be used
            </span>

            <input
              type="text"
              className="w-full p-1 ring-2 ring-orange-400 mt-3 outline-none duration-500 px-3 text-sm font-medium focus:bg-orange-200 mb-3 placeholder:italic rounded"
              placeholder="Billing address"
            />

            <div className="flex gap-2">
              <button className="w-full text-sm bg-orange-600 rounded text-white p-3 font-bold hover:shadow-lg duration-700 mt-2 hover:text-orange-100 hover:translate-y-1">
                PAY THROUGH US
              </button>
              <button className="w-full text-sm bg-orange-300 rounded text-white p-3 font-bold hover:shadow-lg duration-700 mt-2 hover:text-orange-100 hover:translate-y-1">
                PAY DIRECT
              </button>
            </div>
          </div>
        </div>{" "}
        {/* coNTAINER */}
      </div>
    </>
  );
};

export default Cart;
