import useCollapse from 'react-collapsed'
import Image from 'next/image'
import Link from 'next/link'

export default function Members() {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()

  return (
    <div className="members-content">
      <h2 id="members" className="about-title">MEMBERS</h2>
      <p className="members-text"> 大学1年生から修士2年までの約40名で活動しています</p>
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
              <Image className="circle" src="/images/members-icon/basecolor.png"
                width={150} height={150} alt="hyakuのアイコン" />
            </a>
          </Link>
          <Link href='./components/members/konami'>
            <a className="members-icon">
              <Image className="circle" src="/images/members-icon/konami.jpg"
                width={150} height={150} alt="konamiのアイコン" />
            </a>
          </Link>
          <Link href='./components/members/happy'>
            <a className="members-icon">
              <Image className="circle" src="/images/members-icon/basecolor.png"
                width={150} height={150} alt="happyのアイコン" />
            </a>
          </Link>
          <Link href='./components/members/shiyu'>
            <a className="members-icon">
              <Image className="circle" src="/images/members-icon/basecolor.png"
                width={150} height={150} alt="shiyuのアイコン" />
            </a>
          </Link>
          <Link href='./components/members/koiocha'>
            <a className="members-icon">
              <Image className="circle" src="/images/members-icon/basecolor.png"
                width={150} height={150} alt="koiochaのアイコン" />
            </a>
          </Link>
        </div>
        <div {...getCollapseProps()}>
          <div className="members">
            <Link href='./components/members/usuiocha'>
              <a className="members-icon">
                <Image className="circle" src="/images/members-icon/basecolor.png"
                  width={150} height={150} alt="usuiochaのアイコン" />
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="toggle" {...getToggleProps()}>
        {isExpanded ? '戻す' : '一覧を見る'}
      </div>
    </div>
  )
}
