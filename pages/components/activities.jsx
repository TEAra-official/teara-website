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
            {date} {subject} <br></br>
            {summery} 
          </div>
      </li>
  )
}

export default function Activities() {
    return (
      <div className="activity-background">
            <ul className="list-group list-group-flush">
            <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@700&display=swap" rel="stylesheet"/>
                <div className="title">
                 <h2 id="activities" className="title">ACTIVITIES</h2>
                </div>
                <div className="plain-text-japanese">
                  {/* ここ */}
                  <link href="https://fonts.googleapis.com/css2?family=Kiwi+Maru:wght@400;500&family=M+PLUS+Rounded+1c&family=Reggae+One&family=Roboto+Serif:ital,wght@0,500;0,700;1,600&display=swap" rel="stylesheet"></link>
                  <Activities_column date = "2021/6/25" subject = "TEAra立ち上げ" summery = "活動を開始しました"/>
                  <Activities_column date = "2021/7/15" subject = "自分のwebサイトをつくってみよう" summery = "webサイトの概要を学んだあとHTMLをいじったり、firebaseを使ってwebサイトをホスティングしたりしました。"/>
                  <Activities_column date = "2021/8/6" subject = "gitゆるゆる勉強会" summery = "gitをあまり使ったことない人対象にgitについてのワークショップを行いました。"/>
                  <Activities_column date = "2021/9/13" subject = "HTMLで作成したフォームをサーバーサイドに送ってみよう" summery = "サーバーサイド作成の説明を受けたあと実装しました。"/>
                  <Activities_column date = "2021/9/26" subject = "LT大会" summery = "初の内部LT大会を行いました。さまざまなテーマの発表があって面白かったです。"/>
                  <Activities_column date = "2021/11/~" subject = "社内資料勉強会" summery = "サイボウズさんの新人研修資料を教材として勉強会を行なっています"/>
            
                </div>
            </ul>
        </div>
    )
}
