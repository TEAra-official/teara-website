#!/bin/bash

# メンバーの一覧を更新。
cat <<FRONT > ../pages/components/members/members.jsx
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
FRONT

# members_list.txtから情報を受け取る
# 6個目までは一行目で、残りは「一覧を見る」ボタンを押すと出てくる
# 毎回代表かどうかで場合分けしている（くどいやり方かも）
count=0
while IFS=" " read roma_name icon lea
do
if [ $count -lt 6 ]; then
  if [ $lea = 1 ]; then
  cat <<MEMBERS1_L >> ../pages/components/members/members.jsx
          <Link href='./components/members/${roma_name}'>
            <a className="members-icon">
              <Image className="circle" src="/images/members-icon/${icon}"
                width={150} height={150} alt="${roma_name}のアイコン" />
              <p className="tag1">代表</p>
            </a>
          </Link>
MEMBERS1_L
  else 
  cat <<MEMBERS1 >> ../pages/components/members/members.jsx
          <Link href='./components/members/${roma_name}'>
            <a className="members-icon">
              <Image className="circle" src="/images/members-icon/${icon}"
                width={150} height={150} alt="${roma_name}のアイコン" />
            </a>
          </Link>
MEMBERS1
  fi
elif [ $count -eq 6 ]; then
  if [ $lea = 1 ]; then
  cat <<MIDDLE_L >> ../pages/components/members/members.jsx
        </div>
        <div {...getCollapseProps()}>
          <div className="members">
            <Link href='./components/members/${roma_name}'>
              <a className="members-icon">
                <Image className="circle" src="/images/members-icon/${icon}"
                  width={150} height={150} alt="${roma_name}のアイコン" />
                <p className="tag1">代表</p>
              </a>
            </Link>
MIDDLE_L
  else 
  cat <<MIDDLE >> ../pages/components/members/members.jsx
        </div>
        <div {...getCollapseProps()}>
          <div className="members">
            <Link href='./components/members/${roma_name}'>
              <a className="members-icon">
                <Image className="circle" src="/images/members-icon/${icon}"
                  width={150} height={150} alt="${roma_name}のアイコン" />
              </a>
            </Link>
MIDDLE
  fi
else
  if [ $lea = 1 ]; then
  cat <<MEMBERS2_L >> ../pages/components/members/members.jsx
            <Link href='./components/members/${roma_name}'>
              <a className="members-icon">
                <Image className="circle" src="/images/members-icon/${icon}"
                  width={150} height={150} alt="${roma_name}のアイコン" />
                <p className="tag1">代表</p>
              </a>
            </Link>
MEMBERS2_L
  else 
  cat <<MEMBERS2 >> ../pages/components/members/members.jsx
            <Link href='./components/members/${roma_name}'>
              <a className="members-icon">
                <Image className="circle" src="/images/members-icon/${icon}"
                  width={150} height={150} alt="${roma_name}のアイコン" />
              </a>
            </Link>
MEMBERS2
  fi
fi
count=$(( $count + 1 ))
done < members_list.txt

if [ $count -lt 7 ]; then
cat <<MIDDLE >> ../pages/components/members/members.jsx
        </div>
        <div {...getCollapseProps()}>
          <div className="members">
MIDDLE
fi

cat <<BACK >> ../pages/components/members/members.jsx
          </div>
        </div>
      </div>
      <div className="toggle" {...getToggleProps()}>
        {isExpanded ? '戻す' : '一覧を見る'}
      </div>
    </div>
  )
}
BACK
