import { Container, Navbar, Button } from "react-bootstrap";
import { ROUTE_HOME } from "../../utils/routes";
import "./MyNavbar.css";

const MyNavbar = () => {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href={`${ROUTE_HOME}`}>
          <img
            src="/logo.jpg"
            className="d-inline-block align-top logo"
            alt="AF Bowling logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button
            variant="outline-secondary"
            onClick={() => window.location.reload()}
          >
            Reset
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
