import React from 'react'
import "./AddPurchase.css"
const AddPurchase = () => {
  return (
    <>
     <div className="addPurchase">
      <h1 className="addPurchase-pageTitle">Add Purchase</h1>
      <div className="purchaseDetails">
        <div className="purchaseDetail">
          <div className="purchase-Data">
            <h1>Purchase Date <span style={{color: "red"}}>*</span> :</h1> <input/>{" "}
          </div>
          <div className="purchase-Data">
            <h1>Product Name <span style={{color: "red"}}>*</span> :</h1> <input />{" "}
          </div>
        </div>
        <div className="purchaseDetail">
          <div className="purchase-Data">
            <h1>Supplier Name <span style={{color: "red"}}>*</span> :</h1> <input />{" "}
          </div>
          <div className="purchase-Data">
            <h1>Supplier Price <span style={{color: "red"}}>*</span> :</h1> <input />{" "}
          </div>
        </div>
        <div className="purchaseDetail">
          <div className="purchase-Data">
            <h1>Stock <span style={{color: "red"}}>*</span> :</h1> <input />{" "}
          </div>
          <div className="purchase-Data">
            <h1>Total Amount <span style={{color: "red"}}>*</span> :</h1> <input />{" "}
          </div>
        </div>
        <div className="saveButton"><button className="savebtn" >Save</button></div>
      </div>
    </div>
    </>
  )
}

export default AddPurchase