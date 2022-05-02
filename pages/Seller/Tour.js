import React from "react";
import NavBar from "../../components/Seller/NavBar";

const tour = () => {
  return (
    <>
      <NavBar />
      <h1 className="text-center sm:text-4xl text-3xl font-bold title-font mb-2 text-gray-900">
        Tour
      </h1>

      <div className="container px-5 py-8 mx-auto border mt-6 border-gray-300">
        <h1 className="text-center sm:text-4xl  mb-2">
          There is only a form for now
        </h1>
      </div>
    </>
  );
};

export default tour;
