#!/bin/bash

# メンバーの一覧を更新。
createHeadPart() {
cat <<FRONT > ../pages/components/members/members.jsx
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
FRONT
}

# メンバー一人一人の部分を記述
# 毎回代表かどうかで場合分けしている
updateMember() {
if [ $1 -lt 6 ]; then
  if [ $4 -eq 1 ]; then
  cat <<MEMBERS1_L >> ../pages/components/members/members.jsx
          <Link href='./components/members/$2'>
            <a className="members-icon">
              <Image className="circle" src="/images/members-icon/$3"
                width={150} height={150} alt="$2のアイコン" />
              <p className="tag1">代表</p>
            </a>
          </Link>
MEMBERS1_L
  else 
  cat <<MEMBERS1 >> ../pages/components/members/members.jsx
          <Link href='./components/members/$2'>
            <a className="members-icon">
              <Image className="circle" src="/images/members-icon/$3"
                width={150} height={150} alt="$2のアイコン" />
            </a>
          </Link>
MEMBERS1
  fi
elif [ $1 -eq 6 ]; then
  if [ $4 -eq 1 ]; then
  cat <<MIDDLE_L >> ../pages/components/members/members.jsx
        </div>
        <div {...getCollapseProps()}>
          <div className="members">
            <Link href='./components/members/$2'>
              <a className="members-icon">
                <Image className="circle" src="/images/members-icon/$3"
                  width={150} height={150} alt="$2のアイコン" />
                <p className="tag1">代表</p>
              </a>
            </Link>
MIDDLE_L
  else 
  cat <<MIDDLE >> ../pages/components/members/members.jsx
        </div>
        <div {...getCollapseProps()}>
          <div className="members">
            <Link href='./components/members/$2'>
              <a className="members-icon">
                <Image className="circle" src="/images/members-icon/$3"
                  width={150} height={150} alt="$2のアイコン" />
              </a>
            </Link>
MIDDLE
  fi
else
  if [ $4 -eq 1 ]; then
  cat <<MEMBERS2_L >> ../pages/components/members/members.jsx
            <Link href='./components/members/$2'>
              <a className="members-icon">
                <Image className="circle" src="/images/members-icon/$3"
                  width={150} height={150} alt="$2のアイコン" />
                <p className="tag1">代表</p>
              </a>
            </Link>
MEMBERS2_L
  else 
  cat <<MEMBERS2 >> ../pages/components/members/members.jsx
            <Link href='./components/members/$2'>
              <a className="members-icon">
                <Image className="circle" src="/images/members-icon/$3"
                  width={150} height={150} alt="$2のアイコン" />
              </a>
            </Link>
MEMBERS2
  fi
fi
}

# メンバーの部分を記述
addMiddlePart() {
while IFS=" " read roma_name icon lea
do
# メンバー一人一人の部分を記述
updateMember ${count} ${roma_name} ${icon} ${lea}
count=$(( count + 1 ))
done < members_list.txt
}


# 最後の部分を記述
addLastPart() {
if [ $1 -lt 7 ]; then
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
}

# 最初の部分を記述
createHeadPart

# members_list.txtから情報を受け取ってメンバー一覧の部分を作成
# 6個目までは一行目で、残りは「一覧を見る」ボタンを押すと出てくる
count=0 # 何個目かカウント
addMiddlePart

# 最後の部分を記述
addLastPart ${count}
