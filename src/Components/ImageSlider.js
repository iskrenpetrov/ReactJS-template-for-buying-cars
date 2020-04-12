import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
      "mdbreact";
import BMW3 from './images/bmw3.jpg';
import BMW3Back from './images/bmw3back.jpg';
import BMW3Side from './images/bmw3side.jpg';

const ImageSlider = () => {
  return (
      <MDBContainer>
        <MDBCarousel
            activeItem={1}
            length={3}
            showControls={true}
            showIndicators={true}
            className="z-depth-1"
        >
          <MDBCarouselInner>
            <MDBCarouselItem itemId="1">
              <MDBView>
                <img
                    className="d-block w-100"
                    src={BMW3}
                    alt="First slide"
                    style={{border: "1px solid black"}}
                />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBView>
                <img
                    className="d-block w-100"
                    src={BMW3Side}
                    alt="Second slide"
                    style={{border: "1px solid black"}}
                />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <MDBView>
                <img
                    className="d-block w-100"
                    src={BMW3Back}
                    alt="Third slide"
                    style={{border: "1px solid black"}}
                />
              </MDBView>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>
  );
}

export default ImageSlider;