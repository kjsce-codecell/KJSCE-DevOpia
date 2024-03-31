import './Stats.scss'

function Stats() {
  return (
    <section className="statsContainer" id="stats">
      <div className="background"></div>
      <div className="subheading">
        <div className="stats-title">
          <img src="./Emblem.svg" className="stats-icon" alt="" />
          <h3>Stats</h3>
          <img src="./Emblem.svg" className="stats-icon" alt="" />
        </div>
        <p>Stats</p>
      </div>

      <div className="statsGrid">
        <div
          className="sideWrapper"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div className="column">
            <div className="imageContainer">
              <img src="./Stats/Image1.jpeg" alt="" />
            </div>
            <div className="content">
              <h4 className="highlightNum">24</h4>
              <p>hack hours</p>
            </div>
            <div className="imageContainer">
              <img src="./Stats/Image2.jpeg" alt="" />
            </div>
          </div>
          <div className="column">
            <div className="imageContainer">
              <img src="./Stats/Image3.jpeg" alt="" />
            </div>
            <div className="content">
              <h4 className="highlightNum">100+</h4>
              <p>colleges</p>
            </div>
            <div className="imageContainer">
              <img src="./Stats/Image4.jpeg" alt="" />
            </div>
          </div>
        </div>
        <div className="middle" data-aos="fade-up" data-aos-duration="1000">
          <div className="imageContainer">
            <img src="./Stats/Image5.jpeg" alt="" />
          </div>
          <div
            className="content"
            style={{
              textAlign: 'center',
            }}
          >
            <h4 className="highlightNum">2000+</h4>
            <p>Registrations</p>
          </div>
          <div className="imageContainer">
            <img src="./Stats/Image6.jpeg" alt="" />
          </div>
        </div>
        <div className="sideWrapper" data-aos="fade-left" data-aos-duration="1000">
          <div className="column">
            <div className="imageContainer">
              <img src="./Stats/Image7.jpeg" alt="" />
            </div>
            <div className="content" style={{ textAlign: 'right' }}>
              <h4 className="highlightNum">150+</h4>
              <p>Hackers</p>
            </div>
            <div className="imageContainer">
              <img src="./Stats/Image8.jpeg" alt="" />
            </div>
          </div>
          <div className="column">
            <div className="imageContainer">
              <img src="./Stats/Image9.jpeg" alt="" />
            </div>
            <div className="content" style={{ textAlign: 'right' }}>
              <h4 className="highlightNum">40+</h4>
              <p>Projects</p>
            </div>
            <div className="imageContainer ten">
              <img src="./Stats/Image10.jpeg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats
