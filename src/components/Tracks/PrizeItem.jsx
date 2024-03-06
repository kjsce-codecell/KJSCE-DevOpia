import PropTypes from 'prop-types'
const PrizeItem = ({ imageUrl, description, winner }) => {
  return (
    <div className="prize">
      <img src={imageUrl} alt="" />
      <div className="description">
        <h2>{description}</h2>
        <p>{winner}</p>
      </div>
    </div>
  );
};

PrizeItem.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  winner: PropTypes.string.isRequired,
};


export default PrizeItem;
