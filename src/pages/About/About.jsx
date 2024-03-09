import { useState, useRef } from 'react'
import './About.scss'
import Sword from '../../assets/sword.png'
import Circle from '../../assets/circle.png'
import SubheadingButton from '../../components/About/SubheadingButton'
import SubheadingContent from '../../components/About/SubheadingContent'
import { motion } from 'framer-motion'

const About = () => {
  const [activeSubheading, setActiveSubheading] = useState(0)
  const aboutRef = useRef(null)

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
        <div className="left">
          <motion.div
            className="subtitle"
            whileInView={{
              opacity: [0, 1],
              y: [50, 0],
              transition: { duration: 0.5, ease: 'easeIn' },
            }}
            viewport={{ once: true }}
          >
            <img src={Sword} className="before" alt="" />
            <p className="subtitle">
              About
            </p>
            <img src={Sword} alt="" />
          </motion.div>

          <div className="subtitle-container">
            <motion.div
              className="buttons"
              whileInView={{
                opacity: [0, 1],
                y: [50, 0],
                transition: { duration: 0.5, ease: 'easeIn' },
              }}
              viewport={{ once: true }}
            >
              {subheadings.map((subheading, index) => (
                <SubheadingButton
                  key={subheading.label}
                  label={subheading.label}
                  isActive={index === activeSubheading}
                  onClick={() => setActiveSubheading(index)}
                />
              ))}
            </motion.div>
            <motion.div
              className="body-text"
              whileInView={{
                opacity: [0, 1],
                y: [50, 0],
                transition: { duration: 0.5, ease: 'easeIn' },
              }}
              viewport={{ once: true }}
            >
              <SubheadingContent
                content={subheadings[activeSubheading].content}
              />
            </motion.div>
          </div>
        </div>
        <div className="svg-container">
          <motion.img animate={{}} src={Circle} alt="" viewport={{ once: true }} />
        </div>
      </div>
    </section>
  )
}

export default About
