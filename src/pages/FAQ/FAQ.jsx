import { useEffect, useRef } from 'react'
import './FAQ.scss'
import { motion } from 'framer-motion'

const Faq = () => {
  const aboutRef = useRef(null)

  useEffect(() => {
    const handleClick = (event) => {
      const accordionItemHeader = event.target
      const currentlyActiveAccordionItemHeader = document.querySelector(
        '.accordion-item-header.active'
      )

      if (
        currentlyActiveAccordionItemHeader &&
        currentlyActiveAccordionItemHeader !== accordionItemHeader
      ) {
        currentlyActiveAccordionItemHeader.classList.toggle('active')
        currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0
      }

      accordionItemHeader.classList.toggle('active')
      const accordionItemBody = accordionItemHeader.nextElementSibling
      if (accordionItemHeader.classList.contains('active')) {
        accordionItemBody.style.maxHeight =
          accordionItemBody.scrollHeight + 'px'
      } else {
        accordionItemBody.style.maxHeight = 0
      }
    }

    const accordionItemHeaders = document.querySelectorAll(
      '.accordion-item-header'
    )
    accordionItemHeaders.forEach((accordionItemHeader) => {
      accordionItemHeader.addEventListener('click', handleClick)
    })

    return () => {
      accordionItemHeaders.forEach((accordionItemHeader) => {
        accordionItemHeader.removeEventListener('click', handleClick)
      })
    }
  }, [])
  return (
    <section ref={aboutRef} id="faqs" className="faq">
      <div className="faq">
        <h1 className="title">
          Frequently
          <br />
          Asked
          <br /> Questions
        </h1>
        
        <motion.p
          whileInView={{
            opacity: [0, 1],
            y: [50, 0],
            transition: { duration: 0.8, ease: 'easeIn' },
          }}
          viewport={{ once: true }}
          className="subtitle"
        >
          <img src="./Question.svg" className="faqs-img-left" alt="" />
          <h3 className="h3-center-faqs">FAQs</h3>
          <img src="./Question.svg" className="faqs-img-right" alt="" />
        </motion.p>
      </div>

      <motion.div
        className="accordion"
        animate={{
          y: [50, 0],
          opacity: [0, 1],
          transition: { duration: 0.6, ease: 'easeIn' },
        }}
        viewport={{ once: true }}
      >
        <motion.div
          className="accordion-item"
          whileInView={{
            opacity: [0, 1],
            y: [50, 0],
            transition: { duration: 0.5, ease: 'easeIn' },
          }}
          viewport={{ once: true }}
        >
          <div className="accordion-item-header">
            What happens at a Hackathon?
          </div>
          <div className="accordion-item-body">
            <div className="accordion-item-body-content">
              Participants will spend 24 hours working in teams of one to four
              people to build or code projects they are excited about. During
              the event, there will be mentorship rounds to help and mini-events
              to guide the participants along the way. Participants only need to
              bring their ideas and their laptops, as we will provide everything
              they need to make their ideas come to life.
            </div>
          </div>
          <img src={'/bottomLineFaq.svg'} alt="" />
        </motion.div>
        <motion.div
          className="accordion-item"
          whileInView={{
            opacity: [0, 1],
            y: [50, 0],
            transition: { duration: 0.5, ease: 'easeIn' },
          }}
          viewport={{ once: true }}
        >
          <div className="accordion-item-header">What do I need to bring?</div>
          <div className="accordion-item-body">
            <div className="accordion-item-body-content">
              All participants are required to carry their own laptops and
              college identity cards.
            </div>
          </div>
          <img src={'/bottomLineFaq.svg'} alt="" />
        </motion.div>
        <motion.div
          className="accordion-item"
          whileInView={{
            opacity: [0, 1],
            y: [50, 0],
            transition: { duration: 0.5, ease: 'easeIn' },
          }}
          viewport={{ once: true }}
        >
          <div className="accordion-item-header">
            What are the topics for the Hackathon?
          </div>
          <div className="accordion-item-body">
            <div className="accordion-item-body-content">
              This is an open innovation hackathon where teams are free to build
              whatever they want in hardware or software domains without any
              specific problem statements or tracks provided.
            </div>
          </div>
          <img src={'/bottomLineFaq.svg'} alt="" />
        </motion.div>
        <motion.div
          className="accordion-item"
          whileInView={{
            opacity: [0, 1],
            y: [50, 0],
            transition: { duration: 0.5, ease: 'easeIn' },
          }}
          viewport={{ once: true }}
        >
          <div className="accordion-item-header">
            What do people normally make?
          </div>
          <div className="accordion-item-body">
            <div className="accordion-item-body-content">
              Hacks can fall into categories such as Web Development,
              Blockchain, Android, iOS, AI/ML, AR/VR, and Game Development.
              Participants can combine any of these categories since this is an
              open innovation hackathon.
            </div>
          </div>
          <img src={'/bottomLineFaq.svg'} alt="" />
        </motion.div>
        <motion.div
          className="accordion-item"
          whileInView={{
            opacity: [0, 1],
            y: [50, 0],
            transition: { duration: 0.5, ease: 'easeIn' },
          }}
          viewport={{ once: true }}
        >
          <div className="accordion-item-header">
            Where will the hackathon be held?
          </div>
          <div className="accordion-item-body">
            <div className="accordion-item-body-content">
              The hackathon will be held at K.J. Somaiya College of Engineering,
              Vidyavihar, Mumbai.
            </div>
          </div>
          <img src={'/bottomLineFaq.svg'} alt="" />
        </motion.div>
        <motion.div
          className="accordion-item"
          whileInView={{
            opacity: [0, 1],
            y: [50, 0],
            transition: { duration: 0.5, ease: 'easeIn' },
          }}
          viewport={{ once: true }}
        >
          <div className="accordion-item-header">
            Will parts be provided for the hardware hackathon?
          </div>
          <div className="accordion-item-body">
            <div className="accordion-item-body-content">
              To receive parts, teams are required to submit a prior request.
            </div>
          </div>
          <img src={'/bottomLineFaq.svg'} alt="" />
        </motion.div>
        <motion.div
          className="accordion-item"
          whileInView={{
            opacity: [0, 1],
            y: [50, 0],
            transition: { duration: 0.5, ease: 'easeIn' },
          }}
          viewport={{ once: true }}
        >
          <div className="accordion-item-header">
            What if I have never been to a hackathon before?
          </div>
          <div className="accordion-item-body">
            <div className="accordion-item-body-content">
              Don&#39;t worry, we&#39;re open to students of all skill levels.
              We offer talks, and mentors to help you with your project.
              Hackathons are an excellent opportunity to learn new skills in a
              short amount of time. Just come with an eagerness to learn and
              enthusiasm to meet lots of awesome people.
            </div>
          </div>
          <img src={'/bottomLineFaq.svg'} alt="" />
        </motion.div>
        <motion.div
          className="accordion-item"
          whileInView={{
            opacity: [0, 1],
            y: [50, 0],
            transition: { duration: 0.5, ease: 'easeIn' },
          }}
          viewport={{ once: true }}
        >
          <div className="accordion-item-header">
            What is the required team size?
          </div>
          <div className="accordion-item-body">
            <div className="accordion-item-body-content">
              Teams of 1 - 4 members are allowed.
            </div>
          </div>
          <img src={'/bottomLineFaq.svg'} alt="" />
        </motion.div>
        <motion.div
          className="accordion-item"
          whileInView={{
            opacity: [0, 1],
            y: [50, 0],
            transition: { duration: 0.5, ease: 'easeIn' },
          }}
          viewport={{ once: true }}
        >
          <div className="accordion-item-header">What is Bid-by-Bit?</div>
          <div className="accordion-item-body">
            <div className="accordion-item-body-content">
              Bid-by-Bit is a competition where participants can bid on
              competitive programming problems of varying difficulty levels.
              Since easier problems will be in higher demand, contestants will
              have to plan their strategy carefully, deciding whether to bid on
              easier problems or take a risk and go for the harder ones.
            </div>
          </div>
          <img src={'/bottomLineFaq.svg'} alt="" />
        </motion.div>
        <motion.div
          className="accordion-item"
          whileInView={{
            opacity: [0, 1],
            y: [50, 0],
            transition: { duration: 0.5, ease: 'easeIn' },
          }}
          viewport={{ once: true }}
        >
          <div className="accordion-item-header">What is a CTF?</div>
          <div className="accordion-item-body">
            <div className="accordion-item-body-content">
              CTF competitions are cybersecurity challenges where teams solve
              puzzles and exploit vulnerabilities to find hidden
              &quot;flags&quot;. These flags are submitted for points on a
              scoring server. CTFs cover areas like computer security,
              cryptography, and reverse engineering, and come in different
              formats, catering to different difficulty levels. They provide
              valuable hands-on experience and foster collaboration within the
              cybersecurity community.
            </div>
          </div>
          <img src={'/bottomLineFaq.svg'} alt="" />
        </motion.div>
        <motion.div
          className="accordion-item"
          whileInView={{
            opacity: [0, 1],
            y: [50, 0],
            transition: { duration: 0.5, ease: 'easeIn' },
          }}
          viewport={{ once: true }}
        >
          <div className="accordion-item-header">
            What is the Code of Conduct?
          </div>
          <div className="accordion-item-body">
            <div className="accordion-item-body-content">
              The appropriate code of conduct is linked
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1EDjvC7DpBDr_j6EsBHBwd-XgZ6KS4_Hi/view?usp=sharing"
                className="coc"
              >
                {' '}
                &lt;here&gt;
              </a>
              .
            </div>
          </div>
          <img src="/bottomLineFaq.svg" alt="" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Faq
