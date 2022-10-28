import React, { useEffect, useState } from "react";
import { FiEdit, FiPlusCircle, FiTrash2, FiUploadCloud } from "react-icons/fi";
import { Link } from "react-router-dom";
import VendorNav from "../../components/vendor/VendorNav";

const Products = () => {
  const [isShowForm, setIsShowForm] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div
        className="w-full bg-[#edf4f6] min-h-screen"
        data-aos="fade-in"
        data-aos-duration="2000"
      >
        <div className="w-full flex">
          <VendorNav />

          {/* Main content */}
          <div className="main w-full py-7 px-5 md:px-6 lg:px-14 flex flex-col items-start gap-8 md:ml-48 ml-10">
            <div className="w-full flex justify-end">
              <button
                onClick={() => setIsShowForm(true)}
                className="bg-orange-400 flex items-center gap-2 p-2 rounded-full md:rounded text-white hover:translate-y-1 duration-500 hover:shadow"
              >
                <button className="hidden md:block">Add Product</button>
                <FiPlusCircle size={20} />
              </button>
            </div>
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-3">
              <div className="w-full flex bg-white rounded duration-700 hover:scale-105 hover:translate-y-4 hover:shadow-lg">
                <img
                  className="w-32 h-auto"
                  src="https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aGVhZHNldHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />

                <div className="mt-3 flex flex-col items-start px-3">
                  <h1 className="font-bold text-xl">VR Headset</h1>
                  <p className="text-sm text-gray-500 mt-1">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Facere ullam in officia dolorem incidunt, libero aspernatur
                    magni error dicta doloremque...
                  </p>
                  <p className="text-md text-orange-700 mt-3 font-bold">
                    $67.89
                  </p>

                  <div className="w-full justify-end flex py-2 gap-4">
                    <FiTrash2
                      size={20}
                      className="cursor-pointer duration-700 hover:text-red-400"
                    />
                    <FiEdit
                      size={20}
                      className="cursor-pointer duration-700 hover:text-sky-400"
                    />
                    <FiUploadCloud
                      size={20}
                      className="cursor-pointer duration-700 hover:text-green-400"
                    />
                  </div>
                </div>
              </div>

              <div className="w-full flex bg-white rounded duration-700 hover:scale-105 hover:translate-y-4 hover:shadow-lg">
                <img
                  className="w-36 h-auto"
                  src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNldHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />

                <div className="mt-3 flex flex-col items-start px-3">
                  <h1 className="font-bold text-xl">VR Headset</h1>
                  <p className="text-sm text-gray-500 mt-1">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Facere ullam in officia dolorem incidunt, libero aspernatur
                    magni error dicta doloremque...
                  </p>
                  <p className="text-md text-orange-700 mt-3 font-bold">
                    $67.89
                  </p>

                  <div className="w-full justify-end flex py-2 gap-4">
                    <FiTrash2
                      size={20}
                      className="cursor-pointer duration-700 hover:text-red-400"
                    />
                    <FiEdit
                      size={20}
                      className="cursor-pointer duration-700 hover:text-sky-400"
                    />
                    <FiUploadCloud
                      size={20}
                      className="cursor-pointer duration-700 hover:text-green-400"
                    />
                  </div>
                </div>
              </div>

              <div className="w-full flex bg-white rounded duration-700 hover:scale-105 hover:translate-y-4 hover:shadow-lg">
                <img
                  className="w-32 h-auto"
                  src="https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aGVhZHNldHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />

                <div className="mt-3 flex flex-col items-start px-3">
                  <h1 className="font-bold text-xl">VR Headset</h1>
                  <p className="text-sm text-gray-500 mt-1">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Facere ullam in officia dolorem incidunt, libero aspernatur
                    magni error dicta doloremque...
                  </p>
                  <p className="text-md text-orange-700 mt-3 font-bold">
                    $67.89
                  </p>

                  <div className="w-full justify-end flex py-2 gap-4">
                    <FiTrash2
                      size={20}
                      className="cursor-pointer duration-700 hover:text-red-400"
                    />
                    <FiEdit
                      size={20}
                      className="cursor-pointer duration-700 hover:text-sky-400"
                    />
                    <FiUploadCloud
                      size={20}
                      className="cursor-pointer duration-700 hover:text-green-400"
                    />
                  </div>
                </div>
              </div>

              <div className="w-full flex bg-white rounded duration-700 hover:scale-105 hover:translate-y-4 hover:shadow-lg">
                <img
                  className="w-32 h-auto"
                  src="https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aGVhZHNldHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />

                <div className="mt-3 flex flex-col items-start px-3">
                  <h1 className="font-bold text-xl">VR Headset</h1>
                  <p className="text-sm text-gray-500 mt-1">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Facere ullam in officia dolorem incidunt, libero aspernatur
                    magni error dicta doloremque...
                  </p>
                  <p className="text-md text-orange-700 mt-3 font-bold">
                    $67.89
                  </p>

                  <div className="w-full justify-end flex py-2 gap-4">
                    <FiTrash2
                      size={20}
                      className="cursor-pointer duration-700 hover:text-red-400"
                    />
                    <FiEdit
                      size={20}
                      className="cursor-pointer duration-700 hover:text-sky-400"
                    />
                    <FiUploadCloud
                      size={20}
                      className="cursor-pointer duration-700 hover:text-green-400"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Add product form */}
        {isShowForm ? (
          <div className="w-full flex justify-center duration-500">
            <div className="w-96 md:w-[50rem] flex flex-col absolute top-20 bg-orange-400 p-16 mx-96 rounded shadow-xl border-2">
              <div className="w-full flex justify-end">
                <span
                  onClick={() => setIsShowForm(false)}
                  className="p-1 bg-red-400 text-white w-6 h-6 flex justify-center items-center rounded-full hover:bg-red-500 cursor-pointer duration-500"
                >
                  &times;
                </span>
              </div>
              <h1 className="font-bold text-xl text-white">Add Product</h1>
              <form className="mt-3">
                <input
                  type="text"
                  placeholder="Enter product name"
                  required
                  className="w-full px-3 rounded p-1 bg-transparent ring-2 ring-white text-white placeholder:text-gray-200 outline-none focus:ring-orange-300 duration-500 mb-4"
                />

                <input
                  type="text"
                  placeholder="Enter product price"
                  required
                  className="w-full px-3 rounded p-1 bg-transparent ring-2 ring-white text-white placeholder:text-gray-200 outline-none focus:ring-orange-300 duration-500 mb-4"
                />

                <select
                  required
                  className="w-full px-3 rounded p-1 bg-transparent ring-2 ring-white text-white placeholder:text-gray-200 outline-none focus:ring-orange-300 duration-500 mb-4"
                >
                  <option value="null" disabled selected>
                    Select category
                  </option>
                  <option value="clothes">Clothes</option>
                  <option value="jewelries">Jewelries</option>
                  <option value="computing">Computing</option>
                  <option value="gaming">Gaming</option>
                </select>

                <input
                  type="file"
                  placeholder="Enter product price"
                  required
                  className="w-full px-3 rounded p-1 bg-transparent ring-2 ring-white text-white placeholder:text-gray-200 outline-none focus:ring-orange-300 duration-500 mb-4"
                />

                <textarea
                  className="w-full px-3 rounded p-1 bg-transparent ring-2 ring-white text-white placeholder:text-gray-200 outline-none focus:ring-orange-300 duration-500 mb-4"
                  placeholder="Enter product description"
                  required
                ></textarea>

                <button
                  type="submit"
                  className="p-2 bg-white rounded hover:bg-gray-100 hover:translate-y-1 duration-500"
                >
                  Publish product
                </button>
              </form>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Products;
