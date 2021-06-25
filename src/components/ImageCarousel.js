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

const slideUrls = [
  slide1,
  slide2,
  slide3,
  slide4,
  slide5,
  slide6,
  slide7,
  slide8,
  slide9,
  slide10,
  slide11,
  slide12,
  slide13,
  slide14,
  slide15,
  slide16,
];

function ImageCarousel() {
  
  return(
    <MDBContainer className="p-0">
      <MDBCarousel
        className="carousel--home-intro pb-5 bg-dark"
        activeItem={1}
        length={16}
        showControls={true}
        showIndicators={false}
        interval={false}
      >
        <MDBCarouselInner>
          {slideUrls.map((url, i) => (
          <MDBCarouselItem key={i} itemId={i + 1}>
            <MDBView>
              <img
                className="d-block w-100"
                src={url}
                alt="Crossover 2X Intro Slide 1"
              />
            </MDBView>
          </MDBCarouselItem>
          ))}
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  )
}

export default ImageCarousel;