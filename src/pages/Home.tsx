import { Hero } from '../components/Hero'
import { Manifesto } from '../components/Manifesto'
import { Stats } from '../components/Stats'
import { Explore } from '../components/Explore'
import { Approach } from '../components/Approach'
import { WhyUs } from '../components/WhyUs'
import { usePageMeta } from '../lib/usePageMeta'

export default function Home() {
  usePageMeta()
  return (
    <>
      <Hero />
      <Manifesto />
      <Stats />
      <Explore />
      <Approach />
      <WhyUs />
    </>
  )
}
