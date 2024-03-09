import Home from './pages/Home/Home'
import About from './pages/About/About'
import Prizes from './pages/Prizes/Prizes'
// import Track from './pages/Track/Track'
import FAQ from './pages/FAQ/FAQ'
import Navbar from './components/shared/Navbar/Navbar'
import Footer from './components/shared/Footer/Footer'
import Sponsors from './pages/Sponsors/Sponsors'
import Stats from './pages/Stats/Stats'

import AOS from 'aos'
import 'aos/dist/aos.css'
import React from 'react'
import Loader from './components/Loader'
import ScrollBar from './components/shared/Scrollbar/Scrollbar'

import { logEvent } from 'firebase/analytics'
import { analytics } from './pages/config/firebase'
function App() {
  logEvent(analytics, 'visit_count')

  const [loading, setLoading] = React.useState(true)
  React.useEffect(() => {
    AOS.init({ once: true})
    AOS.refresh()
    setInterval(() => setLoading(false), 5000)
  }, [])

  if (loading) {
    return <Loader />
  }
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
