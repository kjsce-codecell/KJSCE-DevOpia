import { useEffect, useState } from 'react'
import './style.scss'

function Loader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLoading(false)
    }, 5000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <>
      <div
        // initial={{
        //   opacity: 0,
        // }}
        // animate={{
        //   opacity: 1,
        // }}
        // exit={{
        //   opacity: 0,
        // }}
        className={`loader ${loading ? 'show' : ''}`}
         // transition={{
        //   duration: 1,
        //   ease: 'easeInOut',
        // }}
      >
        <img fetchPriority="high" src="./Loader.gif" alt="Loader" />
      </div>
    </>
  )
}

export default Loader
