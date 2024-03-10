import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Draggable from 'gsap/Draggable'
import './Scrollbar.scss'

gsap.registerPlugin(ScrollTrigger, Draggable)

const ScrollBar = () => {
  const thumbRef = useRef(null)
  const containerRef = useRef(null)
  const [docHeight, setDocHeight] = useState(0)
  const [windowHeight, setWindowHeight] = useState(0)
  const thumbHeight = 60

  useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight)
      setDocHeight(document.documentElement.scrollHeight)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    // Calculating track height outside of the gsap.to call
    const trackHeightPixels = (windowHeight * 70) / 100 - thumbHeight

    if (thumbRef.current && containerRef.current) {
      const scrollTrigger = ScrollTrigger.create({
        trigger: containerRef.current,
        start: 0,
        end: () => docHeight - windowHeight,
        scrub: true,
      })

      const draggable = Draggable.create(thumbRef.current, {
        type: 'y',
        bounds: containerRef.current,
        inertia: true,
        onPress() {
          scrollTrigger.disable()
        },
        onDrag() {
          const progress = this.y / trackHeightPixels
          const to = progress * (docHeight - windowHeight)
          window.scrollTo(0, to)
        },
        onRelease() {
          scrollTrigger.enable()
        },
      })

      // Ensure to kill the ScrollTrigger and Draggable instances on cleanup
      return () => {
        draggable[0].kill()
        scrollTrigger.kill()
        window.removeEventListener('resize', handleResize)
        ScrollTrigger.killAll()
      }
    }
  }, [docHeight, windowHeight, thumbHeight])

  if (window.innerWidth <= 768) {
    return null
  }

  return (
    <div
      className="progress-container"
      ref={containerRef}
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
      <div
        ref={thumbRef}
        className="thumb"
        style={{
          width: '10px',
          height: `${thumbHeight}px`,
          backgroundColor: '#fff',
          position: 'absolute',
          cursor: 'grab',
        }}
      />
    </div>
  )
}

export default ScrollBar
