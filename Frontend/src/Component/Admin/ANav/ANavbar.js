import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { useDispatch } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Navbar from "react-bootstrap/Navbar";
import { logout } from "../../../actions/userAction";
import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function ANavbar() {
  const dispatch = useDispatch();
  function logoutUser() {
    dispatch(logout());
    toast.success("Logout Successfully");
  }
  const [index, setIndex] = useState(0);
  const location = useLocation();
  if (location.pathname === "/") {
    return null;
  }
  return (
    <>
      <Navbar
        bg="white"
        expand="lg"
        className="m-2 Navbar"
        style={{ borderBottom: "0.75px solid #E4E4E4" }}
      >
        <Container>
          <Navbar.Brand
            as={Link}
            to="/users"
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
                to="/users"
              >
                All Users
              </Nav.Link>
              <Nav.Link as={Link} to="/confirmproduct">
               Confirm Product
              </Nav.Link>
            </Nav>
            <NavDropdown
              className={index === 3 ? "nav-active" : "nav-item"}
              profile
              onClick={() => setIndex(3)}
              title={<AccountCircleIcon />}
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item as={Link} to="/profile">
                Profile
              </NavDropdown.Item>
              <NavDropdown.Item onClick={logoutUser}>Log Out</NavDropdown.Item>
            </NavDropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
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
    </>
  );
}
