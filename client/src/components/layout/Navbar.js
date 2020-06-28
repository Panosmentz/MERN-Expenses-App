import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Button, Navbar, Nav } from "react-bootstrap";
import et from "../../assets/expensetracker.png";
import "../../App.css";
import { toast } from "react-toastify";
import "../../toast.css";
import { LinkContainer } from "react-router-bootstrap";

const AppNavbar = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const history = useHistory();
  const onClickLogoutHandler = () => {
    toast.warning("Logout Successfull", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
    logout();
    history.push("/");
  };

  localStorage.setItem("isAuthenticated", JSON.stringify(isAuthenticated));

  const unauthenticatedNavBar = () => {
    return (
      <>
        <LinkContainer to="/">
          <Nav.Link className="nav-link text-white">Home</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/login" activeClassName="selected">
          <Nav.Link className="nav-link text-white">Login</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/register" activeClassName="selected">
          <Nav.Link className="nav-link text-white">Register</Nav.Link>
        </LinkContainer>
      </>
    );
  };

  const authenticatedNavBar = () => {
    return (
      <>
        <LinkContainer to="/dashboard" activeClassName="selected">
          <Nav.Link className="nav-link text-white">Dashboard</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/transactions" activeClassName="selected">
          <Nav.Link className="nav-link text-white">My Transactions</Nav.Link>
        </LinkContainer>

        <Button variant="dark" onClick={onClickLogoutHandler}>
          Logout
        </Button>
      </>
    );
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark">
      <NavLink to="/">
        <Navbar.Brand>
          <img src={et} height="30" width="200" />
        </Navbar.Brand>
      </NavLink>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          {!isAuthenticated ? unauthenticatedNavBar() : authenticatedNavBar()}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default AppNavbar;
