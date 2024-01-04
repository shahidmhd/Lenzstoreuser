import { useState } from "react";
import { Carousel } from "flowbite-react";

function Carousels() {
  return (
    <>
      <div className="h-full w-full  relative">
        {/* Carousel Component */}
        <Carousel
          onSlideChange={(index) => console.log("onSlideChange()", index)}
          itemClass="w-full"
        >
          {/* Image 1 */}
          <div className="flex h-full w-full relative">
            <img
              src="https://lenzstore.cyenosure.in/assets/images/products/Imagen-web-Nature.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
            {/* Paragraph on top of Image 1 */}
            <div className="absolute top-1/2 left-2/5transform -translate-x-2/5 -translate-y-1/2 p-5">
              <p className=" text-white text-2xl font-semibold  bg-opacity-50">
                Summer Sale offer{" "}
                <span className="text-3xl font-bold text-white">30%</span>
              </p>
              <button className="bg-blue-500 hover:bg-gray-200 text-white font-bold py-2 my-5 mx-5 px-4  rounded ">
                Explore
              </button>
            </div>
          </div>

          {/* Image 2 */}
          <div className="flex h-full w-full relative">
            <img
              src="https://lenzstore.cyenosure.in/assets/images/products/Imagen-web-Nature.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
            {/* Paragraph on top of Image 2 */}
            <div className="absolute top-1/2 left-2/5transform -translate-x-2/5 -translate-y-1/2 p-5">
              <p className=" text-white text-2xl font-semibold  bg-opacity-50">
                Summer Sale offer{" "}
                <span className="text-3xl font-bold text-white">30%</span>
              </p>
              <button className="bg-blue-500 hover:bg-gray-200 text-white font-bold py-2 px-4 rounded ">
                Explore
              </button>
            </div>
          </div>

          {/* Image 3 */}
          <div className="flex h-full w-full relative">
            <img
              src="https://lenzstore.cyenosure.in/assets/images/products/Imagen-web-Nature.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
            {/* Paragraph on top of Image 3 */}
            <div className="absolute top-1/2 left-2/5transform -translate-x-2/5 -translate-y-1/2 p-5">
              <p className=" text-white text-2xl font-semibold  bg-opacity-50">
                Summer Sale offer{" "}
                <span className="text-3xl font-bold text-white">30%</span>
              </p>
              <button className="bg-blue-500 hover:bg-gray-200 text-white font-bold py-2 px-4 rounded ">
                Explore
              </button>
            </div>
          </div>
        </Carousel>
      </div>
    </>
  );
}

export default Carousels;
