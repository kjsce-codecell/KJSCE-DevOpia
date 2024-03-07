import './Home.scss';
import Title from '../../assets/Logo.png';
import Banda from '../../assets/Banda.png';
import Ships from '../../assets/Ships.png';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';


const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const animationVariants = {
    mobile: {
      y: [130, 150, 130],
      transition: { duration: 10, repeat: Infinity, ease: 'linear' },
    },
    desktop: {
      y: [-10, 10, -10],
      transition: { duration: 10, repeat: Infinity, ease: 'linear' },
    },
  };
  const animationVariant = isMobile ? 'mobile' : 'desktop';

  return (
    <section id='home' className="home">
      <div className="background-image">
        <div className="overlay">
          <div className="code">
            <p>UHJlcGFyZSBm<br />b3IgYmF0dGxlL<br />CB0aGUgTW90a<br />GVyc2hpcCBhc<br />HByb2FjaGVzIG<br />9uIHRoZSBob3J<br />pem9uLgoKCgoK</p>
            <p>d2Ugc3RhbmQ<br />gdW5pdGVk</p>
          </div>
          <motion.img src={Title} alt="" className='title-img' animate={{
            opacity: [0, 1],
            transition: { duration: 2.5, ease: 'easeIn' }
          }} />
          <motion.p className="tagline" animate={{
            opacity: [0, 1],
            transition: { duration: 3, ease: 'easeIn' }
          }}>WAR COMES TO EVERY WORLD</motion.p>
          <motion.p animate={{
            opacity: [0, 1],
            transition: { duration: 3, ease: 'easeIn' }
          }} className='date' >29TH-31ST MARCH</motion.p>
          <motion.img
            src={Banda}
            alt=""
            className='banda'
            initial={{ opacity: 0, translateY: "100%" }}
            animate={{ opacity: 1, translateY: "-2%" }}
            transition={{ duration: 3, ease: "easeInOut" }}
          /><motion.img
            src={Ships}
            alt=""
            className='ships'
            animate={{
              ...animationVariants[animationVariant],
            }}
          />
        </div>
      </div>
    </section >
  );
};

export default Home;
