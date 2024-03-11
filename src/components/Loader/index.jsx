import './style.scss'

function Loader() {
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
        className="loader"
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
