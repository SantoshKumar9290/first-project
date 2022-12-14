import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Naavbar=()=> {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Details</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link> */}
            <Nav.Link href="#link">Link</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="/">StudentDetails</NavDropdown.Item>
              <NavDropdown.Item href="/address">
                Address
              </NavDropdown.Item>
              <NavDropdown.Item href="/examination">Examination</NavDropdown.Item>
              
              <NavDropdown.Item href="/record">
                Record
              </NavDropdown.Item>
              
              <NavDropdown.Item href="/book">
                Book
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Naavbar;