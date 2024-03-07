import './Track.scss';
import First from '../../assets/track.png';

const Track = () => {
  return (
    <section id='track' className="track">
      <div className="content">
        <h1 className="title">Track</h1>
        <p className="subtitle">Track</p>
      </div>
      <div className="tracks">
        <div className="prize">
          <div className="desc">
            <h2>inr 10,000 for the best hack built on Ethereum<br /><br />
              Continuity grant opportunity up to $5,000 for outstanding projects<br /><br />
              inr 10,000 for the best project made using Arcana</h2>
            <p> SPONSOR WINNER</p>
          </div>
          <img src={First} alt="" />
        </div>
        <div className="prize">
          <div className="desc">
            <h2>inr 10,000 for the best hack built on Ethereum<br /><br />
              Continuity grant opportunity up to $5,000 for outstanding projects<br /><br />
              inr 10,000 for the best project made using Arcana</h2>
            <p> SPONSOR WINNER</p>
          </div>
          <img src={First} alt="" />
        </div>
        <div className="prize">
          <div className="desc">
            <h2>inr 10,000 for the best hack built on Ethereum<br /><br />
              Continuity grant opportunity up to $5,000 for outstanding projects<br /><br />
              inr 10,000 for the best project made using Arcana</h2>
            <p> SPONSOR WINNER</p>
          </div>
          <img src={First} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Track;
