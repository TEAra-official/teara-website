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
- `main`ブランチからブランチを切る。
    - `git switch -c make-konami`とターミナルで打つ。`konami`の部分は自分の名前に変更する。
- アイコンに使う画像を`/public/images/members-icon`に入れる。
- `/scripts`にいる状態で`./make_member.sh`と打って、実行する。以下のようにファイル名、表示名、自己紹介文、代表かどうか、画像のファイル名を聞かれるので入力する。
- 間違えると修正がちょっとだけ面倒なので入力する文は事前に考えておく。
![スクリーンショット (58)_LI](https://user-images.githubusercontent.com/83947560/159472148-073c1a13-ef4b-411c-8695-c3487ca378be.jpg)
- ファイル名は他のものとダブっていたら再入力を求められる。
- 代表かどうかは`y`か`n`で答える。
- pull requestを出す。
    - `git add .`と打つ。
        - 緑色になっているファイルが
        - `/pages/components/members/konami.page.jsx`
        - `/pages/components/members/members.jsx`
        - `/scripts/members_list.txt`
        - `/pages/components/members/誰かの名前.page.jsx`
        - になっていれば大丈夫。
    - `git commit -m "こなみの作成"`と打つ。
    - `git push`と打って、githubで「pull requestを作成する」のボタンを押す。

- 間違えた場合：
    - ちょっとだけ編集したいときは、`/pages/components/members/konami.page.jsx`が自分のページのファイルなのでそこを編集する。
    - 全部やり直したいときは、
        - ➀`/scripts/members_list.txt`の自分の行を削除する。
        - ➁`/scripts/members_list.txt`の自分の一行上にある名前のファイルの、21行目の`<RightButton ・・・ />`を`<div />`に書き換える。
        - ➂`./make_member.sh`と打つところからやり直す。
