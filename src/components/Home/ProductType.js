import React from "react";
import "./ProductType.css";
import ProductTypeCard from "./ProductTypeCard";

const ProductType = () => {
  const productTypes = [
    {
      id: 1,
      name: "Blush",
      image: "https://images.heb.com/is/image/HEBGrocery/002021384",
      product_type_slug: "blush",
    },

    {
      id: 2,
      name: "Bronzer",
      image:
        "https://static-01.daraz.com.bd/p/cbe1d111e28265b1656c4f5ffffea6b9.jpg",
      product_type_slug: "bronzer",
    },

    {
      id: 3,
      name: "Eyebrow",
      image:
        "https://cdn.shopify.com/s/files/1/0568/0686/7003/files/Copy_of_As_featured_480x480.png",
      product_type_slug: "eyebrow",
    },

    {
      id: 4,
      name: "Eyeliner",
      image:
        "https://www.maybelline.com/~/media/mny/us/makeup-tips/eye/eyeliner-makeup-tutorials/eyeliner-for-different-eye-shapes/maybelline_eyeliner_for_almond_eyes-1400.jpg",
      product_type_slug: "eyeliner",
    },

    {
      id: 5,
      name: "Eyeshadow",
      image:
        "https://www.maybelline.com/~/media/mny/us/makeup-tips/shimmery-eyeshadow-tutorial/full-width-image/maybelline-city-mini-palette-diamond-district-final-look-1x1.jpg",
      product_type_slug: "eyeshadow",
    },

    {
      id: 6,
      name: "Foundation",
      image: "https://imagiccosmetics.com/wp-content/uploads/2019/06/A3.jpg",
      product_type_slug: "foundation",
    },

    {
      id: 7,
      name: "Lip liner",
      image:
        "https://hudabeauty.com/dw/image/v2/BCNC_PRD/on/demandware.static/-/Sites-huda-master-catalog/default/dwcf89a86e/images/sfra/lipcontour2.0/lipcontour1.jpg",
      product_type_slug: "lip_liner",
    },

    {
      id: 8,
      name: "Lipstick",
      image:
        "https://pyxis.nymag.com/v1/imgs/0d2/c9d/7e2638d562bb724d04da328e4dba4cfa04-nars-semi-matte-lipstick-in-jungle-red.rsquare.w600.jpg",
      product_type_slug: "lipstick",
    },

    {
      id: 9,
      name: "Mascara",
      image:
        "https://static-01.daraz.com.bd/p/70d7d1a828b9a70f25ed83b9c2f16f3e.jpg",
      product_type_slug: "mascara",
    },

    {
      id: 10,
      name: "Nail polish",
      image:
        "https://media-asia-cdn.oriflame.com/productImage/?externalMediaId=product-management-media%2F41191%2F41191_4.png%3Fversion%3D1607950807&w=1440&bc=%23f5f5f5&ib=%23f5f5f5&h=1440&q=30",
      product_type_slug: "nail_polish",
    },
  ];

  return (
    <div className="py-20 bg-base-200">
      <div className="w-[95%] lg:w-[80%] mx-auto">
        <h2 className="text-4xl font-medium">Choose by Type</h2>
        <p className="my-4">
          Discover our makeover products and their benefits that help you to
          find your best makeup products.
          <br />
          Try our virtual try on, foundation shade finder, mascara quiz and
          more.
        </p>

        <div className="mt-10 flex justify-center gap-5 lg:gap-10 flex-wrap">
          {productTypes.map((productType) => (
            <ProductTypeCard key={productType.id} productType={productType} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductType;
