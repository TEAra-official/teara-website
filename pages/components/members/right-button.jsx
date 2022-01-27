import Image from 'next/image'
import Link from 'next/link'

export default function RightButton(props) {
  return(
    <div>
      <Link href={props.href}> 
        <a> 
          <Image src="/images/right-button.jpg" width={50} height={50} objectFit="contain" alt="Githubロゴ" />
        </a>
      </Link>
    </div>
  )
}
