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

function CustomerQuote(props) {
  return(
    <>
    <MDBContainer className="customer-quote bg-dark mt-5 w-100 p-4 p-lg-5">
      <MDBRow className="p-0">
        <MDBCol className="p-0 text-center text-white d-flex align-items-center justify-content-center flex-column">
          <h2>
            <MDBIcon icon="quote-left mr-2"/> 
            {props.quoteText}
            <MDBIcon icon="quote-right ml-2" fontSize="small" />
          </h2>
          <p className="font-weight-normal">
            - {props.quoteAuthor}.
          </p>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </>
  )
}

export default CustomerQuote;