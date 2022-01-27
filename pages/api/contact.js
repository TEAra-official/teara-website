export default function sendmail(req, res) {
  //　改行のエスケープシーケンスをbrタグに置換
  const htmlMsg = req.body.message.replaceAll("\n", "<br>")
  let nodemailer = require("nodemailer");

  // 送信用アカウントの設定（ここではGmail）
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "kumomaya.gmail.com",
    auth: {
      user: "kumomaya@gmail.com",
      // Googleアカウントでアプリパスワードを取得して入れる
      pass: 'notqu9-budqur-xopPyb',
    },
    secure: true,
  });

  // 管理人に送るお問い合わせメッセージ通知メール
  const toHostMailData = {
    from: 'kumomaya@mail.com',
    to: "kumomaya@gmail.com",
    subject: `【お問い合わせ】${req.body.name}様より`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `
      <p>【名前】</p>
      <p>${req.body.name}</p>
      <p>【メッセージ】</p>
      <p>${htmlMsg}</p>
      <p>【メールアドレス】</p>
      <p>${req.body.email}</p>
    `,
  };

  // ゲストに送る自動受付メール
  const toGuestMailData = {
    from: 'kumomaya@gmail.com',
    // 入力されたゲストのメールアドレスが入る
    to: `${req.body.email}`,
    subject: `【お問い合わせ自動受付メール】`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `
      <p>
        お問い合わせありがとうございます。
        <br>以下の内容でお問い合わせを承りました。
      </p>
      <p>-----------------------------------------</p>
      <h2>お問い合わせ内容</h2>
      <p>【名前】</p>
      <p>${req.body.name}</p>
      <p>【メッセージ】：</p>
      <p>${htmlMsg}</p>
      <p>【メールアドレス】</p>
      <p>${req.body.email}</p>
      <p>-----------------------------------------</p>
    `,
  };

  // 送信する
  transporter.sendMail(toHostMailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
  transporter.sendMail(toGuestMailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });

  res.send('success');
}
