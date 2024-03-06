import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import './FAQ.scss';

const FAQ = () => {
  // FAQ data
  const faqs = [
    {
      question: 'What happens at a Hackathon?',
      answer: 'Participants (“hackers”) spend 24 hours working in teams of 2 - 4 people to build or code projects (“hacks”) they\'re excited about. There are workshops, mentors and mini-events to guide you along the way. You bring your ideas, and we give you everything you need to make them come to life.'
    },
    {
      question: 'What are the topics for the Hackathon?',
      answer: 'This is an open innovation hackathon i.e. there won\'t be any problem statements or tracks provided. Teams are free to build what they want. Also once you\'ve registered with an e-mail id, we\'ll shoot you a mail about further announcements.'
    },
    {
      question: 'What do people normally make?',
      answer: 'Hacks generally fall under one (or more) of the seven cortices: Web Development, Blockchain, Android, iOS, AI/ML, AR/VR and Game Development.'
    },
    {
      question: 'Where will the hackathon be held?',
      answer: 'The hackathon will be conducted at K.J Somaiya College of Engineering, Vidyavihar, Mumbai.'
    },
    {
      question: 'What is the Code of Conduct?',
      answer: 'The appropriate code of conduct is linked <a href="https://drive.google.com/file/d/1EDjvC7DpBDr_j6EsBHBwd-XgZ6KS4_Hi/view?usp=sharing" class="coc">here</a>.'
    },
    {
      question: 'What if I\'ve never been to a hackathon before?',
      answer: 'Not to worry, We welcome students of all skill levels. We\'ll have talks, mentors and workshops to help you with your project; hackathons can be a great place to learn new skills in a short amount of time. Just be eager to learn, and excited to meet lots of awesome people.'
    },
    {
      question: 'What should be the team size?',
      answer: 'A team can consist of 2-4 members although participants can register individually on Devfolio. Projects are to be submitted as a team on Devfolio, so participants need to finalize their teams during the event to submit their projects.'
    },
    {
      question: 'Interested in sponsoring us?',
      answer: 'Reach out to us at <a href="mailto:codecell.engg@somaiya.edu">codecell.engg@somaiya.edu</a>'
    },
    {
      question: '404: Question Not Found?',
      answer: 'You can just drop a DM at any of our social network handles and we\'ll try our best to answer them ASAP ;) You can also reach out to us at <a href="mailto:hack@kjscecodecell.com">hack@kjscecodecell.com</a>.'
    }
  ];

  return (
    <div className="faq">
      <div className="title">Frequently Asked Questions</div>
      <p className="subtitle">FAQ</p>
      <div className="acc">
        <Accordion>
          {faqs.map((faq, index) => (
            <AccordionItem key={index}>
              <AccordionItemHeading>
                <AccordionItemButton>{faq.question}</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p dangerouslySetInnerHTML={{ __html: faq.answer }}></p>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQ;
