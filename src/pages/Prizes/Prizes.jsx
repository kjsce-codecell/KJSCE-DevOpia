import './Prizes.scss'
import First from '/first.png'
import Second from '/second.png'
import Third from '/third.png'
import { motion } from 'framer-motion'

const Prizes = () => {
  return (
    <section className="prize" id="prizes">
      <div className="prizes">
        <div className="background"></div>
        <div className="subheading">
          <div
          data-aos="fade-up" data-aos-duration="1000"
           
          >
            <img
              src="./prizes/PrizesSubHeadIcon.svg"
              className="prize-img-left"
              alt=""
            />
            <h3>Prizes</h3>
            <img
              src="./prizes/PrizesSubHeadIcon.svg"
              className="prize-img-right"
              alt=""
            />
          </div>
          <p>Prizes</p>
        </div>
        <div className="prizes-content">
          <div className="prize-section">
            <h1
            data-aos="fade-up" data-aos-duration="1000"
          
            >
              Software
            </h1>
            <div
              className="prize-container"
              data-aos="fade-up" data-aos-duration="1000"
            >
              <div className="prize-item" data-aos="fade-up" data-aos-duration="1000">
                <div className="prize-image" >
                  <img src={First} alt="" />
                </div>
                <div className="prize-text">
                  <h2>INR 30,000</h2>
                  <h3>CASH PRIZE</h3>
                  {/* <h4>
                    Exciting Goodies worth
                    <br /> inr 2l & More!
                  </h4> */}
                  <p>WINNER</p>
                </div>
              </div>
              <div className="column">
                <div className="prize-item" data-aos="fade-up" data-aos-duration="1000">
                  <div className="prize-image">
                    <img src={Second} alt="" />
                  </div>
                  <div className="prize-text">
                    <h2>INR 20,000</h2>
                    <h3>CASH PRIZE</h3>
                    {/* <h4>
                      Exciting Goodies worth
                      <br /> inr 2l & More!
                    </h4> */}
                    <p>RUNNER UP</p>
                  </div>
                </div>
                <div className="prize-item" data-aos="fade-up" data-aos-duration="1000">
                  <div className="prize-image">
                    <img src={Third} alt="" />
                  </div>
                  <div className="prize-text">
                    <h2>INR 10,000</h2>
                    <h3>CASH PRIZE</h3>
                    {/* <h4>
                      Exciting Goodies worth
                      <br /> inr 2l & More!
                    </h4> */}
                    <p>2ND RUNNER UP</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="prize-section">
            <h1
            data-aos="fade-up" data-aos-duration="1000"
            >
              Hardware
            </h1>
            <div
              className="prize-container"
              data-aos="fade-up" data-aos-duration="1000"
            >
              <div className="prize-item" data-aos="fade-up" data-aos-duration="1000">
                <div className="prize-image">
                  <img src={First} alt="" />
                </div>
                <div className="prize-text">
                  <h2>INR 10,000</h2>
                  <h3>CASH PRIZE</h3>

                  <p>WINNER</p>
                </div>
              </div>

              <div className="prize-item" data-aos="fade-up" data-aos-duration="1000">
                <div className="prize-image">
                  <img src={First} alt="" />
                </div>
                <div className="prize-text">
                  <h2>INR 5,000</h2>
                  <h3>CASH PRIZE</h3>
                  {/* <h4>
                      Exciting Goodies worth
                      <br /> inr 2l & More!
                    </h4> */}
                  <p>RUNNER UP</p>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="prize">
            <div className="grid-container">
              <div
                className="left-container"
                style={{
                  background: `url(${First})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="container-text">
                  <div className="sec">
                    <h2>INR 30,000</h2>
                    <h3>CASH PRIZE</h3>
                    <h4>
                      Exciting Goodies worth
                      <br /> inr 2l & More!
                    </h4>
                  </div>
                  <div className="spacer"></div>
                  <p>WINNER</p>
                </div>
              </div>
              <div className="right-container">
                <div
                  style={{
                    background: `url(${Second})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                  className="right-item"
                >
                  <div className="container-text">
                    <div className="sec">
                      <div className="row">
                        <h2>INR 30,000</h2>
                        <h3>CASH PRIZE</h3>
                      </div>

                      <h4>
                        Exciting Goodies worth
                        <br /> inr 2l & More!
                      </h4>
                      <div className="spacer"></div>
                    </div>
                    <p>RUNNER UP</p>
                  </div>
                  <img src={Second} alt="" />
                </div>
                <div className="right-item">
                  <div className="container-text">
                    <div className="sec">
                      <div className="row">
                        <h2>INR 30,000</h2>
                        <h3>CASH PRIZE</h3>
                      </div>

                      <h4>
                        Exciting Goodies worth
                        <br /> inr 2l & More!
                      </h4>
                      <div className="spacer"></div>
                    </div>
                    <p>2ND RUNNER UP</p>
                  </div>
                  <img src={Third} alt="" />
                </div>
              </div>
            </div>
           
        </div> */}
        </div>
      </div>
    </section>
  )
}

export default Prizes
