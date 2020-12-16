import React, { Component } from 'react';
import {
  MDBContainer,
  MDBCollapse,
  MDBCard,
  MDBCardBody,
  MDBCollapseHeader,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBEdgeHeader,
  MDBAnimation,
  MDBJumbotron,
} from 'mdbreact';
import SectionContainer from '../components/sectionContainer';

class About extends Component {
  state = {
    collapseID: 'collapse3'
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ''
    }));

  render() {
    const { collapseID } = this.state;
    const resetPadding = {
      padding: '0'
    };
    return (
      <>
      <MDBEdgeHeader color='elegant-color darken-3' className='sectionPage sectionPage--about' />
        <MDBAnimation type='zoomIn' duration='500ms'>
          <MDBContainer>
            <MDBRow>
              <MDBCol md='8' className='mx-auto'>
                  <MDBJumbotron className='mt-3'>
                    
                    <SectionContainer header='About Us'>
                      <MDBCard
                        className='card-image'
                        style={{
                          backgroundImage: 'url(https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg)'
                        }}
                      >
                        <div className='rgba-black-strong py-5 px-4'>
                          <MDBRow className='d-flex justify-content-center'>
                            <MDBCol md='10' xl='8'>
                              <MDBContainer className='accordion md-accordion accordion-5' style={{ resetPadding }}>
                                <MDBCard className='mb-4'>
                                  <MDBCollapseHeader
                                    onClick={this.toggleCollapse('collapse1')}
                                    className='p-0 z-depth-1'
                                    tag='h4'
                                    tagClassName='white-text mb-0 d-flex justify-content-start align-items-center'
                                  >
                                    <div
                                      className='d-flex justify-content-center align-items-center mr-4'
                                      style={{ backgroundColor: '#fff', minWidth: '100px' }}
                                    >
                                      <MDBIcon icon='user-circle' size='2x' className='m-3 black-text' />
                                    </div>
                                    Who are we?
                                  </MDBCollapseHeader>

                                  <MDBCollapse id='collapse1' isOpen={collapseID}>
                                    <MDBCardBody className='rgba-black-light white-text z-depth-1'>
                                      <p className='p-md-4 mb-0'>
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson
                                        ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck
                                        quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on
                                        it squid single-origin coffee nulla assumenda shoreditch et.
                                      </p>
                                    </MDBCardBody>
                                  </MDBCollapse>
                                </MDBCard>

                                <MDBCard className='mb-4'>
                                  <MDBCollapseHeader
                                    onClick={this.toggleCollapse('collapse18')}
                                    className='p-0 z-depth-1'
                                    tag='h4'
                                    tagClassName='white-text mb-0 d-flex justify-content-start align-items-center'
                                  >
                                    <div
                                      className='d-flex justify-content-center align-items-center mr-4'
                                      style={{ backgroundColor: '#fff', minWidth: '100px' }}
                                    >
                                      <MDBIcon icon='question-circle' size='2x' className='m-3 black-text' />
                                    </div>
                                    What is Couch to Developer?
                                  </MDBCollapseHeader>

                                  <MDBCollapse id='collapse18' isOpen={collapseID}>
                                    <MDBCardBody className='rgba-black-light white-text z-depth-1'>
                                      <p className='p-md-4 mb-0'>
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson
                                        ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck
                                        quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on
                                        it squid single-origin coffee nulla assumenda shoreditch et.
                                      </p>
                                    </MDBCardBody>
                                  </MDBCollapse>
                                </MDBCard>

                                <MDBCard className='mb-4'>
                                  <MDBCollapseHeader
                                    onClick={this.toggleCollapse('collapse19')}
                                    className='p-0 z-depth-1'
                                    tag='h4'
                                    tagClassName='white-text mb-0 d-flex justify-content-start align-items-center'
                                  >
                                    <div
                                      className='d-flex justify-content-center align-items-center mr-4'
                                      style={{ backgroundColor: '#fff', minWidth: '100px' }}
                                    >
                                      <MDBIcon icon='grin-alt' size='2x' className='m-3 black-text' />
                                    </div>
                                    Why should you care?
                                  </MDBCollapseHeader>

                                  <MDBCollapse id='collapse19' isOpen={collapseID}>
                                    <MDBCardBody className='rgba-black-light white-text z-depth-1'>
                                      <p className='p-md-4 mb-0'>
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson
                                        ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck
                                        quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on
                                        it squid single-origin coffee nulla assumenda shoreditch et.
                                      </p>
                                    </MDBCardBody>
                                  </MDBCollapse>
                                </MDBCard>
                              </MDBContainer>
                            </MDBCol>
                          </MDBRow>
                        </div>
                      </MDBCard>
                    </SectionContainer>
                  </MDBJumbotron>
              </MDBCol>
            </MDBRow> 
          </MDBContainer>
        </MDBAnimation>
      </>
    );
  }
}

export default About;
