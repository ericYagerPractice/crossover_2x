import React from 'react';
import {
  MDBEdgeHeader,
  MDBFreeBird,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBCardBody,
  MDBIcon,
  MDBCard,
  MDBCardTitle,
  MDBCardImage,
  MDBCardText,
  MDBAnimation,
  MDBNavLink,
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

class HomePage extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);
  state = {
    buttonStyle: {
      width: "100%"
    }
  }

  render() {
    return (
      <>
        <MDBEdgeHeader color='elegant-color darken-3' className='sectionPage sectionPage--home' />
        <div className='my-0 mx-auto'>
          <MDBFreeBird>
            <MDBRow>
              <MDBCol
                md='8'
                className='mx-auto float-none white z-depth-1 py-4 px-2'
              >
                <MDBCardBody className='text-center'>
                  <h1 className='h2-responsive mb-2'>
                    <FadeInDiv>
                      <strong className='font-weight-bold text-uppercase'>
                        Are You Ready To Level Up?
                      </strong>
                    </FadeInDiv>
                  </h1>
                  <MDBRow />
                  <hr />
                  <h2 className='text-uppercase mt-4 font-weight-bold text-danger'>
                    Crossover To
                  </h2>
                  <h3 className='mt-1 text-uppercase font-weight-bold intro-title-fade'>
                    MEDIA  
                  </h3>
                  <MDBSmoothScroll to="howDoesItWork">
                    <MDBBtn color="danger" className='w-50 mt-3 pt-4 pb-3'>
                      <h4 className='font-weight-bold'>Learn More <MDBIcon icon="angle-double-down" /> </h4>
                    </MDBBtn>
                  </MDBSmoothScroll>
                </MDBCardBody>   
              </MDBCol>
            </MDBRow>
          </MDBFreeBird>
          
          <div id="separator"></div>
          
          <MDBContainer>
            <MDBRow>
              <MDBCol md='8' className='mt-4 px-2 mx-auto' id="howDoesItWork">
                <h2 className='pt-5 text-center text-uppercase font-weight-bold'>
                  How does C2X work?
                </h2>
                <p className='text-center mt-3 mx-auto font-weight-bolder'>
                  Crossover Project (CP) is an online & onsite educational platform created by serial entrepreneur & Professor Clay Crocker & Pro Bowl RB Latavius Murray to help high performing athletes repurpose their talents into the modern marketplace. We offer a range of services from 1:1 Coaching to hands-on Workshops & everything in between.
                </p>
                <p className='text-center mt-3 mx-auto font-weight-bolder'>
                  Our patented CP-360X method is a cutting edge approach to learning, offering maximum flexibility & optionality, and with a lot of meat on the bone. We inspire clients to be proactive in planning for life after ball.
                </p>
                <hr className='my-5' />
                <MDBCol md='8' className='elegant-color py-5 px-5 mt-4 mx-auto'>
                  <h2 className='pt-1 text-white text-center text-uppercase font-weight-bold'>
                  ***SLIDESHOW #1 GOES HERE***
                  </h2>
                </MDBCol>
                <MDBSmoothScroll className='mt-4 mx-auto w-50' to="categories">
                  <MDBBtn color="danger" className='w-100 pt-4 pb-3 mx-auto'>
                    <h4 className='font-weight-bold'>Get Started! <MDBIcon icon="angle-double-down" /> </h4>
                  </MDBBtn>
                </MDBSmoothScroll>
                
                <div id="separator"></div>
                
                <MDBRow id='categories'>
                  <MDBCol md='4'>
                    <MDBAnimation reveal type='fadeInLeft'>
                      <MDBCard cascade className='my-3 grey lighten-4'>
                        <MDBCardImage
                          cascade
                          className='img-fluid'
                          src='https://mdbootstrap.com/wp-content/uploads/2016/08/mdb.jpg'
                        />
                        <MDBCardBody cascade className='text-center'>
                          <MDBCardTitle>
                            <MDBIcon
                              icon='css3'
                              brand
                              className='pink-text pr-2'
                            />
                            <strong>CSS</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                            Animations, colours, shadows, skins and many more!
                            Get to know all our css styles in one place.
                          </MDBCardText>
                          <MDBNavLink
                            tag='button'
                            to='/css'
                            color='mdb-color'
                            className='btn btn-outline-mdb-color btn-sm btn-rounded d-inline'
                            onClick={this.scrollToTop}
                          >
                            More
                          </MDBNavLink>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                  
                  <MDBCol md='4'>
                    <MDBAnimation reveal type='fadeInDown'>
                      <MDBCard cascade className='my-3 grey lighten-4'>
                        <MDBCardImage
                          cascade
                          className='img-fluid'
                          src='https://mdbootstrap.com/img/Marketing/mdb-press-pack/mdb-main.jpg'
                        />
                        <MDBCardBody cascade className='text-center'>
                          <MDBCardTitle>
                            <MDBIcon icon='cubes' className='blue-text pr-2' />
                            <strong>COMPONENTS</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                            Ready-to-use components that you can use in your
                            applications. Both basic and extended versions!
                          </MDBCardText>
                          <MDBNavLink
                            tag='button'
                            to='/components'
                            color='mdb-color'
                            className='btn btn-outline-mdb-color btn-sm btn-rounded d-inline'
                            onClick={this.scrollToTop}
                          >
                            More
                          </MDBNavLink>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                  <MDBCol md='4'>
                    <MDBAnimation reveal type='fadeInRight'>
                      <MDBCard cascade className='my-3 grey lighten-4'>
                        <MDBCardImage
                          cascade
                          className='img-fluid'
                          src='https://mdbootstrap.com/wp-content/uploads/2018/11/mdb-jquery-free.jpg'
                        />
                        <MDBCardBody cascade className='text-center'>
                          <MDBCardTitle>
                            <MDBIcon icon='code' className='green-text pr-2' />
                            <strong>ADVANCED</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                            Advanced components such as charts, carousels,
                            tooltips and popovers. All in Material Design
                            version.
                          </MDBCardText>

                          <MDBNavLink
                            tag='button'
                            to='/advanced'
                            color='mdb-color'
                            className='btn btn-outline-mdb-color btn-sm btn-rounded d-inline'
                            onClick={this.scrollToTop}
                          >
                            More
                          </MDBNavLink>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                </MDBRow>

                <MDBRow id='categories'>
                  <MDBCol md='4'>
                    <MDBAnimation reveal type='fadeInLeft'>
                      <MDBCard cascade className='my-3 grey lighten-4'>
                        <MDBCardImage
                          cascade
                          className='img-fluid'
                          src='https://mdbootstrap.com/wp-content/uploads/2017/06/navigation-1.jpg'
                        />
                        <MDBCardBody cascade className='text-center'>
                          <MDBCardTitle>
                            <MDBIcon icon='bars' className='pink-text pr-2' />
                            <strong>NAVIGATION</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                            Ready-to-use navigation layouts, navbars,
                            breadcrumbs and much more! More about our navigation
                            components.
                          </MDBCardText>

                          <MDBNavLink
                            tag='button'
                            to='/navigation'
                            color='mdb-color'
                            className='btn btn-outline-mdb-color btn-sm btn-rounded d-inline'
                            onClick={this.scrollToTop}
                          >
                            More
                          </MDBNavLink>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                  <MDBCol md='4'>
                    <MDBAnimation reveal type='fadeIn'>
                      <MDBCard cascade className='my-3 grey lighten-4'>
                        <MDBCardImage
                          cascade
                          className='img-fluid'
                          src='https://mdbootstrap.com/wp-content/uploads/2015/08/forms.jpg'
                        />
                        <MDBCardBody cascade className='text-center'>
                          <MDBCardTitle>
                            <MDBIcon icon='edit' className='blue-text pr-2' />
                            <strong>FORMS</strong>
                          </MDBCardTitle>
                          <MDBCardText className='mb-4 pb-3'>
                            Inputselecst, date and time pickers. Everything in
                            one place is ready to use!
                          </MDBCardText>

                          <MDBNavLink
                            tag='button'
                            to='/forms'
                            color='mdb-color'
                            className='btn btn-outline-mdb-color btn-sm btn-rounded d-inline'
                            onClick={this.scrollToTop}
                          >
                            More
                          </MDBNavLink>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                  <MDBCol md='4'>
                    <MDBAnimation reveal type='fadeInRight'>
                      <MDBCard cascade className='my-3 grey lighten-4'>
                        <MDBCardImage
                          cascade
                          className='img-fluid'
                          src='https://mdbootstrap.com/wp-content/uploads/2015/08/table-fb.jpg'
                        />
                        <MDBCardBody cascade className='text-center'>
                          <MDBCardTitle>
                            <MDBIcon icon='table' className='green-text pr-2' />
                            <strong>TABLES</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                            Basic and advanced tables. Responsive, datatables,
                            with sorting, searching and export to csv.
                          </MDBCardText>

                          <MDBNavLink
                            tag='button'
                            to='/tables'
                            color='mdb-color'
                            className='btn btn-outline-mdb-color btn-sm btn-rounded d-inline'
                            onClick={this.scrollToTop}
                          >
                            More
                          </MDBNavLink>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                </MDBRow>

                <MDBRow id='categories'>
                  <MDBCol md='4'>
                    <MDBAnimation reveal type='fadeInLeft'>
                      <MDBCard cascade className='my-3 grey lighten-4'>
                        <MDBCardImage
                          cascade
                          className='img-fluid'
                          src='https://mdbootstrap.com/wp-content/uploads/2018/02/modal-new.jpg'
                        />
                        <MDBCardBody cascade className='text-center'>
                          <MDBCardTitle>
                            <MDBIcon
                              icon='window-restore'
                              far
                              className='pink-text pr-2'
                            />
                            <strong>MODALS</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                            Modals used to display advanced messages to the
                            user. Cookies, logging in, registration and much
                            more.
                          </MDBCardText>

                          <MDBNavLink
                            tag='button'
                            to='/modals'
                            color='mdb-color'
                            className='btn btn-outline-mdb-color btn-sm btn-rounded d-inline'
                            onClick={this.scrollToTop}
                          >
                            More
                          </MDBNavLink>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                  <MDBCol md='4'>
                    <MDBAnimation reveal type='fadeInUp'>
                      <MDBCard cascade className='my-3 grey lighten-4'>
                        <MDBCardImage
                          cascade
                          className='img-fluid'
                          src='https://mdbootstrap.com/img/Marketing/docs/social/main-addons.jpg'
                        />
                        <MDBCardBody cascade className='text-center'>
                          <MDBCardTitle>
                            <MDBIcon
                              icon='arrows-alt'
                              className='blue-text pr-2'
                            />
                            <strong>PLUGINS & ADDONS</strong>
                          </MDBCardTitle>
                          <MDBCardText>
                            Google Maps, Social Buttons, Pre-built Contact Forms
                            and Steppers. Find out more about our extended
                            components.
                          </MDBCardText>

                          <MDBNavLink
                            tag='button'
                            to='/addons'
                            color='mdb-color'
                            className='btn btn-outline-mdb-color btn-sm btn-rounded d-inline'
                            onClick={this.scrollToTop}
                          >
                            More
                          </MDBNavLink>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                  {/* PRO-START */}
                  <MDBCol md='4'>
                    <MDBAnimation reveal type='fadeInRight'>
                      <MDBCard cascade className='my-3 grey lighten-4'>
                        <MDBCardImage
                          cascade
                          className='img-fluid'
                          src='https://mdbootstrap.com/wp-content/uploads/2015/08/table-fb.jpg'
                        />
                        <MDBCardBody cascade className='text-center'>
                          <MDBCardTitle>
                            <MDBIcon icon='th' className='green-text pr-2' />
                            <strong>SECTIONS</strong>
                          </MDBCardTitle>
                          <MDBCardText className='mb-4 pb-3'>
                            E-commerce, contact, blog and much more sections.
                            All ready to use in seconds.
                          </MDBCardText>

                          <MDBNavLink
                            tag='button'
                            to='/sections'
                            color='mdb-color'
                            className='btn btn-outline-mdb-color btn-sm btn-rounded d-inline'
                            onClick={this.scrollToTop}
                          >
                            More
                          </MDBNavLink>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBAnimation>
                  </MDBCol>
                  {/* PRO-END */}
                </MDBRow>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </>
    );
  }
}

export default HomePage;
