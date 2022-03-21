#!/bin/bash

# 左ボタン用に、member_list.txtから最後のファイル名を取得
array=()
lastname=`tail -n 1 members_list.txt`
array+=($lastname)
leftName=${array[0]}

# これから作る個人ページの情報を受け取る
echo -n "ローマ字で名前を入力してください（ファイル名になる名前）:"
read RomaName
while :
do 
  flag=0
  while IFS=" " read roma_name icon lea
  do
    if [ "${roma_name}" = "${RomaName}" ]; then
      flag=1
    fi
  done < members_list.txt # members_listを見て、すでにRomaNameが使われていたら変えるように指示する

  if [ ${flag} = 1 ]; then
    echo -n "すでにその名前が使われています。他の名前を入力してください:"
    read RomaName
  else 
    break
  fi
done
echo -n "名前を入力してください（表示される名前）:"
read Name
echo -n "自己紹介文を入力してください:"
read Text
echo -n "代表ですか（y/n）:"
read Daihyo
echo -n "アイコンの画像のファイル名を教えてください:"
read Icon

# 個人ページを作る
  if [ "$Daihyo" = "y" ]; then
cat <<MAIN_L > ../pages/components/members/${RomaName}.jsx
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
MAIN_L
else
cat <<MAIN > ../pages/components/members/${RomaName}.jsx
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

# ひとつ前のファイルの右ボタンを作る。もともと何もなかった位置（<div />）をリンクの入った右ボタンに置換
sed -i -e "s!<div />!<RightButton href=\"/components/members/${RomaName}\" />!" ../pages/components/members/${leftName}.jsx
echo "${leftName}.jsxのRightButtonのリンクを変更しました"

# members_list.txtを更新
if [ "$Daihyo" = "y" ]; then
  echo "${RomaName} ${Icon} 1" >> members_list.txt
else
  echo "${RomaName} ${Icon} 0" >> members_list.txt
fi

sh members.sh
