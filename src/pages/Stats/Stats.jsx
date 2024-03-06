import './Stats.scss'
function Stats() {
  return (
    <section className="statsContainer">
      <div className="background"></div>
      <div className="subheading">
        <div>
          <img src="./Emblem.svg" className="left" alt="" />
          <h3>Stats</h3>
          <img src="./Emblem.svg" className="right" alt="" />
        </div>
        <p>Stats</p>
      </div>

      {/* <div className="statsGrid">
        <div className="sideWrapper">
          <div className="column">
            <div className="imageContainer">
              <img src="./Stats/Image1.png" alt="" />
            </div>
          </div>
          <div className="column"></div>
        </div>
        <div className="middle"></div>
        <div className="sideWrapper">
          <div className="column"></div>
          <div className="column"></div>
        </div>
      </div> */}
    </section>
  )
}

export default Stats
