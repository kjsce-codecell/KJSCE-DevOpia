import { useState, useEffect } from 'react'
import { motion, useMotionValue } from 'framer-motion'
import './Scrollbar.scss'

const FramerScrollBar = () => {
  const [docHeight, setDocHeight] = useState(0)
  const [windowHeight, setWindowHeight] = useState(0)
  const [trackHeightPixels, setTrackHeightPixels] = useState(0)
  const [isDrag, setIsDrag] = useState(false) // Flag to indicate if drag is active

  const thumbHeight = 50 // Fixed thumb height

  // Initialize motion value for thumb position
  const y = useMotionValue(0)

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight)
      setDocHeight(document.documentElement.scrollHeight)
      setTrackHeightPixels((window.innerHeight * 70) / 100 - thumbHeight)
    }

    handleResize() // Call once on mount
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    y.onChange((value) => {
      // Only update the scroll position if it's a result of a drag event
      if (window.innerWidth > 768) {
        // Assuming drag is disabled on mobile devices
        const totalScrollableDistance = docHeight - windowHeight
        const scrollPosition =
          (value / trackHeightPixels) * totalScrollableDistance
        window.scrollTo(0, scrollPosition)
      }
    })
  }, [y, docHeight, windowHeight, trackHeightPixels])

  useEffect(() => {
    const handleScroll = () => {
      if (isDrag) return // Ignore scroll events triggered by drag
      const scrollPosition = window.scrollY
      const totalScrollableDistance = docHeight - windowHeight
      const progress =
        (scrollPosition / totalScrollableDistance) * trackHeightPixels
      y.set(progress) // Adjust the y position of the thumb based on current scroll
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [docHeight, windowHeight, trackHeightPixels, y, isDrag])

  // Conditional rendering based on device width
  if (window.innerWidth <= 768) {
    return null
  }

  return (
    <motion.div
      className="progress-container"
      style={{
        position: 'fixed',
        top: `${windowHeight * 0.2}px`,
        right: '35px',
        width: '2px',
        height: '70vh',
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
          y,
          cursor: 'grab',
        }}
        drag="y"
        dragConstraints={{ top: 0, bottom: trackHeightPixels }}
        dragElastic={0}
        dragMomentum={false}
        onDragStart={() => setIsDrag(true)}
        onDragEnd={() => setIsDrag(false)}
        whileTap={{ cursor: 'grabbing' }}
      />
    </motion.div>
  )
}

export default FramerScrollBar
