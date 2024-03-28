import { useState, useRef } from 'react'
import './About.scss'
import Sword from '/Sword.svg'
import SubheadingButton from '../../components/About/SubheadingButton'
import SubheadingContent from '../../components/About/SubheadingContent'

const About = () => {
  const [activeSubheading, setActiveSubheading] = useState(0)
  const [animateBodyText, setAnimateBodyText] = useState(false) // State to trigger animation
  const aboutRef = useRef(null)
  const websiteUrls = [
    '',
    'https://unstop.com/p/kjsce-ctf-kjsce-devopia-k-j-somaiya-college-of-engineering-kjsce-mumbai-943352', // URL for KJSCE-CTF
    'https://www.google.com/amp/s/unstop.com/hackathons/bid-by-bit-k-j-somaiya-college-of-engineering-kjsce-mumbai-941770/amp', // URL for BID-BY-BIT
   ];
   
  const subheadings = [
    {
      label: 'DEVOPIA',
      content: `KJSCE Devopia is an exciting event that promises to bring together the brightest minds in the country. It's a national-level offline Hackathon where you can showcase your skills in both hardware and software domains.

        Apart from the Hackathon, the event offers a wide range of entertaining games, unique and trendy gifts, and stylish swag items that you can get your hands on.

        What's more, you can stay comfortably on campus for the entire 24 hours, in cozy accommodations that cater to your needs. You'll have access to all the amenities you need to stay focused and energized throughout the event.`,
    },
    {
      label: 'KJSCE-CTF',
      content: `KJSCE CTF is a pre-event to Devopia. The competition is structured as a Capture the Flag game, where teams of two compete against each other. The objective of the game is to hack into machines and extract specific digital tokens, referred to as "Flags", in order to earn points.

        To hack into the machines, participants will need to use a variety of techniques, ranging from cryptography puzzles to network exploitation scenarios. This competition tests the participants' skills in coding, reverse engineering, and system administration.

        The team with the most points at the end of the competition is declared the winner.`,
    },
    {
      label: 'BID-BY-BIT',
      content: `Bid by Bit is a pre-event to Devopia. An event where competitive programming meets auctioning! Teams compete to earn points, then strategically bid on a diverse range of problems, including arrays, strings, search, sort, greedy, dynamic programming, and more.

      Will YOU go for easier problems or take the risk for higher rewards? It's a game of strategy and skill as teams navigate the auction, solve their chosen problems, and accumulate reward points.

      The team with the most points in their wallet at the end claims victory. Join us for an exhilarating experience where every bid counts, every solution matters, and only the strongest emerge triumphant!`,
    },
  ]

  return (
    <section id="about" className="about" ref={aboutRef}>
      <h1 className="title">About</h1>
      <div className="content">
        <div className="left" data-aos="fade-up" data-aos-duration="1000">
          <div className="subtitle">
            <img src={Sword} className="before" alt="⚔️" />
            <p className="subtitle">About</p>
            <img src={Sword} alt="⚔️" />
          </div>

          <div
            className="subtitle-container"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <div className="buttons">
              {subheadings.map((subheading, index) => (
                <SubheadingButton
                  key={subheading.label}
                  label={subheading.label}
                  isActive={index === activeSubheading}
                  onClick={() => {
                    setActiveSubheading(index)
                    setAnimateBodyText(true) // Trigger animation when button is clicked
                    setTimeout(() => setAnimateBodyText(false), 1000) // Reset animation after 1s
                  }}
                />
              ))}
            </div>
            <div
              className="body-text" // Conditionally apply class for animation
              data-aos="fade-up"
              data-aos-duration="500"
            >
            <SubheadingContent
            content={subheadings[activeSubheading].content}
            animateBodyText={animateBodyText}
            websiteUrl={websiteUrls[activeSubheading]}
            showButton={subheadings[activeSubheading].label === 'KJSCE-CTF' || subheadings[activeSubheading].label === 'BID-BY-BIT'}
            />

            </div>
          </div>
        </div>
        <div className="right" data-aos="fade-up" data-aos-duration="1000">
          <model-viewer
            src="/model/model.glb"
            ios-src="/model/model.usdz"
            alt="The Moon"
            ar
            loading="eager"
            ar-modes="scene-viewer webxr quick-look"
            camera-controls
            poster="/model/poster.webp"
            // auto-rotate
            disable-pan
            // auto-rotate-delay="500"
            // rotation-per-second="300%"
            autoplay
            exposure="1"
            disable-zoom
          />
        </div>
      </div>
    </section>
  )
}

export default About
