import React from "react";
import "./CarouselServ.css";
import { Image } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "../../assets/images/Frame 126.jpg";
import img2 from "../../assets/images/Frame 130.jpg";
import img3 from "../../assets/images/Frame 127.jpg";
import img4 from "../../assets/images/real4.jpg";
import img5 from "../../assets/images/real12.jpg";

const Team = () => {
  const teamImages = [img1, img2, img3, img4, img5];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="team-section">
      <Carousel responsive={responsive} infinite={true} className="carousel">
        {teamImages.map((image, index) => (
          <div key={index} className="image-container">
            <Image src={image} className="team-image" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Team;
