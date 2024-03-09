import { AnimatePresence, motion } from 'framer-motion'
import './style.scss'

function Loader() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
        }}
        className="loader"
        transition={{
          duration: 1,
          ease: 'easeInOut',
        }}
      >
        <img src="./Loader.gif" alt="Loader" />
      </motion.div>
    </AnimatePresence>
  )
}

export default Loader
