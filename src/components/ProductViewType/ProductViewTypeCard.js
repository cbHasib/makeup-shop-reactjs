import React from "react";
import { Link } from "react-router-dom";

const ProductViewTypeCard = ({ product }) => {
  const {
    id,
    brand,
    price,
    name,
    api_featured_image: image,
    product_colors,
  } = product;
  return (
    <Link
      to={`/product/details/${id}`}
      className="card max-w-[260px] w-full border border-base-300 hover:shadow-lg transition-transform duration-500 hover:scale-105"
    >
      <figure>
        <img
          src={image}
          alt="Shoes"
          className="rounded-x w-full object-cover h-[250px] mx-auto"
        />
      </figure>
      <div className="card-body bg-base-300 items-center text-center justify-between">
        <div>
          <h2 className="font-medium text-lg">{name}</h2>
          <h3 className="font-mono text-primary">Price: ${price}</h3>
        </div>

        <div>
          <h4 className="font-serif">Brand: {brand}</h4>
        </div>

        <div className="flex gap-1 flex-wrap justify-center items-center">
          {product_colors.map((product_color, idx) => {
            const color = product_color.hex_value.split(",")[0];
            const myStyle = {
              backgroundColor: color,
              height: "20px",
              width: "20px",
              maxHeight: "20px",
              maxWidth: "20px",
              borderRadius: "100%",
            };
            return <p key={idx} style={myStyle}></p>;
          })}
        </div>
      </div>
    </Link>
  );
};

export default ProductViewTypeCard;
