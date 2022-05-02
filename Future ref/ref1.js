import React from "react";
import Link from "next/link";
 

const Bikeinfo = () => {
  return (
    <>

      <div className="rounded-lg shadow-lg bg-white max-w-sm border-8  ">
        <a href={"/product/wear-the-code"}>
          <img
            className="rounded-t-lg"
            src="https://static.autox.com/uploads/2016/12/m_royal-enfield-himalayan_18.jpg"
            alt=""
          />
        </a>
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-medium mb-2">
            Royal enfield himalayan
          </h5>
          <p className="text-gray-700 text-base mb-4">Basic details</p>
          <Link href={"/product/wear-the-code"}>
            <button
              type="button"
              className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Book Now
            </button>
          </Link>
        </div>
      </div>

    </>
  );
};

export default Bikeinfo;
