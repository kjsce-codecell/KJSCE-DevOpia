import './Track.scss'
import First from '/prizes/Track.png' //Change address to /prizes/Track.png

const Track = () => {
  return (
    <section id="track" className="track">
      <div className="content">
        <h1 className="title">Track</h1>
        <div className="subtitle">
          <img className='first' src='/major.svg' />
          <h3>Track</h3>
          <img src='/major.svg' />
        </div>
      </div>
      <div className="tracks">
        <div data-aos="fade-up" data-aos-duration="1000" className="prize">
          <div className="desc">
            <h2>
              $200 - Best hack built on Polygon
              <br />
              <br />
              Read about the bounty details and find code templates for Polygon
              here
            </h2>
            <p> Polygon track</p>
          </div>
          <img src={First} alt="" />
        </div>
        <div data-aos="fade-up" data-aos-duration="1000" className="prize">
          <div className="desc">
            <h2>
              $100 - Best hack built on Ethereum
              <br />
              <br />
              Select this track if you're building on Ethereum to be eligible
              for the prizes!
            </h2>
            <p>ETHIndia track</p>
          </div>
          <img src={First} alt="" />
        </div>
        <div data-aos="fade-up" data-aos-duration="1000" className="prize">
          <div className="desc">
            <h2>
              inr 10,000 for the best hack built on Ethereum
              <br />
              <br />
              Continuity grant opportunity up to $5,000 for outstanding projects
              <br />
              <br />
              inr 10,000 for the best project made using Arcana
            </h2>
            <p> SPONSOR WINNER</p>
          </div>
          <img src={First} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Track
