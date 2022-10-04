import React from "react";
import { Link } from "react-router-dom";

const Slider = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div className="carousel-item w-full relative">
          <img
            alt=""
            src="https://cdn.shopify.com/s/files/1/0251/2184/9419/files/T8s9Sq3g.png?v=1664324679"
            className="w-full h-[85vh] object-cover"
          />
          <div className="absolute right-10 top-0 bottom-0 flex items-center justify-center gap-3">
            <div className="bg-base-100 rounded-lg shadow-xl py-10 px-7 w-[400px] flex items-center justify-center gap-5 flex-col">
              <h3 className="text-2xl">No Tricks, Just Treats.</h3>
              <h2 className="text-3xl font-medium">
                Proven Formulas For Your Best Skin Yet.
              </h2>
              <Link to={"/shop"} className="btn btn-success w-[80%]">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
