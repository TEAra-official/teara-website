import TearaFooter from '../../footer'
import { LeftButton, RightButton, Button } from './button'
import PageTitle from '../page-title'
import Image from 'next/image'

export default function Hunachi() {
  return (
    <div>
      <PageTitle title="MEMBER" />
      <div className="member-content">
        <Image className="circle" src="/images/members-icon/hunachi.jpg"
          width={180} height={180} alt="Hunachiのアイコン" />
        <p className="tag2">代表</p>
        <div className="member-detail">
          <p className="member-name">ふなち</p>
          <p>TEAraの設立者です。ほぼ引退済みの代表です。今はAndroid&Flutterエンジニアとして社会人をしています。IT系の技術ならなんでも好きな雑食系です。</p>
        </div>
      </div>
      <div className="member-button">
        <LeftButton href="/components/members/konami" />
        <Button href="/" />
        <div />
      </div>
      <TearaFooter />
    </div>
  )
}
