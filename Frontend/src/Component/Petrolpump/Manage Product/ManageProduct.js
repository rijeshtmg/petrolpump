import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getAdminProduct } from "../../../actions/ProductActions";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./ManageProduct.css";
import NavBar from "../Navbar/Nav";

const ManageProduct = () => {
  const dispatch = useDispatch();

  const { error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert(error);
      dispatch(clearErrors());
    }

    dispatch(getAdminProduct());
  }, [dispatch, error ]);

  const columns = [
    { field: "sn", headerName: "S.N", minWidth: 50, flex: 0.4 },

    {
      field: "name",
      headerName: "Product Name",
      minWidth: 150,
      flex: 0.5,
    },
    {
      field: "supplier",
      headerName: "Supplier",
      type: "string",
      minWidth: 150,
      flex: 0.5,
    },

    {
      field: "supprice",
      headerName: "Suplier price",
      type: "string",
      minWidth: 150,
      flex: 0.5,
    },
    {
      field: "saleprice",
      headerName: "Sale price",
      type: "string",
      minWidth: 150,
      flex: 0.5,
    },
    {
      field: "unit",
      headerName: "Unit",
      type: "string",
      minWidth: 100,
      flex: 0.5,
    },
  ];

  const rows = [];

  products &&
    products.forEach((item) => {
      rows.push({
        id: item._id,
        sn: item.sn,
        supplier: item.supplier,
        supprice: item.supprice,
        saleprice: item.saleprice,
        unit: item.unit,
        name: item.name,
      });
    });

  return (
    <Fragment>
      <NavBar />
      <div className="manageProduct-head">
        <h1 className="manageProduct-Title"> Product List</h1>
        <Link to="/addproduct">
          {" "}
          <button className="addProductBtn">Add Product</button>
        </Link>
      </div>

      <div className="dashboard">
        <div className="productListContainer">
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="productListTable"
            autoHeight
          />
        </div>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Fragment>
  );
};

export default ManageProduct;
