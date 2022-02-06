import TearaFooter from '../../footer'
import { RightButton } from './button'
import PageTitle from '../page-title'
import Image from 'next/image'

export default function Leader() {
  return (
    <div>
      <PageTitle title="MEMBER" />
      <div className="member-content">
        <Image className="circle" src="/images/members-icon/icon-basecolor.png"
          width={180} height={180} />
        <p className="tag2">代表</p>
        <div className="member-detail">
          <p className="member-name">leader</p>
          <p>自己紹介あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ</p>
        </div>
      </div>
      <div className="member-button">
        <div />
        <RightButton
          href="/components/members/konami"
        />
      </div>
      <TearaFooter />
    </div>
  )
}
