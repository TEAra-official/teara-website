import Head from 'next/head'
import TearaNavbar from './header'
import TearaFooter from './footer'
import { Container } from 'react-bootstrap'

export default function Home() {
  return (
    <Container className="md-container">
      <Head>
        <title>ReactJS with react-bootstrap</title>
        <link rel="icon" href="/favicon-32x32.png" />
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
      <TearaFooter />
    </Container>
  )
}
