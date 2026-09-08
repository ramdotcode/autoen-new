import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Manifesto } from './components/Manifesto'
import { Stats } from './components/Stats'
import { Approach } from './components/Approach'
import { Services } from './components/Services'
import { Process } from './components/Process'
import { WhyUs } from './components/WhyUs'
import { CoreValues } from './components/CoreValues'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { useI18n } from './i18n'

export default function App() {
  const { t } = useI18n()
  return (
    <>
      <a
        href="#services"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
      >
        {t.skipToContent}
      </a>
      <Navbar />
      <main>
        <Hero />
        <Manifesto />
        <Stats />
        <Approach />
        <Services />
        <Process />
        <WhyUs />
        <CoreValues />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
