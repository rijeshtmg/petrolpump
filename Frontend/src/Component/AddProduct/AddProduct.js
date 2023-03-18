import React from "react";
import "./AddProduct.css";
const AddProduct = () => {
  return (
    <div className="addProduct">
      <h1 className="addProduct-pageTitle">Add Product</h1>
      <div className="productDetails">
        <div className="productDetail">
          <div className="product-Data">
            <h1>Product Name <span style={{color: "red"}}>*</span> :</h1> <input/>{" "}
          </div>
          <div className="product-Data">
            <h1>Supplier <span style={{color: "red"}}>*</span> :</h1> <input />{" "}
          </div>
        </div>
        <div className="productDetail">
          <div className="product-Data">
            <h1>Unit <span style={{color: "red"}}>*</span> :</h1> <input />{" "}
          </div>
          <div className="product-Data">
            <h1>Supplier Price <span style={{color: "red"}}>*</span> :</h1> <input />{" "}
          </div>
        </div>
        <div className="productDetail">
          <div className="product-Data">
            <h1>Sale Price <span style={{color: "red"}}>*</span> :</h1> <input />{" "}
          </div>
          <div className="product-Data">
            <h1>Stock <span style={{color: "red"}}>*</span> :</h1> <input />{" "}
          </div>
        </div>
        <div className="saveButton"><button className="savebtn" >Save</button></div>
      </div>
    </div>
  );
  
}

export default AddProduct;
