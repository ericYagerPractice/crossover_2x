import React from 'react';
import CustomerQuote from '../components/CustomerQuote';
import SectionScrollButton from '../components/SectionScrollButton';
import { 
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBBtn,
    MDBSmoothScroll,
} from 'mdbreact';

import './TextColumns.css';

const textColInfo = [
  { 
    title: 'Podcasting',
    icon: 'fa-podcast',
    p1: 'Now\'s the time to Start your Podcast. Get Best Practices for Riding a Wave. Study the Greats & ‘Steal Like Artists’. Workshop Material & Format. ACE your Voice: Authentic, Confident, Expressive.',
    p2: 'Now, Ship your Pilot Episode => C2P',
  },
  { 
    title: 'Ted Talk',
    icon: 'fa-microphone-alt',
    p1: 'Get the Playbook to ‘Talk Like Ted’. Use Ikigai to find Ideas Worth Spreading. Practice 4EX Speech & Do Madman > Architect > Carpenter > Judge Process. Write to Engage. Talk how you talk.',
    p2: 'Now, Write your damn Talk => C2T',
  },
  { 
    title: 'Shark Tank',
    icon: 'fa-lightbulb',
    p1: 'The Ultimate Idea to Action Sprint. Grab & Go from our Idea Menu or BYOI. Do an Anger Cleanse, Design your MVP. Vet 4Ps: Pain, Passion, Profit, Purpose. Elevate your Pitch w/ Shark Bracket 64.',
    p2: 'Now, Apply & Get to the Tank => C2ST',
  },
];

const textColumns = textColInfo.map((item, i) => {
  return(
    <MDBCol key={i} lg="4" className="text-center mx-auto mt-3 mt-lg-0">
      <i className={"fas fa-4x " + item.icon}></i>
      <h3 className="mt-3 text-center text-uppercase">
        {item.title}
      </h3>
      <hr className="w-25 border-danger" />
      <p className="text-center px-3">
        {item.p1}
      </p>
      <p className="text-center px-3 mt-1">
        {item.p2}
      </p>
    </MDBCol>
  );
});

function TextColumns(props) {
  return(
    <MDBContainer id="moreC2x" className="text-columns w-100 mt-5 pt-2 pt-md-5">
      <MDBRow>
        <MDBCol md="12" className="mx-auto">
          <MDBRow>
            <MDBCol md="8" className="mx-auto px-4">
              <h2 className="section-title m-0 text-center text-uppercase display-5">
                A Masterclass<br/> for Your Next Move
              </h2>
            </MDBCol>
          </MDBRow>
          <MDBRow className="mt-4 mt-lg-5">
            {textColumns}
          </MDBRow>
          <MDBRow>
            <CustomerQuote
              quoteText={props.quoteText}
              quoteAuthor={props.quoteAuthor}
            />  
          </MDBRow>
          <MDBRow>
            <MDBCol md="4" className="mx-auto mt-5">
              <SectionScrollButton
                btnText="Our Process"
                color="danger"
                icon="arrow-circle-down"
                scrollTo="categories"
              />
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default TextColumns;