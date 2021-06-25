import React from 'react';
import ImageCarousel from '../components/ImageCarousel';
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
    <MDBContainer className='introduction w-100 pt-5'>
      <MDBRow>
        <MDBCol md='12' className='mx-auto'>
          <h2 className='section-title m-0 font-weight-bold text-center text-uppercase'>
            What is<br/> Crossover <span className="text-danger">2X</span>?
          </h2>
          <hr className="w-25 border-dark" />
          <p className='text-center mt-3 mb-0 mx-auto'>
            {props.p1}
          </p>
          <p className='text-center mt-3 mb-0 mx-auto'>
            {props.p2}
          </p>
          <MDBRow>
            <MDBCol md='8' className='elegant-color-dark p-0 mt-4 mx-auto'>
              <ImageCarousel />
            </MDBCol>
          </MDBRow>
          <MDBSmoothScroll className='mt-4 mx-auto text-center' to="moreC2x">
            <MDBBtn color="danger" className='mt-1 pt-4 pb-3 w-100'>
              <h4 className='h4-responsive font-weight-bold'>
                More <MDBIcon icon="arrow-circle-down" /> 
              </h4>
            </MDBBtn>
          </MDBSmoothScroll>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  )
}

export default Introduction;