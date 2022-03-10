import TearaFooter from '../../footer'
import { LeftButton, RightButton, Button } from './button'
import PageTitle from '../page-title'
import Image from 'next/image'

export default function koiocha() {
  return (
    <div>
      <PageTitle title="MEMBER" />
      <div className="member-content">
        <Image className="circle" src="/images/members-icon/basecolor.png"
          width={180} height={180} alt="koiochaのアイコン" />
        <div className="member-detail">
          <p className="member-name">濃いお茶</p>
          <p>濃いお茶です</p>
        </div>
      </div>
      <div className="member-button">
        <LeftButton href="/components/members/shiyu" />
        <Button href="/" />
        <RightButton href="/components/members/usuiocha" />
      </div>
      <TearaFooter />
    </div>
  )
}
