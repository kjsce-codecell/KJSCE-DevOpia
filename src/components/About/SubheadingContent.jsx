import PropTypes from 'prop-types'

// eslint-disable-next-line react/prop-types
const SubheadingContent = ({ content, animateBodyText }) => {
  return (
    <div
      className={`body-text ${animateBodyText ? 'fade-up' : ''}`} // Conditionally apply class for animation
    >
      {content.split('\n').map((line, index) => (
        <p key={index}>
          {line}
          <br />
        </p>
      ))}
    </div>
  )
}

SubheadingContent.propTypes = {
  content: PropTypes.string.isRequired,
}

export default SubheadingContent
