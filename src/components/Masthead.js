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
import styled, { keyframes } from 'styled-components';
const FadeInAnimation = keyframes`${fadeIn}`;
const FadeInDiv = styled.div`
  animation: 5s ${FadeInAnimation};
`;
import './Masthead.css';

const animatedTitles = [
  'Media',
  'Strategy',
  'Podcasting',
  'Ted Talks',
];

function Masthead(props) {
  return(
    <>
    <MDBContainer className={'masthead masthead--' + (props.pageClass) + ' w-100 mw-100'}>
      <MDBRow>
        <MDBCol className="px-0">
          <MDBJumbotron fluid className="w-100 mw-100 p-0 m-0 d-flex align-items-end align-items-lg-center justify-content-start">
            <MDBCardBody className="py-5 text-center bg-white text-dark ml-lg-5">
              <FadeInDiv>
                <h1 className="h1-responsive m-0 text-uppercase display-5 font-weight-bold">
                  Are You Ready To Level&nbsp;Up?
                </h1>
              </FadeInDiv>
              <hr className="w-25 border-dark" />
              <h2 className="h2-responsive text-uppercase mt-4 mb-0 font-weight-bold text-dark">
                Crossover To
              </h2>
              <TextCarousel 
                titles={animatedTitles}
                items={animatedTitles.length} 
              />
              <MDBSmoothScroll to="introduction">
                <MDBBtn color="danger" className="mt-1 py-4 w-100">
                  <h4 className="h4-responsive display-3 m-0 font-weight-bold">
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

export default Masthead;