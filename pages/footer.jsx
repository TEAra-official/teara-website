import Image from 'next/image'

export default function TearaFooter(){
  return(
  <footer className="footer-background">
    <div className="filter">
      <div className="twitter-and-github-logo">
        <a  href="https://twitter.com/teara_ocha" target="_blank">  
          <Image src="/images/Twitter-logo-white.png" width={30} height={30} objectFit="contain" alt="Twitterロゴ" />
        </a>
      </div>
      <div className="twitter-and-github-logo">
        <a  href="https://github.com/TEAra-official" target="_blank">  
          <Image src="/images/Github-logo-white.png" width={30} height={30} objectFit="contain" alt="Githubロゴ" />
        </a>
      </div>
      <div className="copyright">© 2021 TEAra</div>
    </div>
  </footer>)
}

