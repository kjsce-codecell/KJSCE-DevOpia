import { useEffect, useState } from 'react'
import './Navbar.scss'
import Pronged from '../../../assets/pronged.png'
import CodeCell from '../../../assets/CodeCell.png'
import CSI from '../../../assets/CSI.png'
import SVU from '../../../assets/svu.png'
import Somaiya from '../../../assets/somaiya.png'

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
    link: '#prize',
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
  const [isOpen, setisOpen] = useState(false)
  const [binaryIndex, setBinaryIndex] = useState(0)
  const binaryArray = [
    '01001001 00100111 01101101 00100000 01000010 01100001 01110100 01101101 01100001 01101110 01001001 00100111 01101101 00100000 01000010 01100001 01110100 01101101 01100001 01101110 01001001 00100111 01101101 00100000 01000010 01100001 01110100 01101101 01100001 01101110',
    '01010100 01101000 01100101 00100000 01001010 01110101 01110011 01110100 01101001 01100011 01100101 00100000 01001100 01100101 01100001 01100111 01110101 01100101 00100000 01001110 01100101 01100101 01100100 01110011 00100000 01011001 01101111 01110101 00100001',
  ]
  const [activeSection, setActiveSection] = useState('Home')

  function handleClick() {
    setisOpen(!isOpen)
  }

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    })
  }

  return (
    <>
      <nav className="navbar">
        <div
          className={`nav-icon ${isOpen ? 'open' : ''}`}
          onClick={handleClick}
        >
          <img
            src={isOpen ? './BurgerClose.svg' : './BurgerSquare.svg'}
            alt=""
          />
        </div>
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <ul className="links">
            {menuList.map((menu) => (
              <li className="nav-link" key={menu.text}>
                <a
                  onClick={handleClick}
                  href={menu.link}
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
            <img src={CodeCell} alt="" />
            <img src={CSI} alt="" />
            <img src={SVU} alt="" />
            <img src={Somaiya} alt="" />
          </div>
        </div>
        <div className="active">
          <div className="active-link-name">{activeSection}</div>
        </div>

        <div className="logo" onClick={scrollToTop}>
          <img src={Pronged} alt="" />
        </div>

        <p className="binary">{binaryArray[binaryIndex]}</p>
      </nav>
    </>
  )
}

export default Navbar
