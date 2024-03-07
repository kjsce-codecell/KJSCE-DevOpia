import { useState } from 'react';
import './About.scss';
import Sword from '../../assets/sword.png';
import Circle from '../../assets/circle.png';
import SubheadingButton from '../../components/About/SubheadingButton';
import SubheadingContent from '../../components/About/SubheadingContent';

const About = () => {
  const [activeSubheading, setActiveSubheading] = useState('DEVOPIA');

  const handleSubheadingClick = (subheading) => {
    setActiveSubheading(subheading);
  };

  const subheadings = [
    { label: 'DEVOPIA', content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." },
    { label: 'KJSCE-CTF', content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." },
    { label: 'BID-BY-BIT', content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." }
  ];

  return (
    <section id='about' className="about">
      <div className="background"></div>
      <h1 className="title">About</h1>
      <div className="content">
        <div className="sub">
          <img src={Sword} className='before' alt="" />
          <p className="subtitle">About</p>
          <img src={Sword} alt="" />
        </div>
        <div className="subtitle-container">
          {/* Subheading buttons */}
          <div className="buttons">
            {subheadings.map(subheading => (
              <SubheadingButton
                key={subheading.label}
                label={subheading.label}
                isActive={activeSubheading === subheading.label}
                onClick={handleSubheadingClick}
              />
            ))}
          </div>
          <SubheadingContent
            content={subheadings.find(subheading => subheading.label === activeSubheading)?.content}
          />
        </div>
      </div>
      <div className="svg-container">
        <img src={Circle} alt="" />
      </div>
    </section>
  );
};

export default About;
