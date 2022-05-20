import React,{useState} from 'react';
import Carousel from "react-bootstrap/Carousel";
import MainPhoto_1 from '../Pictures/homepic.png'
import MainPhoto_2 from '../Pictures/homepic_2.JPG'
import Carousel_2 from '../Pictures/Walls/Wall_7.JPG'
import Carousel_3 from '../Pictures/Walls/Wall_8.JPG'



function CarouselTop(props){
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return (
      <div>
        <Carousel variant="dark" className="caorusel-container">
          <Carousel.Item interval={4000}>
            <div className="TEstCont" style={{ height: "100%" }}>
              <img
                className="d-block w-100"
                src={MainPhoto_1}
                alt="Animal Balloons Carousel Photo"
              />
            </div>
            {/* <Carousel.Caption>
              <h3>{props.t("PageBalloons")}</h3>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item interval={4000} className="carousel-item-child">
          <div className="TEstCont" style={{ height: "100%" }}>
              <img
                className="d-block w-100"
                src={MainPhoto_2}
                alt="Animal Balloons Carousel Photo"
              />
            </div>

            {/* <Carousel.Caption>
              <h3>{props.t("PageWalls")}</h3>
            </Carousel.Caption> */}
          </Carousel.Item>
        </Carousel>
      </div>
    );
}

export default CarouselTop;