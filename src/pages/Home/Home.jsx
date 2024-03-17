import './Home.scss'
import { useEffect } from 'react'
import Title from '/Home/Devopia-Logo.png'
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from 'react-parallax-mouse'

const Home = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://apply.devfolio.co/v2/sdk.js'
    script.async = true
    script.defer = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  // useEffect(() => {
  //   const handleResize = () => setIsMobile(window.innerWidth <= 768) // Adjust breakpoint as needed
  //   window.addEventListener('resize', handleResize)
  //   handleResize()

  //   return () => window.removeEventListener('resize', handleResize)
  // }, [])

  // const animationVariants = {
  //   mobile: {
  //     y: [130, 150, 130],
  //     transition: { duration: 10, repeat: Infinity, ease: 'linear' },
  //   },
  //   desktop: {
  //     y: [-10, 10, -10],
  //     transition: { duration: 10, repeat: Infinity, ease: 'linear' },
  //   },
  // }
  // const animationVariant = isMobile ? 'mobile' : 'desktop'

  return (
    <section id="home" className="home">
      <MouseParallaxContainer
        className="parallax"
        containerStyle={{
          background: 'url(/Home/bg.png)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          width: '100vw',
          height: '100vh',
        }}
        // globalFactorX={1}
        // globalFactorY={1}
        // resetOnLeave
      >
        <MouseParallaxChild
          className="banda"
          factorX={0.01}
          factorY={0.01}
          style={{
            background: 'url(/Home/banda.png)',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            width: '100%',
            height: '100%',
          }}
        />
        <MouseParallaxChild
          className="stars"
          factorX={0.001}
          factorY={0.001}
          style={{
            background: 'url(/Home/stars.png)',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            width: '100vw',
            height: '100vh',
          }}
        />
        <img
          fetchPriority="high"
          src={Title}
          alt="KJSCE DevOpia"
          className="title-img"
        />
        <MouseParallaxChild
          className="ships"
          factorX={0.05}
          factorY={0.05}
          style={{
            background: 'url(/Home/ships.png)',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            width: '100%',
            height: '100%',
          }}
        />
      </MouseParallaxContainer>
      <div className="code">
        <p>
          UHJlcGFyZSBm
          <br />
          b3IgYmF0dGxlL
          <br />
          CB0aGUgTW90a
          <br />
          GVyc2hpcCBhc
          <br />
          HByb2FjaGVzIG
          <br />
          9uIHRoZSBob3J
          <br />
          pem9uLgoKCgoK
        </p>
        <p>
          d2Ugc3RhbmQ
          <br />
          gdW5pdGVk
        </p>
      </div>
      <div className="info">
        <p className="date">12TH-14TH APRIL</p>
        <div
          className="apply-button"
          data-hackathon-slug="devopia"
          data-button-theme="dark-inverted"
        ></div>
        <p className="tagline"> WAR COMES TO EVERY WORLD</p>
      </div>
    </section>
  )
}

export default Home
