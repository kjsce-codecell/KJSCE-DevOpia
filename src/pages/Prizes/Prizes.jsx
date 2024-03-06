import './Prizes.scss';
import First from '../../assets/first.png';
const Prizes = () => {
  return (
    <div className="prizes">
      <div className="background"></div>
      <div className="content">
        <h1 className="title">Prizes</h1>
        <p className="subtitle">Prizes</p>
        <div className="prize">
          <div className="three-containers">
            <div className="left-container">
              {/* Content for left container */}
              <img src={First} alt="" />
              <div className="left-content">
                <h2>INR 30,000<span>Cash Prize</span></h2>
                <h3>Exciting Goodies worth inr 2l & More!</h3>
                <p>WINNER</p>
              </div>
            </div>
            <div className=" right-containers">
              <div className="top-right-container">
                <img src={First} alt="" />
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prizes;