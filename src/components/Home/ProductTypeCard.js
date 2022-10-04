import React from "react";
import { Link } from "react-router-dom";

const ProductTypeCard = ({ productType }) => {
  const { name, product_type_slug: slug, image } = productType;
  return (
    <Link
      to={`/products/type/${slug}`}
      className="product-type-card h-[250px] w-[250px] relative overflow-hidden rounded-lg shadow-md"
    >
      <div className="product-type-thumb">
        <img
          className="h-[90%] w-full object-cover absolute"
          src={image}
          alt={name}
        />
      </div>
      <h3 className="absolute bottom-0 right-0 left-0 bg-slate-700 text-xl py-1 text-white">
        {name}
      </h3>
    </Link>
  );
};

export default ProductTypeCard;
