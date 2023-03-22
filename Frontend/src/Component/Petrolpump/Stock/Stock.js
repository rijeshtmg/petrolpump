import React from "react";
import "./Stock.css";
import Nav from "../Navbar/Nav";
const Stock = () => {
  return (
    <>
    <Nav/>
      <h1 className="stockReport-Title"> Stock Report</h1>
      <div className="stockList">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">S.N</th>
              <th scope="col">Product Name</th>
              <th scope="col">Supplier Price (Rs)</th>
              <th scope="col">Selling Price (Rs)</th>
              <th scope="col">Stock</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1001</td>
              <td>Petrol</td>
              <td>178</td>
              <td>180</td>
              <td>20,000</td>
              <td>
                <button className="removeBtn">x</button>
              </td>
            </tr>
            <tr>
              <td>1002</td>
              <td>Diesel</td>
              <td>170</td>
              <td>172</td>
              <td>35,555</td>
              <td>
                <button className="removeBtn">x</button>
              </td>
            </tr>
            <tr>
              <td>1003</td>
              <td>Kerosene</td>
              <td>168</td>
              <td>170</td>
              <td>11,111</td>
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

export default Stock;
