import leaf from '../../public/teara_leaf.png'
import React, { useState } from "react";

const style = {
    width: 30,
    height: 30,
    backgroundImage: 'url(${leaf})'
  };

function Activities_column({date, subject, summery}){
    console.log("hey", leaf)
    const img1= require('../../public/teara_leaf.png');
    const images= [img1];
    const [currentImage, setCurrentImage]= useState();
    React.useEffect(() => {
        setCurrentImage(img1);
        console.log(currentImage)
    }, []);
  return(
    
    <li class="list-group-item" >
        {/* <div className="activity-background"> */}
        {/* 画像 */}
        {/* <div className="activity-column-image">
        </div> */}
        {/* <img src={`${process.env.PUBLIC_URL}/teara_leaf.png`}/>
          <img src = {leaf}/> */}
          <img style={style}/>
          <img src={images[currentImage]} />
          <img src={leaf} />
          <div style={style}></div>
         
          
          {date} {subject} <br></br>
          {summery} 
        {/* </div> */}
      </li>
   
  )
}

export default function activities() {
    return (
        <div className="activity-background">
            <ul class="list-group list-group-flush">
                <div className="sub">
                    <h1>Activities</h1>
                </div>
                <Activities_column date = "2021/6/25" subject = "TEAra立ち上げ" summery = "活動を開始しました"/>
                <Activities_column date = "2021/7/15" subject = "自分のwebサイトをつくってみよう" summery = "webサイトの概要を学んだあとHTMLをいじったり、firebaseを使ってwebサイトをホスティングしたりしました。"/>
                <Activities_column date = "2021/8/6" subject = "gitゆるゆる勉強会" summery = "gitをあまり使ったことない人対象にgitについてのワークショップを行いました。"/>
                <Activities_column date = "2021/9/13" subject = "HTMLで作成したフォームをサーバーサイドに送ってみよう" summery = "サーバーサイド作成の説明を受けたあと実装しました。"/>
                <Activities_column date = "2021/9/26" subject = "LT大会" summery = "初の内部LT大会を行いました。さまざまなテーマの発表があって面白かったです。"/>
                <Activities_column date = "2021/11/~" subject = "社内資料勉強会" summery = "サイボウズさんの新人研修資料を教材として勉強会を行なっています"/>
            </ul>
        </div>
    )
  }
