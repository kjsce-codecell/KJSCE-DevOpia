import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './Scrollbar.scss'

const ScrollBar = () => {
  const [progress, setProgress] = useState(0)
  const windowHeight = window.innerHeight
  const docHeight = document.documentElement.scrollHeight
  const thumbHeight = 50
  const trackHeight = '70vh'
  const trackHeightPixels = (windowHeight * 70) / 100 - thumbHeight

  useEffect(() => {
    const scrollListener = () => {
      const totalScroll = window.scrollY
      const totalDocScrollLength = docHeight - windowHeight
      setProgress((totalScroll / totalDocScrollLength) * 100)
    }

    window.addEventListener('scroll', scrollListener)
    return () => window.removeEventListener('scroll', scrollListener)
  }, [windowHeight, docHeight])

  const handleDrag = (_, info) => {
    const trackTop = (windowHeight * 20) / 100
    const adjustedY = info.point.y - trackTop
    const clampedY = Math.max(0, Math.min(adjustedY, trackHeightPixels))
    const scrollValue =
      (clampedY / trackHeightPixels) * (docHeight - windowHeight)
    window.scrollTo({ top: scrollValue })

    setProgress((clampedY / trackHeightPixels) * 100)
  }

  const thumbTop = (progress / 100) * trackHeightPixels

  // Hide the component on mobile devices
  if (window.innerWidth <= 768) {
    return null
  }

  return (
    <motion.div
      className="progress-container"
      style={{
        position: 'fixed',
        top: `${(windowHeight * 20) / 100}px`,
        right: '35px',
        width: '2px',
        height: trackHeight,
        backgroundColor: '#A2A2A2',
        zIndex: 9999,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <motion.div
        className="thumb"
        style={{
          width: '10px',
          height: `${thumbHeight}px`,
          backgroundColor: '#fff',
          position: 'absolute',
          transform: `translateY(${thumbTop}px)`,
          cursor: 'grab',
        }}
        drag="y"
        dragElastic={0}
        dragMomentum={false}
        dragConstraints={{ top: 0, bottom: trackHeightPixels }}
        onDrag={handleDrag}
      />
    </motion.div>
  )
}

export default ScrollBar
