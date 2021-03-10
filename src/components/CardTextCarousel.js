import React from 'react';
import { 
    MDBContainer,
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBView
} from 'mdbreact';

export default function CardTextCarousel() { 
    return(
        <>
          <MDBContainer className="p-0">
            <MDBCarousel
              activeItem={1}
              length={4}
              showControls={false}
              showIndicators={false}
              className="card-text-carousel"
              fade="true"
              interval={1600}
            >
              <MDBCarouselInner>
                <MDBCarouselItem itemId="1">
                  <MDBView className="text-uppercase">
                    <span className="font-weight-bold">C</span>hannel
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="2">
                  <MDBView className="text-uppercase">
                    <span className="font-weight-bold">C</span>atalyze
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="3">
                  <MDBView className="text-uppercase">
                    <span className="font-weight-bold">C</span>onnect
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="4">
                  <MDBView className="text-uppercase">
                    <span className="font-weight-bold">C</span>hannel
                  </MDBView>
                </MDBCarouselItem>
              </MDBCarouselInner>
            </MDBCarousel>
          </MDBContainer>
        </>
    )
}