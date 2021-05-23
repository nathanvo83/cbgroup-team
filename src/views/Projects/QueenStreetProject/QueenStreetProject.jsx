import React from "react";
import Gallery from "../components/Gallery/Gallery";
import WhyChooseUs from "../../../components/WhyChooseUs/WhyChooseUs";

import img07 from "../../../assets/images/Projects/img07.jpg";
import img08 from "../../../assets/images/Projects/img08.jpg";
import img09 from "../../../assets/images/Projects/img09.jpg";
import img02 from "../../../assets/images/Projects/img01.jpg";

const QueenStreetProject = () => {
  const images = [
    { img: img02, text: "1" },
    { img: img08, text: "2" },
    { img: img09, text: "3" },
    { img: img07, text: "4" },
  ];

  return (
    <div>
      <div className="page-header">Queue Street Project</div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad repellendus
        corrupti nostrum unde incidunt impedit. Nemo ullam aspernatur laboriosam
        molestias. Officiis reprehenderit quidem rerum sit porro. Voluptates
        dignissimos corporis tempora!
        <br />
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
        iste saepe temporibus tempora consectetur accusamus sequi
        necessitatibus. Deleniti, nulla praesentium obcaecati rerum architecto,
        nemo animi ducimus possimus consequuntur aliquam dicta?
      </div>

      <Gallery images={images}></Gallery>
      <WhyChooseUs></WhyChooseUs>
    </div>
  );
};

export default QueenStreetProject;
