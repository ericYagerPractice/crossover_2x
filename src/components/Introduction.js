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

class Introduction extends React.Component {
  render() {
    
    const styles = {
      container: {
        color: '#00e5ff',
      }
    }
    
    return(
      <>
      <MDBContainer className='introduction w-100 mw-100' style={styles.appContainer}>
        <MDBRow>
          <MDBCol md='12' className='mx-auto'>
            <h2 className='pt-5 text-center text-uppercase'>
              What is<br/> Crossover <span className="text-danger">2X</span>?
            </h2>
            <hr className="w-25 border-dark" />
            <p className='text-center text--lg mt-3 mb-0 mx-auto'>
              Crossover Project (CP) is an online & onsite educational platform created by serial entrepreneur & Professor Clay Crocker & Pro Bowl RB Latavius Murray to help high performing athletes repurpose their talents into the modern marketplace. We offer a range of services from 1:1 Coaching to hands-on Workshops & everything in between.
            </p>
            <p className='text-center mt-3 mb-0 mx-auto'>
              Our patented CP-360X method is a cutting edge approach to learning, offering maximum flexibility & optionality, and with a lot of meat on the bone. We inspire clients to be proactive in planning for life after ball.
            </p>
            <MDBRow>
              <MDBCol md='8' className='elegant-color-dark p-0 mt-4 mx-auto'>
                <ImageCarousel />
              </MDBCol>
            </MDBRow>
            <MDBSmoothScroll className='mt-4 mx-auto text-center' to="moreC2x">
              <MDBBtn color="danger" className='mt-4 mx-auto'>
                <h4 className='font-weight-bold'>More <MDBIcon icon="arrow-circle-down" /> </h4>
              </MDBBtn>
            </MDBSmoothScroll>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      </>
    )
  }
}

export default Introduction;