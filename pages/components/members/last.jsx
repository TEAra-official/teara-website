import TearaFooter from '../../footer'
import RightButton from './right-button'
import LeftButton from './left-button'
import PageTitle from '../page-title'
import Image from 'next/image'
import Link from 'next/link'

export default function Konami() {
  return(
    <div>
      <PageTitle title="MEMBER"/>
      <div className="member-content">
        <Image className="circle" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAADICAMAAAA9W+hXAAAAA1BMVEX1w8P2z5tmAAAANElEQVR4nO3BMQEAAADCoPVP7WsIoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeAN1+AABVhDU2QAAAABJRU5ErkJggg=="
          width={180} height={180} />
          <div className="member-detail">
            <p className="member-name">last</p>
            <p>自己紹介</p>
          </div>
      </div>
        <div className="member-button">
          <LeftButton
            href="/components/members/konami2"
            />
          <div />
        </div>
      <TearaFooter />
    </div>
  )
}
