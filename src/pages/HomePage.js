import React from 'react';
import CardTextCarousel from '../components/CardTextCarousel';
import TextCarousel from '../components/TextCarousel';
import ImageCarousel from '../components/ImageCarousel';
import AnimatedCards from '../components/AnimatedCards';
import Cards3Col from '../components/Cards3Col';
import OfferingCards from '../components/offeringCards'
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBJumbotron,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBSmoothScroll,
} from 'mdbreact';
import './HomePage.css';
import { fadeIn } from 'react-animations'
import styled, { keyframes } from "styled-components";
const FadeInAnimation = keyframes`${fadeIn}`;
const FadeInDiv = styled.div`
  animation: 5s ${FadeInAnimation};
`;

class HomePage extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);
  state = {
    buttonStyle: {
      width: "100%"
    }
  }

  render() {
    return (
      <>
        <MDBContainer className="w-100 mw-100 black-background" style={styles.appContainer}>
          <MDBRow>
            <MDBCol className="px-0">
              <MDBJumbotron fluid className="w-100 mw-100 p-0 m-0" >
                <MDBCol className="col--interior d-flex align-items-end align-items-lg-center justify-content-start" >
                  <MDBCol className="col-lg-5 mw-50 mr-auto p-0" >
                    <MDBCardBody className='py-4 text-center bg-white text-dark'>
                      <h1 className='my-2 display-4 title-primary'>
                        <FadeInDiv>
                          <strong className='font-weight-bold text-uppercase'>
                            Are You Ready To Level&nbsp;Up?
                          </strong>
                        </FadeInDiv>
                      </h1>
                      <MDBRow />
                      <hr className="w-25 border-dark" />
                      <h2 className='h2-responsive text-uppercase mt-4 mb-0 font-weight-bold text-danger'>
                        Crossover To
                      </h2>
                      <TextCarousel />
                      <MDBSmoothScroll to="howDoesItWork">
                        <MDBBtn color="danger" className='mt-3 pt-4 pb-3 w-100 btn--lg'>
                          <h4 className='h4-responsive font-weight-bold'>Learn More <MDBIcon icon="arrow-circle-down" /> </h4>
                        </MDBBtn>
                      </MDBSmoothScroll>
                    </MDBCardBody>
                  </MDBCol>
                </MDBCol>
              </MDBJumbotron>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <div className='my-0' >
          <MDBContainer>
            <MDBRow>
              <MDBCol md='12' className='mt-4 px-4 mx-auto' id="howDoesItWork">
                <MDBRow>
                  <MDBCol md='12' className='mx-auto'>
                    <h3 className='pt-5 text-center text-uppercase font-weight-bold display-4 title-primary'>
                      What is<br/> Crossover <span className="text-danger">2X</span>?
                    </h3>
                    <hr className="w-25 border-dark" />
                    <p className='text-center text--lg mt-3 mx-auto font-weight-bolder'>
                      Crossover Project (CP) is an online & onsite educational platform created by serial entrepreneur & Professor Clay Crocker & Pro Bowl RB Latavius Murray to help high performing athletes repurpose their talents into the modern marketplace. We offer a range of services from 1:1 Coaching to hands-on Workshops & everything in between.
                    </p>
                    <p className='text-center text--lg mt-3 mx-auto font-weight-bolder'>
                      Our patented CP-360X method is a cutting edge approach to learning, offering maximum flexibility & optionality, and with a lot of meat on the bone. We inspire clients to be proactive in planning for life after ball.
                    </p>
                    <MDBRow>
                      <MDBCol md='8' className='elegant-color-dark p-0 mt-4 mx-auto'>
                        <ImageCarousel />
                      </MDBCol>
                    </MDBRow>
                    <MDBSmoothScroll className='mt-4 mx-auto text-center' to="moreC2x">
                      <MDBBtn color="danger" className='w-100 pt-4 pb-3 mx-auto btn--lg'>
                        <h4 className='font-weight-bold'>More <MDBIcon icon="arrow-circle-down" /> </h4>
                      </MDBBtn>
                    </MDBSmoothScroll>
                  </MDBCol>
                </MDBRow>
                
                <div id="separator"></div>

                <MDBRow id='moreC2x'>
                  <MDBCol md='12' className='mx-auto'>
                    <MDBRow>
                      <MDBCol md='8' className='mx-auto pt-5 px-4'>
                        <h2 className='text-center text-uppercase font-weight-bold display-4 title-primary'>A MASTERCLASS FOR YOUR NEXT MOVE</h2>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol lg='4' className='mx-auto'>
                        <h3 className='pt-5 text-center text-uppercase font-weight-bold'>
                          Podcasting
                        </h3>
                        <hr className="w-25 border-danger" />
                        <p className="text-center px-3">Now's the time to Start your Podcast. Get Best Practices for Riding a Wave. Study the Greats & ‘Steal Like Artists’. Workshop Material & Format. ACE your Voice: Authentic, Confident, Expressive.</p>
                        <p className="text-center px-3 mt-1">Now, Ship your Pilot Episode. <span className="text-danger">C2</span>P</p>
                      </MDBCol>
                      <MDBCol lg='4' className='mx-auto'>
                        <h3 className='pt-5 text-center text-uppercase font-weight-bold'>
                          Ted Talk
                        </h3>
                        <hr className="w-25 border-danger" />
                        <p className="text-center px-3">Get the Playbook to ‘Talk Like Ted’. Use Ikigai to find Ideas Worth Spreading. Practice 4EX Speech & Do Madman > Architect > Carpenter > Judge Process. Write to Engage. Talk how you talk.</p> 
                        <p className="text-center px-3 mt-1">Now, Write your damn Talk. <span className="text-danger">C2</span>T</p>
                      </MDBCol>
                      <MDBCol lg='4' className='mx-auto'>
                        <h3 className='pt-5 text-center text-uppercase font-weight-bold'>
                          Shark Tank
                        </h3>
                        <hr className="w-25 border-danger" />
                        <p className="text-center px-3">The Ultimate Idea to Action Sprint. Grab & Go from our Idea Menu or BYOI. Do an Anger Cleanse, Design your MVP. Vet 4Ps: Pain, Passion, Profit, Purpose. Elevate your Pitch w/ Shark Bracket 64.</p>
                        <p className="text-center px-3 mt-1">Now, Apply & Get to the Tank. <span className="text-danger">C2</span>ST</p>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol md='4' className='mx-auto'>
                        <MDBSmoothScroll className='mt-4 mx-auto text-center' to="categories">
                          <MDBBtn color="danger" className='w-100 pt-4 pb-3 mx-auto btn--lg'>
                            <h4 className='font-weight-bold'>Get Started <MDBIcon icon="arrow-circle-down" /> </h4>
                          </MDBBtn>
                        </MDBSmoothScroll>
                      </MDBCol>
                    </MDBRow>
                  </MDBCol>
                </MDBRow>
                
                <div id="separator"></div>
                
                <MDBRow id='categories'>
                  <MDBCol md='12' className='mx-auto'>
                    <h3 className='pt-5 text-center text-uppercase font-weight-bold display-4 title-primary'>
                      C<span className="text-danger">2X</span><br/> Content Experience<br/> Framework (CXF)
                    </h3>
                    <hr className="w-25 border-dark" />
                  </MDBCol>
                </MDBRow>

                <MDBRow>
                  <AnimatedCards />
                </MDBRow>

                <MDBRow id='categories'>
                  <MDBCol md='12' className='mx-auto'>
                    <h3 className='pt-5 text-center text-uppercase font-weight-bold display-4 title-primary'>
                      C<span class="text-danger">2X</span><br/> Atomic Offerings
                    </h3>
                    <hr className="w-25 border-dark" />
                  </MDBCol>
                </MDBRow>

                <MDBRow>
                  <Cards3Col />
                </MDBRow>
                <hr />
                <MDBRow>
                  <OfferingCards />
                </MDBRow>
              
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </>
    );
  }
}

export default HomePage;

const styles = {
  appContainer: {
    paddingBottom: 80,
  }
}
