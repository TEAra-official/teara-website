import TearaFooter from './footer'
import { LeftButton, RightButton, Button } from './button'
import PageTitle from '../page-title'
import Image from 'next/image'

export default function hinata() {
  return (
    <div>
      <PageTitle title="MEMBER" />
      <div className="member-content plain-text-japanese">
        <Image className="circle" src="../../../images/members-icon/hinata.jpg"
          width={180} height={180} alt="hinataのアイコン" />
        <div className="member-detail">
          <p className="member-name">せきぐち</p>
          <p>よろしくお願いします</p>
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
