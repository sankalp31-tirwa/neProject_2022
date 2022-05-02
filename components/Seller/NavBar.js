import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href={"/Seller/seller"}>
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <span className="font-bold ml-3 text-xl">SELLER PAGE</span>
            </a>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href={"/Seller/Tour"}>
              <a className="mr-5 hover:text-gray-900">Tour</a>
            </Link>
            <Link href={"/Seller/bike"}>
              <a className="mr-5 hover:text-gray-900">Bike</a>
            </Link>
            <Link href={"/Seller/Cab"}>
              <a className="mr-5 hover:text-gray-900">Cab</a>
            </Link>
          </nav>
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            LogOut
          </button>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
