# Teara Website

## Get Start
```
$ npm run dev
    Starts the development server.

$ npm run build
    Builds the app for production.

$ npm start
    Runs the built app in production mode.

We suggest that you begin by typing:
$ npm run dev
```

## Other Information
- [Branch regulation](doc/branch.md)
- [Commit regulation](doc/commit.md)

## メンバーの追加方法
- アイコンに使う画像を`public/images/members-icon`に入れる
- `pages/members`に自分の名前のページを作成する
    - toriならtori.jsx
    - konami2.jsxの中身をコピーする
    - フォーマットに従って、内容を記入する
       - 名前、自己紹介、アイコン画像のリンク先を変更する。関数名も書き換える。
       - (前後の人が分かっていたら自分のページのLeftButtonとRightButtonのリンク先も変更する)
       
![スクリーンショット (28)](https://user-images.githubusercontent.com/83947560/153860195-8d910c9f-1924-4735-9cde-5ab2fcab1691.png)

- members.jsxのアイコンの部分を自分のに書き換える 
   - `href='./components/members/konami2'`となっているもののリンク先と画像のリンク先を書き換える
   - (`href='./components/members/konami2'`となっているものがなかったら一人分をコピーする)

![スクリーンショット (33)](https://user-images.githubusercontent.com/83947560/153860254-bc66eb5d-a2fa-4b56-b236-8e0ea72cc48f.png)
