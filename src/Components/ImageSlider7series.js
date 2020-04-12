import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
      "mdbreact";
import BMW7 from './images/bmw7.jpg';
import BMW7Back from './images/bmw7back.jpg';
import BMW7Side from './images/bmw7side.jpg';

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
                    src={BMW7}
                    alt="First slide"
                    style={{border: "1px solid black"}}
                />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBView>
                <img
                    className="d-block w-100"
                    src={BMW7Side}
                    alt="Second slide"
                    style={{border: "1px solid black"}}
                />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <MDBView>
                <img
                    className="d-block w-100"
                    src={BMW7Back}
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
