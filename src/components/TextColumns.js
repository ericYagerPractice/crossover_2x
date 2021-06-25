import React from 'react';
import CustomerQuote from '../components/CustomerQuote';
import { 
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBBtn,
    MDBSmoothScroll,
} from 'mdbreact';

import './TextColumns.css';

class TextColumns extends React.Component {
  render() {
    
    const styles = {
      container: {
      }
    }
    
    return(
      <>
      <MDBContainer id='moreC2x' className='text-columns pt-5 w-100 mw-100' style={styles.container}>
        <MDBRow>
          <MDBCol md='12' className='mx-auto'>
            <MDBRow>
              <MDBCol md='8' className='mx-auto px-4'>
                <h2 className='section-title m-0 text-center text-uppercase display-5'>
                  A Masterclass<br/> for Your Next Move
                </h2>
              </MDBCol>
            </MDBRow>
            <MDBRow className='mt-4 mt-lg-5'>
              <MDBCol lg='4' className='text-center mx-auto mt-3 mt-lg-0'>
                <i className="fas fa-podcast fa-4x"></i>
                <h3 className='mt-3 text-center text-uppercase'>
                  Podcasting
                </h3>
                <hr className="w-25 border-danger" />
                <p className="text-center px-3">Now's the time to Start your Podcast. Get Best Practices for Riding a Wave. Study the Greats & ‘Steal Like Artists’. Workshop Material & Format. ACE your Voice: Authentic, Confident, Expressive.</p>
                <p className="text-center px-3 mt-1">Now, Ship your Pilot Episode. <span className="text-danger">C2</span>P</p>
              </MDBCol>
              <MDBCol lg='4' className='text-center mx-auto mt-3 mt-lg-0'>
                <i className="fas fa-microphone-alt fa-4x"></i>
                <h3 className='mt-3 text-center text-uppercase'>
                  Ted Talk
                </h3>
                <hr className="w-25 border-danger" />
                <p className="text-center px-3">Get the Playbook to ‘Talk Like Ted’. Use Ikigai to find Ideas Worth Spreading. Practice 4EX Speech & Do Madman &gt; Architect &gt; Carpenter &gt; Judge Process. Write to Engage. Talk how you talk.</p> 
                <p className="text-center px-3 mt-1">Now, Write your damn Talk. <span className="text-danger">C2</span>T</p>
              </MDBCol>
              <MDBCol lg='4' className='text-center mx-auto mt-3 mt-lg-0'>
                <i className="far fa-lightbulb fa-4x"></i>
                <h3 className='mt-3 text-center text-uppercase'>
                  Shark Tank
                </h3>
                <hr className="w-25 border-danger" />
                <p className="text-center px-3">The Ultimate Idea to Action Sprint. Grab & Go from our Idea Menu or BYOI. Do an Anger Cleanse, Design your MVP. Vet 4Ps: Pain, Passion, Profit, Purpose. Elevate your Pitch w/ Shark Bracket 64.</p>
                <p className="text-center px-3 mt-1">Now, Apply & Get to the Tank. <span className="text-danger">C2</span>ST</p>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <CustomerQuote />  
            </MDBRow>
            <MDBRow>
              <MDBCol md='4' className='mx-auto'>
                <MDBSmoothScroll className='mt-4 mx-auto text-center' to="categories">
                  <MDBBtn color="danger" className='mt-1 pt-4 pb-3 w-100 btn--lg' to="categories">
                    <h4 className='h4-responsive font-weight-bold'>
                      Our Process <MDBIcon icon="arrow-circle-down" /> 
                    </h4>
                  </MDBBtn>
                </MDBSmoothScroll>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      </>
    )
  }
}

export default TextColumns;