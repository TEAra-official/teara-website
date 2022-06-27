import TearaFooter from './footer'
import { LeftButton, RightButton, Button } from './button'
import PageTitle from '../page-title'
import Image from 'next/image'

export default function ymymym_r() {
  return (
    <div>
      <PageTitle title="MEMBER" />
      <div className="member-content plain-text-japanese">
        <Image className="circle" src="../../../images/members-icon/ym-r.jpg"
          width={180} height={180} alt="ymymym_rのアイコン" />
        <div className="member-detail">
          <p className="member-name">よもーる</p>
          <p>のんびり頑張ります〜。</p>
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
