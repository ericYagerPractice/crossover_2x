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

const introTextP1 = 'Crossover Project (CP) is an online & onsite educational platform created by serial entrepreneur & Professor Clay Crocker & Pro Bowl RB Latavius Murray to help high performing athletes repurpose their talents into the modern marketplace. We offer a range of services from 1:1 Coaching to hands-on Workshops & everything in between.';

const introTextP2 = 'Our patented CP-360X method is a cutting edge approach to learning, offering maximum flexibility & optionality, and with a lot of meat on the bone. We inspire clients to be proactive in planning for life after ball.';

const quoteText = 'C2X was an amazing learning experience and really helped me level up my skill set.';
const quoteAuthor = 'Jim Davis, VP of Sales';


function HomePage() {
  return (
    <>
      <Masthead pageClass='home-page' />
      <Introduction 
        p1={introTextP1}
        p2={introTextP2}
      />
      <TextColumns
        quoteText={quoteText}
        quoteAuthor={quoteAuthor}
      />
      <AnimatedCards />
      <MenuCards />
      <OfferingCards />
    </>
  );
}

export default HomePage;
