import Image from 'next/image'
import { Navbar, Nav } from 'react-bootstrap'
import {Link as Scroll} from "react-scroll"

export default function TearaNavbar() {
    return (
      <Navbar bg="light" expand="lg">
            <div className="header-image">
              <Image src="/images/teara-white-trans.png" alt="logo" width="40" height="40" />
            </div>
            {/* スクロールボタン */}
              <Nav.Link className="header-text plain-text-english">
              <div className="header-text">
                <div className="header-table">
                  <Scroll to="about" smooth={true} duration={600} offset={-60}>about</Scroll>
                </div>
                <div className="header-table">
                  <Scroll to="activities" smooth={true} duration={600} offset={-50}>activities</Scroll>
                </div>
                <div className="header-table">
                  <Scroll to="members" smooth={true} duration={600} offset={100}>members</Scroll>
                </div>
                <div className="header-table">
                  <Scroll to="contact" smooth={true} duration={600} offset={100}>contact</Scroll>
                </div>
              </div>
              </Nav.Link>
        </Navbar>
    )
  }
