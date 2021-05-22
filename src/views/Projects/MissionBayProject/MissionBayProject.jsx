import React from "react";
import Gallery from "../components/Gallery/Gallery";
import nzcb from "../../../assets/images/Partners/NZCB.png";
import WhyChooseUs from "../../../components/WhyChooseUs/WhyChooseUs";

const MissionBayProject = () => {
  const images = [
    { img: nzcb, text: "1" },
    { img: nzcb, text: "2" },
    { img: nzcb, text: "3" },
    { img: nzcb, text: "4" },
  ];

  return (
    <div>
      <div className="page-header">Mission Bay Project</div>
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

export default MissionBayProject;
