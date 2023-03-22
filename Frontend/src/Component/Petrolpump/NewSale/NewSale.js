import React, { useState } from "react";
import "./NewSale.css";
import Nav from "../Navbar/Nav";
const NewSale = () => {
  const [paymentState, setPaymentState] = useState("");
  return (
    
    <div className="newSale">
      <Nav/>
      <h1 className="newSale-pageTitle">New Sale</h1>
      <p className="selectProduct"> Select a product</p>
      <div className="newSale-products">
        <div className="newSale-product">
          <h5>Petrol</h5> <p>Rs 182/Ltr</p>{" "}
        </div>
        <div className="newSale-product">
          <h5>Diesel</h5> <p>Rs 170/Ltr</p>{" "}
        </div>
        <div className="newSale-product">
          <h5>Kerosene</h5> <p>Rs 170/Ltr</p>{" "}
        </div>
      </div>
      <div className="newSale-details">
        <div className="newSale-detail">
          <div className="newSale-data newSale-data-Customer">
            <h1>Customer Name:</h1> <input />{" "}
          </div>
        </div>
        <div className="newSale-detail">
          <div className="newSale-data">
            <h1>Quantity in Ltr:</h1> <input />{" "}
          </div>
          <div className="newSale-data">
            <h1>Amount:</h1> <input />{" "}
          </div>
        </div>
      </div>
      <div className="newSale-table">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">
                Product<span style={{ color: "red" }}>*</span>
              </th>
              <th scope="col">
                Quantity<span style={{ color: "red" }}>*</span>
              </th>
              <th scope="col">
                Rate<span style={{ color: "red" }}>*</span>
              </th>
              <th scope="col">
                Amount<span style={{ color: "red" }}>*</span>
              </th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Petrol</td>
              <td>10</td>
              <td>180</td>
              <td>1800</td>
              <td><button className="removeBtn">x</button></td>
            </tr>
            <tr>
              <td>Petrol</td>
              <td>10</td>
              <td>180</td>
              <td>1800</td>
              <td><button className="removeBtn">x</button></td>
            </tr>
            <tr>
              <td>Petrol</td>
              <td>10</td>
              <td>180</td>
              <td>1800</td>
              <td><button className="removeBtn">x</button></td>
            </tr>
          </tbody>
        </table>
        <div className="billBtn">
          <div>
            <h1>Payment Type:</h1>
            <div>
              <select
                className="custom-select"
                value={paymentState}
                onChange={(e) => {
                  const selectedPayment = e.target.value;
                  setPaymentState(selectedPayment);
                }}
              >
                <option value="">Select a payment opiton</option>
                <option value="Cash">Cash</option>
                <option value="Mobile Banking">Mobile Banking</option>
              </select>
            </div>
          </div>
          <div>
            <h1>Grand Total</h1>
            <input />
          </div>
          <button>Generate Bill</button>
        </div>
      </div>
    </div>
  );
};

export default NewSale;



