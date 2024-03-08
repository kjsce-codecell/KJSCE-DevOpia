import { useState, useEffect, useRef } from 'react'
import './About.scss'
import Sword from '../../assets/sword.png'
import Circle from '../../assets/circle.png'
import SubheadingButton from '../../components/About/SubheadingButton'
import SubheadingContent from '../../components/About/SubheadingContent'
import { motion } from 'framer-motion'

const About = () => {
  const [activeSubheading, setActiveSubheading] = useState('DEVOPIA')
  const [isVisible, setIsVisible] = useState(false)
  const aboutRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        rootMargin: '-100px',
      }
    )

    if (aboutRef.current) {
      observer.observe(aboutRef.current)
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current)
      }
    }
  }, [])

  const handleSubheadingClick = (subheading) => {
    setActiveSubheading(subheading)
  }

  const subheadings = [
    {
      label: 'DEVOPIA',
      content:
        'Devopia is an exciting 24-hour offline hackathon that offers open innovation in both the hardware and software domains. Participants can enjoy free food, comfortable accommodations, and engaging games throughout the event. Plus, there are cool swags to take home as well!',
    },
    {
      label: 'KJSCE-CTF',
      content:
        "KJSCE CTF is a cybersecurity competition where participants solve puzzles, exploit vulnerabilities and uncover hidden 'flags' within systems, fostering teamwork in real-world cybersecurity scenarios. Challenges are based on categories like Reverse Engineering, Web Applications, Steganography, Mobile Applications, Cryptography, etc.",
    },
    {
      label: 'BID-BY-BIT',
      content:
        'Bid-by-Bit is a pre-event to Devopia and it introduces a unique concept of auctioning in the Competitive Programming arena. Contestants bid on problem statements to decide which ones they get to solve!',
    },
  ]

  return (
    <section id="about" className="about" ref={aboutRef}>
      <div className="background"></div>
      <h1 className="title">About</h1>
      <div className="content">
        {isVisible && (
          <motion.div
            className="sub"
            animate={{
              opacity: [0, 1],
              y: [50, 0],
              transition: { duration: 1.5, ease: 'easeIn' },
            }}
          >
            <img src={Sword} className="before" alt="" />
            <p className="subtitle">About</p>
            <img src={Sword} alt="" />
          </motion.div>
        )}
        <div className="subtitle-container">
          {isVisible && (
            <motion.div
              className="buttons"
              animate={{
                opacity: [0, 1],
                y: [50, 0],
                transition: { duration: 1.5, ease: 'easeIn' },
              }}
            >
              {subheadings.map((subheading) => (
                <SubheadingButton
                  key={subheading.label}
                  label={subheading.label}
                  isActive={activeSubheading === subheading.label}
                  onClick={handleSubheadingClick}
                />
              ))}
            </motion.div>
          )}
          {isVisible && (
            <motion.div
              className="body-text"
              animate={{
                opacity: [0, 1],
                y: [50, 0],
                transition: { duration: 1.5, ease: 'easeIn' },
              }}
            >
              <SubheadingContent
                content={
                  subheadings.find(
                    (subheading) => subheading.label === activeSubheading
                  )?.content
                }
              />
            </motion.div>
          )}
        </div>
      </div>
      {isVisible && (
        <motion.div
          animate={{
            opacity: [0, 1],
            transition: { duration: 3, ease: 'easeIn' },
          }}
          className="svg-container"
        >
          {isVisible && <motion.img animate={{}} src={Circle} alt="" />}
        </motion.div>
      )}
    </section>
  )
}

export default About
