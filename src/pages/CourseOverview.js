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
          <MDBRow className="py-5">
            <MDBCol>
              <MDBJumbotron fluid className="w-100 mw-100 p-0 shadow-none">
                <MDBCol className="text-dark text-center p-0 mx-auto">
                  <MDBCol className="py-0">
                    <MDBCardTitle className="p-0 m-3 font-weight-bold text-uppercase display-4">Course Overview Title</MDBCardTitle>
                    <p className="mx-5 my-3 text--lg">All of your essential course info is located below. Good Luck!</p>
                    <MDBSmoothScroll to="courseInfo">
                      <MDBBtn color="danger" className='mt-3 pt-4 pb-3 w-100 btn--lg'>
                        <h4 className='h4-responsive font-weight-bold'>Get Going<MDBIcon icon="arrow-circle-down ml-2" size="lg" /> </h4>
                      </MDBBtn>
                    </MDBSmoothScroll>
                  </MDBCol>
                </MDBCol>
              </MDBJumbotron>
            </MDBCol>
          </MDBRow>
          <hr className="w-75 border-dark mt-5" />
        </MDBContainer>

        <div id="separator"></div>
        
        <MDBContainer
          className='accordion md-accordion accordion-3 w-100 mw-100'
          id="courseInfo"
        >
          <h2 class='text-center text-uppercase font-weight-bold dark-text mt-4 py-4 px-3 display-4'>
            Course Info
          </h2>

          <hr class='mb-0' />

          <MDBCard className="border-dark border-left-0 border-right-0 border-bottom-0">
            <MDBCollapseHeader
              onClick={this.toggleCollapse('collapse1')}
              tag='h3'
              tagClassName='dark-text text-uppercase font-weight-bold py-3 d-flex justify-content-between align-items-center'
            >
              Step 1
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
                <MDBRow className="pb-3 w-100 mx-auto">
                  <MDBCol className="col-12 col-lg-4">
                    <MDBCard cascade className='mt-0 mb-3 p-4 border-dark rounded-0 d-flex flex-row align-items-center'>
                      <MDBCardBody cascade className='py-0 pl-3 pr-0 text-white text-left'>
                        <MDBCardText className='m-0 text-dark font-weight-bold text-uppercase card-category'>
                          Action 2
                        </MDBCardText>
                        <MDBCardTitle className="mt-2 mb-1 text-dark card-title--sm">
                          Title
                        </MDBCardTitle>
                        <hr className="w-25 my-0 ml-0 mr-auto text-left border-light"/>
                        <MDBCardText className='text-dark mt-2'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                  <MDBCol className="col-12 col-lg-4">
                    <MDBCard cascade className='mt-0 mb-3 p-4 border-dark rounded-0 d-flex flex-row align-items-center'>
                      <MDBCardBody cascade className='py-0 pl-3 pr-0 text-white text-left'>
                        <MDBCardText className='m-0 text-dark font-weight-bold text-uppercase card-category'>
                          Action 2
                        </MDBCardText>
                        <MDBCardTitle className="mt-2 mb-1 text-dark card-title--sm">
                          Title
                        </MDBCardTitle>
                        <hr className="w-25 my-0 ml-0 mr-auto text-left border-light"/>
                        <MDBCardText className='text-dark mt-2'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul className="mt-3">
                  <li><a href="/CourseOverview" className="text-danger">Plan of Attack (PDF)</a></li>
                  <li><a href="/CourseOverview" className="text-danger">Best Practices for X (PPT)</a></li>
                  <li><a href="/CourseOverview" className="text-danger">Workflowy Link</a></li>
                  <li><a href="/CourseOverview" className="text-danger">Survey Link</a></li>
                  <li><a href="/CourseOverview" className="text-danger">Video Link</a></li>
                </ul>
                <MDBBtn color="danger" className='mt-3 pt-4 pb-3 w-100 btn--lg'>
                  <h4 className='h4-responsive font-weight-bold'>Finish Step 1<MDBIcon icon="caret-right ml-3" size="lg" /> </h4>
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
              Step 2
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
                  <h4 className='h4-responsive font-weight-bold'>Finish Step 2<MDBIcon icon="caret-right ml-3" size="lg" /> </h4>
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
              Step 3
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
                  <h4 className='h4-responsive font-weight-bold'>Finish Step 3<MDBIcon icon="caret-right ml-3" size="lg" /> </h4>
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
              Step 4
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
                  <h4 className='h4-responsive font-weight-bold'>Finish POD<MDBIcon icon="caret-right ml-3" size="lg" /> </h4>
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
