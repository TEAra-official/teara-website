import TearaFooter from '../../footer'
import { LeftButton, RightButton, Button } from './button'
import PageTitle from '../page-title'
import Image from 'next/image'

export default function shiyu() {
  return (
    <div>
      <PageTitle title="MEMBER" />
      <div className="member-content">
        <Image className="circle" src="/images/members-icon/basecolor.png"
          width={180} height={180} alt="shiyuのアイコン" />
        <div className="member-detail">
          <p className="member-name">しゆ</p>
          <p>しゆです</p>
        </div>
      </div>
      <div className="member-button">
        <LeftButton href="/components/members/happy" />
        <Button href="/" />
        <RightButton href="/components/members/koiocha" />
      </div>
      <TearaFooter />
    </div>
  )
}
