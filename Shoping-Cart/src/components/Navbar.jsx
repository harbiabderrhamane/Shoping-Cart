import React from "react";
import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
function Navbar() {
  return (
    <NavbarBs stickt={top} className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          {/* nav.link as we are just making itt act like a navlink fro react router */}
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
        </Nav>
        <Link
          to="/Cart"
          style={{
            position: "relative",
            width: "48px",
            height: "48px",
            display: "grid",
            placeItems: "center",
            border: "2px solid blue",
          }}
          className="rounded-circle"
        >
          <ShoppingCart size={32} />
        </Link>
      </Container>
    </NavbarBs>
  );
}

export default Navbar;
