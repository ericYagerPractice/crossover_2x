import React from 'react';
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
import cardIcon1 from '../staticfiles/icons/cm-atomic-icon.png';

export default function Cards3Col() {
    return(
        <>
          <MDBCol md='6' xl='4' className='px-2'>
            <MDBAnimation reveal type='fadeInLeft'>
              <MDBCard cascade className='my-2 px-2 py-2 border-light rounded-0 d-flex flex-row align-items-center'>
                <img
                  className="d-block m-2 card-icon"
                  src={cardIcon1}
                  alt="Icon 1"
                />
                <MDBCardBody cascade className='w-75 py-0 pl-3 pr-0 text-left dark-text'>
                  <MDBCardText className='m-0 text-dark font-weight-bold text-uppercase card-category'>
                    Orange POD
                  </MDBCardText>
                  <MDBCardTitle className="mt-2 mb-1 card-title--sm">
                    Title
                  </MDBCardTitle>
                  <hr className="w-25 my-0 ml-0 mr-auto text-left border-danger"/>
                  <MDBCardText className='text-dark mt-2'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </MDBCardText>
                  <MDBNavLink
                    tag='button'
                    to='/CourseOverview'
                    className='btn btn-danger btn-lg w-75 px-2 py-2 mt-2 ml-0 shadow-none d-flex align-items-center justify-content-center'
                  >
                    Start POD <MDBIcon icon='caret-right' className='ml-3' size='2x'></MDBIcon>
                  </MDBNavLink>
                </MDBCardBody>
              </MDBCard>
            </MDBAnimation>
          </MDBCol>

          <MDBCol md='6' xl='4' className='px-2'>
            <MDBAnimation reveal type='fadeInLeft'>
              <MDBCard cascade className='my-2 px-2 py-2 border-light rounded-0 d-flex flex-row align-items-center'>
                <img
                  className="d-block m-2 card-icon"
                  src={cardIcon1}
                  alt="Icon 1"
                />
                <MDBCardBody cascade className='w-75 py-0 pl-3 pr-0 text-left dark-text'>
                  <MDBCardText className='m-0 text-dark font-weight-bold text-uppercase card-category'>
                    Orange POD
                  </MDBCardText>
                  <MDBCardTitle className="mt-2 mb-1 card-title--sm">
                    Title
                  </MDBCardTitle>
                  <hr className="w-25 my-0 ml-0 mr-auto text-left border-danger"/>
                  <MDBCardText className='text-dark mt-2'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </MDBCardText>
                  <MDBNavLink
                    tag='button'
                    to='/CourseOverview'
                    className='btn btn-danger btn-lg w-75 px-2 py-2 mt-2 ml-0 shadow-none d-flex align-items-center justify-content-center'
                  >
                    Start POD <MDBIcon icon='caret-right' className='ml-3' size='2x'></MDBIcon>
                  </MDBNavLink>
                </MDBCardBody>
              </MDBCard>
            </MDBAnimation>
          </MDBCol>

          <MDBCol md='6' xl='4' className='px-2'>
            <MDBAnimation reveal type='fadeInLeft'>
              <MDBCard cascade className='my-2 px-2 py-2 border-light rounded-0 d-flex flex-row align-items-center'>
                <img
                  className="d-block m-2 card-icon"
                  src={cardIcon1}
                  alt="Icon 1"
                />
                <MDBCardBody cascade className='w-75 py-0 pl-3 pr-0 text-left dark-text'>
                  <MDBCardText className='m-0 text-dark font-weight-bold text-uppercase card-category'>
                    Orange POD
                  </MDBCardText>
                  <MDBCardTitle className="mt-2 mb-1 card-title--sm">
                    Title
                  </MDBCardTitle>
                  <hr className="w-25 my-0 ml-0 mr-auto text-left border-danger"/>
                  <MDBCardText className='text-dark mt-2'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </MDBCardText>
                  <MDBNavLink
                    tag='button'
                    to='/CourseOverview'
                    className='btn btn-danger btn-lg w-75 px-2 py-2 mt-2 ml-0 shadow-none d-flex align-items-center justify-content-center'
                  >
                    Start POD <MDBIcon icon='caret-right' className='ml-3' size='2x'></MDBIcon>
                  </MDBNavLink>
                </MDBCardBody>
              </MDBCard>
            </MDBAnimation>
          </MDBCol>
        </>
    )
}