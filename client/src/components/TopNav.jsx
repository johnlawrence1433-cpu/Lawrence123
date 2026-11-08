import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router'


const TopNav = () => {
let navigate = useNavigate()

  return (
     <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand>
          <Nav.Link onClick={() => navigate ("/home")}>Parcels</Nav.Link>
        </Navbar.Brand>
        <Navbar.Brand href="#">Parcels</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link onClick={() => navigate("/order")}>Order</Nav.Link>
            <Nav.Link onClick={() => navigate("/product")}>Product</Nav.Link>
            <Nav.Link onClick={() => navigate("/order_item")}>Order_Item</Nav.Link>
            <Nav.Link onClick={() => navigate("/riders")}>Riders</Nav.Link>
            <NavDropdown title="Reports" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Deliveries</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Products
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default TopNav