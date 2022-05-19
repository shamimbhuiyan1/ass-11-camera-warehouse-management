import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink";

import auth from "../../firebase.init";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        className="header-container"
        variant="dark"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <h4>Online Camera Warehouse</h4>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav className="nav-style my-1">
              {user?.uid && (
                <>
                  <Nav.Link
                    as={CustomLink}
                    to="/manage-inventories"
                    className="mt-2 fw-bold"
                  >
                    Manage Items
                  </Nav.Link>
                </>
              )}
              {user?.uid && (
                <>
                  <Nav.Link
                    as={CustomLink}
                    to="/my-items"
                    className="mt-2 fw-bold"
                  >
                    My Items
                  </Nav.Link>
                  <Nav.Link
                    as={CustomLink}
                    to="/stock-item"
                    className="mt-2 fw-bold"
                  >
                    Stock Item
                  </Nav.Link>
                </>
              )}
              <Nav.Link as={CustomLink} to="/blog" className="mt-2 fw-bold">
                Blog
              </Nav.Link>

              {user?.uid ? (
                <NavDropdown
                  className="pt-2 fs-bold text-light "
                  title="Profile"
                  id="collasible-nav-dropdown"
                >
                  <Nav.Link
                    as={CustomLink}
                    to="/dashboard"
                    className="fw-bold mt-2 text-light"
                  >
                    Dashboard
                  </Nav.Link>
                  <Nav.Link
                    as={CustomLink}
                    to="/login"
                    className="mt-2 fw-bold  text-light"
                    onClick={() => signOut(auth)}
                  >
                    Log Out
                  </Nav.Link>
                </NavDropdown>
              ) : (
                <>
                  <Nav.Link
                    as={CustomLink}
                    to="/login"
                    className="mt-2 fw-bold"
                  >
                    Login
                  </Nav.Link>
                  <Nav.Link
                    as={CustomLink}
                    to="/signup"
                    className="mt-2 fw-bold"
                  >
                    Register
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
