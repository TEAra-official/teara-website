import leaf from '../../public/images/teara_leaf.png'
import Image from 'next/image'

const style = {
    width: 60,
    height: 30,
    backgroundImage: 'url(${leaf})'
  };

function Activities_column({date, subject, summery}){
  return( 
    <li className="list-group-item" >
          <div className="contents">
            <Image src={leaf} width={30} height={30} alt=""/>
          </div>
          <div className="contents">
            {date}    
            &nbsp;&nbsp;&nbsp;&nbsp;
            {subject} <br></br>
            {summery} 
          </div>
      </li>
  )
}

export default function Activities() {
    return (
      <div className="activity-background">
            <ul className="list-group list-group-flush">
              <h2 id="activities" className="title">ACTIVITIES</h2>
              <div className="plain-text-japanese">
                <Activities_column date = "2021 / 06 / 25" subject = "TEAra立ち上げ" summery = "活動を開始しました"/>
                <Activities_column date = "2021 / 07 / 15" subject = "自分のwebサイトをつくってみよう" summery = "webサイトの概要を学んだあとHTMLをいじったり、firebaseを使ってwebサイトをホスティングしたりしました。"/>
                <Activities_column date = "2021 / 08 / 06" subject = "gitゆるゆる勉強会" summery = "gitをあまり使ったことない人対象にgitについてのワークショップを行いました。"/>
                <Activities_column date = "2021 / 09 / 13" subject = "HTMLで作成したフォームをサーバーサイドに送ってみよう" summery = "サーバーサイド作成の説明を受けたあと実装しました。"/>
                <Activities_column date = "2021 / 09 / 26" subject = "LT大会" summery = "初の内部LT大会を行いました。さまざまなテーマの発表があって面白かったです。"/>
                <Activities_column date = "2021 / 11 / ~" subject = "社内資料勉強会" summery = "サイボウズさんの新人研修資料を教材として勉強会を行なっています"/>
              </div>
            </ul>
        </div>
    )
}
