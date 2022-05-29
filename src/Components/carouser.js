import React,{useState} from 'react';
import Carousel from "react-bootstrap/Carousel";
import MainPhoto_1_BIG from '../Pictures/homepic.png'
import MainPhoto_2_BIG from '../Pictures/homepic_2.JPG'
import MainPhoto_1_SMALL from '../Pictures/1.JPG'
import MainPhoto_2_SMALL from '../Pictures/Walls/Wall_6.jpg'
import Media from 'react-media';


function CarouselTop(props){
    // const [index, setIndex] = useState(0);

    return (
      <div>
        <Carousel variant="dark" className="caorusel-container">
          <Carousel.Item interval={4000}>
            <div className="ds-flex-c align-center" style={{ height: "100%" }}>
              <Media queries={{ small: { maxWidth: 800 } }}>
                {(matches) =>
                  matches.small ? (
                    <img
                      className="d-block"
                      src={MainPhoto_1_SMALL}
                      alt="Animal Balloons Carousel Photo"
                      style={{ width: "80%",padding:'10px' }}
                    />
                  ) : (
                    <img
                      className="d-block"
                      src={MainPhoto_1_BIG}
                      alt="Animal Balloons Carousel Photo"
                      style={{ width: "80%" }}
                    />
                  )
                }
              </Media>
            </div>
          </Carousel.Item>
          <Carousel.Item interval={4000} className="carousel-item-child">
            <div className="ds-flex-c align-center" style={{ height: "100%" }}>
            <Media queries={{ small: { maxWidth: 800 } }}>
                {(matches) =>
                  matches.small ? (
                    <img
                      className="d-block"
                      src={MainPhoto_2_SMALL}
                      alt="Photo Backdrops Carousel Photo"
                      style={{ width: "80%",padding:'10px' }}
                    />
                  ) : (
                    <img
                      className="d-block"
                      src={MainPhoto_2_BIG}
                      alt="Animal Balloons Carousel Photo"
                      style={{ width: "80%" }}
                    />
                  )
                }
              </Media>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    );
}

export default CarouselTop;