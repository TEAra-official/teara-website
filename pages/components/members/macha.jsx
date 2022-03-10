import TearaFooter from '../../footer'
import { LeftButton, RightButton, Button } from './button'
import PageTitle from '../page-title'
import Image from 'next/image'

export default function macha() {
  return (
    <div>
      <PageTitle title="MEMBER" />
      <div className="member-content">
        <Image className="circle" src="/images/members-icon/basecolor.png"
          width={180} height={180} alt="machaのアイコン" />
        <div className="member-detail">
          <p className="member-name">まっちゃ</p>
          <p>まあまあなお茶です</p>
        </div>
      </div>
      <div className="member-button">
        <LeftButton href="/components/members/usuiocha" />
        <Button href="/" />
        <RightButton href="/components/members/ohiocha" />
      </div>
      <TearaFooter />
    </div>
  )
}
