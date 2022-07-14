import TearaFooter from './footer'
import { LeftButton, RightButton, Button } from './button'
import PageTitle from '../page-title'
import Image from 'next/image'

export default function kana() {
  return (
    <div>
      <PageTitle title="MEMBER" />
      <div className="member-content plain-text-japanese">
        <Image className="circle" src="../../../images/members-icon/kana.jpg"
          width={180} height={180} alt="kanaのアイコン" />
        <div className="member-detail">
          <p className="member-name">kana</p>
          <p>お茶大生です！！！！</p>
        </div>
      </div>
      <div className="member-button">
        <LeftButton href="/components/members/hyaku" />
        <Button href="/" />
        <div />
      </div>
      <TearaFooter />
    </div>
  )
}
