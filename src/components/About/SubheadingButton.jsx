import PropTypes from 'prop-types';

const SubheadingButton = ({ label, isActive, onClick }) => {
  return (
    <button
      className={`subheading-button ${isActive ? 'active' : ''}`}
      onClick={() => onClick(label)}
    >
      {label}
    </button>
  );
};

SubheadingButton.propTypes = {
  label: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default SubheadingButton;
