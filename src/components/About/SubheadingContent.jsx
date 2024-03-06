import PropTypes from 'prop-types';

const SubheadingContent = ({ content }) => {
  return (
    <div className="body-text">
      <p>{content}</p>
    </div>
  );
};

SubheadingContent.propTypes = {
  content: PropTypes.string.isRequired,
};

export default SubheadingContent;
