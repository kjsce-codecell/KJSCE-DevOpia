import PropTypes from 'prop-types'

const SubheadingContent = ({ content }) => {
  return (
    <div className="body-text">
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
