import './Sponsors.scss' // Import your stylesheet here
import Devfolio from '../../assets/devfolio.png'
// import Riidl from '../../assets/riidl.png';
import Polygon from '../../assets/polygon.png'
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import SettingsIcon from '../../assets/settings.png'

function Sponsors() {
  const [option, setOption] = useState('current')
  const sponsorRef = useRef(null)

  return (
    <section ref={sponsorRef} className="sponsors" id="sponsors">
      <div className="background"></div>
      <h1 className="title">Sponsors</h1>
      <motion.p
        whileInView={{
          opacity: [0, 1],
          y: [50, 0],
          transition: { duration: 0.5, ease: 'easeIn' },
        }}
        className="subtitle"
      >
        <img src={SettingsIcon} alt="settings" className="first" />
        Sponsors
        <img src={SettingsIcon} alt="settings" />
      </motion.p>
      <div className="sponsor-container">
        <div className="sponsor-buttons">
          <motion.div
            className="sponsor-btn"
            whileInView={{
              opacity: [0, 1],
              y: [50, 0],
              transition: { duration: 0.5, ease: 'easeIn' },
            }}
          >
            <button
              className={`cybr-btn ${option === 'current' && 'active-btn'}`}
              onClick={() => setOption('previous')}
            >
              Previous Sponsors
            </button>
          </motion.div>
          <motion.div
            className="sponsor-btn"
            whileInView={{
              opacity: [0, 1],
              y: [50, 0],
              transition: { duration: 0.5, ease: 'easeIn' },
            }}
          >
            <button
              className={`cybr-btn ${option === 'previous' && 'active-btn'}`}
              onClick={() => setOption('current')}
            >
              Current Sponsors
            </button>
          </motion.div>
        </div>
        <motion.div
          className="sponsor-wrapper"
          whileInView={{
            opacity: [0, 1],
            y: [50, 0],
            transition: { duration: 0.5, ease: 'easeIn' },
          }}
        >
          {option === 'previous' && (
            <motion.div
              className="current-sponsor"
              id="previous-sponsor"
              whileInView={{
                opacity: [0, 1],
                y: [50, 0],
                transition: { duration: 0.5, ease: 'easeIn' },
              }}
            >
              <div className="sponsor-box">
                <h1>Previous Partners</h1>
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
                <h1>Previous Gold Sponsors</h1>

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
                <h1>Previous Silver Sponsors</h1>

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
            </motion.div>
          )}

          {option === 'current' && (
            <motion.div
              id="current-sponsor"
              whileInView={{
                opacity: [0, 1],
                y: [50, 0],
                transition: { duration: 0.5, ease: 'easeIn' },
              }}
            >
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
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default Sponsors
