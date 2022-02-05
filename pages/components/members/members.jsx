import useCollapse from 'react-collapsed'
import { Nav } from 'react-bootstrap'
import { Link as Scroll } from "react-scroll"
import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()

  return (
    <div className="members-content">
      <h2 id="members" className="about-title">MEMBERS</h2>
      <p className="members-text"> 大学1年生から修士2年までの約40名で活動しています</p>
      <div className="members">
        <Link  href='./components/members/leader'>  
          <a className="members-icon">
            <Image className="circle" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAADICAMAAAA9W+hXAAAAA1BMVEX1w8P2z5tmAAAANElEQVR4nO3BMQEAAADCoPVP7WsIoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeAN1+AABVhDU2QAAAABJRU5ErkJggg=="
              width={150} height={150} />
            <p className="tag1">代表</p>
          </a>
        </Link>
        <Link  href='./components/members/leader'>  
          <a className="members-icon">
            <Image className="circle" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAADICAMAAAA9W+hXAAAAA1BMVEX1w8P2z5tmAAAANElEQVR4nO3BMQEAAADCoPVP7WsIoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeAN1+AABVhDU2QAAAABJRU5ErkJggg=="
              width={150} height={150} />
            <p className="tag1">代表</p>
          </a>
        </Link>
        <Link   href='./components/members/konami'>  
          <a className="members-icon">
            <Image className="circle" src="/images/members-icon/konami.jpg" 
              width={150} height={150} />
          </a>
        </Link>
        <Link  href='./components/members/konami2'>  
          <a className="members-icon">
            <Image className="circle" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAADICAMAAAA9W+hXAAAAA1BMVEX1w8P2z5tmAAAANElEQVR4nO3BMQEAAADCoPVP7WsIoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeAN1+AABVhDU2QAAAABJRU5ErkJggg=="
              width={150} height={150} />
          </a>
        </Link>
        <Link  href='./components/members/konami2'>  
          <a className="members-icon">
            <Image className="circle" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAADICAMAAAA9W+hXAAAAA1BMVEX1w8P2z5tmAAAANElEQVR4nO3BMQEAAADCoPVP7WsIoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeAN1+AABVhDU2QAAAABJRU5ErkJggg=="
              width={150} height={150} />
          </a>
        </Link>
        <Link  href='./components/members/konami2'>  
          <a className="members-icon">
            <Image className="circle" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAADICAMAAAA9W+hXAAAAA1BMVEX1w8P2z5tmAAAANElEQVR4nO3BMQEAAADCoPVP7WsIoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeAN1+AABVhDU2QAAAABJRU5ErkJggg=="
                width={150} height={150} />
          </a>
        </Link>
      </div>
      <div {...getCollapseProps()}>
        <div className="members">
          <Link  href='./components/members/konami2'>  
            <a className="members-icon">
              <Image className="circle" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAADICAMAAAA9W+hXAAAAA1BMVEX1w8P2z5tmAAAANElEQVR4nO3BMQEAAADCoPVP7WsIoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeAN1+AABVhDU2QAAAABJRU5ErkJggg=="
                width={150} height={150} />
            </a>
          </Link>
          <Link  href='./components/members/konami2'>  
            <a className="members-icon">
              <Image className="circle" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAADICAMAAAA9W+hXAAAAA1BMVEX1w8P2z5tmAAAANElEQVR4nO3BMQEAAADCoPVP7WsIoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeAN1+AABVhDU2QAAAABJRU5ErkJggg=="
                width={150} height={150} />
            </a>
          </Link>
          <Link  href='./components/members/konami2'>  
            <a className="members-icon">
              <Image className="circle" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAADICAMAAAA9W+hXAAAAA1BMVEX1w8P2z5tmAAAANElEQVR4nO3BMQEAAADCoPVP7WsIoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeAN1+AABVhDU2QAAAABJRU5ErkJggg=="
                width={150} height={150} />
            </a>
          </Link>
          <Link  href='./components/members/konami2'>  
            <a className="members-icon">
              <Image className="circle" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAADICAMAAAA9W+hXAAAAA1BMVEX1w8P2z5tmAAAANElEQVR4nO3BMQEAAADCoPVP7WsIoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeAN1+AABVhDU2QAAAABJRU5ErkJggg=="
                width={150} height={150} />
            </a>
          </Link>
          <Link  href='./components/members/konami2'>  
            <a className="members-icon">
              <Image className="circle" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAADICAMAAAA9W+hXAAAAA1BMVEX1w8P2z5tmAAAANElEQVR4nO3BMQEAAADCoPVP7WsIoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeAN1+AABVhDU2QAAAABJRU5ErkJggg=="
                width={150} height={150} />
            </a>
          </Link>
          <Link  href='./components/members/last'>  
            <a className="members-icon">
              <Image className="circle" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAADICAMAAAA9W+hXAAAAA1BMVEX1w8P2z5tmAAAANElEQVR4nO3BMQEAAADCoPVP7WsIoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeAN1+AABVhDU2QAAAABJRU5ErkJggg=="
                width={150} height={150} />
            </a>
          </Link>
        </div>
      </div>
      <div className="toggle" {...getToggleProps()}>
        {isExpanded ? '戻す' : '一覧を見る'}
      </div>
    </div>
  )
}
