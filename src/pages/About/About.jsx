import './About.scss';

const About = () => {
  return (
    <div className="container">
      <div className="background-image"></div>
      <div className="content">
        <h1 className="title">Title</h1>
        <div className="subtitle">Subtitle</div>
        <div className="body-text">Body text goes here...</div>
      </div>
      <div className="svg-container">
        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M20 9H4v2h16V9zM4 15h16v-2H4v2z" />
        </svg>
      </div>
    </div>
  );
};

export default About;
