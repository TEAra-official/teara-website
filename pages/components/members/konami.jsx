import TearaFooter from '../../footer'
import { LeftButton, RightButton, Button } from './button'
import PageTitle from '../page-title'
import Image from 'next/image'

export default function Konami() {
  return (
    <div>
      <PageTitle title="MEMBER" />
      <div className="member-content">
        <Image className="circle" src="/images/members-icon/konami.jpg"
          width={180} height={180} alt="" />
        <div className="member-detail">
          <p className="member-name">konamilk</p>
          <p>競技プログラミングをまったり頑張っています。</p>
        </div>
      </div>
      <div className="member-button">
        <LeftButton href="/components/members/hyaku" />
        <Button href="/" />
        <RightButton href="/components/members/happy" />
      </div>
      <TearaFooter />
    </div>
  )
}
