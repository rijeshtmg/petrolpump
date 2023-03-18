import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./globalstyles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./Component/Dashboard/Dashboard";
import Pos from "./Component/POS/Pos";
import NewSale from "./Component/NewSale/NewSale";
import Nav from "./Component/Navbar/Nav";
import AddProduct from "./Component/AddProduct/AddProduct";
import SalesReport from "./Component/Sales Report/SalesReport";
import ManageProduct from "./Component/Manage Product/ManageProduct";
import AddPurchase from "./Component/Add Purchase/AddPurchase";
import PurchaseReport from "./Component/Purchase Report/PurchaseReport";
import Stock from "./Component/Stock/Stock";
import LoginSignup from "./Component/Login/Loginsignup";

function App() {
  return (
    <BrowserRouter>
      <div className="body">
        <Nav />
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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
