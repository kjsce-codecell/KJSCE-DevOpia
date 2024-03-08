import './Sponsors.scss' // Import your stylesheet here
import Devfolio from '../../assets/devfolio.png'
// import Riidl from '../../assets/riidl.png';
import Polygon from '../../assets/polygon.png'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

function Sponsors() {
  const [isVisible, setIsVisible] = useState(false)
  const sponsorRef = useRef(null)

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

    if (sponsorRef.current) {
      observer.observe(sponsorRef.current)
    }

    return () => {
      if (sponsorRef.current) {
        observer.unobserve(sponsorRef.current)
      }
    }
  }, [])
  const showPrevious = () => {
    document.getElementById('current-sponsor').style.display = 'none'
    document.getElementById('previous-sponsor').style.display = 'block'
  }

  // For Previous Sponspors button in Sponspors section
  const showCurrent = () => {
    document.getElementById('current-sponsor').style.display = 'block'
    document.getElementById('previous-sponsor').style.display = 'none'
  }
  return (
    <section ref={sponsorRef} className="sponsors" id="sponsors">
      <h1 className="title">Sponsors</h1>
      <motion.p
        whileInView={{
          opacity: [0, 1],
          y: [50, 0],
          transition: { duration: 0.8, ease: 'easeIn' },
        }}
        className="subtitle"
      >
        Sponsors
      </motion.p>
      {isVisible && (
        <motion.div
          animate={{
            opacity: [0, 1],
            y: [50, 0],
            transition: { duration: 0.5, ease: 'easeIn' },
          }}
          className="sponsor-container"
        >
          <div className="sponsor-buttons">
            <div className="sponsor-btn">
              <button className="cybr-btn prev" onClick={showPrevious}>
                Previous Sponsors
              </button>
            </div>
            <div className="sponsor-btn curr" onClick={showCurrent}>
              <button className="cybr-btn">Current Sponsors</button>
            </div>
          </div>
          <div className="sponsor-wrapper">
            <div className="sponsor-wrapper-in">
              <div
                className="previous-sponsor"
                id="previous-sponsor"
                style={{ display: 'none' }}
              >
                <div className="sponsor-box">
                  <div className="sponsor-img">
                    <a href="https://devfolio.co/" target="_blank">
                      <img src={Devfolio} alt="Devfolio" />
                    </a>
                  </div>
                  <div className="sponsor-img">
                    <a href="https://devfolio.co/" target="_blank">
                      <img src={Devfolio} alt="Devfolio" />
                    </a>
                  </div>
                  <div className="sponsor-img">
                    <a href="https://devfolio.co/" target="_blank">
                      <img src={Devfolio} alt="Devfolio" />
                    </a>
                  </div>
                  <div className="sponsor-img">
                    <a href="https://devfolio.co/" target="_blank">
                      <img src={Devfolio} alt="Devfolio" />
                    </a>
                  </div>
                  <div className="sponsor-img">
                    <a href="https://devfolio.co/" target="_blank">
                      <img src={Devfolio} alt="Devfolio" />
                    </a>
                  </div>
                  <div className="sponsor-img">
                    <a href="https://devfolio.co/" target="_blank">
                      <img src={Devfolio} alt="Devfolio" />
                    </a>
                  </div>
                </div>
              </div>

              <div id="current-sponsor" style={{ display: 'block' }}>
                <div className="sponsor-box">
                  <h1>Our Partners</h1>
                  <div className="sponsor-grp">
                    <div className="sponsor-img">
                      <a href="https://devfolio.co/" target="_blank">
                        <img src={Polygon} alt="Devfolio" />
                      </a>
                    </div>
                    <div className="sponsor-img">
                      <a href="https://devfolio.co/" target="_blank">
                        <img src={Polygon} alt="Devfolio" />
                      </a>
                    </div>
                    <div className="sponsor-img">
                      <a href="https://devfolio.co/" target="_blank">
                        <img src={Polygon} alt="Devfolio" />
                      </a>
                    </div>
                  </div>
                  <h1>Gold Sponsors</h1>

                  <div className="sponsor-grp">
                    <div className="sponsor-img">
                      <a href="https://devfolio.co/" target="_blank">
                        <img src={Polygon} alt="Devfolio" />
                      </a>
                    </div>
                    <div className="sponsor-img">
                      <a href="https://devfolio.co/" target="_blank">
                        <img src={Polygon} alt="Devfolio" />
                      </a>
                    </div>
                    <div className="sponsor-img">
                      <a href="https://devfolio.co/" target="_blank">
                        <img src={Polygon} alt="Devfolio" />
                      </a>
                    </div>
                  </div>
                  <h1>Silver Sponsors</h1>

                  <div className="sponsor-grp">
                    <div className="sponsor-img">
                      <a href="https://devfolio.co/" target="_blank">
                        <img src={Polygon} alt="Devfolio" />
                      </a>
                    </div>
                    <div className="sponsor-img">
                      <a href="https://devfolio.co/" target="_blank">
                        <img src={Polygon} alt="Devfolio" />
                      </a>
                    </div>
                    <div className="sponsor-img">
                      <a href="https://devfolio.co/" target="_blank">
                        <img src={Polygon} alt="Devfolio" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </section>
  )
}

export default Sponsors
