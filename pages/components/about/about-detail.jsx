import Head from 'next/head'
import PageTitle from '../page-title'
import TearaFooter from '../../footer'
import Header2 from '../header2'

export default function AboutDetail() {
  return (
    <div>  
      <Head>
        <title>TEAra|お茶大開発コミュニティ</title>
        <link rel="icon" href="/images/teara-white-trans.png" />
      </Head>
      <Header2 />
      <PageTitle title="ABOUT"/>
      <div className="about">詳しく説明する。ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ
      </div>
      <TearaFooter/>
    </div>
  )
}
