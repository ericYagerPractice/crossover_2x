import React from 'react';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBJumbotron,
  MDBBtn,
  MDBSmoothScroll,
  MDBCollapse,
  MDBCard,
  MDBCardTitle,
  MDBCardBody,
  MDBCardText,
  MDBCollapseHeader,
  MDBIcon,
} from 'mdbreact';

class CourseOverview extends React.Component {
  scrollToTop = () => window.scrollTo(0, 0);
  state = {
    buttonStyle: {
      width: "100%"
    },
    collapseID: ''
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
    collapseID: prevState.collapseID !== collapseID ? collapseID : ''
  }));

  render() {
    return (
      <>
        <MDBContainer className="w-100 mw-100 pt-5">
          <MDBRow className="py-0 px-0">
            <MDBCol>
              <MDBJumbotron fluid className="w-100 p-0 mx-auto my-0 shadow-none course-info-intro">
                <MDBRow className="py-0 px-lg-4 mx-auto d-flex justify-content-center align-items-center flex-column flex-md-row">
                  <MDBCol className="col-lg-6 text-dark text-left px-4 px-md-5 py-4 py-md-5 mx-0">
                    <h1 className="p-0 m-0 font-weight-bold text-uppercase">Overview Title</h1>
                    <p className="mt-3">Join Professor Clay Crocker for lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, sed do eiusmod tempor.</p>
                    <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, sed do eiusmod tempor.</p>
                  </MDBCol>
                  <MDBCol className="col-lg-6 text-dark text-left px-4 px-md-5 py-4 py-md-5 mx-0">
                    <h3 className="font-weight-bold">POD Details</h3>
                    <hr className="w-25 border-dark my-2 ml-0" />
                    <ul className="course-info-intro-list">
                      <li><span className="text-uppercase">Length:</span> 1 Week</li>
                      <li><span className="text-uppercase">Dates:</span> 3/10/21 - 3/17/21</li>
                      <li><span className="text-uppercase">Cost:</span> $100</li>
                    </ul>
                    <h4 className="mt-4 font-weight-bold">4x_POD Cycle</h4>
                    <hr className="w-25 border-dark my-2 ml-0" />
                    <ul className="course-info-intro-list">
                      <li>C_Pod (Slack Channel)</li>
                      <li>P_Pod (Workflowy Primer)</li>
                      <li>T_Pod (Zoom Session)</li>
                      <li>S_Pod (Sim./Shipping Options)</li>
                    </ul>
                    <MDBSmoothScroll className="px-0" to="courseInfo">
                      <MDBBtn color="danger" className='mt-3 mx-0 px-0 pt-4 pb-3 w-100 btn--lg'>
                        <h4 className='h4-responsive font-weight-bold'>Buy In<MDBIcon icon="arrow-circle-down ml-2" size="lg" /> </h4>
                      </MDBBtn>
                    </MDBSmoothScroll>
                  </MDBCol>
                </MDBRow>
              </MDBJumbotron>
            </MDBCol>
          </MDBRow>
          <hr className="w-75 border-dark" />
        </MDBContainer>

        <div id="separator"></div>
        
        <MDBContainer
          className='accordion md-accordion accordion-3 w-100 mw-100'
          id="courseInfo"
        >
          <h2 class='text-center text-uppercase font-weight-bold dark-text mt-4 py-4 px-3 display-4'>
            4x_POD Cycle
          </h2>

          <hr class='mb-0' />

          <MDBCard className="border-dark border-left-0 border-right-0 border-bottom-0">
            <MDBCollapseHeader
              onClick={this.toggleCollapse('collapse1')}
              tag='h3'
              tagClassName='dark-text text-uppercase font-weight-bold py-3 d-flex justify-content-between align-items-center'
            >
              C_Pod (Slack Channel)
              <MDBIcon
                icon={
                  this.state.collapseID === 'collapse1'
                    ? 'times'
                    : 'plus'
                }
                className='dark-text'
                size='lg'
              />
            </MDBCollapseHeader>
            <MDBCollapse id='collapse1' isOpen={this.state.collapseID}>
              <MDBCardBody className='pt-0'>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul className="mt-3">
                  <li><a href="/CourseOverview" className="text-danger">PDF/Resource/Instructions Link</a></li>
                  <li><a href="/CourseOverview" className="text-danger">PDF/Resource/Instructions Link</a></li>
                  <li><a href="/CourseOverview" className="text-danger">PDF/Resource/Instructions Link</a></li>
                  <li><a href="/CourseOverview" className="text-danger">PDF/Resource/Instructions Link</a></li>
                  <li><a href="/CourseOverview" className="text-danger">PDF/Resource/Instructions Link</a></li>
                </ul>
                <MDBBtn color="danger" className='mt-3 pt-4 pb-3 w-100 btn--lg'>
                  <h4 className='h4-responsive font-weight-bold'>CTA 1<MDBIcon icon="caret-right ml-3" size="lg" /> </h4>
                </MDBBtn>
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>
          
          <MDBCard className="border-dark border-left-0 border-right-0 border-bottom-0">
            <MDBCollapseHeader
              onClick={this.toggleCollapse('collapse2')}
              tag='h3'
              tagClassName='dark-text text-uppercase font-weight-bold py-3 d-flex justify-content-between align-items-center'
            >
              P_Pod (Workflowy Primer)
              <MDBIcon
                icon={
                  this.state.collapseID === 'collapse2'
                    ? 'times'
                    : 'plus'
                }
                className='dark-text'
                size='lg'
              />
            </MDBCollapseHeader>
            <MDBCollapse id='collapse2' isOpen={this.state.collapseID}>
              <MDBCardBody className='pt-0'>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul>
                  <li><a href="/CourseOverview" className="text-danger">PDF/Resource/Instructions Link</a></li>
                  <li><a href="/CourseOverview" className="text-danger">PDF/Resource/Instructions Link</a></li>
                  <li><a href="/CourseOverview" className="text-danger">PDF/Resource/Instructions Link</a></li>
                  <li><a href="/CourseOverview" className="text-danger">PDF/Resource/Instructions Link</a></li>
                </ul>
                <MDBBtn color="danger" className='mt-3 pt-4 pb-3 w-100 btn--lg'>
                  <h4 className='h4-responsive font-weight-bold'>CTA 2<MDBIcon icon="caret-right ml-3" size="lg" /> </h4>
                </MDBBtn>
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>
          
          <MDBCard className="border-dark border-left-0 border-right-0 border-bottom-0">
            <MDBCollapseHeader
              onClick={this.toggleCollapse('collapse3')}
              tag='h3'
              tagClassName='dark-text text-uppercase font-weight-bold py-3 d-flex justify-content-between align-items-center'
            >
              T_Pod (Zoom Session)
              <MDBIcon
                icon={
                  this.state.collapseID === 'collapse3'
                    ? 'times'
                    : 'plus'
                }
                className='dark-text'
                size='lg'
              />
            </MDBCollapseHeader>
            <MDBCollapse id='collapse3' isOpen={this.state.collapseID}>
              <MDBCardBody className='pt-0'>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul>
                  <li><a href="/CourseOverview" className="text-danger">PDF/Resource/Instructions Link</a></li>
                  <li><a href="/CourseOverview" className="text-danger">PDF/Resource/Instructions Link</a></li>
                  <li><a href="/CourseOverview" className="text-danger">PDF/Resource/Instructions Link</a></li>
                  <li><a href="/CourseOverview" className="text-danger">PDF/Resource/Instructions Link</a></li>
                </ul>
                <MDBBtn color="danger" className='mt-3 pt-4 pb-3 w-100 btn--lg'>
                  <h4 className='h4-responsive font-weight-bold'>CTA 3<MDBIcon icon="caret-right ml-3" size="lg" /> </h4>
                </MDBBtn>
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>
          
          <MDBCard className="border-dark border-left-0 border-right-0">
            <MDBCollapseHeader
              onClick={this.toggleCollapse('collapse4')}
              tag='h3'
              tagClassName='dark-text text-uppercase font-weight-bold py-3 d-flex justify-content-between align-items-center'
            >
              S_Pod (Sim./Shipping Options)
              <MDBIcon
                icon={
                  this.state.collapseID === 'collapse4'
                    ? 'times'
                    : 'plus'
                }
                className='dark-text'
                size='lg'
              />
            </MDBCollapseHeader>
            <MDBCollapse id='collapse4' isOpen={this.state.collapseID}>
              <MDBCardBody className='pt-0'>
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul>
                  <li><a href="/CourseOverview" className="text-danger">PDF/Resource/Instructions Link</a></li>
                  <li><a href="/CourseOverview" className="text-danger">PDF/Resource/Instructions Link</a></li>
                  <li><a href="/CourseOverview" className="text-danger">PDF/Resource/Instructions Link</a></li>
                  <li><a href="/CourseOverview" className="text-danger">PDF/Resource/Instructions Link</a></li>
                </ul>
                <MDBBtn color="danger" className='mt-3 pt-4 pb-3 w-100 btn--lg'>
                  <h4 className='h4-responsive font-weight-bold'>CTA 4<MDBIcon icon="caret-right ml-3" size="lg" /> </h4>
                </MDBBtn>
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>
        </MDBContainer>
      </>
    );
  }
}

export default CourseOverview;
