import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.css'
function BasicExample() {
  return (
    <Navbar expand="lg" className="bg">
      <Container >
        <Navbar.Brand href="#home"><span className='navbrand1'>Agro</span><span className='navbrand2'>Genius</span><span className='navbrand3'>Hub</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
           <Nav.Link href="/"><span className='nav-menu'>Home</span></Nav.Link>
           <NavDropdown title="Product" id="basic-nav-dropdown"className='nav-menu'>
              <NavDropdown.Item href="flowers">Flower</NavDropdown.Item>
              <NavDropdown.Item href="/fruits">
                Fruit
              </NavDropdown.Item>
              <NavDropdown.Item href="/seeds">Seed</NavDropdown.Item>
            
              <NavDropdown.Item href="/vegitable">Vegetable</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/about"><span className='nav-menu'>About</span></Nav.Link>
            <Nav.Link href="/login"><span className='login'>Login</span></Nav.Link>
            <Nav.Link href="/signup"><span className='Signup'>Signup</span></Nav.Link>
         
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );



}
export default BasicExample;