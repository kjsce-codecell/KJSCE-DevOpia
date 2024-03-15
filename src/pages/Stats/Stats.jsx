import './Stats.scss'

function Stats() {
  return (
    <section className="statsContainer" id="stats">
      <div className="background"></div>
      <div className="subheading">
        <div
          className="stats-title"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img src="./Emblem.svg" className="stats-icon" alt="" />
          <h3>Stats</h3>
          <img src="./Emblem.svg" className="stats-icon" alt="" />
        </div>
        <p>Stats</p>
      </div>

      <div className="statsGrid">
        <div className="sideWrapper">
          <div className="column">
            <div
              className="imageContainer"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img src="./Stats/Image1.webp" alt="" />
            </div>
            <div
              className="content"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h4 className="highlightNum">24</h4>
              <p>hack hours</p>
            </div>
            <div
              className="imageContainer"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img src="./Stats/Image2.webp" alt="" />
            </div>
          </div>
          <div className="column">
            <div
              className="imageContainer"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img src="./Stats/Image3.webp" alt="" />
            </div>
            <div
              className="content"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h4 className="highlightNum">100+</h4>
              <p>colleges</p>
            </div>
            <div
              className="imageContainer"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img src="./Stats/Image4.webp" alt="" />
            </div>
          </div>
        </div>
        <div className="middle">
          <div
            className="imageContainer"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img src="./Stats/Image5.webp" alt="" />
          </div>
          <div
            className="content"
            style={{
              textAlign: 'center',
            }}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h4 className="highlightNum">2000+</h4>
            <p>Registrations</p>
          </div>
          <div
            className="imageContainer"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img src="./Stats/Image6.webp" alt="" />
          </div>
        </div>
        <div className="sideWrapper">
          <div className="column">
            <div
              className="imageContainer"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img src="./Stats/Image7.webp" alt="" />
            </div>
            <div
              className="content"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h4 className="highlightNum">150+</h4>
              <p>Hackers</p>
            </div>
            <div
              className="imageContainer"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img src="./Stats/Image8.webp" alt="" />
            </div>
          </div>
          <div className="column">
            <div
              className="imageContainer"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img src="./Stats/Image9.webp" alt="" />
            </div>
            <div
              className="content"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h4 className="highlightNum">40+</h4>
              <p>Projects</p>
            </div>
            <div
              className="imageContainer ten"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img src="./Stats/Image10.webp" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats
