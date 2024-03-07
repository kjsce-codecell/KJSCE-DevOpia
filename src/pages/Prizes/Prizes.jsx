import './Prizes.scss'
import First from '../../assets/first.png'
import Second from '../../assets/second.png'
import Third from '../../assets/third.png'
const Prizes = () => {
  return (
    <section className="prize" id="prizes">
      <div className="prizes">
        <div className="background"></div>
        <div className="content">
          <h1 className="title">Prizes</h1>
          <p className="subtitle">Prizes</p>
          <div className="prize">
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
            {/* <div className="three-containers">
            <div className="left-container">
              <img src={First} alt="" />
              <div className="left-content">
                <h2>INR 30,000<span>Cash Prize</span></h2>
                <h3>Exciting Goodies worth inr 2l & More!</h3>
                <p>WINNER</p>
              </div>
            </div>
            <div className=" right-containers">
              <div className="top-right-container">
                <img src={Second} alt="" />
                <div className="left-content">
                  <h2>INR 30,000</h2>
                  <h3>Exciting Goodies worth inr 2l & More!</h3>
                  <p>WINNER</p>
                </div>
              </div>
              <div className="bottom-right-container">
                <img src={First} alt="" />
                <div className="left-content">
                  <h2>INR 30,000</h2>
                  <h3>Exciting Goodies worth inr 2l & More!</h3>
                  <p>WINNER</p>
                </div>
              </div>
            </div>
          </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Prizes
