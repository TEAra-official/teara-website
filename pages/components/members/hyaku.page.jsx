import TearaFooter from './footer'
import { LeftButton, RightButton, Button } from './button'
import PageTitle from '../page-title'
import Image from 'next/image'

export default function Hyaku() {
  return (
    <div>
      <PageTitle title="MEMBER" />
      <div className="member-content plain-text-japanese">
        <Image className="circle" src="../../../images/members-icon/hyaku.png"
          width={180} height={180} alt="si-tmのアイコン" />
        <div className="member-detail">
          <p className="member-name">si-tm</p>
          <p>色々やりたいB4</p>
        </div>
      </div>
      <div className="member-button">
        <LeftButton href="/components/members/konami" />
        <Button href="/" />
        <RightButton href="/components/members/aono" />
      </div>
      <TearaFooter />
    </div>
  )
}
