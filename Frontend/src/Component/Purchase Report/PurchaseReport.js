import React from "react";
import "./PurchaseReport.css";

const PurchaseReport = () => {
  return (
    <>
      <h1 className="purchaseReport-Title"> Purchase Report</h1>
      <div className="purchaseReport-dataSearch">
        <div className="purchaseReport-data">
          <h1>Start Date:</h1> <input />{" "}
        </div>
        <div className="purchaseReport-data">
          <h1>End Date:</h1> <input />{" "}
        </div>
        <button className="searchBtn">Search</button>
      </div>
      <div className="purchaseList">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">S.N</th>
              <th scope="col">Product Name</th>
              <th scope="col">Supplier Name</th>
              <th scope="col">Supplier Price (Rs)</th>
              <th scope="col">Stock</th>
              <th scope="col">Total Amount</th>
              <th scope="col">Purchase Date</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1001</td>
              <td>Diesel</td>
              <td>Nepal Oil Corporation</td>
              <td>170</td>
              <td>20000</td>
              <td>200000</td>
              <td>08-03-2023</td>
              <td>
                <button className="removeBtn">x</button>
              </td>
            </tr>
            <tr>
              <td>1002</td>
              <td>Kerosene</td>
              <td>Nepal Oil Corporation</td>
              <td>170</td>
              <td>15000</td>
              <td>170000</td>
              <td>08-03-2023</td>
              <td>
                <button className="removeBtn">x</button>
              </td>
            </tr>
            <tr>
              <td>1003</td>
              <td>Petrol</td>
              <td>Nepal Oil Corporation</td>
              <td>180</td>
              <td>18000</td>
              <td>178000</td>
              <td>08-03-2023</td>
              <td>
                <button className="removeBtn">x</button>
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td style={{ fontWeight: 600 }}> Total Amount (Rs):</td>
              <td>11,12,000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PurchaseReport;
