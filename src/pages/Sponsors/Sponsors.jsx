import './Sponsors.scss' // Import your stylesheet here
// import Devfolio from '../../assets/devfolio.png'
// import Riidl from '../../assets/riidl.png';
import Polygon from '../../assets/polygon.png'
import { useRef, useState } from 'react'
import SettingsIcon from '../../assets/settings.png'

function Sponsors() {
  const [option, setOption] = useState('current')
  const sponsorRef = useRef(null)

  return (
    <section ref={sponsorRef} className="sponsors" id="sponsors">
      <div className="background"></div>
      <h1 className="title">Sponsors</h1>
      <p
      data-aos="fade-up" data-aos-duration="1000"
        
        className="subtitle"
      >
        <img src={SettingsIcon} alt="settings" className="first" />
        Sponsors
        <img src={SettingsIcon} alt="settings" />
      </p>
      <div className="sponsor-container">
        <div className="sponsor-buttons">
          <div
            className="sponsor-btn"
            data-aos="fade-up" data-aos-duration="1000"
          >
            <button
              className={`cybr-btn ${option === 'current' && 'active-btn'}`}
              onClick={() => setOption('previous')}
            >
              Previous Sponsors
            </button>
          </div>
          <div
            className="sponsor-btn"
            data-aos="fade-up" data-aos-duration="1000"
          >
            <button
              className={`cybr-btn ${option === 'previous' && 'active-btn'}`}
              onClick={() => setOption('current')}
            >
              Current Sponsors
            </button>
          </div>
        </div>
        <div
          className="sponsor-wrapper"
          data-aos="fade-up" data-aos-duration="1000"
        >
          {option === 'previous' && (
            <div
              className="current-sponsor"
              id="previous-sponsor"
              data-aos="fade-up" data-aos-duration="1000"
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
            </div>
          )}

          {option === 'current' && (
            <div
              id="current-sponsor"
              data-aos="fade-up" data-aos-duration="1000"
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
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Sponsors
