import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../../globalStyles.css";

export function AppNavbar() {
  return (
    <Navbar className="navbar-dark bg-dark" expand="lg" sticky="top">
      <Container fluid className="mx-lg-5">
        <Navbar.Brand className="bajer-font fs-2" href="/">
          Bajer
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="text-uppercase d-lg-flex justify-content-end"
        >
          <Nav>
            <Nav.Link>O klubie</Nav.Link>
            <Nav.Link>Ekipa</Nav.Link>
            <Nav.Link>Oferta</Nav.Link>
            <Nav.Link>Wynajmy</Nav.Link>
            <Nav.Link>Kontakt</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
