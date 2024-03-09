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
        <div className="left" data-aos="fade-up" data-aos-duration="1000">
          <div
            className="subtitle"
          >
            <img src={Sword} className="before" alt="" />
            <p className="subtitle">
              About
            </p>
            <img src={Sword} alt="" />
          </div>

          <div className="subtitle-container" data-aos="fade-up" data-aos-duration="500">
            <div
              className="buttons"
            >
              {subheadings.map((subheading, index) => (
                <SubheadingButton
                  key={subheading.label}
                  label={subheading.label}
                  isActive={index === activeSubheading}
                  onClick={() => setActiveSubheading(index)}
                />
              ))}
            </div>
            <div
              className="body-text"
              data-aos="fade-up" data-aos-duration="500"
            >
              <SubheadingContent
                content={subheadings[activeSubheading].content}
              />
            </div>
          </div>
        </div>
        <div className="svg-container" data-aos="fade-up" data-aos-duration="1000">
          <img animate={{}} src={Circle} alt="" />
        </div>
      </div>
    </section>
  )
}

export default About
