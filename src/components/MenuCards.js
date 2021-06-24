import React from 'react';
import {
  MDBContainer,
  MDBRow,
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

import './MenuCards.css';

export default function MenuCards() {
    return(
        <>
        <MDBContainer id='categories' className='menu-cards w-100 mw-100 pt-5'>
          <MDBRow>
            <MDBCol md='12' className='mx-auto'>
              <MDBRow>
                <MDBCol md='8' className='mx-auto px-4'>
                  <h2 className='section-title m-0 text-center text-uppercase'>
                    C<span className="text-danger">2X</span><br/> Atomic Offerings
                  </h2>
                </MDBCol>
              </MDBRow>
              
              <MDBRow className="mt-3">
                <MDBCol md='6' xl='4' className='px-2'>
                  <MDBAnimation reveal type='fadeInLeft'>
                    <MDBCard cascade className='my-2 p-3 border-dark rounded-3 hover-zoom d-flex flex-column flex-sm-row align-items-center'>
                      <img
                        className="d-block my-2 card-icon"
                        src={cardIcon1}
                        alt="Icon 1"
                      />
                      <MDBCardBody cascade className='w-75 py-0 pl-0 pl-sm-3 pr-0 text-left dark-text'>
                        <MDBCardText className='m-0 text-dark font-weight-bold text-center text-sm-left text-uppercase card-category'>
                          <span>Challenge Pod</span>
                        </MDBCardText>
                        <MDBCardTitle className="m-0 text-center text-sm-left">
                          Pick ur Channel
                        </MDBCardTitle>
                        <hr className="w-25 mt-2 ml-auto ml-sm-0 mr-auto text-left border-danger" />
                        <ul className='mt-2 card-list pl-4'>
                          <li><a href="#">Habit Channel</a></li>
                          <li><a href="#">Sleep Channel</a></li>
                          <li><a href="#">Creative Channel</a></li>
                        </ul>
                        <MDBNavLink
                          tag='button'
                          to='/CourseOverview'
                          className='btn btn-lg btn-outline-dark px-2 py-1 mt-2 ml-0 shadow-none d-flex align-items-center justify-content-center'
                        >
                          Learn More <MDBIcon icon='caret-right' className='ml-3' size='2x'></MDBIcon>
                        </MDBNavLink>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBAnimation>
                </MDBCol>

                <MDBCol md='6' xl='4' className='px-2'>
                  <MDBAnimation reveal type='fadeInLeft'>
                    <MDBCard cascade className='my-2 p-3 border-dark rounded-3 hover-zoom d-flex flex-column flex-sm-row align-items-center'>
                      <img
                        className="d-block my-2 card-icon"
                        src={cardIcon1}
                        alt="Icon 1"
                      />
                      <MDBCardBody cascade className='w-75 py-0 pl-0 pl-sm-3 pr-0 text-left dark-text'>
                        <MDBCardText className='m-0 text-dark font-weight-bold text-center text-sm-left text-uppercase card-category'>
                          <span className="text-danger">C</span>ase<span className="text-danger">M</span>asters
                        </MDBCardText>
                        <MDBCardTitle className="m-0 text-center text-sm-left">
                          Rise & Fall of
                        </MDBCardTitle>
                        <hr className="w-25 mt-2 ml-auto ml-sm-0 mr-auto text-left border-danger" />
                        <ul className='mt-2 card-list pl-4'>
                          <li><a href="#">MoviePass</a></li>
                          <li><a href="#">WeWork</a></li>
                          <li><a href="#">Theranos</a></li>
                        </ul>
                        <MDBNavLink
                          tag='button'
                          to='/CourseOverview'
                          className='btn btn-lg btn-outline-dark px-2 py-1 mt-2 ml-0 shadow-none d-flex align-items-center justify-content-center'
                        >
                          Learn More <MDBIcon icon='caret-right' className='ml-3' size='2x'></MDBIcon>
                        </MDBNavLink>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBAnimation>
                </MDBCol>

                <MDBCol md='6' xl='4' className='px-2'>
                  <MDBAnimation reveal type='fadeInLeft'>
                    <MDBCard cascade className='my-2 p-3 border-dark rounded-3 hover-zoom d-flex flex-column flex-sm-row align-items-center'>
                      <img
                        className="d-block my-2 card-icon"
                        src={cardIcon3}
                        alt="Icon 1"
                      />
                      <MDBCardBody cascade className='w-75 py-0 pl-0 pl-sm-3 pr-0 text-left dark-text'>
                        <MDBCardText className='m-0 text-dark font-weight-bold text-center text-sm-left text-uppercase card-category'>
                          Weekly Pod Options
                        </MDBCardText>
                        <MDBCardTitle className="m-0 text-center text-sm-left">
                          <i>Channel ur Efforts</i>
                        </MDBCardTitle>
                        <hr className="w-25 mt-2 ml-auto ml-sm-0 mr-auto text-left border-danger" />
                        <ul className='mt-2 card-list pl-4'>
                          <li><a href="#">Habit Challenge</a></li>
                          <li><a href="#">Sleep Challenge</a></li>
                          <li><a href="#">Creative Challenge</a></li>
                        </ul>
                        <MDBNavLink
                          tag='button'
                          to='/CourseOverview'
                          className='btn btn-lg btn-outline-dark px-2 py-1 mt-2 ml-0 shadow-none d-flex align-items-center justify-content-center'
                        >
                          Learn More <MDBIcon icon='caret-right' className='ml-3' size='2x'></MDBIcon>
                        </MDBNavLink>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBAnimation>
                </MDBCol>

              <MDBCol md='6' xl='4' className='px-2'>
                <MDBAnimation reveal type='fadeInLeft'>
                  <MDBCard cascade className='my-2 p-3 border-dark rounded-3 hover-zoom d-flex flex-column flex-sm-row align-items-center'>
                    <img
                      className="d-block my-2 card-icon"
                      src={cardIcon3}
                      alt="Icon 1"
                    />
                    <MDBCardBody cascade className='w-75 py-0 pl-0 pl-sm-3 pr-0 text-left dark-text'>
                      <MDBCardText className='m-0 text-dark font-weight-bold text-center text-sm-left text-uppercase card-category'>
                        Champions Of Series
                      </MDBCardText>
                      <MDBCardTitle className="m-0 text-center text-sm-left">
                        <i>World-Beaters At X</i>
                      </MDBCardTitle>
                      <hr className="w-25 mt-2 ml-auto ml-sm-0 mr-auto text-left border-danger" />
                      <ul className='mt-2 card-list pl-4'>
                        <li><a href="#">Msft CEO S. Nadella</a></li>
                        <li><a href="#">Amzn CEO J. Bezos</a></li>
                        <li><a href="#">Showrunner S. Rimes</a></li>
                      </ul>
                      <MDBNavLink
                        tag='button'
                        to='/CourseOverview'
                        className='btn btn-lg btn-outline-dark px-2 py-1 mt-2 ml-0 shadow-none d-flex align-items-center justify-content-center'
                      >
                        Learn More <MDBIcon icon='caret-right' className='ml-3' size='2x'></MDBIcon>
                      </MDBNavLink>
                    </MDBCardBody>
                  </MDBCard>
                </MDBAnimation>
              </MDBCol>

                <MDBCol md='6' xl='4' className='px-2'>
                  <MDBAnimation reveal type='fadeInLeft'>
                    <MDBCard cascade className='my-2 p-3 border-dark rounded-3 hover-zoom d-flex flex-column flex-sm-row align-items-center'>
                      <img
                        className="d-block my-2 card-icon"
                        src={cardIcon2}
                        alt="Icon 1"
                      />
                      <MDBCardBody cascade className='w-75 py-0 pl-0 pl-sm-3 pr-0 text-left dark-text'>
                        <MDBCardText className='m-0 text-dark font-weight-bold text-center text-sm-left text-uppercase card-category'>
                          Option <span className="text-danger">2x</span>
                        </MDBCardText>
                        <MDBCardTitle className="m-0 text-center text-sm-left">
                          Channel_T
                        </MDBCardTitle>
                        <hr className="w-25 mt-2 ml-auto ml-sm-0 mr-auto text-left border-danger" />
                        <ul className='mt-2 card-list pl-4'>
                          <li><a href="#">Trending</a></li>
                          <li><a href="#">Technical</a></li>
                          <li><a href="#">Toolset</a></li>
                        </ul>
                        <MDBNavLink
                          tag='button'
                          to='/CourseOverview'
                          className='btn btn-lg btn-outline-dark px-2 py-1 mt-2 ml-0 shadow-none d-flex align-items-center justify-content-center'
                        >
                          Learn More <MDBIcon icon='caret-right' className='ml-3' size='2x'></MDBIcon>
                        </MDBNavLink>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBAnimation>
                </MDBCol>


                <MDBCol md='6' xl='4' className='px-2'>
                  <MDBAnimation reveal type='fadeInLeft'>
                    <MDBCard cascade className='my-2 p-3 border-dark rounded-3 hover-zoom d-flex flex-column flex-sm-row align-items-center'>
                      <img
                        className="d-block my-2 card-icon"
                        src={cardIcon1}
                        alt="Icon 1"
                      />
                      <MDBCardBody cascade className='w-75 py-0 pl-0 pl-sm-3 pr-0 text-left dark-text'>
                        <MDBCardText className='m-0 text-dark font-weight-bold text-center text-sm-left text-uppercase card-category'>
                          <span className="text-danger">4XI</span>mprove
                        </MDBCardText>
                        <MDBCardTitle className="m-0 text-center text-sm-left">
                          <i>Pod Process</i>
                        </MDBCardTitle>
                        <hr className="w-25 mt-2 ml-auto ml-sm-0 mr-auto text-left border-danger" />
                        <ul className='mt-2 card-list pl-4'>
                          <li><a href="#">Infusion</a></li>
                          <li><a href="#">Implement</a></li>
                          <li><a href="#">Iteration</a></li>
                        </ul>
                        <MDBNavLink
                          tag='button'
                          to='/CourseOverview'
                          className='btn btn-lg btn-outline-dark px-2 py-1 mt-2 ml-0 shadow-none d-flex align-items-center justify-content-center'
                        >
                          Learn More <MDBIcon icon='caret-right' className='ml-3' size='2x'></MDBIcon>
                        </MDBNavLink>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBAnimation>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        </>
    )
}