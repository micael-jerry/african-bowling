import { Navbar, Button } from "react-bootstrap";
import { ROUTE_HOME } from "../../utils/routes";
import "./MyNavbar.css";

const MyNavbar = () => {
  return (
    <Navbar fixed="top" className="bg-body-tertiary ps-4 pe-4">
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
    </Navbar>
  );
};

export default MyNavbar;
