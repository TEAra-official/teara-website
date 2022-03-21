import useCollapse from 'react-collapsed'
import Image from 'next/image'
import Link from 'next/link'

export default function Members() {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse()

  return (
    <div className={"members-content" + " " + "plain-text-japanese"}>
      <h2 id="members" className={"about-title" + " " + "title"}>MEMBERS</h2>
      <div className="plain-text-japanese">
        <p> 大学1年生から修士2年までの約40名で活動しています</p>
      </div>
      <div className="members">
        <Link href='./components/members/leader'>
          <a className="members-icon">
            <Image className="circle" src="/images/members-icon/icon-basecolor.png"
              width={150} height={150} alt=""/>
            <p className="tag1">代表</p>
          </a>
        </Link>
        <Link href='./components/members/leader'>
          <a className="members-icon">
            <Image className="circle" src="/images/members-icon/icon-basecolor.png"
              width={150} height={150} alt=""/>
            <p className="tag1">代表</p>
          </a>
        </Link>
        <Link href='./components/members/konami'>
          <a className="members-icon">
            <Image className="circle" src="/images/members-icon/konami.jpg"
              width={150} height={150} alt=""/>
          </a>
        </Link>
        <Link href='./components/members/konami2'>
          <a className="members-icon">
            <Image className="circle" src="/images/members-icon/icon-basecolor.png"
              width={150} height={150} alt=""/>
          </a>
        </Link>
        <Link href='./components/members/konami2'>
          <a className="members-icon">
            <Image className="circle" src="/images/members-icon/icon-basecolor.png"
              width={150} height={150} alt=""/>
          </a>
        </Link>
        <Link href='./components/members/konami2'>
          <a className="members-icon">
            <Image className="circle" src="/images/members-icon/icon-basecolor.png"
              width={150} height={150} alt=""/>
          </a>
        </Link>
      </div>
      <div {...getCollapseProps()}>
        <div className="members">
          <Link href='./components/members/konami2'>
            <a className="members-icon">
              <Image className="circle" src="/images/members-icon/icon-basecolor.png"
                width={150} height={150} alt=""/>
            </a>
          </Link>
          <Link href='./components/members/konami2'>
            <a className="members-icon">
              <Image className="circle" src="/images/members-icon/icon-basecolor.png"
                width={150} height={150} alt=""/>
            </a>
          </Link>
          <Link href='./components/members/konami2'>
            <a className="members-icon">
              <Image className="circle" src="/images/members-icon/icon-basecolor.png"
                width={150} height={150} alt=""/>
            </a>
          </Link>
          <Link href='./components/members/konami2'>
            <a className="members-icon">
              <Image className="circle" src="/images/members-icon/icon-basecolor.png"
                width={150} height={150} alt=""/>
            </a>
          </Link>
          <Link href='./components/members/konami2'>
            <a className="members-icon">
              <Image className="circle" src="/images/members-icon/icon-basecolor.png"
                width={150} height={150} alt=""/>
            </a>
          </Link>
          <Link href='./components/members/last'>
            <a className="members-icon">
              <Image className="circle" src="/images/members-icon/icon-basecolor.png"
                width={150} height={150} alt=""/>
            </a>
          </Link>
        </div>
      </div>
      <div className="toggle" {...getToggleProps()}>
        {isExpanded ? '戻す' : '一覧を見る'}
      </div>
    </div>
  )
}
