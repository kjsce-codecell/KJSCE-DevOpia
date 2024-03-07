import { useState, useEffect, useRef } from 'react';
import './About.scss';
import Sword from '../../assets/sword.png';
import Circle from '../../assets/circle.png';
import SubheadingButton from '../../components/About/SubheadingButton';
import SubheadingContent from '../../components/About/SubheadingContent';
import { motion } from 'framer-motion';

const About = () => {
  const [activeSubheading, setActiveSubheading] = useState('DEVOPIA');
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '-100px',
      }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  const handleSubheadingClick = (subheading) => {
    setActiveSubheading(subheading);
  };

  const subheadings = [
    { label: 'DEVOPIA', content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesettLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, buing, remaining essentially unchanged." },
    { label: 'KJSCE-CTF', content: "t also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." },
    { label: 'BID-BY-BIT', content: "to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged." }
  ];

  return (
    <section id='about' className="about" ref={aboutRef}>
      <div className="background"></div>
      <h1 className="title">About</h1>
      <div className="content">
        {isVisible && (
          <motion.div className="sub"
            animate={{
              opacity: [0, 1],
              y: [50, 0],
              transition: { duration: 1.5, ease: 'easeIn' }
            }}
          >
            <img src={Sword} className='before' alt="" />
            <p className="subtitle">About</p>
            <img src={Sword} alt="" />
          </motion.div>
        )}
        <div className="subtitle-container">
          {isVisible && (
            <motion.div className="buttons" animate={{
              opacity: [0, 1],
              y: [50, 0],
              transition: { duration: 1.5, ease: 'easeIn' }
            }}>
              {subheadings.map(subheading => (
                <SubheadingButton
                  key={subheading.label}
                  label={subheading.label}
                  isActive={activeSubheading === subheading.label}
                  onClick={handleSubheadingClick}
                />
              ))}
            </motion.div>
          )}
          {isVisible &&
            <motion.div className="body-text" animate={{
              opacity: [0, 1],
              y: [50, 0],
              transition: { duration: 1.5, ease: 'easeIn' }
            }}>
              <SubheadingContent
                content={subheadings.find(subheading => subheading.label === activeSubheading)?.content}
              />
            </motion.div>
          }
        </div>
      </div>
      {
        isVisible && <motion.div animate={{
          opacity: [0, 1],
          transition: { duration: 3, ease: 'easeIn' }

        }} className="svg-container">
          {isVisible && <motion.img animate={{

          }} src={Circle} alt="" />}
        </motion.div>
      }

    </section>
  );
};

export default About;
