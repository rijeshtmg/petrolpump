import React from "react";
import "./SalesReport.css";
import Nav from "../Navbar/Nav";
const SalesReport = () => {
  return (
    <>
    <Nav/>
      <h1 className="salesReport-Title">Sales Report</h1>
      <div className="salesReport-dataSearches">
        <div className="salesReport-dataSearch">
          <div className="salesReport-data">
            <h1>Start Date:</h1> <input />{" "}
          </div>
          <div className="salesReport-data">
            <h1>End Date:</h1> <input />{" "}
          </div>
          <button className="searchBtn">Search</button>
        </div>
      </div>

      <div className="newSale-table">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Invoice No.</th>
              <th scope="col">Customer Name</th>
              <th scope="col">Product</th>
              <th scope="col">Quantity</th>
              <th scope="col">Date</th>
              <th scope="col">Total Amount (Rs)</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1001</td>
              <td>Rijesh</td>
              <td>Petrol</td>
              <td>10</td>
              <td>04-03-2023</td>
              <td>1800</td>
              <td>
                <button className="removeBtn">x</button>
              </td>
            </tr>
            <tr>
              <td>1002</td>
              <td>Anish</td>
              <td>Petrol</td>
              <td>10</td>
              <td>04-03-2023</td>
              <td>1800</td>
              <td>
                <button className="removeBtn">x</button>
              </td>
            </tr>
            <tr>
              <td>1003</td>
              <td>Aashutsoh</td>
              <td>Petrol</td>
              <td>10</td>
              <td>04-03-2023</td>
              <td>1800</td>
              <td>
                <button className="removeBtn">x</button>
              </td>
            </tr>
            <tr>
              <td>1004</td>
              <td>Sarjna</td>
              <td>Petrol</td>
              <td>10</td>
              <td>04-03-2023</td>
              <td>1800</td>
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
              <td>11,200</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SalesReport;
