import Image from 'next/image'
import Link from 'next/link'

export function RightButton(props) {
  return (
    <div>
      <Link href={props.href}>
        <a>
          <Image src="/images/right-button.jpg" width={50} height={50} objectFit="contain" alt="右ボタン" />
        </a>
      </Link>
    </div>
  )
}

export function LeftButton(props) {
  return (
    <div>
      <Link href={props.href}>
        <a>
          <Image src="/images/left-button.jpg" width={50} height={50} objectFit="contain" alt="左ボタン" />
        </a>
      </Link>
    </div>
  )
}
