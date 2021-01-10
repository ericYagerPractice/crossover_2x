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
import cardIcon1 from '../staticfiles/icons/cm-atomic-icon-2.png';
import cardIcon2 from '../staticfiles/icons/cx-catalyst-atomic-icon.png';
import cardIcon3 from '../staticfiles/icons/px-atomic-icon.png';

export default function Cards3Col() {
    return(
        <>
          <MDBCol md='6' xl='4' className='px-2'>
            <MDBAnimation reveal type='fadeInLeft'>
              <MDBCard cascade className='my-2 px-2 py-2 border-dark rounded-0 d-flex flex-row align-items-center'>
                <img
                  className="d-block m-2 card-icon"
                  src={cardIcon1}
                  alt="Icon 1"
                />
                <MDBCardBody cascade className='w-75 py-0 pl-3 pr-0 text-left dark-text'>
                  <MDBCardText className='m-0 text-dark font-weight-bold text-uppercase card-category'>
                    Channel
                  </MDBCardText>
                  <MDBCardTitle className="my-1 card-title--sm">
                    Challenge Pod
                  </MDBCardTitle>
                  <hr className="w-25 my-0 ml-0 mr-auto text-left border-danger"/>
                  <ul className='text-dark mt-2 card-list'>
                    <li><a href="#" className="color-dark">Burnout</a></li>
                    <li><a href="#">Self-Awareness</a></li>
                    <li><a href="#">AI & Machine Learning</a></li>
                  </ul>
                  <MDBNavLink
                    tag='button'
                    to='/CourseOverview'
                    className='btn btn-lg btn-outline-dark w-75 px-2 py-1 mt-2 ml-0 shadow-none d-flex align-items-center justify-content-center'
                  >
                    Buy In <MDBIcon icon='caret-right' className='ml-3' size='2x'></MDBIcon>
                  </MDBNavLink>
                </MDBCardBody>
              </MDBCard>
            </MDBAnimation>
          </MDBCol>

          <MDBCol md='6' xl='4' className='px-2'>
            <MDBAnimation reveal type='fadeInLeft'>
              <MDBCard cascade className='my-2 px-2 py-2 border-dark rounded-0 d-flex flex-row align-items-center'>
                <img
                  className="d-block m-2 card-icon"
                  src={cardIcon2}
                  alt="Icon 1"
                />
                <MDBCardBody cascade className='w-75 py-0 pl-3 pr-0 text-left dark-text'>
                  <MDBCardText className='m-0 text-dark font-weight-bold text-uppercase card-category'>
                    Case Menu
                  </MDBCardText>
                  <MDBCardTitle className="my-1 card-title--sm">
                    Rise & Fall of
                  </MDBCardTitle>
                  <hr className="w-25 my-0 ml-0 mr-auto text-left border-danger"/>
                  <ul className='text-dark mt-2 card-list'>
                    <li><a href="#" className="color-dark">Burnout</a></li>
                    <li><a href="#">Self-Awareness</a></li>
                    <li><a href="#">AI & Machine Learning</a></li>
                  </ul>
                  <MDBNavLink
                    tag='button'
                    to='/CourseOverview'
                    className='btn btn-lg btn-outline-dark w-75 px-2 py-1 mt-2 ml-0 shadow-none d-flex align-items-center justify-content-center'
                  >
                    Buy In <MDBIcon icon='caret-right' className='ml-3' size='2x'></MDBIcon>
                  </MDBNavLink>
                </MDBCardBody>
              </MDBCard>
            </MDBAnimation>
          </MDBCol>

          <MDBCol md='6' xl='4' className='px-2'>
            <MDBAnimation reveal type='fadeInLeft'>
              <MDBCard cascade className='my-2 px-2 py-2 border-dark rounded-0 d-flex flex-row align-items-center'>
                <img
                  className="d-block m-2 card-icon"
                  src={cardIcon3}
                  alt="Icon 1"
                />
                <MDBCardBody cascade className='w-75 py-0 pl-3 pr-0 text-left dark-text'>
                  <MDBCardText className='m-0 text-dark font-weight-bold text-uppercase card-category'>
                    Primer
                  </MDBCardText>
                  <MDBCardTitle className="my-1 card-title--sm">
                    Guide to X
                  </MDBCardTitle>
                  <hr className="w-25 my-0 ml-0 mr-auto text-left border-danger"/>
                  <ul className='text-dark mt-2 card-list'>
                    <li><a href="#" className="color-dark">Burnout</a></li>
                    <li><a href="#">Self-Awareness</a></li>
                    <li><a href="#">AI & Machine Learning</a></li>
                  </ul>
                  <MDBNavLink
                    tag='button'
                    to='/CourseOverview'
                    className='btn btn-lg btn-outline-dark w-75 px-2 py-1 mt-2 ml-0 shadow-none d-flex align-items-center justify-content-center'
                  >
                    Buy In <MDBIcon icon='caret-right' className='ml-3' size='2x'></MDBIcon>
                  </MDBNavLink>
                </MDBCardBody>
              </MDBCard>
            </MDBAnimation>
          </MDBCol>

          <MDBCol md='6' xl='4' className='px-2'>
            <MDBAnimation reveal type='fadeInLeft'>
              <MDBCard cascade className='my-2 px-2 py-2 border-dark rounded-0 d-flex flex-row align-items-center'>
                <img
                  className="d-block m-2 card-icon"
                  src={cardIcon1}
                  alt="Icon 1"
                />
                <MDBCardBody cascade className='w-75 py-0 pl-3 pr-0 text-left dark-text'>
                  <MDBCardText className='m-0 text-dark font-weight-bold text-uppercase card-category'>
                    Channel
                  </MDBCardText>
                  <MDBCardTitle className="my-1 card-title--sm">
                    Challenge Pod
                  </MDBCardTitle>
                  <hr className="w-25 my-0 ml-0 mr-auto text-left border-danger"/>
                  <ul className='text-dark mt-2 card-list'>
                    <li><a href="#" className="color-dark">Burnout</a></li>
                    <li><a href="#">Self-Awareness</a></li>
                    <li><a href="#">AI & Machine Learning</a></li>
                  </ul>
                  <MDBNavLink
                    tag='button'
                    to='/CourseOverview'
                    className='btn btn-lg btn-outline-dark w-75 px-2 py-1 mt-2 ml-0 shadow-none d-flex align-items-center justify-content-center'
                  >
                    Buy In <MDBIcon icon='caret-right' className='ml-3' size='2x'></MDBIcon>
                  </MDBNavLink>
                </MDBCardBody>
              </MDBCard>
            </MDBAnimation>
          </MDBCol>

          <MDBCol md='6' xl='4' className='px-2'>
            <MDBAnimation reveal type='fadeInLeft'>
              <MDBCard cascade className='my-2 px-2 py-2 border-dark rounded-0 d-flex flex-row align-items-center'>
                <img
                  className="d-block m-2 card-icon"
                  src={cardIcon2}
                  alt="Icon 1"
                />
                <MDBCardBody cascade className='w-75 py-0 pl-3 pr-0 text-left dark-text'>
                  <MDBCardText className='m-0 text-dark font-weight-bold text-uppercase card-category'>
                    Case Menu
                  </MDBCardText>
                  <MDBCardTitle className="my-1 card-title--sm">
                    Rise & Fall of
                  </MDBCardTitle>
                  <hr className="w-25 my-0 ml-0 mr-auto text-left border-danger"/>
                  <ul className='text-dark mt-2 card-list'>
                    <li><a href="#" className="color-dark">Burnout</a></li>
                    <li><a href="#">Self-Awareness</a></li>
                    <li><a href="#">AI & Machine Learning</a></li>
                  </ul>
                  <MDBNavLink
                    tag='button'
                    to='/CourseOverview'
                    className='btn btn-lg btn-outline-dark w-75 px-2 py-1 mt-2 ml-0 shadow-none d-flex align-items-center justify-content-center'
                  >
                    Buy In <MDBIcon icon='caret-right' className='ml-3' size='2x'></MDBIcon>
                  </MDBNavLink>
                </MDBCardBody>
              </MDBCard>
            </MDBAnimation>
          </MDBCol>

          <MDBCol md='6' xl='4' className='px-2'>
            <MDBAnimation reveal type='fadeInLeft'>
              <MDBCard cascade className='my-2 px-2 py-2 border-dark rounded-0 d-flex flex-row align-items-center'>
                <img
                  className="d-block m-2 card-icon"
                  src={cardIcon3}
                  alt="Icon 1"
                />
                <MDBCardBody cascade className='w-75 py-0 pl-3 pr-0 text-left dark-text'>
                  <MDBCardText className='m-0 text-dark font-weight-bold text-uppercase card-category'>
                    Primer
                  </MDBCardText>
                  <MDBCardTitle className="my-1 card-title--sm">
                    Guide to X
                  </MDBCardTitle>
                  <hr className="w-25 my-0 ml-0 mr-auto text-left border-danger"/>
                  <ul className='text-dark mt-2 card-list'>
                    <li><a href="#" className="color-dark">Burnout</a></li>
                    <li><a href="#">Self-Awareness</a></li>
                    <li><a href="#">AI & Machine Learning</a></li>
                  </ul>
                  <MDBNavLink
                    tag='button'
                    to='/CourseOverview'
                    className='btn btn-lg btn-outline-dark w-75 px-2 py-1 mt-2 ml-0 shadow-none d-flex align-items-center justify-content-center'
                  >
                    Buy In <MDBIcon icon='caret-right' className='ml-3' size='2x'></MDBIcon>
                  </MDBNavLink>
                </MDBCardBody>
              </MDBCard>
            </MDBAnimation>
          </MDBCol>
        </>
    )
}