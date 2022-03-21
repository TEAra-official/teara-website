import useCollapse from 'react-collapsed'
import { Nav } from 'react-bootstrap'
import { Link as Scroll } from "react-scroll"

export default function About() {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()

  return (
    <div className={"about-content" + " " + "plain-text-japanese"}>
      <h2 id="about" className={"about-title" + " " + "title"}>ABOUT</h2>
      <p>
        TEAraはお茶の水女子大学の開発コミュニティです。
        <br />
        あああああああああああああああああああああああああああああああ
        <p {...getCollapseProps()}>
          あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ
          <br />
          ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ
          <br />
        </p>
      </p>
      <Nav.Link>
        <Scroll to="about" smooth={true} duration={600} offset={-100}>
          <div className="toggle" {...getToggleProps()}>
            {isExpanded ? '戻す' : '詳しく見る'}
          </div>
        </Scroll>
      </Nav.Link>
    </div>
  )
}
