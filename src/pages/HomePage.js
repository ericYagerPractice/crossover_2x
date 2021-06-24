import React from 'react';
import Masthead from '../components/Masthead';
import Introduction from '../components/Introduction';
import TextColumns from '../components/TextColumns';
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
        <Masthead pageClass='home-page' />
        <MDBContainer className='main-container main-container--home'>
          <MDBRow>
            <MDBCol md='12' className='mt-4 px-4 mx-auto' id="introduction">
              <Introduction />
              <TextColumns />
              <AnimatedCards />
              <MenuCards />
              <hr className="mt-5" />
              <OfferingCards />
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
