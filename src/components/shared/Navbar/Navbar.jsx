import { useState, useEffect, useRef } from 'react'
import './Navbar.scss'
import Pronged from '/pronged.svg'
import CodeCell from '/CodeCell.png'
import CSI from '/CSI.png'
import SVU from '/svu.png'
import Somaiya from '/somaiya.png'
import Song from '/music.mp3'

const menuList = [
  {
    text: 'Home',
    link: '#home',
  },
  {
    text: 'About',
    link: '#about',
  },
  {
    text: 'Stats',
    link: '#stats',
  },
  {
    text: 'Prizes',
    link: '#prizes',
  },
  {
    text: 'Sponsors',
    link: '#sponsors',
  },
  {
    text: 'Faqs',
    link: '#faqs',
  },
]

function Navbar() {
  const [binaryIndex, setBinaryIndex] = useState(0)
  const binaryArray = [
    '1010100 1101000 1101001 1110011 100000 1101001 1110011 1101110 11100010 10000000 10011001 1110100 100000 1101010 1110101 1110011 1110100 100000 1010100 1101000 1101001 1110011 100000 1101001 1110011 1101110 11100010 10000000 10011001 1110100 100000 1101010 1110101 1110011 1110100 100000',
    '1110000 1110101 1110010 1110011 1110101 1101001 1110100 100000 1101111 1100110 100000 1110010 1100101 1110110 1101111 1101101 1110101 1110100 1101001 1101111 1101110 1110000 1110101 1110010 1110011 1110101 1101001 1110100 100000 1101111 1100110 100000 1110010 1100101 1110110 1101111 1101100 1110101 1110100 1101001 1101111 1101110',
  ]
  const [activeSection, setActiveSection] = useState('Home')
  const [clickCount, setClickCount] = useState(0)
  const [isMusicPlaying, setIsMusicPlaying] = useState(false)
  const [audio] = useState(new Audio(Song)) // Create a single Audio object

  const [isOpen, setIsOpen] = useState(false)
  const navbarRef = useRef(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setBinaryIndex((prevIndex) => (prevIndex + 1) % binaryArray.length)
    }, 500)

    return () => clearInterval(interval)
  }, [binaryArray.length])

  useEffect(() => {
    function handleScroll() {
      const sections = document.querySelectorAll('section')
      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight
        if (
          window.scrollY + 125 >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          setActiveSection(section.id)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    function handleClickOutside(event) {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.body.addEventListener('click', handleClickOutside)
    return () => {
      document.body.removeEventListener('click', handleClickOutside)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    })
  }

  const handleProngedClick = () => {
    setClickCount((prevCount) => prevCount + 1)
    if (isMusicPlaying) {
      audio.pause()
      setIsMusicPlaying(!isMusicPlaying)
    }

    if (clickCount % 3 === 2) {
      if (!isMusicPlaying) {
        audio.play() 
      }
      setIsMusicPlaying(!isMusicPlaying) 
    }
    scrollToTop()
  }

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      const offset = 50 // Adjust this value to add desired offset
      const top = section.offsetTop - offset
      window.scrollTo({
        top: top,
        behavior: 'smooth',
      })
    }
  }

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <nav ref={navbarRef} className="navbar">
        <div
          className={`nav-icon ${isOpen ? 'open' : ''}`}
          onClick={handleClick}
        >
          <img
            src={isOpen ? './BurgerClose.svg' : './BurgerSquare.svg'}
            alt=" ̿"
          />
          <span className="menu-title">{isOpen ? 'CLOSE' : 'MENU'}</span>
        </div>
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <ul className="links">
            {menuList.map((menu, index) => (
              <li
                className="nav-link"
                key={index}
                style={{
                  animation: isOpen
                    ? `0.5s ease ${
                        index / 6 + 0.3
                      }s 1 normal forwards running navLinkAnimation`
                    : 'none',
                }}
              >
                <a
                  onClick={() => {
                    handleClick()
                    scrollToSection(menu.text.toLowerCase())
                  }}
                  className={
                    menu.text.toLowerCase() === activeSection.toLowerCase()
                      ? 'active'
                      : ''
                  }
                >
                  {menu.text}
                </a>
              </li>
            ))}
          </ul>
          <div className="logos">
            <img src={Somaiya} className="trust" alt="Somaiya Trust" />
            <img src={SVU} className="svu" alt="SVU KJSCE" />
            <img src={CodeCell} className="codecell" alt="KJSCE CodeCell" />
            <img src={CSI} className="csi" alt="CSI KJSCE" />
          </div>
        </div>
        <div className="active">
          <div className="active-link-name">{activeSection}</div>
        </div>
        <div className="logo" onClick={handleProngedClick}>
          <img src={Pronged} alt="" />
        </div>
        <p className="binary">{binaryArray[binaryIndex]}</p>
      </nav>
    </>
  )
}

export default Navbar
