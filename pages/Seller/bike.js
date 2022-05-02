import React, { useState } from "react";
import NavBar from "../../components/Seller/NavBar";
import DatePicker from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";

const Cab = () => {
  const elements = ["1", "2", "3", "4", "5"];

  const [dates, setDates] = useState(new Date());
  console.log(dates);
  return (
    <>
      <NavBar />
      <h1 className="text-center sm:text-4xl text-3xl font-bold title-font mb-2 text-gray-900">
        Bike Rental
      </h1>

      {elements.map((value, index) => {
        return (
          <>
            <section
              key={index}
              className="text-gray-600 body-font overflow-hidden"
            >
              <form>
                <div className="container px-5 py-8 mx-auto border mt-6 border-gray-300">
                  <div className="-my-8 divide-y-2 divide-gray-100 ">
                    <h1 className="sm:text-4xl text-3xl font-bold title-font mb-2 text-gray-900">
                      Bike {value}
                    </h1>
                    <div className="py-8 flex flex-wrap md:flex-nowrap">
                      <div className="w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                        <span className="font-semibold title-font text-gray-700">
                          Select your Location
                        </span>
                      </div>
                      <div className="flex-grow">
                        <select
                          id="countries"
                          className="|| mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                          <option value="1">Gangtok</option>
                          <option value="2">Namchi</option>
                          <option value="4">Bagdogra Airport</option>
                          <option value="5">Siliguri</option>
                          <option value="6">Melli</option>
                          <option value="7">Rangpo</option>
                          <option value="8">Singtam</option>
                          <option value="9">32nd Mile</option>
                          <option value="10">Chitrey</option>
                          <option value="13">Coronation Bridge</option>
                        </select>
                      </div>
                    </div>

                    <div className="py-8 flex flex-wrap md:flex-nowrap">
                      <div className="w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                        <span className="font-semibold title-font text-gray-700">
                          Choose Available Dates
                        </span>
                      </div>
                      <div className="flex-grow">
                        <div className="grid grid-flow-row">
                          <div className="grid grid-cols-2 gap-6">
                            <div className="|| mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                              <DatePicker
                                minDate={new Date()}
                                value={dates}
                                selected={dates}
                                onChange={setDates}
                                format="DD MMMM YYYY"
                                multiple
                                plugins={[<DatePanel key={dates} />]}
                              />
                            </div>

                            <div className="flex-grow">
                              <input
                                className="|| mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                id="Money"
                                placeholder="No. of days"
                                type="number"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="py-8 flex flex-wrap md:flex-nowrap">
                      <div className="w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                        <span className="font-semibold title-font text-gray-700">
                          Price in Rs.
                        </span>
                      </div>
                      <div className="flex-grow">
                        <input
                          className="|| mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          id="Money"
                          type="number"
                        />
                      </div>
                    </div>
                    <div className="py-8 flex flex-wrap md:flex-nowrap">
                      <div className="w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                        <span className="font-semibold title-font text-gray-700">
                          Upload Cab image
                        </span>
                      </div>
                      <div className="flex-grow">
                        <input
                          className="|| mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          aria-describedby="user_avatar_help"
                          id="user_avatar"
                          type="file"
                        />
                        <div className="mt-1 text-sm text-gray-500 dark:text-gray-300">
                          Image
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                    Submit
                  </button>
                </div>
              </form>
            </section>
          </>
        );
      })}
    </>
  );
};

export default Cab;
