import { useEffect, useState } from 'react';
import './Navbar.scss';
import Pronged from '../../../assets/pronged.png';
function Navbar() {
  const [isOpen, setisOpen] = useState(false);
  const [binaryIndex, setBinaryIndex] = useState(0);
  const binaryArray = [
    '01001001 00100111 01101101 00100000 01000010 01100001 01110100 01101101 01100001 01101110 01001001 00100111 01101101 00100000 01000010 01100001 01110100 01101101 01100001 01101110 01001001 00100111 01101101 00100000 01000010 01100001 01110100 01101101 01100001 01101110',
    '01010100 01101000 01100101 00100000 01001010 01110101 01110011 01110100 01101001 01100011 01100101 00100000 01001100 01100101 01100001 01100111 01110101 01100101 00100000 01001110 01100101 01100101 01100100 01110011 00100000 01011001 01101111 01110101 00100001',
  ];
  const [activeSection, setActiveSection] = useState('Home');

  function handleClick() {
    setisOpen(!isOpen);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setBinaryIndex((prevIndex) => (prevIndex + 1) % binaryArray.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [binaryArray.length]);

  useEffect(() => {
    function handleScroll() {
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (
          window.scrollY + 125 >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          setActiveSection(section.id);
        }
      });
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <>
      <nav className="navbar">
        <div
          className={`icon nav-icon-1 ${isOpen ? 'open' : ''}`}
          onClick={handleClick}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li className="nav-link">Home</li>
          <li className="nav-link">About</li>
          <li className="nav-link">Stats</li>
          <li className="nav-link">Prizes</li>
          <li className="nav-link">Track Prizes</li>
          <li className="nav-link">Sponsors</li>
        </ul>
        <div className="active">
          <div className="active-link-name">{activeSection}</div>
          <div className="border">
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </div>

        <div className="logo" onClick={scrollToTop}>
          <img src={Pronged} alt="" />
        </div>


        <p className="binary">{binaryArray[binaryIndex]}</p>
      </nav>
    </>
  );
}

export default Navbar;