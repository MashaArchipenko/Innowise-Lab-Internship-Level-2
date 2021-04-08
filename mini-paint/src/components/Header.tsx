import { Navbar, Nav } from "react-bootstrap";
import logo from "../logo.png";

export default function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="pr-5 pl-5">
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="35"
            height="35"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#signIn">Sign In</Nav.Link>
          <Nav.Link href="#signOn">Sign On</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}
