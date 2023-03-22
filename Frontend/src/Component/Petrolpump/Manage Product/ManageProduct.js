import React from "react";
import { Link } from "react-router-dom";
import "./ManageProduct.css";
import Nav from "../Navbar/Nav";
const ManageProduct = () => {
  return (
    <>
    <Nav/>
      <div className="manageProduct-head">
        <h1 className="manageProduct-Title"> Product List</h1>
        <Link to="/addproduct">
          {" "}
          <button className="addProductBtn">Add Product</button>
        </Link>
      </div>
      <div className="productList">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">S.N</th>
              <th scope="col">Product Name</th>
              <th scope="col">Unit</th>
              <th scope="col">Sale Price (Rs)</th>
              <th scope="col">Stock</th>
              <th scope="col">Supplier Name</th>
              <th scope="col">Supplier Price (Rs)</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1001</td>
              <td>Petrol</td>
              <td>Litre</td>
              <td>180</td>
              <td>18000</td>
              <td>Nepal Oil Corporation</td>
              <td>178</td>
              <td>
                <button className="removeBtn">x</button>
              </td>
            </tr>
            <tr>
              <td>1002</td>
              <td>Diesel</td>
              <td>Litre</td>
              <td>172</td>
              <td>25555</td>
              <td>Nepal Oil Corporation</td>
              <td>170</td>
              <td>
                <button className="removeBtn">x</button>
              </td>
            </tr>
            <tr>
              <td>1003</td>
              <td>Kerosene</td>
              <td>Litre</td>
              <td>170</td>
              <td>8000</td>
              <td>Nepal Oil Corporation</td>
              <td>168</td>
              <td>
                <button className="removeBtn">x</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManageProduct;
