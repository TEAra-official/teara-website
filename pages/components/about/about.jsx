import Link from 'next/link'

export default function About() {
  return (
      <div>
          <button>
            <Link href="/components/about/about-detail">
                <a>詳しく見る</a>
            </Link>
          </button>
      </div>
  )
}
