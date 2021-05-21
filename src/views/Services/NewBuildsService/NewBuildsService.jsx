import React from "react";
import "./NewBuildsService.css";
import Samples from "../components/Samples/Samples";
import nzcb from "../../../assets/images/Partners/NZCB.png";

const NewBuildsService = () => {
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
    <div className="new-builds">
      <div className="page-header">New Builds</div>
      <div className="new-builds-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est voluptates
        exercitationem quia explicabo, mollitia cum harum sunt iure assumenda
        fugiat. Molestiae soluta corrupti cumque earum, maiores saepe explicabo
        ullam id.
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
        blanditiis pariatur ad enim similique? Non, in nam similique adipisci
        sed cumque quidem commodi quos eos natus enim amet optio a.
      </div>

      <Samples samples={samples}></Samples>
    </div>
  );
};

export default NewBuildsService;
