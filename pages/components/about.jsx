import Link from 'next/link'
import AboutDetail from '../about.js' 

export default function About() {
  return (
      <div>
          <button>
            <Link href='../about'>
                <a>詳しく見る</a>
            </Link>
          </button>
      </div>

  );
}
