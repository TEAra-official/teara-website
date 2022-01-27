import TearaFooter from '../../footer'
import RightButton from './right-button'
import PageTitle from '../page-title'
import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return(
    <div class="wrapper">
      <PageTitle title="MEMBER"/>
      <div className="members-content">
        <p class="trim-image-to-circle" />
      </div>
      <p>konamilk</p>
      <p>自己紹介</p>
      <RightButton 
        href="/components/members/konami2"
      />
      <TearaFooter />
    </div>
  )
}
