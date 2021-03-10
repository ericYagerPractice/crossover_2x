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
                  <MDBView>
                    Channel
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="2">
                  <MDBView>
                    Catalyze
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="3">
                  <MDBView>
                    Connect
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="4">
                  <MDBView>
                    Channel
                  </MDBView>
                </MDBCarouselItem>
              </MDBCarouselInner>
            </MDBCarousel>
          </MDBContainer>
        </>
    )
}