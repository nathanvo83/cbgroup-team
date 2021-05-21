import React from "react";
import "./HomeRenovationsService.css";
import Samples from "../components/Samples/Samples";
import nzcb from "../../../assets/images/Partners/NZCB.png";

const HomeRenovationsService = () => {
  const samples = [
    {
      address: "Mount Albert",
      image: nzcb,
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic aliquam eaque nobis impedit ullam incidunt harum possimus minus odio, aut, officiis sequi reprehenderit expedita, delectus voluptates? Accusamus amet nihil mollitia!",
      link: "",
    },
    {
      address: "Henderson",
      image: nzcb,
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic aliquam eaque nobis impedit ullam incidunt harum possimus minus odio, aut, officiis sequi reprehenderit expedita, delectus voluptates? Accusamus amet nihil mollitia!",
      link: "",
    },
    {
      address: "New Market",
      image: nzcb,
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic aliquam eaque nobis impedit ullam incidunt harum possimus minus odio, aut, officiis sequi reprehenderit expedita, delectus voluptates? Accusamus amet nihil mollitia!",
      link: "",
    },
  ];

  return (
    <div className="renovation">
      <div className="page-header">Home Renovations</div>
      <div className="renovation-text">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, veniam
        odio soluta ex aliquam nemo. Vel aliquid, architecto blanditiis
        molestias nihil corporis asperiores animi possimus sequi distinctio, ad
        eius aperiam!
        <br />
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
        perspiciatis soluta nisi modi laborum pariatur at omnis sunt suscipit
        accusamus sed repellat ipsam cumque excepturi unde, repudiandae
        voluptatum consequatur praesentium!
      </div>

      <Samples samples={samples}></Samples>
    </div>
  );
};

export default HomeRenovationsService;
