import React from 'react';
import { 
    MDBContainer,
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBView
} from 'mdbreact';

class TextCarousel extends React.Component {
  render() {
    
    const styles = {
      container: {
        color: '#00e5ff',
      }
    }
    
    return(
        <>
          <MDBContainer className='p-0 text-carousel' style={styles.container}>
            <MDBCarousel
              activeItem={1}
              length={4}
              showControls={false}
              showIndicators={false}
              fade='true'
              interval={1600}
            >
              <MDBCarouselInner>
                <MDBCarouselItem itemId='1'>
                  <MDBView>
                    <p className='text-carousel__title text-uppercase font-weight-bold m-0'>
                      Media
                    </p>
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="2">
                  <MDBView>
                    <p className='text-carousel__title text-uppercase font-weight-bold m-0'>
                      Strategy
                    </p>
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="3">
                  <MDBView>
                    <p className='text-carousel__title text-uppercase font-weight-bold m-0'>
                      Podcasting
                    </p>
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="4">
                  <MDBView>
                    <p className='text-carousel__title text-uppercase font-weight-bold m-0'>
                      Ted Talks
                    </p>
                  </MDBView>
                </MDBCarouselItem>
              </MDBCarouselInner>
            </MDBCarousel>
          </MDBContainer>
        </>
    )
  }
}

export default TextCarousel;