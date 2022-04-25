import TearaFooter from './footer'
import { LeftButton, RightButton, Button } from './button'
import PageTitle from '../page-title'
import Image from 'next/image'

export default function aono() {
  return (
    <div>
      <PageTitle title="MEMBER" />
      <div className="member-content plain-text-japanese">
        <Image className="circle" src="../../../images/members-icon/aono.JPG"
          width={180} height={180} alt="aonoのアイコン" />
        <div className="member-detail">
          <p className="member-name">sino</p>
          <p>it分野に幅広い興味関心を持っています。</p>
        </div>
      </div>
      <div className="member-button">
        <LeftButton href="/components/members/hyaku" />
        <Button href="/" />
        <RightButton href="/components/members/hinata" />
        <div />
      </div>
      <TearaFooter />
    </div>
  )
}
