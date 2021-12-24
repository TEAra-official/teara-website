import Head from 'next/head'
import TearaNavbar from './header'
import TearaFooter from './footer'
import { Container } from 'react-bootstrap'
import {Link as Scroll} from "react-scroll"
import About from './components/about'
import Activities from './components/activities'
import Contact from './components/contact'
import Members from './components/members'
import MainTitle from './components/main-title'

export default function Home() {
  return (
    <div>

      <Head>
        <title>TEAra|お茶大開発コミュニティ</title>
        <link rel="icon" href="/teara_white_trans.png" />
      </Head>
      <TearaNavbar/>
      <MainTitle/>
      <About/>
      <section id = "about"/>
      <Activities/>
      <section id = "activities"/>
      <Members/>
      <section id = "members"/>
      <Contact/>
      <section id = "contact"/>
      

      <TearaFooter />
    </div>
  )
}
