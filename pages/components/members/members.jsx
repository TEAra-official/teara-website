import useCollapse from 'react-collapsed'
import { Nav } from 'react-bootstrap'
import { Link as Scroll } from "react-scroll"
import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()

  return (
    <div>
      <h2 id="members" className="about-title">MEMBERS</h2>
          <Link  href={{ pathname: './components/members/konami'}}>  
            <a>
              <p class="trim-image-to-circle" />
            </a>
          </Link>
          <Link  href={{ pathname: './components/members/konami'}}>  
            <a>
              <p class="trim-image-to-circle" />
            </a>
          </Link>
        <p {...getCollapseProps()}>
          <p class="trim-image-to-circle" />
          <p class="trim-image-to-circle" />
          <p class="trim-image-to-circle" />            
          <p class="trim-image-to-circle" />
          <p class="trim-image-to-circle" />
        </p>
      <Nav.Link>
        <Scroll to="members" smooth={true} duration={600} offset={-40}>
          <div className="toggle" {...getToggleProps()}>
            {isExpanded ? '戻す' : '一覧を見る'}
          </div>
        </Scroll>
      </Nav.Link>
    </div>
  )
}
