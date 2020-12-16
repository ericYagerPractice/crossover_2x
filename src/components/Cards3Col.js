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

export default function Cards3Col() {
    return(
        <>
          <MDBCol md='6' xl='4' className='px-2'>
            <MDBAnimation reveal type='fadeInLeft'>
              <MDBCard cascade className='my-2 px-2 py-2 border-light rounded-0 d-flex flex-row align-items-center'>
                <MDBIcon icon="play-circle" className='mx-auto my-4 w-25 text-center' size="4x" />
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
              <MDBCard cascade className='my-2 px-2 py-2 elegant-color-dark border-dark rounded-0 d-flex flex-row align-items-center'>
                <MDBIcon fab icon="slack" className='mx-auto text-white my-4 w-30 text-center' size="4x" />
                <MDBCardBody cascade className='w-75 py-0 pl-3 pr-0 text-white text-left'>
                  <MDBCardText className='m-0 text-white font-weight-bold text-uppercase card-category'>
                    Slack Onboard
                  </MDBCardText>
                  <MDBCardTitle className="mt-2 mb-1 text-white card-title--sm">
                    Title
                  </MDBCardTitle>
                  <hr className="w-25 my-0 ml-0 mr-auto text-left border-light"/>
                  <MDBCardText className='text-white mt-2'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </MDBCardText>
                  <MDBNavLink
                    tag='button'
                    to='/CourseOverview'
                    className='btn btn-outline-light btn-lg waves-effect w-75 px-2 py-2 mt-2 ml-0 d-flex align-items-center justify-content-center'
                  >
                    Get Started <MDBIcon icon='caret-right' className='ml-3' size='2x'></MDBIcon>
                  </MDBNavLink>
                </MDBCardBody>
              </MDBCard>
            </MDBAnimation>
          </MDBCol>

          <MDBCol md='6' xl='4' className='px-2'>
            <MDBAnimation reveal type='fadeInLeft'>
              <MDBCard cascade className='my-2 px-2 py-2 border-light rounded-0 d-flex flex-row align-items-center'>
                <MDBIcon icon="file-download" className='mx-auto my-4 w-25 text-center' size="4x" />
                <MDBCardBody cascade className='w-75 py-0 pl-3 pr-0 text-left dark-text'>
                  <MDBCardText className='m-0 text-dark font-weight-bold text-uppercase card-category'>
                    Case Study Primer
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
                    className='btn btn-outline-dark btn-lg w-75 px-2 py-2 mt-2 ml-0 shadow-none d-flex align-items-center justify-content-center'
                  >
                    Get Info <MDBIcon icon='caret-right' className='ml-3' size='2x'></MDBIcon>
                  </MDBNavLink>
                </MDBCardBody>
              </MDBCard>
            </MDBAnimation>
          </MDBCol>

          <MDBCol md='6' xl='4' className='px-2'>
            <MDBAnimation reveal type='fadeInLeft'>
              <MDBCard cascade className='my-2 px-2 py-2 rounded-0 border-dark d-flex flex-row align-items-center'>
                <MDBIcon icon="video" className='mx-auto my-4 w-25 text-center' size="4x" />
                <MDBCardBody cascade className='w-75 py-0 pl-3 pr-0 text-left dark-text'>
                  <MDBCardText className='m-0 text-dark font-weight-bold text-uppercase card-category'>
                    Video Primer
                  </MDBCardText>
                  <MDBCardTitle className="mt-2 mb-1 card-title--sm">
                    Title
                  </MDBCardTitle>
                  <hr className="w-25 my-0 ml-0 mr-auto text-left border-dark"/>
                  <MDBCardText className='text-dark mt-2'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </MDBCardText>
                  <MDBNavLink
                    tag='button'
                    to='/CourseOverview'
                    className='btn btn-outline-dark btn-lg shadow-none w-75 px-2 py-2 mt-2 ml-0 d-flex align-items-center justify-content-center'
                  >
                    Watch Now <MDBIcon icon='caret-right' className='ml-3' size='2x'></MDBIcon>
                  </MDBNavLink>
                </MDBCardBody>
              </MDBCard>
            </MDBAnimation>
          </MDBCol>

          <MDBCol md='6' xl='4' className='px-2'>
            <MDBAnimation reveal type='fadeInLeft'>
              <MDBCard cascade className='my-2 px-2 py-2 elegant-color-dark border-dark rounded-0 d-flex flex-row align-items-center'>
                <MDBIcon icon="cogs" className='mx-auto text-white my-4 w-30 text-center' size="4x" />
                <MDBCardBody cascade className='w-75 py-0 pl-3 pr-0 text-white text-left'>
                  <MDBCardText className='m-0 text-white font-weight-bold text-uppercase card-category'>
                    Idea Session
                  </MDBCardText>
                  <MDBCardTitle className="mt-2 mb-1 text-white card-title--sm">
                    Title
                  </MDBCardTitle>
                  <hr className="w-25 my-0 ml-0 mr-auto text-left border-light"/>
                  <MDBCardText className='text-white mt-2'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </MDBCardText>
                  <MDBNavLink
                    tag='button'
                    to='/CourseOverview'
                    className='btn btn-outline-light btn-lg waves-effect w-75 px-2 py-2 mt-2 ml-0 d-flex align-items-center justify-content-center'
                  >
                    Get Started <MDBIcon icon='caret-right' className='ml-3' size='2x'></MDBIcon>
                  </MDBNavLink>
                </MDBCardBody>
              </MDBCard>
            </MDBAnimation>
          </MDBCol>

          <MDBCol md='6' xl='4' className='px-2'>
            <MDBAnimation reveal type='fadeInLeft'>
              <MDBCard cascade className='my-2 px-2 py-2 rounded-0 border-dark d-flex flex-row align-items-center'>
                <MDBIcon icon="user-plus" className='mx-auto my-4 w-25 text-center' size="4x" />
                <MDBCardBody cascade className='w-75 py-0 pl-3 pr-0 text-left dark-text'>
                  <MDBCardText className='m-0 text-dark font-weight-bold text-uppercase card-category'>
                    Create Account
                  </MDBCardText>
                  <MDBCardTitle className="mt-2 mb-1 card-title--sm">
                    Title
                  </MDBCardTitle>
                  <hr className="w-25 my-0 ml-0 mr-auto text-left border-dark"/>
                  <MDBCardText className='text-dark mt-2'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </MDBCardText>
                  <MDBNavLink
                    tag='button'
                    to='/CourseOverview'
                    className='btn btn-outline-danger btn-lg shadow-none w-75 px-2 py-2 mt-2 ml-0 d-flex align-items-center justify-content-center'
                  >
                    Sign Up <MDBIcon icon='caret-right' className='ml-3' size='2x'></MDBIcon>
                  </MDBNavLink>
                </MDBCardBody>
              </MDBCard>
            </MDBAnimation>
          </MDBCol>
        </>
    )
}