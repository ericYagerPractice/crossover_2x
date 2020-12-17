import React from 'react';
import TextCarousel from '../components/TextCarousel';
import ImageCarousel from '../components/ImageCarousel';
import AnimatedCards from '../components/AnimatedCards';
import Cards3Col from '../components/Cards3Col';
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
                      <h1 className='my-2 display-4'>
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
                          <h4 className='h4-responsive font-weight-bold'>Learn More <MDBIcon icon="angle-double-down" /> </h4>
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
                    <h2 className='pt-5 text-center text-uppercase font-weight-bold display-4'>
                      What is<br/> Crossover <span className="text-danger">2X</span>?
                    </h2>
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
                    <MDBSmoothScroll className='mt-4 mx-auto text-center' to="categories">
                      <MDBBtn color="danger" className='w-100 pt-4 pb-3 mx-auto btn--lg'>
                        <h4 className='font-weight-bold'>Get Started! <MDBIcon icon="angle-double-down" /> </h4>
                      </MDBBtn>
                    </MDBSmoothScroll>
                  </MDBCol>
                </MDBRow>
                
                <div id="separator"></div>
                
                <MDBRow id='categories'>
                  <MDBCol md='12' className='mx-auto'>
                    <h2 className='pt-5 text-center text-uppercase font-weight-bold display-4'>
                      C<span className="text-danger">2X</span><br/> Atomic Framework
                    </h2>
                    <hr className="w-25 border-dark" />
                  </MDBCol>
                </MDBRow>

                <MDBRow>
                  <AnimatedCards />
                </MDBRow>

                <MDBRow>
                  <Cards3Col />
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
