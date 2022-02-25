import TearaFooter from '../../footer'
import { LeftButton, RightButton } from './button'
import PageTitle from '../page-title'
import Image from 'next/image'

export default function Konami2() {
  return (
    <div>
      <PageTitle title="MEMBER" />
      <div className="member-content">
        <Image className="circle" src="/images/members-icon/icon-basecolor.png"
          width={180} height={180} alt=""/>
        <div className="member-detail">
          <p className="member-name">konamilk2</p>
          <p>自己紹介</p>
        </div>
      </div>
      <div className="member-button">
        <LeftButton href="/components/members/hyaku" />
        <RightButton
          href="/components/members/last" />
      </div>
      <TearaFooter />
    </div>
  )
}
