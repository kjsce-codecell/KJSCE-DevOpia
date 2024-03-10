import './Home.scss'
import { useEffect, useState } from 'react'
// import { motion } from 'framer-motion'
import Title from '/Logo.gif'
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
          background: 'url(/Home/website-bg.svg)',
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
            background: 'url(/Home/banda.svg)',
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
        <img src={Title} alt="KJSCE DevOpia" className="title-img" />
        <MouseParallaxChild
          className="ships"
          factorX={0.05}
          factorY={0.05}
          style={{
            background: 'url(/Home/ships.svg)',
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
        <p className="tagline"> WAR COMES TO EVERY WORLD</p>
        <div
          className="apply-button"
          data-hackathon-slug="devopia"
          data-button-theme="dark-inverted"
        ></div>
        <p className="date">29TH-31ST MARCH</p>
      </div>
    </section>
  )

  // return (
  //   <section id="home" className="home">
  //     <div className="background-image">
  //       <div className="overlay">
  //         <div className="code">
  //           <p>
  //             UHJlcGFyZSBm
  //             <br />
  //             b3IgYmF0dGxlL
  //             <br />
  //             CB0aGUgTW90a
  //             <br />
  //             GVyc2hpcCBhc
  //             <br />
  //             HByb2FjaGVzIG
  //             <br />
  //             9uIHRoZSBob3J
  //             <br />
  //             pem9uLgoKCgoK
  //           </p>
  //           <p>
  //             d2Ugc3RhbmQ
  //             <br />
  //             gdW5pdGVk
  //           </p>
  //         </div>
  //         <motion.img
  //           src={Title}
  //           alt=""
  //           className="title-img"
  //           animate={{
  //             opacity: [0, 1],
  //             transition: { duration: 2.5, ease: 'easeIn' },
  //           }}
  //           style={{
  //             mixBlendMode: 'plus-lighter',
  //             width: '100%',
  //           }}
  //         />
  //         <motion.p
  //           className="tagline"
  //           animate={{
  //             opacity: [0, 1],
  //             transition: { duration: 3, ease: 'easeIn' },
  //           }}
  //           viewport={{ once: true }}
  //         >
  //           WAR COMES TO EVERY WORLD
  //         </motion.p>
  //         <motion.p
  //           animate={{
  //             opacity: [0, 1],
  //             transition: { duration: 3, ease: 'easeIn' },
  //           }}
  //           viewport={{ once: true }}
  //           className="date"
  //         >
  //           <div
  //             className="apply-button"
  //             data-hackathon-slug="devopia"
  //             data-button-theme="dark-inverted"
  //           ></div>
  //           <p>29TH-31ST MARCH</p>
  //           <h2>scroll down</h2>
  //           <img src={Scroll} alt="" />
  //         </motion.p>
  //         <motion.img
  //           src={Banda}
  //           alt=""
  //           className="banda"
  //           initial={{ opacity: 0, translateY: '100%' }}
  //           animate={{ opacity: 1, translateY: '-2%' }}
  //           transition={{ duration: 3, ease: 'easeInOut' }}
  //           viewport={{ once: true }}
  //         />
  //         <motion.img
  //           src={Ships}
  //           alt=""
  //           className="ships"
  //           animate={{
  //             ...animationVariants[animationVariant],
  //           }}
  //         />
  //       </div>
  //     </div>
  //   </section>
  // )
}

export default Home
