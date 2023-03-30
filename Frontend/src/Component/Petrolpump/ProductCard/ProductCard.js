import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <>
      <Link className="ProductCard" to={`/product/${product._id}`}>
        <p className="productName">{product.name}</p>
        <div>
          <div className="offerPriceBox">
            <span className="p__Price">{`Rs.${product.saleprice}/Ltr`}</span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProductCard;
