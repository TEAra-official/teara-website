import TearaFooter from '../../footer'
import { LeftButton, RightButton, Button } from './button'
import PageTitle from '../page-title'
import Image from 'next/image'

export default function hyaku() {
  return (
    <div>
      <PageTitle title="MEMBER" />
      <div className="member-content">
        <Image className="circle" src="/images/members-icon/basecolor.png"
          width={180} height={180} alt="hyakuのアイコン" />
        <div className="member-detail">
          <p className="member-name">si-tm</p>
          <p>いろいろ頑張りたいB4</p>
        </div>
      </div>
      <div className="member-button">
        <LeftButton href="/components/members/tori" />
        <Button href="/" />
        <RightButton href="/components/members/fai" />
      </div>
      <TearaFooter />
    </div>
  )
}
