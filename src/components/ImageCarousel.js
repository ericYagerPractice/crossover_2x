import React from 'react';
import { 
    MDBContainer,
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBView
} from 'mdbreact';
import blocSlide1 from '../staticfiles/carousel-slides/cpts-4x-bloc-infograpic-1.jpg';
import blocSlide2 from '../staticfiles/carousel-slides/cpts-4x-bloc-infograpic-2.jpg';
import blocSlide3 from '../staticfiles/carousel-slides/cpts-4x-bloc-infograpic-3.jpg';

export default function ImageCarousel() {
    return(
        <>
          <MDBContainer className="p-0">
            <MDBCarousel
              className="pb-5"
              activeItem={1}
              length={3}
              showControls={false}
              showIndicators={true}
              slide={true}
              interval={2200}
            >
              <MDBCarouselInner>
                <MDBCarouselItem itemId="1">
                  <MDBView>
                    <img
                      className="d-block w-100"
                      src={blocSlide1}
                      alt="Crossover 2X Bloc Slide 1"
                    />
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="2">
                  <MDBView>
                    <img
                      className="d-block w-100"
                      src={blocSlide2}
                      alt="Crossover 2X Bloc Slide 2"
                    />
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="3">
                  <MDBView>
                    <img
                      className="d-block w-100"
                      src={blocSlide3}
                      alt="Crossover 2X Bloc Slide 3"
                    />
                  </MDBView>
                </MDBCarouselItem>
              </MDBCarouselInner>
            </MDBCarousel>
          </MDBContainer>
        </>
    )
}