import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import ProductViewTypeCard from "./ProductViewTypeCard";

const ProductViewType = () => {
  const products = useLoaderData();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-20">
      <div className="w-[95%] lg:w-[80%] mx-auto">
        <h2 className="text-4xl font-medium">
          Total Products: {products.length}
        </h2>
        <p className="my-4">
          Discover our makeover products and their benefits that help you to
          find your best makeup products.
          <br />
          Try our virtual try on, foundation shade finder, mascara quiz and
          more.
        </p>
        <div className="mt-10 flex justify-center gap-6 flex-wrap">
          {products.map((product) => (
            <ProductViewTypeCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductViewType;
