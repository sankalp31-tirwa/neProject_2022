import React from "react";

const products = [
  {
    id: 1,
    name: "Royal Himalayan",
    href: "#",
    Vehicletype: "7 Seater",
    price: "1500",
    destination: "Ranipool",
    destination2: "Siliguri",
    date: "22/02/2022",
    imageSrc:
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/49739/himalayan-left-front-three-quarter.jpeg?q=80",
    imageAlt: "Innova Crysta",
  },
  {
    id: 2,
    name: "Pulsar",
    href: "#",
    Vehicletype: "7 Seater",
    price: "800",
    destination: "Gangtok",
    destination2: "Bagdogra",
    date: "22/08/2022",
    imageSrc:
      "https://imgd.aeplcdn.com/1280x720/bw/ec/29133/Bajaj-Pulsar-150-Front-threequarter-97089.jpg?v=201711021421&wm=2&q=80",
    imageAlt: "Xylo",
  },
  {
    id: 3,
    name: "Avenger",
    href: "#",
    Vehicletype: "7 Seater",
    price: "700",
    destination: "Gangtok",
    destination2: "Bagdogra",
    date: "22/08/2022",
    imageSrc:
      "https://imgd.aeplcdn.com/1280x720/bw/ec/40512/Bajaj-Avenger-Street-160--159847.jpg?wm=2&q=80",
    imageAlt: "Sumo",
  },
  {
    id: 4,
    name: "tvs Raider",
    href: "#",
    Vehicletype: "4 Seater",
    price: "850",
    destination: "Gangtok",
    destination2: "Bagdogra",
    date: "22/08/2022",
    imageSrc:
      "https://imgd.aeplcdn.com/1280x720/n/cw/ec/103183/raider-125-right-front-three-quarter.jpeg?isig=0&q=80",
    imageAlt: "Thar",
  },
  // More products...
];

const index = () => {
  return (
    <div class="m-8">
      <div class="container mx-auto px-6">
        <h3 class="text-gray-700 text-2xl font-medium">Bike</h3>
        <span class="mt-3 text-sm text-gray-500">Products</span>
        <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-6">
          <>
            {products.map((product) => (
              <li key={product.id} className="flex py-6">
                <div class="w-full max-w-sm mx-auto rounded-md shadow-md overflow-hidden">
                  <div class="flex items-end justify-end h-56 w-full bg-cover">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-full w-full object-contain object-center"
                    />
                  </div>
                  <div class="px-5 py-3">
                    <h3 class="text-gray-700 uppercase">{product.name}</h3>
                    <span class="text-gray-500 mt-2">₹ {product.price}</span>
                  </div>
                </div>
              </li>
            ))}
          </>
        </div>
        <div class="flex justify-center">
          <div class="flex rounded-md mt-8">
            <a
              href="#"
              class="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 ml-0 rounded-l hover:bg-blue-500 hover:text-white"
            >
              <span>Previous</span>
            </a>
            <a
              href="#"
              class="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 hover:bg-blue-500 hover:text-white"
            >
              <span>1</span>
            </a>
            <a
              href="#"
              class="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 hover:bg-blue-500 hover:text-white"
            >
              <span>2</span>
            </a>
            <a
              href="#"
              class="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 border-r-0 hover:bg-blue-500 hover:text-white"
            >
              <span>3</span>
            </a>
            <a
              href="#"
              class="py-2 px-4 leading-tight bg-white border border-gray-200 text-blue-700 rounded-r hover:bg-blue-500 hover:text-white"
            >
              <span>Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
