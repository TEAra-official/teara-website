import TearaFooter from './footer'
import { RightButton, Button } from './button'
import PageTitle from '../page-title'
import Image from 'next/image'

export default function Tori() {
  return (
    <div>
      <PageTitle title="MEMBER" />
      <div className="member-content plain-text-japanese">
        <Image className="circle" src="../../../images/members-icon/tori.jpg"
          width={180} height={180} alt="Toriのアイコン" />
        <p className="tag2">運営</p>
        <div className="member-detail">
          <p className="member-name">とり</p>
          <p>TEAraの設立と代表をしています。バックエンド系のお仕事をやっていることが多いです。</p>
        </div>
      </div>
      <div className="member-button">
        <div/>
        <Button href="/" />
        <RightButton href="/components/members/Hunachi" />
      </div>
      <TearaFooter />
    </div>
  )
}
