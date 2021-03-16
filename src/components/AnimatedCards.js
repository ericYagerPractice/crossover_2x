import React from 'react';
import CardTextCarousel from '../components/CardTextCarousel';
import {
  MDBCol,
  MDBCardBody,
  MDBIcon,
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBAnimation,
  MDBNavLink,
} from 'mdbreact';
import cardIconC from '../staticfiles/icons/card-icon--c.png';
import cardIconP from '../staticfiles/icons/card-icon--p.png';
import cardIconT from '../staticfiles/icons/card-icon--t.png';
import cardIconS from '../staticfiles/icons/card-icon--s.png';

export default function AnimatedCards() { 
    return(
        <>
              
          <MDBCol md='6' xl='3'>
            <MDBAnimation reveal type='fadeInLeft'>
              <MDBCard cascade className='my-3 rounded-0'>
                <img
                  className="d-block mx-auto my-4 card-icon"
                  src={cardIconC}
                  alt="C"
                />
                <MDBCardBody cascade className='elegant-color px-2 text-center white-text'>
                  <MDBCardTitle>
                    <CardTextCarousel />
                  </MDBCardTitle>
                  <hr className="w-25 mt-1 border-white"/>
                  <MDBCardText className='text-white'>
                    <i><b>Commit to CXF</b></i>. This is where Change Starts. Choose ur own Content. Connect w/ Cohort. Capture, Create, Compete.
                  </MDBCardText>
                  <MDBNavLink
                    tag='button'
                    to='/CourseOverview'
                    className='btn btn-danger btn-lg mt-4 py-2 d-flex align-items-center justify-content-center'
                  >
                    Learn More <MDBIcon icon='caret-right' className='ml-3' size='2x'></MDBIcon>
                  </MDBNavLink>
                </MDBCardBody>
              </MDBCard>
            </MDBAnimation>
          </MDBCol>


          <MDBCol md='6' xl='3'>
            <MDBAnimation reveal type='fadeInLeft'>
              <MDBCard cascade className='my-3 rounded-0'>
                <img
                  className="d-block mx-auto my-4 card-icon"
                  src={cardIconP}
                  alt="P"
                />
                <MDBCardBody cascade className='elegant-color px-2 text-center white-text'>
                  <MDBCardTitle>
                    <CardTextCarousel />
                  </MDBCardTitle>
                  <hr className="w-25 mt-1 border-white"/>
                  <MDBCardText className='text-white'>
                    Our 360° Pod Process Lets Users Go Full-Circle in re. to <i>Subject Matter Worth Probing</i>
                  </MDBCardText>
                  <MDBNavLink
                    tag='button'
                    to='/CourseOverview'
                    className='btn btn-danger btn-lg mt-4 py-2 d-flex align-items-center justify-content-center'
                  >
                    Learn More <MDBIcon icon='caret-right' className='ml-3' size='2x'></MDBIcon>
                  </MDBNavLink>
                </MDBCardBody>
              </MDBCard>
            </MDBAnimation>
          </MDBCol>


          <MDBCol md='6' xl='3'>
            <MDBAnimation reveal type='fadeInLeft'>
              <MDBCard cascade className='my-3 rounded-0'>
                 <img
                  className="d-block mx-auto my-4 card-icon"
                  src={cardIconT}
                  alt="T"
                />
                <MDBCardBody cascade className='elegant-color px-2 text-center white-text'>
                  <MDBCardTitle>
                    <CardTextCarousel />
                  </MDBCardTitle>
                  <hr className="w-25 mt-1 border-white"/>
                  <MDBCardText className='text-white'>
                    T-Shaped Skills 360° RoundTable Discussions, <i>Tool Up, Tack On, T'app Out</i>.
                  </MDBCardText>
                  <MDBNavLink
                    tag='button'
                    to='/CourseOverview'
                    className='btn btn-danger btn-lg mt-4 py-2 d-flex align-items-center justify-content-center'
                  >
                    Learn More <MDBIcon icon='caret-right' className='ml-3' size='2x'></MDBIcon>
                  </MDBNavLink>
                </MDBCardBody>
              </MDBCard>
            </MDBAnimation>
          </MDBCol>


          <MDBCol md='6' xl='3'>
            <MDBAnimation reveal type='fadeInLeft'>
              <MDBCard cascade className='my-3 rounded-0'>
                <img
                  className="d-block mx-auto my-4 card-icon"
                  src={cardIconS}
                  alt="S"
                />
                <MDBCardBody cascade className='elegant-color px-2 text-center white-text'>
                  <MDBCardTitle>
                    <CardTextCarousel />
                  </MDBCardTitle>
                  <hr className="w-25 mt-1 border-white"/>
                  <MDBCardText className='text-white'>
                    S-Level providing users w/ Real World Opportunities to Ship, <i>Get Specs. Show Skills. Track Stats</i>
                  </MDBCardText>
                  <MDBNavLink
                    tag='button'
                    to='/CourseOverview'
                    className='btn btn-danger btn-lg mt-4 py-2 d-flex align-items-center justify-content-center'
                  >
                    Learn More <MDBIcon icon='caret-right' className='ml-3' size='2x'></MDBIcon>
                  </MDBNavLink>
                </MDBCardBody>
              </MDBCard>
            </MDBAnimation>
          </MDBCol>
        </>
    )
}