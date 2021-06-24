import React from 'react';
import { 
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBBtn,
    MDBSmoothScroll,
} from 'mdbreact';

import './CustomerQuote.css';

class CustomerQuote extends React.Component {
  render() {
    
    const styles = {
      container: {
        color: '#00e5ff',
      }
    }
    
    return(
      <>
      <MDBContainer className="customer-quote customer-quote--dark mt-5 w-100 mw-100 p-4 p-lg-5 sprint-overview-quote">
        <MDBRow className="p-0">
          <MDBCol className="p-0 text-center text-white d-flex align-items-center justify-content-center flex-column">
            <h2>"C2X was an amazing learning experience and really helped me level up my skill set."</h2>
            <p>- Quote Name, Recent MBA Grad.</p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      </>
    )
  }
}

export default CustomerQuote;