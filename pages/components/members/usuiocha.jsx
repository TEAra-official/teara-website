import TearaFooter from '../../footer'
import { LeftButton, RightButton, Button } from './button'
import PageTitle from '../page-title'
import Image from 'next/image'

export default function usuiocha() {
  return (
    <div>
      <PageTitle title="MEMBER" />
      <div className="member-content">
        <Image className="circle" src="/images/members-icon/basecolor.png"
          width={180} height={180} alt="usuiochaのアイコン" />
        <div className="member-detail">
          <p className="member-name">薄いお茶</p>
          <p>薄いお茶と言います</p>
        </div>
      </div>
      <div className="member-button">
        <LeftButton href="/components/members/koiocha" />
        <Button href="/" />
        <div />
      </div>
      <TearaFooter />
    </div>
  )
}
