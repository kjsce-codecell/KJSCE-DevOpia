import PropTypes from 'prop-types';

const SubheadingContent = ({ content, animateBodyText, websiteUrl, showButton }) => {
  const handleButtonClick = () => {
     window.open(websiteUrl, '_blank');
  };
 
  return (
     <div className={`body-text ${animateBodyText ? 'fade-up' : ''}`}>
       {content.split('\n').map((line, index) => (
         <p key={index}>
           {line}
           <br />
         </p>
       ))}
       {showButton && (
        <div className="visit-container-pass">
         <button className="visit-website-btn-act" onClick={handleButtonClick}>Register</button>
        </div>
       )}
     </div>
  );
 };
 
 SubheadingContent.propTypes = {
  content: PropTypes.string.isRequired,
  animateBodyText: PropTypes.bool.isRequired,
  websiteUrl: PropTypes.string.isRequired,
  showButton: PropTypes.bool.isRequired, // New prop for showing the button
 };
 

export default SubheadingContent
