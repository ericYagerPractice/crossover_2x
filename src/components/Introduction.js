import React from 'react';
import ImageCarousel from '../components/ImageCarousel';
import SectionScrollButton from '../components/SectionScrollButton';
import { 
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBBtn,
    MDBSmoothScroll,
} from 'mdbreact';

import './Introduction.css';

function Introduction(props) {
  return(
    <MDBContainer className='introduction w-100 mt-5 pt-2 pt-md-5 text-center'>
      <MDBRow>
        <MDBCol md='12' className='mx-auto'>
          <h2 className='section-title m-0 text-uppercase'>
            What is<br/> Crossover <span className="text-danger">2X</span>?
          </h2>
          <hr className="w-25 border-dark" />
          <p className='mt-3 mb-0 mx-auto'>
            {props.p1}
          </p>
          <p className='mt-3 mb-0 mx-auto'>
            {props.p2}
          </p>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol md='8' className='elegant-color-dark p-0 mt-4 mx-auto'>
          <ImageCarousel />
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol md="4" className="mx-auto mt-5">
          <SectionScrollButton
            btnText="More"
            color="danger"
            icon="arrow-circle-down"
            scrollTo="moreC2x"
          />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default Introduction;