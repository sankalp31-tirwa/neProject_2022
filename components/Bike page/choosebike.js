import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Choosebike = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <div className="mx-10 mt-5 md:col-span-2">
        <form action="#" method="POST">
          <div className="sm:rounded-md">
            <div className="px-4 py-5 bg-white sm:p-6">
              <div className="mt-10 grid">
                <div className="grid grid-flow-row">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="relative z-0 mb-6 w-full group">
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="country"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Pick-up Location
                        </label>
                        <select
                          id="country"
                          name="country"
                          autoComplete="country-name"
                          className="|| mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                          <option>Gangtok</option>
                          <option>Namchi</option>
                          <option>Rangpo</option>
                        </select>
                      </div>
                    </div>

                    <div className="relative z-0 mb-6 w-full group">
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="country"
                          className="block text-sm font-medium text-gray-700"
                        >
                          No. of days
                        </label>
                        <input
                          className="|| mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          type="number"
                          id="days"
                          name="days"
                        />
                      </div>
                    </div>

                    <div className="relative z-0 mb-6 w-full group">
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="country"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Pick-up Time
                        </label>
                        <select
                          id="country"
                          name="country"
                          autoComplete="country-name"
                          className="|| mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                          <option>00:00 </option>
                          <option>01:00 </option>
                          <option>02:00 </option>
                          <option>03:00 </option>
                          <option>04:00 </option>
                          <option>05:00 </option>
                          <option>06:00 </option>
                          <option>07:00 </option>
                          <option>08:00 </option>
                          <option>09:00 </option>
                          <option>10:00 </option>
                          <option>11:00 </option>
                          <option>12:00 </option>
                          <option>13:00 </option>
                          <option>14:00 </option>
                          <option>15:00 </option>
                          <option>16:00 </option>
                          <option>17:00 </option>
                          <option>18:00 </option>
                          <option>19:00 </option>
                          <option>20:00 </option>
                          <option>21:00 </option>
                          <option>22:00 </option>
                          <option>23:00 </option>
                          <option>24:00 </option>
                        </select>
                      </div>
                    </div>

                    <div className="relative z-0 mb-6 w-full group">
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="country"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Pick-up Date
                        </label>
                        {/*
                        for submitting 
                        https://www.javatpoint.com/react-date-picker */}
                        <DatePicker
                          minDate={new Date()}
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                          className="|| mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-4 py-3  text-right sm:px-6">
              <button
                type="submit"
                className="flex mx-auto text-white bg-gray-900 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Continue Booking
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Choosebike;
