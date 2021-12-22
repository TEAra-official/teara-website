import Head from 'next/head'
import TearaNavbar from './header'
import TearaFooter from './footer'
import { Container } from 'react-bootstrap'
import {Link as Scroll} from "react-scroll"
import About from './components/about'
import Activities from './components/activities'
import Contact from './components/contact'
import Members from './components/members'

export default function Home() {
  return (
    <Container className="md-container">
      <Head>
        <title>TEAra|お茶大開発コミュニティ</title>
        <link rel="icon" href="/teara_white_trans.png" />
      </Head>
      <TearaNavbar/>
      <Container>
        <h1>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <p>
          Get started by editing <code>pages/index.js</code>
        </p>
      </Container>
      

      <About/>
      <section id = "about"/>
      <Activities/>
      <section id = "activities"/>
      <Members/>
      <section id = "members"/>
      <Contact/>
      <section id = "contact"/>
      

      <TearaFooter />
    </Container>
  )
}
