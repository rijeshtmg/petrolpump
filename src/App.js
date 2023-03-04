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
function App() {
  return (
    <BrowserRouter>
      <div className="body">
        <Nav />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/Pos" element={<Pos />} />
          <Route path="/newsale" element={<NewSale />} />
          <Route path="/stock" element={<NewSale />} />
          <Route path="/addproduct" element={<AddProduct/>}/>
          <Route path="/salesreport" element={<SalesReport/>}/>
          <Route path="/manageproduct" element={<ManageProduct/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
