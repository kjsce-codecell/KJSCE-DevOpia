import { useEffect } from 'react';
import './FAQ.scss';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
const FAQ = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '-150px',
      }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleClick = (event) => {
      const accordionItemHeader = event.target;
      const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");

      if (currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader !== accordionItemHeader) {
        currentlyActiveAccordionItemHeader.classList.toggle("active");
        currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
      }

      accordionItemHeader.classList.toggle("active");
      const accordionItemBody = accordionItemHeader.nextElementSibling;
      if (accordionItemHeader.classList.contains("active")) {
        accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
      } else {
        accordionItemBody.style.maxHeight = 0;
      }
    };

    const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");
    accordionItemHeaders.forEach(accordionItemHeader => {
      accordionItemHeader.addEventListener("click", handleClick);
    });

    return () => {
      accordionItemHeaders.forEach(accordionItemHeader => {
        accordionItemHeader.removeEventListener("click", handleClick);
      });
    };
  }, []);
  return (

    <section ref={aboutRef}
      id="faqs" className="faq">
      <div className="">
        <h1 className="title">Frequently<br />Asked<br /> Questions</h1>
        {isVisible && (
          <motion.p animate={{
            opacity: [0, 1],
            y: [50, 0],
            transition: { duration: 0.5, ease: 'easeIn' }

          }} className="subtitle">FAQs</motion.p>
        )
        }

      </div>
      {isVisible && (
        <motion.div className="accordion"
          animate={{
            y: [50, 0],
            opacity: [0, 1],
            transition: { duration: 0.6, ease: 'easeIn' }

          }}
        >
          <div className="accordion-item">
            <div className="accordion-item-header">
              What happens at a Hackathon?
            </div>
            <div className="accordion-item-body">
              <div className="accordion-item-body-content">
                Participants (“hackers”) spend 24 hours working in teams of 2 -
                4 people to build or code projects (“hacks”)  excited
                about. There are workshops, mentors and mini-events to guide you
                along the way. You bring your ideas, and we give you everything
                you need to make them come to life.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <div className="accordion-item-header">
              What are the topics for the Hackathon?
            </div>
            <div className="accordion-item-body">
              <div className="accordion-item-body-content">
                This is an open innovation hackathon i.e. there  be any
                problem statements or tracks provided. Teams are free to build
                what they want. Also once  registered with an e-mail id,
                shoot you a mail about further announcements.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <div className="accordion-item-header">
              What do people normally make?
            </div>
            <div className="accordion-item-body">
              <div className="accordion-item-body-content">
                Hacks generally fall under one (or more) of the seven cortices:
                Web Development, Blockchain, Android, iOS, AI/ML, AR/VR and Game
                Development.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <div className="accordion-item-header">
              Where will the hackathon be held?
            </div>
            <div className="accordion-item-body">
              <div className="accordion-item-body-content">
                The hackathon will be conducted at K.J Somaiya College of
                Engineering, Vidyavihar, Mumbai.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <div className="accordion-item-header">
              What is the Code of Conduct?
            </div>
            <div className="accordion-item-body">
              <div className="accordion-item-body-content">
                The appropriate code of conduct is linked
                <a href="https://drive.google.com/file/d/1EDjvC7DpBDr_j6EsBHBwd-XgZ6KS4_Hi/view?usp=sharing"
                  className="coc">here </a>.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <div className="accordion-item-header">
              What if never been to a hackathon before?
            </div>
            <div className="accordion-item-body">
              <div className="accordion-item-body-content">
                Not to worry, We welcome students of all skill levels.
                have talks, mentors and workshops to help you with your project;
                hackathons can be a great place to learn new skills in a short
                amount of time. Just be eager to learn, and excited to meet lots
                of awesome people.
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </section>

  );
};

export default FAQ;
