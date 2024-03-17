import { useState, useEffect } from 'react'
import './Track.scss'
import First from '/track.png'

const Track = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        rootMargin: '-100px', // Adjust this value as needed
      }
    )

    const trackElement = document.getElementById('track')
    if (trackElement) {
      observer.observe(trackElement)
    }

    return () => {
      if (trackElement) {
        observer.unobserve(trackElement)
      }
    }
  }, [])

  return (
    <section id="track" className="track">
      <div className="content">
        <h1 className="title">Track</h1>
        <p className="subtitle">Track</p>
      </div>
      <div className="tracks">
        <div className="prize">
          <div className="desc">
            <h2>
              inr 10,000 for the best hack built on Ethereum
              <br />
              <br />
              Continuity grant opportunity up to $5,000 for outstanding projects
              <br />
              <br />
              inr 10,000 for the best project made using Arcana
            </h2>
            <p> SPONSOR WINNER</p>
          </div>
          <img src={First} alt="" />
        </div>
        <div className="prize">
          <div className="desc">
            <h2>
              inr 10,000 for the best hack built on Ethereum
              <br />
              <br />
              Continuity grant opportunity up to $5,000 for outstanding projects
              <br />
              <br />
              inr 10,000 for the best project made using Arcana
            </h2>
            <p> SPONSOR WINNER</p>
          </div>
          <img src={First} alt="" />
        </div>
        <div className="prize">
          <div className="desc">
            <h2>
              inr 10,000 for the best hack built on Ethereum
              <br />
              <br />
              Continuity grant opportunity up to $5,000 for outstanding projects
              <br />
              <br />
              inr 10,000 for the best project made using Arcana
            </h2>
            <p> SPONSOR WINNER</p>
          </div>
          <img src={First} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Track
