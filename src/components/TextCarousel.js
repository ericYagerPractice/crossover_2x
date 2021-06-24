import React, { useEffect, useState} from 'react'
import { 
    MDBContainer,
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBView
} from 'mdbreact';

function TextCarousel(props) {
  
  return(
    <MDBContainer className="p-0">
      <MDBCarousel
        activeItem={1}
        length={props.items}
        showControls={false}
        showIndicators={false}
        className="text-carousel"
        fade="true"
        interval={1600}
      >
        <MDBCarouselInner>
          {props.titles.map((title, i) => (
            <MDBCarouselItem itemId={i + 1} key={i}>
              <MDBView>
                <h3 className="animated-title m-0 d-flex justify-content-center align-items-center font-weight-bold px-5">
                  {title}
                </h3>
              </MDBView>
            </MDBCarouselItem>
          ))}
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}

export default TextCarousel;