import TearaFooter from '../../footer'
import { LeftButton, RightButton } from './button'
import PageTitle from '../page-title'
import Image from 'next/image'

export default function Konami2() {
  return (
    <div>
      <PageTitle title="MEMBER" />
      <div className="member-content">
        <Image className="circle" src="/images/members-icon/hyaku.png"
          width={180} height={180} alt=""/>
        <div className="member-detail">
          <p className="member-name">si-tm</p>
          <p>色々やりたいB4</p>
          {/* <a href="https://github.com/si-tm">github</a> */}
        </div>
      </div>
      <div className="member-button">
        <LeftButton href="/components/members/konami" />
        <RightButton
          href="/components/members/konami2" />
      </div>
      <TearaFooter />
    </div>
  )
}
