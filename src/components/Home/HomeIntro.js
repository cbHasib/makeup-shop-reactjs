import React from "react";

const HomeIntro = () => {
  return (
    <div className="py-20">
      <div className="w-[95%] lg:w-[80%] mx-auto">
        <h2 className="text-4xl">Makeup Yourself</h2>
        <p className="my-4">
          Discover our makeover products and their benefits that help you to
          find your best makeup products.
          <br />
          Try our virtual try on, foundation shade finder, mascara quiz and
          more.
        </p>

        <div className="mt-10 grid grid-cols-2 lg:grid-cols-3 gap-3">
          <div className="flex flex-col gap-3 h-full w-full">
            <img
              className="h-full w-full object-cover rounded-tl-xl"
              src="https://makeup-api.herokuapp.com/assets/brushes-6d2ab84631ecd47ced4fa07c47eb37521eb61c5a525965dafaf308f21338aa44.png"
              alt=""
            />
            <img
              className="h-full w-full object-cover lg:rounded-bl-xl"
              src="https://makeup-api.herokuapp.com/assets/single-pot-4ce398e7d8c527ef248ace7a783cc52fd583375a25a7dcdb7b16f7a0958ccb17.png"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-3 h-full w-full">
            <img
              className="h-full w-full object-cover rounded-tr-xl lg:rounded-none"
              src="https://makeup-api.herokuapp.com/assets/lips-c35ec4a3350ec779c6bf6a785981ad9ef2e21bd9fe26a2be1c766d56edb2e11f.png"
              alt=""
            />
          </div>
          <div className="flex lg:flex-col gap-3 h-full w-full">
            <img
              className="h-full w-full object-cover rounded-bl-xl lg:rounded-bl-none lg:rounded-tr-xl"
              src="https://makeup-api.herokuapp.com/assets/nail-polish-4c7ee1a5f7a5cbaff9757c3bcfa4f6e89d7a6f2ffc49d267e04e010ba94cfd7c.png"
              alt=""
            />
            <img
              className="h-full w-full object-cover rounded-br-xl"
              src="https://makeup-api.herokuapp.com/assets/eyeshadow-18fa4bed267bec6a67506150d9574259d0dcc67700e69de4ba720d9afe8204a2.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeIntro;
