import React, { useEffect } from "react";
import VendorNav from "../../components/vendor/VendorNav";

const VendorTickets = () => {
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
            <div className="w-full">
              <h1 className="text-2xl font-bold">Raise Ticket</h1>
              <form className="w-full mt-5 flex flex-col gap-4 py-5">
                <input
                  type="text"
                  className="w-full p-2 rounded bg-gray-200 focus:ring-2 focus:ring-orange-300 outline-none duration-500"
                  readOnly
                  value="Alan Man"
                />

                <div className="flex gap-3">
                  <input
                    type="text"
                    required
                    className="w-full p-2 focus:placeholder:text-transparent rounded focus:ring-2 focus:ring-orange-300 outline-none duration-500"
                    placeholder="Subject"
                  />

                  <select
                    className="w-full p-2 rounded focus:ring-2 focus:ring-orange-300 outline-none duration-500"
                    required
                  >
                    <option value="status" disabled selected>
                      Status
                    </option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </div>
                <textarea
                  rows="9"
                  className="w-full p-2 rounded focus:placeholder:text-transparent focus:ring-2 focus:ring-orange-300 outline-none duration-500 resize-none"
                  placeholder="Type message..."
                ></textarea>

                <div className="flex gap-3 w-full">
                  <button
                    type="submit"
                    className="bg-orange-400 p-2 text-orange-100 rounded hover:translate-y-1 duration-500"
                  >
                    Submit Ticket
                  </button>
                  <button
                    type="reset"
                    className="text-sky-100 bg-sky-400 p-2 rounded hover:translate-y-1 duration-500"
                  >
                    Reset
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VendorTickets;
