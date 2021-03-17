import React from 'react';
import { 
    MDBContainer,
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBView
} from 'mdbreact';

export default function CardTextCarouselP() { 
    return(
        <>
          <MDBContainer className="p-0">
            <MDBCarousel
              activeItem={1}
              length={11}
              showControls={false}
              showIndicators={false}
              className="card-text-carousel"
              fade="true"
              interval={1600}
            >
              <MDBCarouselInner>
                <MDBCarouselItem itemId="1">
                  <MDBView>
                    <h3>Pod<br /> Portal</h3>
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="2">
                  <MDBView>
                    <h3>Pivot<br /> Points</h3>
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="3">
                  <MDBView>
                    <h3>Program<br /> Activation</h3>
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="4">
                  <MDBView>
                    <h3>Plan of<br /> Attack</h3>
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="5">
                  <MDBView>
                    <h3>Priming<br /> The Pump</h3>
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="6">
                  <MDBView>
                    <h3>Process in<br /> Workflowy</h3>
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="7">
                  <MDBView>
                    <h3>Points of<br /> Emphasis</h3>
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="8">
                  <MDBView>
                    <h3>Perform<br /> On Demand</h3>
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="9">
                  <MDBView>
                    <h3>Points Of<br /> Emphasis</h3>
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="10">
                  <MDBView>
                    <h3>Passion<br /> Filtering</h3>
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="11">
                  <MDBView>
                    <h3>Program<br /> Ramp Up</h3>
                  </MDBView>
                </MDBCarouselItem>
              </MDBCarouselInner>
            </MDBCarousel>
          </MDBContainer>
        </>
    )
}