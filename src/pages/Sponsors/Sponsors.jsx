import './Sponsors.scss' // Import your stylesheet here
import Devfolio from '../../assets/devfolio.png'
// import Riidl from '../../assets/riidl.png';
import Polygon from '../../assets/polygon.png'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import SettingsIcon from '../../assets/settings.png'


function Sponsors() {
  const [isVisible, setIsVisible] = useState(false)
  const [option, setOption] = useState('current')
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

  return (
    <section ref={sponsorRef} className="sponsors" id="sponsors">
      <h1 className="title">Sponsors</h1>
      {isVisible && (
        <motion.p
          animate={{
            opacity: [0, 1],
            y: [50, 0],
            transition: { duration: 0.5, ease: 'easeIn' },
          }}
          className="subtitle"
        >
        <img src={SettingsIcon} alt="settings" className='first'/>
          Sponsors
        <img src={SettingsIcon} alt="settings" />
        </motion.p>
      )}
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
              <button
                className={`cybr-btn ${option==="previous" &&"active-btn"}`}
                onClick={() => setOption('previous')}
              >
                Previous Sponsors
              </button>
            </div>
            <div className="sponsor-btn">
              <button className={`cybr-btn ${option==="current" &&"active-btn"}`} onClick={() => setOption('current')}>
                Current Sponsors
              </button>
            </div>
          </div>
            <div className="sponsor-wrapper">
              {option === 'previous' && (
                <div className="previous-sponsor" id="previous-sponsor">
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
              )}

              {option === 'current' && (
                <div id="current-sponsor">
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
              )}
            </div>
        </motion.div>
      )}
    </section>
  )
}

export default Sponsors
