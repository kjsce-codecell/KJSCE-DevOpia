// import Scrambler from '../../components/shared/Scrambler/Scrambler'
import './Prizes.scss'
// import First from '/first.png'
// import Second from '/second.png'
// import Third from '/third.png'
// import HardwareFirst from '/hardwareFirst.png'
// import HardwareSecond from '/hardwareSecond.png'

const Prizes = () => {
  return (
    <section className="prize" id="prizes">
      <div className="prizes">
        <div className="background"></div>
        <h1 className="title">Prizes</h1>

        <div className="subheading">
          <div data-aos="fade-up" data-aos-duration="1000">
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
        </div>
        <div className="prizes-content">
          <h1 data-aos="fade-up" data-aos-duration="1000">
            Coming
            <br />
            Soon
          </h1>
        </div>
        {/* <div className="prizes-content">
          <div className="prize-section">
            <h1 data-aos="fade-up" data-aos-duration="1000">
              Software
            </h1>
            <div
              className="prize-container"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div
                className="prize-item"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="prize-image">
                  <img src={First} alt="" />
                </div>
                <div className="prize-text">
                  <h2>
                    <Scrambler text={'INR 30,000'}></Scrambler>
                  </h2>
                  <h3>
                    <Scrambler text={'CASH PRIZE'}></Scrambler>
                  </h3>
                  <h4>
                    Exciting Goodies worth
                    <br /> inr 2l & More!
                  </h4>
                  <p>
                    <Scrambler text={'WINNER'}></Scrambler>
                  </p>
                </div>
              </div>
              <div className="column">
                <div
                  className="prize-item"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <div className="prize-image">
                    <img src={Second} alt="" />
                  </div>
                  <div className="prize-text">
                    <h2>
                      <Scrambler text={'INR 20,000'}></Scrambler>
                    </h2>
                    <h3>
                      <Scrambler text={'CASH PRIZE'}></Scrambler>
                    </h3>
                    <h4>
                      Exciting Goodies worth
                      <br /> inr 2l & More!
                    </h4>
                    <p>
                      <Scrambler text={'RUNNER UP'}></Scrambler>
                    </p>
                  </div>
                </div>
                <div
                  className="prize-item"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <div className="prize-image">
                    <img src={Third} alt="" />
                  </div>
                  <div className="prize-text">
                    <h2>
                      <Scrambler text={'INR 10,000'}></Scrambler>
                    </h2>
                    <h3>
                      <Scrambler text={'CASH PRIZE'}></Scrambler>
                    </h3>
                    <h4>
                      Exciting Goodies worth
                      <br /> inr 2l & More!
                    </h4>
                    <p>
                      <Scrambler text={'2ND RUNNER UP'}></Scrambler>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="prize-section">
            <h1 className='hardware-title' data-aos="fade-up" data-aos-duration="1000" >
              Hardware
            </h1>
            <div
              className="prize-container"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div
                className="prize-item"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="prize-image">
                  <img src={HardwareFirst} alt="" />
                </div>
                <div className="prize-text">
                  <h2>
                    <Scrambler text={'INR 10,000'}></Scrambler>
                  </h2>
                  <h3>
                    <Scrambler text={'CASH PRIZE'}></Scrambler>
                  </h3>

                  <p>
                    <Scrambler text={'WINNER'}></Scrambler>
                  </p>
                </div>
              </div>

              <div
                className="prize-item"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="prize-image">
                  <img src={HardwareSecond} alt="" />
                </div>
                <div className="prize-text">
                  <h2>
                    <Scrambler text={'INR 5,000'}></Scrambler>
                  </h2>
                  <h3>
                    <Scrambler text={'CASH PRIZE'}></Scrambler>
                  </h3>
                  <h4>
                      Exciting Goodies worth
                      <br /> inr 2l & More!
                    </h4>
                  <p>
                    <Scrambler text={'RUNNER UP'}></Scrambler>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default Prizes
