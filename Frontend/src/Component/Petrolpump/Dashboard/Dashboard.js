import React from "react";
import Nav from "../Navbar/Nav";
import "./Dashboard.css";
const Dashboard = () => {
  return (
    <>
      <Nav />
      <p className="ourProduct"> Our product</p>
      <div className="dash-products">
        <div className="dash-product">
          <h5>Petrol</h5> <p>Rs 182/Ltr</p>{" "}
        </div>
        <div className="dash-product">
          <h5>Diesel</h5> <p>Rs 170/Ltr</p>{" "}
        </div>
        <div className="dash-product">
          <h5>Kerosene</h5> <p>Rs 170/Ltr</p>{" "}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
