import React from 'react';
import TextCarousel from '../components/TextCarousel';
import { 
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBJumbotron,
    MDBCardBody,
    MDBBtn,
    MDBSmoothScroll,
} from 'mdbreact';

import { fadeIn } from 'react-animations'
import styled, { keyframes } from "styled-components";
const FadeInAnimation = keyframes`${fadeIn}`;
const FadeInDiv = styled.div`
  animation: 5s ${FadeInAnimation};
`;
import './Masthead.css';

class Masthead extends React.Component {
  render() {
    
    const styles = {
      container: {
      },
    }
    
    return(
      <>
      <MDBContainer className='masthead w-100 mw-100'>
        <MDBRow>
          <MDBCol className='px-0'>
            <MDBJumbotron fluid className='w-100 mw-100 p-0 m-0 d-flex align-items-end align-items-lg-center justify-content-start'>
              <MDBCardBody className='py-4 text-center bg-white text-dark ml-lg-5'>
                <FadeInDiv>
                <h1 className='my-2 text-uppercase'>
                  Are You Ready To Level&nbsp;Up?
                </h1>
                </FadeInDiv>
                <hr className="w-25 border-dark" />
                <h2 className='h2-responsive text-uppercase mt-4 mb-0 font-weight-bold text-dark'>
                  Crossover To
                </h2>
                <TextCarousel />
                <MDBSmoothScroll to="introduction">
                  <MDBBtn color="danger" className='mt-1 pt-4 pb-3 w-100 btn--lg'>
                    <h4 className='h4-responsive font-weight-bold'>
                      Learn More <MDBIcon icon="arrow-circle-down" /> 
                    </h4>
                  </MDBBtn>
                </MDBSmoothScroll>
              </MDBCardBody>
            </MDBJumbotron>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      </>
    )
  }
}

export default Masthead;