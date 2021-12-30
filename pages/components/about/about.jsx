import MainButton from '/pages/components/button';

export default function About() {
  return (
      <div className="about">
        <h1>About</h1>
        <div className="about-content">
          <p>あああああああああああああ
            <br/>
            あああああああああああああああああああああ
          </p>
        </div>
          <MainButton
            href="/components/about/about-detail"
            content="詳しく見る"
          />
      </div>
  )
}
