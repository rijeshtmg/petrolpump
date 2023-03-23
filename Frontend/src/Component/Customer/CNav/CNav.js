import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./CNav";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [index, setIndex] = useState(0);
  const location = useLocation();
  if (location.pathname === "/") {
    return null;
  }
  return (
    <Navbar bg="white" expand="lg" className="m-2 Navbar">
      <Container>
        <Navbar.Brand
          as={Link}
          to="/dashboard"
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
          <Nav className="justify-content-center flex-grow-1 pe-3 gap-5">
            <Nav.Link
              className={index === 0 ? "nav-active" : "nav-item"}
              onClick={() => setIndex(0)}
              as={Link}
              to="/userHome"
            >
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/purchase">
              Purchase
            </Nav.Link>
            <Nav.Link as={Link} to="/statement">
              Statement
            </Nav.Link>
          </Nav>
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
}
