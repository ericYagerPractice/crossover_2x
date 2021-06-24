import React from 'react';
import TextCarousel from '../components/TextCarousel';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardBody,
  MDBIcon,
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBAnimation,
  MDBNavLink,
} from 'mdbreact';
import cardIconC from '../staticfiles/icons/card-icon--c.png';
import cardIconP from '../staticfiles/icons/card-icon--p.png';
import cardIconT from '../staticfiles/icons/card-icon--t.png';
import cardIconS from '../staticfiles/icons/card-icon--s.png';

import './AnimatedCards.css';

const cCardTitles = [
  'C2X Menu',
  'Check Points',
  'Course Module',
  'Champion Of X',
  'Curated Bundles',
  'Channel On Slack',
  'Context Cards',
  'Choose Content',
  'Crossover X, 2X, 4X',
  'Content Funnel',
  'Cohort Selection',
];

const pCardTitles = [
  'Pod Portal',
  'Pivot Points',
  'Program Activation',
  'Plan of Attack',
  'Priming The Pump',
  'Process in Workflowy',
  'Points of Emphasis',
  'Perform On Demand',
  'Passion Filtering',
  'Program Ramp Up',
];

const tCardTitles = [
  'Zoom Training',
  'Touch Points',
  'Technical Application',
  'Train & Track',
  'Trending Topics',
  'Tool Lens',
  'Toolsets In Focus',
  'Tap Ur Talent',
  'Topics In Focus',
  'Hot Topics',
  'Upskill Testing',
];

const sCardTitles = [
  'Skill Deliverable',
  'Style Points',
  'Simulated Activity',
  'Ship or Simulate',
  'Storyboard Exercises',
  'Skill RAMP',
  'Skillsets In Focus',
  'Showcase Ur Skills',
  'Scenario In Focus',
  'Situation Room',
  'Level Up Scenario',
];

function AnimatedCards(props) {
  return(
    <>
    <MDBContainer id='categories' className='animated-cards w-100 mw-100 pt-5'>
      <MDBRow>
        <MDBCol md='12' className='mx-auto'>
          
          <MDBRow>
            <MDBCol md='8' className='mx-auto px-4'>
              <h2 className='section-title m-0 text-center text-uppercase'>
                C<span className="text-danger">2X</span><br/> Content Experience<br/> Framework (CXF)
              </h2>
            </MDBCol>
          </MDBRow>
          
          <MDBRow className="mt-3">
            <MDBCol md='6' xl='3'>
              <MDBAnimation reveal type='fadeInLeft'>
                <MDBCard cascade className='my-3 rounded-3'>
                  <img
                    className="d-block mx-auto my-4 card-icon"
                    src={cardIconC}
                    alt="C"
                  />
                  <MDBCardBody cascade className='elegant-color px-2 text-center white-text'>
                    <MDBCardTitle>
                      <TextCarousel 
                        titles={cCardTitles} 
                        items={cCardTitles.length} 
                      />
                    </MDBCardTitle>
                    <hr className="w-25 mt-1 border-white"/>
                    <MDBCardText className='text-white'>
                      <i><b>Commit to CXF</b></i>. This is where Change Starts. Choose ur own Content. Connect w/ Cohort. Capture, Create, Compete.
                    </MDBCardText>
                    <MDBNavLink
                      tag='button'
                      to='/CourseOverview'
                      className='btn btn-danger btn-lg mt-4 py-2 d-flex align-items-center justify-content-center'
                    >
                      Learn More <MDBIcon icon='caret-right' className='ml-3' size='2x'></MDBIcon>
                    </MDBNavLink>
                  </MDBCardBody>
                </MDBCard>
              </MDBAnimation>
            </MDBCol>
            
            <MDBCol md='6' xl='3'>
              <MDBAnimation reveal type='fadeInLeft'>
                <MDBCard cascade className='my-3'>
                  <img
                    className="d-block mx-auto my-4 card-icon"
                    src={cardIconP}
                    alt="P"
                  />
                  <MDBCardBody cascade className='elegant-color px-2 text-center white-text'>
                    <MDBCardTitle>
                      <TextCarousel 
                        titles={pCardTitles} 
                        items={pCardTitles.length} 
                      />
                    </MDBCardTitle>
                    <hr className="w-25 mt-1 border-white"/>
                    <MDBCardText className='text-white'>
                      Our 360° Pod Process Lets Users Go Full-Circle in re. to <i>Subject Matter Worth Probing</i>
                    </MDBCardText>
                    <MDBNavLink
                      tag='button'
                      to='/CourseOverview'
                      className='btn btn-danger btn-lg mt-4 py-2 d-flex align-items-center justify-content-center'
                    >
                      Learn More <MDBIcon icon='caret-right' className='ml-3' size='2x'></MDBIcon>
                    </MDBNavLink>
                  </MDBCardBody>
                </MDBCard>
              </MDBAnimation>
            </MDBCol>


            <MDBCol md='6' xl='3'>
              <MDBAnimation reveal type='fadeInLeft'>
                <MDBCard cascade className='my-3 rounded-3'>
                   <img
                    className="d-block mx-auto my-4 card-icon"
                    src={cardIconT}
                    alt="T"
                  />
                  <MDBCardBody cascade className='elegant-color px-2 text-center white-text'>
                    <MDBCardTitle>
                      <TextCarousel 
                        titles={tCardTitles} 
                        items={tCardTitles.length} 
                      />
                    </MDBCardTitle>
                    <hr className="w-25 mt-1 border-white"/>
                    <MDBCardText className='text-white'>
                      T-Shaped Skills 360° RoundTable Discussions, <i>Tool Up, Tack On, T'app Out</i>.
                    </MDBCardText>
                    <MDBNavLink
                      tag='button'
                      to='/CourseOverview'
                      className='btn btn-danger btn-lg mt-4 py-2 d-flex align-items-center justify-content-center'
                    >
                      Learn More <MDBIcon icon='caret-right' className='ml-3' size='2x'></MDBIcon>
                    </MDBNavLink>
                  </MDBCardBody>
                </MDBCard>
              </MDBAnimation>
            </MDBCol>


            <MDBCol md='6' xl='3'>
              <MDBAnimation reveal type='fadeInLeft'>
                <MDBCard cascade className='my-3 rounded-3'>
                  <img
                    className="d-block mx-auto my-4 card-icon"
                    src={cardIconS}
                    alt="S"
                  />
                  <MDBCardBody cascade className='elegant-color px-2 text-center white-text'>
                    <MDBCardTitle>
                      <TextCarousel 
                        titles={sCardTitles} 
                        items={sCardTitles.length} 
                      />
                    </MDBCardTitle>
                    <hr className="w-25 mt-1 border-white"/>
                    <MDBCardText className='text-white'>
                      S-Level providing users w/ Real World Opportunities to Ship, <i>Get Specs. Show Skills. Track Stats</i>
                    </MDBCardText>
                    <MDBNavLink
                      tag='button'
                      to='/CourseOverview'
                      className='btn btn-danger btn-lg mt-4 py-2 d-flex align-items-center justify-content-center'
                    >
                      Learn More <MDBIcon icon='caret-right' className='ml-3' size='2x'></MDBIcon>
                    </MDBNavLink>
                  </MDBCardBody>
                </MDBCard>
              </MDBAnimation>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </>
  )
}
export default AnimatedCards;