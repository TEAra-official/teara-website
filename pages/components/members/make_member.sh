#!/bin/bash
array=()
lastname=`tail -n 1 members_list.txt`
array+=($lastname)
leftName=${array[0]}

echo -n "ローマ字で名前を入力してください（ファイル名になる名前）:"
read RomaName
echo -n "名前を入力してください（表示される名前）:"
read Name
echo -n "自己紹介文を入力してください:"
read Text
echo -n "代表ですか（y/n）:"
read Daihyo
echo -n "アイコンの画像のファイル名を教えてください:"
read Icon

if [ "$Daihyo" = "y" ]; then
cat <<MAIN > ${RomaName}.jsx
import TearaFooter from '../../footer'
import { LeftButton, RightButton, Button } from './button'
import PageTitle from '../page-title'
import Image from 'next/image'

export default function ${RomaName}() {
  return (
    <div>
      <PageTitle title="MEMBER" />
      <div className="member-content">
        <Image className="circle" src="/images/members-icon/${Icon}"
          width={180} height={180} alt="${RomaName}のアイコン" />
        <p className="tag2">代表</p>
        <div className="member-detail">
          <p className="member-name">${Name}</p>
          <p>${Text}</p>
        </div>
      </div>
      <div className="member-button">
        <LeftButton href="/components/members/${leftName}" />
        <Button href="/" />
        <div />
      </div>
      <TearaFooter />
    </div>
  )
}
MAIN
else
cat <<MAIN > ${RomaName}.jsx
import TearaFooter from '../../footer'
import { LeftButton, RightButton, Button } from './button'
import PageTitle from '../page-title'
import Image from 'next/image'

export default function ${RomaName}() {
  return (
    <div>
      <PageTitle title="MEMBER" />
      <div className="member-content">
        <Image className="circle" src="/images/members-icon/${Icon}"
          width={180} height={180} alt="${RomaName}のアイコン" />
        <div className="member-detail">
          <p className="member-name">${Name}</p>
          <p>${Text}</p>
        </div>
      </div>
      <div className="member-button">
        <LeftButton href="/components/members/${leftName}" />
        <Button href="/" />
        <div />
      </div>
      <TearaFooter />
    </div>
  )
}
MAIN
fi

echo "${RomaName}.jsxが作られました"

sed -i -e "s!<div />!<RightButton href=\"/components/members/${RomaName}\" />!" ./${leftName}.jsx
echo "${leftName}.jsxのRightButtonのリンクを変更しました"

if [ "$Daihyo" = "y" ]; then
  echo "${RomaName} ${Icon} 1" >> members_list.txt
else
  echo "${RomaName} ${Icon} 0" >> members_list.txt
fi

cat <<FRONT > members.jsx
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

count=0
while IFS=" " read roma_name icon lea
do
if [ $count -lt 6 ]; then
  if [ $lea = 1 ]; then
  cat <<MEMBERS1_L >>members.jsx
          <Link href='./components/members/${roma_name}'>
            <a className="members-icon">
              <Image className="circle" src="/images/members-icon/${icon}"
                width={150} height={150} alt="${roma_name}のアイコン" />
              <p className="tag1">代表</p>
            </a>
          </Link>
MEMBERS1_L
  else 
  cat <<MEMBERS1 >>members.jsx
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
  cat <<MIDDLE_L >> members.jsx
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
  cat <<MIDDLE >> members.jsx
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
  cat <<MEMBERS2_L >> members.jsx
            <Link href='./components/members/${roma_name}'>
              <a className="members-icon">
                <Image className="circle" src="/images/members-icon/${icon}"
                  width={150} height={150} alt="${roma_name}のアイコン" />
                <p className="tag1">代表</p>
              </a>
            </Link>
MEMBERS2_L
  else 
  cat <<MEMBERS2 >> members.jsx
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
cat <<MIDDLE >> members.jsx
        </div>
        <div {...getCollapseProps()}>
          <div className="members">
MIDDLE
fi

cat <<BACK >> members.jsx
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
