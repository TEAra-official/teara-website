import TearaFooter from '../../footer'
import { LeftButton, RightButton, Button } from './button'
import PageTitle from '../page-title'
import Image from 'next/image'

export default function ohiocha() {
  return (
    <div>
      <PageTitle title="MEMBER" />
      <div className="member-content">
        <Image className="circle" src="/images/members-icon/basecolor.png"
          width={180} height={180} alt="ohiochaのアイコン" />
        <div className="member-detail">
          <p className="member-name">おーいお茶</p>
          <p>呼ばれます</p>
        </div>
      </div>
      <div className="member-button">
        <LeftButton href="/components/members/macha" />
        <Button href="/" />
        <div />
      </div>
      <TearaFooter />
    </div>
  )
}
