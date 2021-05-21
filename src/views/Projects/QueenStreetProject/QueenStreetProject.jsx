import React from "react";
import Gallery from "../components/Gallery/Gallery";
import nzcb from "../../../assets/images/Partners/NZCB.png";

const QueenStreetProject = () => {
  const images = [
    { img: nzcb, text: "xyz" },
    { img: nzcb, text: "xyz" },
    { img: nzcb, text: "xyz" },
    { img: nzcb, text: "xyz" },
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
    </div>
  );
};

export default QueenStreetProject;
