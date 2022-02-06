import Head from 'next/head'
import TearaNavbar from './header'
import TearaFooter from './footer'
import {Link as Scroll} from "react-scroll"
import About from './components/about/about.jsx'
import Activities from './components/activities'
import Contact from './components/contact'
import Members from './components/members'
import MainTitle from './components/main-title'

export default function Home() {
  return (
    <div>
      <Head>
        <title>TEAra|お茶大開発コミュニティ</title>
        <link rel="icon" href="/images/teara-white-trans.png" />
      </Head>
      <div  class="header">
        <TearaNavbar/>
      </div>
      <MainTitle/>
      <About/>
      <section id = "about-content"/>
      <section id = "activities"/>
      <Activities/>
      <Members/>
      <section id = "members"/>
      <Contact/>
      <section id = "contact"/>
      <TearaFooter />
    </div>
  )
}
