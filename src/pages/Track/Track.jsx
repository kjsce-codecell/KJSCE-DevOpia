import './Track.scss';
import First from '../../assets/track.png';
import PrizeItem from '../../components/Tracks/PrizeItem';

const Track = () => {
  return (
    <div className="track">
      <div className="content">
        <h1 className="title">Track</h1>

      </div>
      <div className="prizes">
        <PrizeItem
          imageUrl={First}
          description="inr 10,000 for the best hack built on Ethereum
              Continuity grant opportunity up to $5,000 for outstanding projects
              inr 10,000 for the best project made using Arcana"
          winner="WINNER"
        />
        <PrizeItem
          imageUrl={First}
          description="inr 10,000 for the best hack built on Ethereum
              Continuity grant opportunity up to $5,000 for outstanding projects
              inr 10,000 for the best project made using Arcana"
          winner="WINNER"
        />
        <PrizeItem
          imageUrl={First}
          description="inr 10,000 for the best hack built on Ethereum
              Continuity grant opportunity up to $5,000 for outstanding projects
              inr 10,000 for the best project made using Arcana"
          winner="WINNER"
        />
      </div>
    </div>
  );
};

export default Track;
