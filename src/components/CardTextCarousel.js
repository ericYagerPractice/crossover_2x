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
                    <h3 className="font-weight-bold">C2X<br /> Menu</h3>
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="2">
                  <MDBView>
                    <h3 className="font-weight-bold">Check<br /> Points</h3>
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="3">
                  <MDBView>
                    <h3 className="font-weight-bold">Course<br /> Module</h3>
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="4">
                  <MDBView>
                    <h3 className="font-weight-bold">Champion<br /> Of X</h3>
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="5">
                  <MDBView>
                    <h3 className="font-weight-bold">Curated<br /> Bundles</h3>
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="6">
                  <MDBView>
                    <h3 className="font-weight-bold">Channel<br/> On Slack</h3>
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="7">
                  <MDBView>
                    <h3 className="font-weight-bold">Context<br /> Cards</h3>
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="8">
                  <MDBView>
                    <h3 className="font-weight-bold">Choose<br />Content</h3>
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="9">
                  <MDBView>
                    <h3 className="font-weight-bold">Crossover<br /> X, 2X, 4X</h3>
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="10">
                  <MDBView>
                    <h3 className="font-weight-bold">Content<br /> Funnel</h3>
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="11">
                  <MDBView>
                    <h3 className="font-weight-bold">Cohort<br /> Selection</h3>
                  </MDBView>
                </MDBCarouselItem>
              </MDBCarouselInner>
            </MDBCarousel>
          </MDBContainer>
        </>
    )
}