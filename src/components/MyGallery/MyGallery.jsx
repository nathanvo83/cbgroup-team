import React, { useState, useEffect } from "react";
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

  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsStarted(true);
    }, 2000);
  }, []);

  return (
    <div className="igallery">
      <Carousel
        showIndicators={false}
        showStatus={false}
        autoPlay={true}
        showThumbs={false}
        infiniteLoop={true}
        showArrows={false}
        interval={5000}
        transitionTime={2000}
        onChange={() => {
          setIsStarted(false);

          setTimeout(() => {
            setIsStarted(true);
          }, 2000);
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
                      isStarted ? "igallery-title start" : "igallery-title"
                    }
                  >
                    {item.title}
                  </div>
                  <div
                    className={
                      isStarted
                        ? "igallery-description start"
                        : "igallery-description"
                    }
                  >
                    {item.description}
                  </div>
                  <Link
                    to={ROUTERS.CONTACTUS}
                    className={
                      isStarted ? "igallery-button start" : "igallery-button"
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
