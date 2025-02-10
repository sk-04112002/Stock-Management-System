import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import logo from "../assets/warehouse.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Appbar() {
  const [role, setRole] = useState("");
  const UserId = localStorage.getItem("email");
  const navigate = useNavigate();
  const handleLogout = () => {
    axios
      .post(`http://localhost:5001/api/user/logout`)
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  const findRole = () => {
    axios
      .get(`http://localhost:5001/api/user/findrole/${UserId}`, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
        setRole(res.data.role);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    findRole();
  }, []);
  
  return (
    <Container fluid>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <h4>
              <span>
                <Image
                  src={logo}
                  style={{ height: "40px" }}
                  className="mx-3"
                ></Image>
                <span className="d-none d-lg-inline">Stock Management System</span>
              </span>
            </h4>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav>
              <Nav.Link as={Link} to={"/LP"}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to={"/UserDashboard"}>
                Dashboard
              </Nav.Link>
              <Nav.Link as={Link} to={"/landing"}>
                Show Products
              </Nav.Link>
              {role === "admin" && (
                <>
                  <Nav.Link as={Link} to={"/AddProducts"}>
                    Add Products
                  </Nav.Link>
                  <Nav.Link as={Link} to={"/ShowUsers"}>
                    Show Users
                  </Nav.Link>
                  <Nav.Link as={Link} to={"/AddUser"}>
                    Add Users
                  </Nav.Link>
                  <Nav.Link as={Link} to={"/Categories"}>
                    Categories
                  </Nav.Link>
                </>
              )}
              <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}
export default Appbar;
