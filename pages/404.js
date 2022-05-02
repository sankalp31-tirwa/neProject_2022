import React from "react";
import Link from "next/link";
import Image from "next/image";

const error = () => {
  return (
    <div>
      <div
        class="flex
    items-center
    justify-center px-4 py-2 bg-white rounded-md shadow-xl"
      >
        <section class="text-gray-600 body-font">
          <div class="container px-5 py-24 mx-auto flex flex-col">
            <div class="flex flex-col sm:flex-row mt-10">
              <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div class="">
                  <Image
                    src="/404.png"
                    alt="Picture of the author"
                    width="397px"
                    height="547px"
                  />
                </div>
                <div class="flex flex-col items-center text-center justify-center">
                  <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                </div>
              </div>

              <div class="pt-16 flex flex-col items-center">
                <h1 class="font-bold text-blue-600 text-9xl">404</h1>

                <h6 class="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
                  <span class="text-red-500">Oops!</span> You must have picked
                  the wrong door because I haven't been able to lay my eye on
                  the page you've been searching for.
                </h6>

                <p class="mb-8 text-center text-gray-500 md:text-lg">
                  The page you’re looking for doesn’t exist.
                </p>
                <Link href={"/"}>
                  <button class="flex-shrink-0 text-white bg-blue-600 border-0 py-2 px-8 focus:outline-none hover:bg-blue-400 rounded text-lg mt-10 sm:mt-0">
                    Go Home
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default error;
