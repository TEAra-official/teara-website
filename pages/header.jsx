import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import {Link as Scroll} from "react-scroll"

export default function TearaNavbar() {
    return (
      <Navbar bg="light" expand="lg">
          <Container>
            <div style={{marginRight: 30 + 'em'}}>
              <img src="../../images/teara-white-trans.png" alt="logo" width="40" height="40"></img>
            </div>
            {/* スクロールボタン */}
            <Nav.Link>
              <Scroll to="about" smooth={true} duration={600} offset={-60}>about</Scroll>
            </Nav.Link>
            <Nav.Link>
              <Scroll to="activities" smooth={true} duration={600} offset={-50}>activities</Scroll>
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
  