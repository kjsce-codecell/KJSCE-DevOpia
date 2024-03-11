import React, { lazy } from 'react'

const Home = lazy(() => import('./pages/Home/Home'))
const About = lazy(() => import('./pages/About/About'))
const Prizes = lazy(() => import('./pages/Prizes/Prizes'))
// const Track = lazy(() => import('./pages/Track/Track'));
const FAQ = lazy(() => import('./pages/FAQ/FAQ'))
const Navbar = lazy(() => import('./components/shared/Navbar/Navbar'))
const Footer = lazy(() => import('./components/shared/Footer/Footer'))
const Sponsors = lazy(() => import('./pages/Sponsors/Sponsors'))
const Stats = lazy(() => import('./pages/Stats/Stats'))

import AOS from 'aos'
import 'aos/dist/aos.css'
import Loader from './components/Loader'
import ScrollBar from './components/shared/Scrollbar/Scrollbar'

import { logEvent } from 'firebase/analytics'
import { analytics } from './pages/config/firebase'

function App() {
  logEvent(analytics, 'visit_count')

  const [loading, setLoading] = React.useState(true)

  React.useEffect(() => {
    AOS.init({ once: true })
    AOS.refresh()

    const intervalId = setInterval(() => {
      setLoading(false)
    }, 5000)

    return () => clearInterval(intervalId)
  }, [])

  console.log(`
                                               .
     ######æ▄_      ▄▄######   █        ╓▌  _╓«m▌≈╓    ¥#######æ▄   █       ,▄
             ╙█   ▄▀\`           █_     ▄▀  jÜj▄██▄░└╕           ▐▌  █      ▄█▀▌
              ╟▌  █    ╒▌        █▄   █▀   ╠ ▓█████ j  ╔▄▄▄▄▄▄▄æ▀   █     ▄▀  ╙█
             _█"  █▄              ▀▌_█░    |_╙████Ñ £  ╫N           █    █Ñ    └█_
     ▄▄▄▄▄▄▄█▀     ╙▀▄▄▄▄▄▄▄       ╙█       ²%╦║▒µ«^   ╫N           █  ,█"       █▄
                                                ╚
`)

  if (loading) return <Loader />

  return (
    <>
      <ScrollBar />
      <Navbar />
      <Home />
      <About />
      <Stats />
      <Prizes />
      {/* <Track /> */}
      <Sponsors />
      <FAQ />
      <Footer />
    </>
  )
}

export default App
