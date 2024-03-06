import './Sponsors.scss'; // Import your stylesheet here
import Devfolio from '../../assets/devfolio.png';
import Riidl from '../../assets/riidl.png';
import Polygon from '../../assets/polygon.png';

function Sponsors() {
  const showPrevious = () => {
    document.getElementById("current-sponsor").style.display = "none";
    document.getElementById("previous-sponsor").style.display = "block";
  }

  // For Previous Sponspors button in Sponspors section
  const showCurrent = () => {
    document.getElementById("current-sponsor").style.display = "block";
    document.getElementById("previous-sponsor").style.display = "none";
  }
  return (
    <section className="sponsors" id="sponsors">
      <h1 className="title">Sponsors</h1>
      <p className="subtitle">Sponsors</p>
      <div className="sponsor-container">
        <div className="sponsor-buttons">
          <div className="sponsor-btn">
            <button className="cybr-btn prev" onClick={showPrevious} >
              Previous Sponsors
            </button>
          </div>
          <div className="sponsor-btn curr" onClick={showCurrent}>
            <button className="cybr-btn" >
              Current Sponsors
            </button>
          </div>
        </div>
        <div className="sponsor-wrapper">
          <div className="sponsor-wrapper-in">
            <div className="previous-sponsor" id="previous-sponsor" style={{ display: 'none' }}>
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
                <div className="sponsor-img">
                  <a href="https://devfolio.co/" target="_blank">
                    <img src={Devfolio} alt="Devfolio" />
                  </a>
                </div>
                <div className="sponsor-img">
                  <a href="https://devfolio.co/" target="_blank">
                    <img src={Riidl} alt="Devfolio" />
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
    </section >
  );
}

export default Sponsors;
