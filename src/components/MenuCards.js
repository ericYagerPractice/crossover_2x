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
        <MDBContainer id='categories' className='text-columns w-100 mw-100 mt-5'>
          <MDBRow>
            <MDBCol md='12' className='mx-auto'>
              <MDBRow>
                <MDBCol md='8' className='mx-auto pt-5 px-4'>
                  <h2 className='text-center text-uppercase'>
                    C<span className="text-danger">2X</span><br/> Atomic Offerings
                  </h2>
                </MDBCol>
              </MDBRow>
              
              <MDBRow className="mt-3">
                <MDBCol md='6' xl='4' className='px-2'>
                  <MDBAnimation reveal type='fadeInLeft'>
                    <MDBCard cascade className='my-2 px-2 py-2 border-dark rounded-3 hover-zoom d-flex flex-row align-items-center'>
                      <img
                        className="d-block m-2 card-icon"
                        src={cardIcon1}
                        alt="Icon 1"
                      />
                      <MDBCardBody cascade className='w-75 py-0 pl-3 pr-0 text-left dark-text'>
                        <MDBCardText className='m-0 text-dark font-weight-bold text-uppercase card-category'>
                          <span>Challenge Pod</span>
                        </MDBCardText>
                        <MDBCardTitle className="m-0 card-title--sm">
                          Pick ur Channel
                        </MDBCardTitle>
                        <hr className="w-25 mt-2 ml-0 mr-auto text-left border-danger"/>
                        <ul className='text-dark mt-2 card-list'>
                          <li><a href="#" className="color-dark">Habit Channel</a></li>
                          <li><a href="#">Sleep Channel</a></li>
                          <li><a href="#">Creative Channel</a></li>
                        </ul>
                        <MDBNavLink
                          tag='button'
                          to='/CourseOverview'
                          className='btn btn-lg btn-outline-dark w-75 px-2 py-1 mt-2 ml-0 shadow-none d-flex align-items-center justify-content-center'
                        >
                          Learn More <MDBIcon icon='caret-right' className='ml-3' size='2x'></MDBIcon>
                        </MDBNavLink>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBAnimation>
                </MDBCol>

                <MDBCol md='6' xl='4' className='px-2'>
                  <MDBAnimation reveal type='fadeInLeft'>
                    <MDBCard cascade className='my-2 px-2 py-2 border-dark rounded-3 hover-zoom d-flex flex-row align-items-center'>
                      <img
                        className="d-block m-2 card-icon"
                        src={cardIcon1}
                        alt="Icon 1"
                      />
                      <MDBCardBody cascade className='w-75 py-0 pl-3 pr-0 text-left dark-text'>
                        <MDBCardText className='m-0 text-dark font-weight-bold text-uppercase card-category'>
                          <span className="text-danger">C</span>ase<span className="text-danger">M</span>asters
                        </MDBCardText>
                        <MDBCardTitle className="m-0 card-title--sm">
                          Rise & Fall of
                        </MDBCardTitle>
                        <hr className="w-25 mt-2 ml-0 mr-auto text-left border-danger"/>
                        <ul className='text-dark mt-2 card-list'>
                          <li><a href="#" className="color-dark">MoviePass</a></li>
                          <li><a href="#">WeWork</a></li>
                          <li><a href="#">Theranos</a></li>
                        </ul>
                        <MDBNavLink
                          tag='button'
                          to='/CourseOverview'
                          className='btn btn-lg btn-outline-dark w-75 px-2 py-1 mt-2 ml-0 shadow-none d-flex align-items-center justify-content-center'
                        >
                          Learn More <MDBIcon icon='caret-right' className='ml-3' size='2x'></MDBIcon>
                        </MDBNavLink>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBAnimation>
                </MDBCol>

                <MDBCol md='6' xl='4' className='px-2'>
                  <MDBAnimation reveal type='fadeInLeft'>
                    <MDBCard cascade className='my-2 px-2 py-2 border-dark rounded-3 hover-zoom d-flex flex-row align-items-center'>
                      <img
                        className="d-block m-2 card-icon"
                        src={cardIcon3}
                        alt="Icon 1"
                      />
                      <MDBCardBody cascade className='w-75 py-0 pl-3 pr-0 text-left dark-text'>
                        <MDBCardText className='m-0 text-dark font-weight-bold text-uppercase card-category'>
                          Weekly Pod Options
                        </MDBCardText>
                        <MDBCardTitle className="m-0 card-title--sm">
                          <i>Channel ur Efforts</i>
                        </MDBCardTitle>
                        <hr className="w-25 mt-2 ml-0 mr-auto text-left border-danger"/>
                        <ul className='text-dark mt-2 card-list'>
                          <li><a href="#" className="color-dark">Habit Challenge</a></li>
                          <li><a href="#">Sleep Challenge</a></li>
                          <li><a href="#">Creative Challenge</a></li>
                        </ul>
                        <MDBNavLink
                          tag='button'
                          to='/CourseOverview'
                          className='btn btn-lg btn-outline-dark w-75 px-2 py-1 mt-2 ml-0 shadow-none d-flex align-items-center justify-content-center'
                        >
                          Learn More <MDBIcon icon='caret-right' className='ml-3' size='2x'></MDBIcon>
                        </MDBNavLink>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBAnimation>
                </MDBCol>

              <MDBCol md='6' xl='4' className='px-2'>
                <MDBAnimation reveal type='fadeInLeft'>
                  <MDBCard cascade className='my-2 px-2 py-2 border-dark rounded-3 hover-zoom d-flex flex-row align-items-center'>
                    <img
                      className="d-block m-2 card-icon"
                      src={cardIcon3}
                      alt="Icon 1"
                    />
                    <MDBCardBody cascade className='w-75 py-0 pl-3 pr-0 text-left dark-text'>
                      <MDBCardText className='m-0 text-dark font-weight-bold text-uppercase card-category'>
                        Champions Of Series
                      </MDBCardText>
                      <MDBCardTitle className="m-0 card-title--sm">
                        <i>World-Beaters At X</i>
                      </MDBCardTitle>
                      <hr className="w-25 mt-2 ml-0 mr-auto text-left border-danger"/>
                      <ul className='text-dark mt-2 card-list'>
                        <li><a href="#" className="color-dark">Msft CEO S. Nadella</a></li>
                        <li><a href="#">Amzn CEO J. Bezos</a></li>
                        <li><a href="#">Showrunner S. Rimes</a></li>
                      </ul>
                      <MDBNavLink
                        tag='button'
                        to='/CourseOverview'
                        className='btn btn-lg btn-outline-dark w-75 px-2 py-1 mt-2 ml-0 shadow-none d-flex align-items-center justify-content-center'
                      >
                        Learn More <MDBIcon icon='caret-right' className='ml-3' size='2x'></MDBIcon>
                      </MDBNavLink>
                    </MDBCardBody>
                  </MDBCard>
                </MDBAnimation>
              </MDBCol>

                <MDBCol md='6' xl='4' className='px-2'>
                  <MDBAnimation reveal type='fadeInLeft'>
                    <MDBCard cascade className='my-2 px-2 py-2 border-dark rounded-3 hover-zoom d-flex flex-row align-items-center'>
                      <img
                        className="d-block m-2 card-icon"
                        src={cardIcon2}
                        alt="Icon 1"
                      />
                      <MDBCardBody cascade className='w-75 py-0 pl-3 pr-0 text-left dark-text'>
                        <MDBCardText className='m-0 text-dark font-weight-bold text-uppercase card-category'>
                          Option <span className="text-danger">2x</span>
                        </MDBCardText>
                        <MDBCardTitle className="m-0 card-title--sm">
                          Channel_T
                        </MDBCardTitle>
                        <hr className="w-25 mt-2 ml-0 mr-auto text-left border-danger" />
                        <ul className='text-dark mt-2 card-list'>
                          <li><a href="#" className="color-dark">Trending</a></li>
                          <li><a href="#">Technical</a></li>
                          <li><a href="#">Toolset</a></li>
                        </ul>
                        <MDBNavLink
                          tag='button'
                          to='/CourseOverview'
                          className='btn btn-lg btn-outline-dark w-75 px-2 py-1 mt-2 ml-0 shadow-none d-flex align-items-center justify-content-center'
                        >
                          Learn More <MDBIcon icon='caret-right' className='ml-3' size='2x'></MDBIcon>
                        </MDBNavLink>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBAnimation>
                </MDBCol>


                <MDBCol md='6' xl='4' className='px-2'>
                  <MDBAnimation reveal type='fadeInLeft'>
                    <MDBCard cascade className='my-2 px-2 py-2 border-dark rounded-3 hover-zoom d-flex flex-row align-items-center'>
                      <img
                        className="d-block m-2 card-icon"
                        src={cardIcon1}
                        alt="Icon 1"
                      />
                      <MDBCardBody cascade className='w-75 py-0 pl-3 pr-0 text-left dark-text'>
                        <MDBCardText className='m-0 text-dark font-weight-bold text-uppercase card-category'>
                          <span className="text-danger">4XI</span>mprove
                        </MDBCardText>
                        <MDBCardTitle className="m-0 card-title--sm">
                          <i>Pod Process</i>
                        </MDBCardTitle>
                        <hr className="w-25 mt-2 ml-0 mr-auto text-left border-danger" />
                        <ul className='text-dark mt-2 card-list'>
                          <li><a href="#" className="color-dark">Infusion</a></li>
                          <li><a href="#">Implement</a></li>
                          <li><a href="#">Iteration</a></li>
                        </ul>
                        <MDBNavLink
                          tag='button'
                          to='/CourseOverview'
                          className='btn btn-lg btn-outline-dark w-75 px-2 py-1 mt-2 ml-0 shadow-none d-flex align-items-center justify-content-center'
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