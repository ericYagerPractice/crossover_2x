import React from 'react';
import { 
    MDBContainer,
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBView
} from 'mdbreact';
import slide1 from '../staticfiles/carousel-slides/c2x-intro-slide-1.jpg';
import slide2 from '../staticfiles/carousel-slides/c2x-intro-slide-2.jpg';
import slide3 from '../staticfiles/carousel-slides/c2x-intro-slide-3.jpg';
import slide4 from '../staticfiles/carousel-slides/c2x-intro-slide-4.jpg';
import slide5 from '../staticfiles/carousel-slides/c2x-intro-slide-5.jpg';
import slide6 from '../staticfiles/carousel-slides/c2x-intro-slide-6.jpg';
import slide7 from '../staticfiles/carousel-slides/c2x-intro-slide-7.jpg';
import slide8 from '../staticfiles/carousel-slides/c2x-intro-slide-8.jpg';
import slide9 from '../staticfiles/carousel-slides/c2x-intro-slide-9.jpg';
import slide10 from '../staticfiles/carousel-slides/c2x-intro-slide-10.jpg';
import slide11 from '../staticfiles/carousel-slides/c2x-intro-slide-11.jpg';
import slide12 from '../staticfiles/carousel-slides/c2x-intro-slide-12.jpg';
import slide13 from '../staticfiles/carousel-slides/c2x-intro-slide-13.jpg';
import slide14 from '../staticfiles/carousel-slides/c2x-intro-slide-14.jpg';
import slide15 from '../staticfiles/carousel-slides/c2x-intro-slide-15.jpg';
import slide16 from '../staticfiles/carousel-slides/c2x-intro-slide-16.jpg';

export default function ImageCarousel() {
    return(
        <>
          <MDBContainer className="p-0">
            <MDBCarousel
              className="carousel--home-intro pb-5 bg-dark"
              activeItem={1}
              length={16}
              showControls={true}
              showIndicators={false}
              fade={true}
              interval={2600}
            >
              <MDBCarouselInner>
                <MDBCarouselItem itemId="1">
                  <MDBView>
                    <img
                      className="d-block w-100"
                      src={slide1}
                      alt="Crossover 2X Intro Slide 1"
                    />
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="2">
                  <MDBView>
                    <img
                      className="d-block w-100"
                      src={slide2}
                      alt="Crossover 2X Intro Slide 2"
                    />
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="3">
                  <MDBView>
                    <img
                      className="d-block w-100"
                      src={slide3}
                      alt="Crossover 2X Intro Slide 3"
                    />
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="4">
                  <MDBView>
                    <img
                      className="d-block w-100"
                      src={slide4}
                      alt="Crossover 2X Intro Slide 4"
                    />
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="5">
                  <MDBView>
                    <img
                      className="d-block w-100"
                      src={slide5}
                      alt="Crossover 2X Intro Slide 5"
                    />
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="6">
                  <MDBView>
                    <img
                      className="d-block w-100"
                      src={slide6}
                      alt="Crossover 2X Intro Slide 6"
                    />
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="7">
                  <MDBView>
                    <img
                      className="d-block w-100"
                      src={slide7}
                      alt="Crossover 2X Intro Slide 7"
                    />
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="8">
                  <MDBView>
                    <img
                      className="d-block w-100"
                      src={slide8}
                      alt="Crossover 2X Intro Slide 8"
                    />
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="9">
                  <MDBView>
                    <img
                      className="d-block w-100"
                      src={slide9}
                      alt="Crossover 2X Intro Slide 9"
                    />
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="10">
                  <MDBView>
                    <img
                      className="d-block w-100"
                      src={slide10}
                      alt="Crossover 2X Intro Slide 10"
                    />
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="11">
                  <MDBView>
                    <img
                      className="d-block w-100"
                      src={slide11}
                      alt="Crossover 2X Intro Slide 11"
                    />
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="12">
                  <MDBView>
                    <img
                      className="d-block w-100"
                      src={slide12}
                      alt="Crossover 2X Intro Slide 12"
                    />
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="13">
                  <MDBView>
                    <img
                      className="d-block w-100"
                      src={slide13}
                      alt="Crossover 2X Intro Slide 13"
                    />
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="14">
                  <MDBView>
                    <img
                      className="d-block w-100"
                      src={slide14}
                      alt="Crossover 2X Intro Slide 14"
                    />
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="15">
                  <MDBView>
                    <img
                      className="d-block w-100"
                      src={slide15}
                      alt="Crossover 2X Intro Slide 15"
                    />
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="16">
                  <MDBView>
                    <img
                      className="d-block w-100"
                      src={slide16}
                      alt="Crossover 2X Intro Slide 16"
                    />
                  </MDBView>
                </MDBCarouselItem>
              </MDBCarouselInner>
            </MDBCarousel>
          </MDBContainer>
        </>
    )
}