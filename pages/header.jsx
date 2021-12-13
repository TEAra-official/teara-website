import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import Navbutton from './components/navbutton'
import {Link as Scroll} from "react-scroll"

export default function TearaNavbar() {
    return (
      <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">TEAra Website</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/about2">About2</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>

            {/* スクロールボタン */}
            <Nav.Link>
              <Scroll to="about" smooth={true} duration={600} offset={100}>about</Scroll>
            </Nav.Link>
            <Nav.Link>
            <Scroll to="activities" smooth={true} duration={600} offset={100}>activities</Scroll>
            </Nav.Link>
            <Nav.Link>
            <Scroll to="members" smooth={true} duration={600} offset={100}>members</Scroll>
            </Nav.Link>
            <Nav.Link>
            <Scroll to="contact" smooth={true} duration={600} offset={100}>contact</Scroll>
            </Nav.Link>
            
          </Container>
        </Navbar>
    )
  }