import React, { useState } from "react";
import "./MyGallery.css";

import { Link } from "react-router-dom";
import * as ROUTERS from "../../constants/routes";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img03 from "../../assets/images/Projects/img03.jpg";
import img04 from "../../assets/images/Projects/img04.jpg";
import img01 from "../../assets/images/Projects/img01.jpg";

const MyGallery = () => {
  const content = [
    {
      title: "House Extensions",
      description:
        "We turn ideas into remarkable spaces, no matter the project size or budget.",
      button: "Contact Us",
      image: img03,
    },
    {
      title: "House Renovation",
      description:
        "We Design and Build Amazing Spaces That People Love To Live",
      button: "Contact Us",
      image: img04,
    },
    {
      title: "Kitchens & Bathrooms",
      description: "Concept to Creation - Perfect Form & Function",
      button: "Contact Us",
      image: img01,
    },
  ];

  const [isStart, setIsStart] = useState(false);

  return (
    <div className="igallery">
      <Carousel
        showIndicators={false}
        showStatus={false}
        autoPlay={true}
        showThumbs={false}
        infiniteLoop={true}
        showArrows={false}
        interval={3500}
        transitionTime={1500}
        onChange={() => {
          console.log("isStart -> false");
          setIsStart(false);

          setTimeout(() => {
            console.log("isStart -> true");
            setIsStart(true);
          }, 1000);
        }}
      >
        {content.map((item) => {
          return (
            <div
              key={item.title}
              className="slider-content"
              style={{
                background: `url('${item.image}') no-repeat center center`,
                backgroundSize: "cover",
              }}
            >
              <div className="slide-gradient">
                <div className="inner">
                  <div
                    className={
                      isStart ? "igallery-title start" : "igallery-title"
                    }
                  >
                    {item.title}
                  </div>
                  <div
                    className={
                      isStart
                        ? "igallery-description start"
                        : "igallery-description"
                    }
                  >
                    {item.description}
                  </div>
                  <Link
                    to={ROUTERS.CONTACTUS}
                    className={
                      isStart ? "igallery-button start" : "igallery-button"
                    }
                  >
                    {item.button}
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default MyGallery;
