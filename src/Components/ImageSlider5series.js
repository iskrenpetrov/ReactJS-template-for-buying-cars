import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
      "mdbreact";
import BMW5 from './images/bmw5.jpg';
import BMW5Back from './images/bmw5back.jpg';
import BMW5Side from './images/bmw5side.jpg';

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
                    src={BMW5}
                    alt="First slide"
                    style={{border: "1px solid black"}}
                />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBView>
                <img
                    className="d-block w-100"
                    src={BMW5Side}
                    alt="Second slide"
                    style={{border: "1px solid black"}}
                />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <MDBView>
                <img
                    className="d-block w-100"
                    src={BMW5Back}
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
