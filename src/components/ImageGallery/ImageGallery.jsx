import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "./slider-animations.css";
import "./ImageGallary.css";

import img03 from "../../assets/images/Projects/img03.jpg";
import img04 from "../../assets/images/Projects/img04.jpg";
import img01 from "../../assets/images/Projects/img01.jpg";

const ImageGallary = () => {
  const content = [
    {
      title: "House Extensions",
      description:
        "We turn ideas into remarkable spaces, no matter the project size or budget.",
      button: "Contact Us",
      image: img03,
      // image: "https://i.imgur.com/ZXBtVw7.jpg",
      user: "Luan Gjokaj",
      userProfile: "https://i.imgur.com/JSW6mEk.png",
    },
    {
      title: "House Renovation",
      description:
        "We Design and Build Amazing Spaces That People Love To Live",
      button: "Contact Us",
      image: img04,
      // image: "https://i.imgur.com/DCdBXcq.jpg",
      user: "Erich Behrens",
      userProfile: "https://i.imgur.com/0Clfnu7.png",
    },
    {
      title: "Kitchens & Bathrooms",
      description: "Concept to Creation - Perfect Form & Function",
      button: "Contact Us",
      image: img01,
      // image: "https://i.imgur.com/DvmN8Hx.jpg",
      user: "Bruno Vizovskyy",
      userProfile: "https://i.imgur.com/4KeKvtH.png",
    },
  ];

  return (
    <div className="image-gallary">
      <Slider className="slider-wrapper" autoplay={3000}>
        {content.map((item, index) => (
          <div
            key={index}
            className="slider-content"
            style={{
              background: `url('${item.image}') no-repeat center center`,
            }}
          >
            <div className="inner">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <button>{item.button}</button>
            </div>
            <section>
              <img src={item.userProfile} alt={item.user} />
              <span>
                Posted by <strong>{item.user}</strong>
              </span>
            </section>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageGallary;
