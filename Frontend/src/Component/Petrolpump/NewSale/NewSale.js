import React, { useState, useEffect } from "react";
import "./NewSale.css";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../../../actions/ProductActions";
import Nav from "../Navbar/Nav";
import ProductCard from "../ProductCard/ProductCard";
const NewSale = ({ match }) => {
  const [data, setData] = useState({
    name: "",
    quantity: 0,
  });
  const [price, setPrice] = useState(0);
  const [type, setType] = useState({});

  const handleChange = (type) => (e) => {
    setData({ ...data, [type]: e.target.value });
  };
  const dispatch = useDispatch();

  const { products, error } = useSelector((state) => state.products);

  const keyword = match.params.keyword;

  useEffect(() => {
    dispatch(getProduct(keyword));
  }, [dispatch, keyword, error]);

  useEffect(() => {
    let temp = (type?.saleprice || 0) * (data.quantity || 0);
    setPrice(temp);
  }, [data.quantity, type]);

  const [paymentState, setPaymentState] = useState("");
  return (
    <div className="newSale">
      <Nav />
      <h1 className="newSale-pageTitle">New Sale</h1>
      <p className="selectProduct"> Select a product</p>
      <div className="newSale-products">
        <div className="products">
          {products &&
            products.map((product) => (
              <ProductCard
                type={type}
                key={product.id}
                product={product}
                setType={setType}
              />
            ))}
        </div>
      </div>
      <div className="newSale-details">
        <div className="newSale-detail">
          <div className="newSale-data newSale-data-Customer">
            <h1>Customer Name:</h1>{" "}
            <input onChange={handleChange("name")} value={data.name} />
          </div>
        </div>
        <div className="newSale-detail">
          <div className="newSale-data">
            <h1>Quantity in Ltr:</h1>{" "}
            <input
              onChange={handleChange("quantity")}
              value={data.quantity}
              type="number"
            />
          </div>
          <div className="newSale-data">
            <h1>Amount:</h1> <input placeholder={price} readOnly />
          </div>
          <div>
            <button>Submit</button>
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
            {products &&
              products.map((product, index) => (
                <tr key={index}>
                  <td>{product.name}</td>
                  <td>10</td>
                  <td>{product.saleprice}</td>
                  <td>{product.saleprice * 10}</td>
                  <td>
                    <button className="removeBtn">x</button>
                  </td>
                </tr>
              ))}
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
