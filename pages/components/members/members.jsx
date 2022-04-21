import useCollapse from 'react-collapsed'
import Image from 'next/image'
import Link from 'next/link'

export default function Members() {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()

  return (
    <div className="members-content plain-text-japanese">
      <h2 id="members" className="about-title title">MEMBERS</h2>
      <p className="members-text plain-text-japanese"> 大学1年生から修士2年までの約40名で活動しています</p>
      <div>
        <div className="members">
          <Link href='./components/members/tori'>
            <a className="members-icon">
              <Image className="circle" src="/images/members-icon/tori.jpg"
                width={150} height={150} alt="toriのアイコン" />
              <p className="tag1">代表</p>
            </a>
          </Link>
          <Link href='./components/members/hyaku'>
            <a className="members-icon">
              <Image className="circle" src="/images/members-icon/hyaku.png"
                width={150} height={150} alt="hyakuのアイコン" />
            </a>
          </Link>
          <Link href='./components/members/konami'>
            <a className="members-icon">
              <Image className="circle" src="/images/members-icon/konami.jpg"
                width={150} height={150} alt="konamiのアイコン" />
            </a>
          </Link>
        </div>
        <div {...getCollapseProps()}>
          <div className="members">
          </div>
        </div>
      </div>
      <div className="toggle" {...getToggleProps()}>
        {isExpanded ? '戻す' : '一覧を見る'}
      </div>
    </div>
  )
}
