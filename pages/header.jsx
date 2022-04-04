import Image from 'next/image'
import { Navbar, Nav } from 'react-bootstrap'
import {Link as Scroll} from "react-scroll"

export default function TearaNavbar() {
    return (
      <Navbar bg="light" expand="lg">
            <div className="plain-text">
              <div className="header-image">
                <Image src="/images/teara-white-trans.png" alt="logo" width="40" height="40" />
              </div>
              {/* スクロールボタン */}
                <Nav.Link className="header-text plain-text-english">
                  <Scroll to="about" smooth={true} duration={600} offset={-60}>about</Scroll>
                  <Scroll to="activities" smooth={true} duration={600} offset={-50}>activities</Scroll>
                  <Scroll to="members" smooth={true} duration={600} offset={100}>members</Scroll>
                  <Scroll to="contact" smooth={true} duration={600} offset={100}>contact</Scroll>
                </Nav.Link>
                </div>
            </div>
        </Navbar>
    )
  }
