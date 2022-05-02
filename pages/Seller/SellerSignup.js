import React from "react";
import Link from "next/link";

const Sellermain = () => {
  return (
    <>
      <div className="bg-grey-lighter my-48">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="fullname"
              placeholder="Full Name"
            />

            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
            />

            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
            />
            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="confirm_password"
              placeholder="Confirm Password"
            />

            <button
              type="submit"
              className="border-4 border-black w-full text-center py-3 rounded bg-green text-black hover:bg-green-dark focus:outline-none my-1"
            >
              Create Account
            </button>

            <div className="text-center text-sm text-grey-dark mt-4">
              By signing up, you agree to the
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Terms of Service
              </a>{" "}
              and
              <a
                className="no-underline border-b border-grey-dark text-grey-dark"
                href="#"
              >
                Privacy Policy
              </a>
            </div>
          </div>
          <div className="flex flex-row justify-center">
            <div className="text-grey-dark mt-6">
              <a className="no-underline border-b border-blue text-blue">
                Already have an account? <Link href="/Seller/SellerLogin">Login</Link>
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer className="flex-shrink-0  mt-2 border-t-2 border-black">
        <Link passHref href="/">
          <h2 className="h-16 w-full flex justify-center py-2 px-4 font-medium  text-white bg-pink-600 hover:bg-pink-700">
            Go Back to Home Page
          </h2>
        </Link>
      </footer>
    </>
  );
};

export default Sellermain;
