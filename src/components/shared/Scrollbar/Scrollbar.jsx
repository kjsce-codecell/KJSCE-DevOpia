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

    const trackHeightPixels = () => (windowHeight * 70) / 100 - thumbHeight
    let scrollTween, draggable, scrollTrigger

    if (thumbRef.current && containerRef.current) {
      scrollTween = gsap.to(thumbRef.current, {
        y: () => trackHeightPixels(),
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 0,
          end: () => docHeight - windowHeight,
          scrub: true,
        },
      })

      scrollTrigger = ScrollTrigger.create({
        trigger: containerRef.current,
        // start: 0,
        end: () => docHeight - windowHeight,
        scrub: true,
      })

      draggable = Draggable.create(thumbRef.current, {
        type: 'y',
        bounds: containerRef.current,
        inertia: true,
        onPress() {
          // TODO: Need to fix this to fix scrollbar issue
          scrollTween.scrollTrigger.disable()
          scrollTrigger.disable()
        },
        onDrag() {
          const progress = gsap.utils.mapRange(
            0,
            trackHeightPixels(),
            0,
            1,
            this.y
          )
          const to = progress * (docHeight - windowHeight)
          window.scrollTo(0, to, { behavior: 'smooth' })
          // scrollTween.scrollTrigger.disable()
          // scrollTrigger.disable()
        },
        onRelease() {
          scrollTween.scrollTrigger.enable()
          scrollTrigger.enable()
        },
      })
    }

    return () => {
      draggable?.[0].kill()
      window.removeEventListener('resize', handleResize)
      if (scrollTween && scrollTween.scrollTrigger) {
        scrollTween.scrollTrigger.kill()
      }
      if (scrollTrigger) {
        scrollTrigger.kill()
      }
      ScrollTrigger.killAll()
    }
  }, [docHeight, windowHeight])

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
