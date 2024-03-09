import './Stats.scss'
import { motion } from 'framer-motion'

function Stats() {
  return (
    <section className="statsContainer" id="stats">
      <div className="background"></div>
      <div className="subheading">
        <motion.div
          whileInView={{
            opacity: [0, 1],
            y: [50, 0],
            transition: { duration: 0.8, ease: 'easeIn' },
          }}
        >
          <img src="./Emblem.svg" className="left" alt="" />
          <h3>Stats</h3>
          <img src="./Emblem.svg" className="right" alt="" />
        </motion.div>
        <p>Stats</p>
      </div>

      <div className="statsGrid">
        <div className="sideWrapper">
          <div className="column">
            <motion.div
              className="imageContainer"
              whileInView={{
                opacity: [0, 1],
                y: [50, 0],
                transition: { duration: 0.5, ease: 'easeIn' },
              }}
            >
              <img src="./Stats/Image1.png" alt="" />
            </motion.div>
            <motion.div
              className="content"
              whileInView={{
                opacity: [0, 1],
                y: [50, 0],
                transition: { duration: 0.5, ease: 'easeIn' },
              }}
            >
              <h4 className="highlightNum">24</h4>
              <p>hack hours</p>
            </motion.div>
            <motion.div
              className="imageContainer"
              whileInView={{
                opacity: [0, 1],
                y: [50, 0],
                transition: { duration: 0.5, ease: 'easeIn' },
              }}
            >
              <img src="./Stats/Image2.png" alt="" />
            </motion.div>
          </div>
          <div className="column">
            <motion.div
              className="imageContainer"
              whileInView={{
                opacity: [0, 1],
                y: [50, 0],
                transition: { duration: 0.5, ease: 'easeIn' },
              }}
            >
              <img src="./Stats/Image3.jpg" alt="" />
            </motion.div>
            <motion.div
              className="content"
              whileInView={{
                opacity: [0, 1],
                y: [50, 0],
                transition: { duration: 0.5, ease: 'easeIn' },
              }}
            >
              <h4 className="highlightNum">100+</h4>
              <p>colleges</p>
            </motion.div>
            <motion.div
              className="imageContainer"
              whileInView={{
                opacity: [0, 1],
                y: [50, 0],
                transition: { duration: 0.5, ease: 'easeIn' },
              }}
            >
              <img src="./Stats/Image4.jpg" alt="" />
            </motion.div>
          </div>
        </div>
        <div className="middle">
          <motion.div
            className="imageContainer"
            whileInView={{
              opacity: [0, 1],
              y: [50, 0],
              transition: { duration: 0.5, ease: 'easeIn' },
            }}
          >
            <img src="./Stats/Image9.jpg" alt="" />
          </motion.div>
          <motion.div
            className="content"
            style={{
              textAlign: 'center',
            }}
            whileInView={{
              opacity: [0, 1],
              y: [50, 0],
              transition: { duration: 0.5, ease: 'easeIn' },
            }}
          >
            <h4 className="highlightNum">2000+</h4>
            <p>Registrations</p>
          </motion.div>
          <motion.div
            className="imageContainer"
            whileInView={{
              opacity: [0, 1],
              y: [50, 0],
              transition: { duration: 0.5, ease: 'easeIn' },
            }}
          >
            <img src="./Stats/Image6.JPG" alt="" />
          </motion.div>
        </div>
        <div className="sideWrapper">
          <div className="column">
            <motion.div
              className="imageContainer"
              whileInView={{
                opacity: [0, 1],
                y: [50, 0],
                transition: { duration: 0.5, ease: 'easeIn' },
              }}
            >
              <img src="./Stats/Image7.jpg" alt="" />
            </motion.div>
            <motion.div
              className="content"
              whileInView={{
                opacity: [0, 1],
                y: [50, 0],
                transition: { duration: 0.5, ease: 'easeIn' },
              }}
            >
              <h4 className="highlightNum">150+</h4>
              <p>Hackers</p>
            </motion.div>
            <motion.div
              className="imageContainer"
              whileInView={{
                opacity: [0, 1],
                y: [50, 0],
                transition: { duration: 0.5, ease: 'easeIn' },
              }}
            >
              <img src="./Stats/Image8.jpg" alt="" />
            </motion.div>
          </div>
          <div className="column">
            <motion.div
              className="imageContainer"
              whileInView={{
                opacity: [0, 1],
                y: [50, 0],
                transition: { duration: 0.5, ease: 'easeIn' },
              }}
            >
              <img src="./Stats/Image9.jpg" alt="" />
            </motion.div>
            <motion.div
              className="content"
              whileInView={{
                opacity: [0, 1],
                y: [50, 0],
                transition: { duration: 0.5, ease: 'easeIn' },
              }}
            >
              <h4 className="highlightNum">40+</h4>
              <p>Projects</p>
            </motion.div>
            <motion.div
              className="imageContainer ten"
              whileInView={{
                opacity: [0, 1],
                y: [50, 0],
                transition: { duration: 0.5, ease: 'easeIn' },
              }}
            >
              <img src="./Stats/Image10.jpg" alt="" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Stats
