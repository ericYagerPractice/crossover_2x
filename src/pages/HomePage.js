import React from 'react';
import Masthead from '../components/Masthead';
import Introduction from '../components/Introduction';
import TextColumns from '../components/TextColumns';
import CustomerQuote from '../components/CustomerQuote';
import TextCarousel from '../components/TextCarousel';
import ImageCarousel from '../components/ImageCarousel';
import AnimatedCards from '../components/AnimatedCards';
import MenuCards from '../components/MenuCards';
import OfferingCards from '../components/offeringCards';

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

//this is home
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
        <Masthead />
        
          <MDBContainer className='main-container'>
            <MDBRow>
              <MDBCol md='12' className='mt-4 px-4 mx-auto' id="introduction">
                
                <Introduction />
                <div id="separator"></div>
                <TextColumns />
                <CustomerQuote />
                
                <MDBRow id='categories'>
                  <MDBCol md='12' className='mx-auto'>
                    <h2 className='pt-5 text-center text-uppercase font-weight-bold display-4 title-primary'>
                      C<span className="text-danger">2X</span><br/> Content Experience<br/> Framework (CXF)
                    </h2>
                    <hr className="w-25 border-dark" />
                  </MDBCol>
                </MDBRow>

                <MDBRow>
                  <AnimatedCards />
                </MDBRow>

                <MDBRow>
                  <MDBCol md='12' className='mx-auto'>
                    <h3 className='pt-5 text-center text-uppercase font-weight-bold display-4 title-primary'>
                      C<span className="text-danger">2X</span><br/> Atomic Offerings
                    </h3>
                    <hr className="w-25 border-dark" />
                  </MDBCol>
                </MDBRow>

                <MDBRow>
                  <MenuCards />
                </MDBRow>
                
                <hr />
                
                <MDBRow>
                  <OfferingCards />
                </MDBRow>
              
              </MDBCol>
            </MDBRow>
          </MDBContainer>
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
