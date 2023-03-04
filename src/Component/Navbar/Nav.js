import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Nav.css";
const NavBar = () => {
  const [index, setIndex] = useState(0);
  return (
    <Navbar bg="white" expand="lg" className="m-2">
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          style={{
            color: "#3B67FF",
            fontSize: 24,
            fontWeight: "bold",
            marginLeft: -20,
          }}
        >
          Petrol Pump
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-center flex-grow-1 pe-3 gap-3">
            <Nav.Link
              className={index === 0 ? "nav-active" : "nav-item"}
              onClick={() => setIndex(0)}
              as={Link}
              to="/"
            >
              Dashboard
            </Nav.Link>
            <NavDropdown
              className={index === 1 ? "nav-active" : "nav-item"}
              onClick={() => setIndex(1)}
              title="Sale"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item as={Link} to="/newsale">
                New Sales
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/salesreport">
                Sales Report
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              className={index === 2 ? "nav-active" : "nav-item"}
              onClick={() => setIndex(2)}
              title="Product"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item as={Link} to="/addproduct">
                Add Product
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Manage Product
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              className={index === 3 ? "nav-active" : "nav-item"}
              onClick={() => setIndex(3)}
              title="Purchase"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">
                Add Purchase
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Purchase Report
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              className={index === 4 ? "nav-active" : "nav-item"}
              onClick={() => setIndex(4)}
              as={Link}
              to="/stock"
            >
              {" "}
              Stock
            </Nav.Link>
          </Nav>
          <Button as={Link} to="pos" variant="primary" id="button-addon2">
            POS
          </Button>
          <img
            className="rounded-circle justify-content-center ms-5"
            style={{ height: 40, weight: 40 }}
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            alt="Avatar"
          />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
