import TearaFooter from './footer'
import { LeftButton, RightButton, Button } from './button'
import PageTitle from '../page-title'
import Image from 'next/image'

export default function mizuki() {
  return (
    <div>
      <PageTitle title="MEMBER" />
      <div className="member-content plain-text-japanese">
        <Image className="circle" src="../../../images/members-icon/mizuki.png"
          width={180} height={180} alt="mizukiのアイコン" />
        <div className="member-detail">
          <p className="member-name">みず吉</p>
          <p>特にフロントに興味があります！色々頑張ります！</p>
        </div>
      </div>
      <div className="member-button">
        <LeftButton href="/components/members/tori" />
        <Button href="/" />
        <RightButton href="/components/members/konami" />
        <div />
      </div>
      <TearaFooter />
    </div>
  )
}
