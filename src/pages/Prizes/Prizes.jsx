import './Prizes.scss'
import First from '../../assets/first.png'
import Second from '../../assets/second.png'
import Third from '../../assets/third.png'
import { motion } from 'framer-motion'

const Prizes = () => {
  return (
    <section className="prize" id="prizes">
      <div className="prizes">
        <div className="background"></div>
        <div className="subheading">
          <motion.div
            whileInView={{
              opacity: [0, 1],
              y: [50, 0],
              transition: { duration: 0.8, ease: 'easeIn' },
            }}
            viewport={{ once: true }}
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
          </motion.div>
          <p>Prizes</p>
        </div>
        <div className="prizes-content">
          <div className="prize-section">
            <motion.h1
              whileInView={{
                opacity: [0, 1],
                y: [50, 0],
                transition: { duration: 0.5, ease: 'easeIn' },
              }}
              viewport={{ once: true }}
            >
              Software
            </motion.h1>
            <motion.div
              className="prize-container"
              whileInView={{
                opacity: [0, 1],
                y: [50, 0],
                transition: { duration: 0.5, ease: 'easeIn' },
              }}
              viewport={{ once: true }}
            >
              <div className="prize-item">
                <div className="prize-image">
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
                <div className="prize-item">
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
                <div className="prize-item">
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
            </motion.div>
          </div>
          <div className="prize-section">
            <motion.h1
              whileInView={{
                opacity: [0, 1],
                y: [50, 0],
                transition: { duration: 0.5, ease: 'easeIn' },
              }}
              viewport={{ once: true }}
            >
              Hardware
            </motion.h1>
            <motion.div
              className="prize-container"
              whileInView={{
                opacity: [0, 1],
                y: [50, 0],
                transition: { duration: 0.5, ease: 'easeIn' },
              }}
              viewport={{ once: true }}
            >
              <div className="prize-item">
                <div className="prize-image">
                  <img src={First} alt="" />
                </div>
                <div className="prize-text">
                  <h2>INR 10,000</h2>
                  <h3>CASH PRIZE</h3>

                  <p>WINNER</p>
                </div>
              </div>

              <div className="prize-item">
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
            </motion.div>
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
