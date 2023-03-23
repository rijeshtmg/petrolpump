import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./globalstyles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./Component/Petrolpump/Dashboard/Dashboard";
import Pos from "./Component/Petrolpump/POS/Pos";
import NewSale from "./Component/Petrolpump/NewSale/NewSale";
// import CNav from "./Component/Customer/CNav/CNav";
import AddProduct from "./Component/Petrolpump/AddProduct/AddProduct";
import SalesReport from "./Component/Petrolpump/Sales Report/SalesReport";
import ManageProduct from "./Component/Petrolpump/Manage Product/ManageProduct";
import AddPurchase from "./Component/Petrolpump/Add Purchase/AddPurchase";
import PurchaseReport from "./Component/Petrolpump/Purchase Report/PurchaseReport";
import Stock from "./Component/Petrolpump/Stock/Stock";
import LoginSignup from "./Component/Login/Loginsignup";
import Home from "./Component/Customer/Home/Home";
import Statement from "./Component/Customer/Statement/Statement";
import Purchase from "./Component/Customer/Purchase/Purchase";

function App() {
  return (
    <BrowserRouter>
      <div className="body">
        {/* <CNav/> */}
        <Routes>
          <Route exact path="/" element={<LoginSignup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/Pos" element={<Pos />} />
          <Route path="/newsale" element={<NewSale />} />
          <Route path="/stock" element={<Stock />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/salesreport" element={<SalesReport />} />
          <Route path="/manageproduct" element={<ManageProduct />} />
          <Route path="/addpurchase" element={<AddPurchase />} />
          <Route path="/purchasereport" element={<PurchaseReport />} />
          <Route path="/userHome" element={<Home />} />
          <Route path="/statement" element={<Statement />} />
          <Route path="/purchase" element={<Purchase />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
