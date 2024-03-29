import Scrambler from '../../components/shared/Scrambler/Scrambler';
import './Prizes.scss';
import First from '/first.png';
import Second from '/second.png';
import Third from '/third.png';
import HardwareFirst from '/hardwareFirst.png';
import HardwareSecond from '/hardwareSecond.png';
import { useState } from 'react';

const Prizes = () => {
  const [scramblerFunctions, setScramblerFunctions] = useState({
    start: () => { },
    pause: () => { },
    restart: () => { },
  });

  const handleScramblerBind = (c) => {
    console.log('Scrambler binded');
    setScramblerFunctions({
      start: c.start,
      pause: c.pause,
      restart: c.restart,
    });
  };

  const handleHover = () => {
    console.log('Hovered on prize-item');
    scramblerFunctions.restart();
    scramblerFunctions.start();
  };

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
                onMouseEnter={handleHover}
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="prize-image">
                  <img src={First} alt="" />
                </div>
                <div className="prize-text">
                  <h2>
                    <Scrambler
                      bindMethod={handleScramblerBind}
                      text={'INR 1,00,000'}
                    ></Scrambler>
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
                    <div className="prize-text-row">
                      <h2>
                        <Scrambler text={'INR 75,000'}></Scrambler>
                      </h2>
                      <h3>
                        <Scrambler text={'CASH PRIZE'}></Scrambler>
                      </h3>
                    </div>
                    <h4 className="small-text">
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
                    <div className="prize-text-row">
                      <h2>
                        <Scrambler text={'INR 50,000'}></Scrambler>
                      </h2>
                      <h3>
                        <Scrambler text={'CASH PRIZE'}></Scrambler>
                      </h3>
                    </div>
                    <h4 className="small-text">
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
            <h1 className="hardware-title" data-aos="fade-up" data-aos-duration="1000">
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
                    <Scrambler text={'RUNNER UP'}></Scrambler>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prizes;
