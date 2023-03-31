import React from "react";
import "./Productcard.css";

const ProductCard = ({ product }) => {
  return (
    <>
      <div className="ProductCard">
        <p className="productName" >{product.name}</p>
        <div>
          <div className="price">
            <span className="s__Price">{`Rs.${product.saleprice}/Ltr`}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
