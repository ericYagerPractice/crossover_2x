import React from 'react';
import {
    MDBIcon,
    MDBBtn,
    MDBSmoothScroll,
} from 'mdbreact';

function SectionScrollButton(props) {
  return(
    <MDBSmoothScroll to={props.scrollTo} className="section-scroll-button p-3">
      <MDBBtn color={props.color} className="p-4 m-0 w-100 font-weight-bold">
        {props.btnText} <MDBIcon icon={props.icon} /> 
      </MDBBtn>
    </MDBSmoothScroll>
  )
}

export default SectionScrollButton;