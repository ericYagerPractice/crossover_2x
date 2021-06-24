import React from 'react';
import { 
    MDBContainer,
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBView
} from 'mdbreact';

export default function CardTextCarouselT() { 
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
                    <h3 className="font-weight-bold">Zoom<br /> Training</h3>
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="2">
                  <MDBView>
                    <h3 className="font-weight-bold">Touch<br /> Points</h3>
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="3">
                  <MDBView>
                    <h3 className="font-weight-bold">Technical<br /> Application</h3>
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="4">
                  <MDBView>
                    <h3 className="font-weight-bold">Train &<br /> Track</h3>
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="5">
                  <MDBView>
                    <h3 className="font-weight-bold">Trending<br />Topics</h3>
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="6">
                  <MDBView>
                    <h3 className="font-weight-bold">Tool<br /> Lens</h3>
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="7">
                  <MDBView>
                    <h3 className="font-weight-bold">Toolsets<br /> In Focus</h3>
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="8">
                  <MDBView>
                    <h3 className="font-weight-bold">Tap Ur<br /> Talent</h3>
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="9">
                  <MDBView>
                    <h3 className="font-weight-bold">Topics<br /> In Focus</h3>
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="10">
                  <MDBView>
                    <h3 className="font-weight-bold">Hot<br /> Topics</h3>
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="11">
                  <MDBView>
                    <h3 className="font-weight-bold">Upskill<br /> Testing</h3>
                  </MDBView>
                </MDBCarouselItem>
              </MDBCarouselInner>
            </MDBCarousel>
          </MDBContainer>
        </>
    )
}