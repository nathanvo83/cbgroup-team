import React from "react";
import "./HomeRenovationsService.css";
import Samples from "../components/Samples/Samples";
import nzcb from "../../../assets/images/Partners/NZCB.png";
import WhyChooseUs from "../../../components/WhyChooseUs/WhyChooseUs";
import * as ROUTERS from "../../../constants/routes";

const HomeRenovationsService = () => {
  const samples = [
    {
      address: "Albany",
      image: nzcb,
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic aliquam eaque nobis impedit ullam incidunt harum possimus minus odio, aut, officiis sequi reprehenderit expedita, delectus voluptates? Accusamus amet nihil mollitia!",
      link: ROUTERS.PROJECT_ALBANY,
    },
    {
      address: "Mission Bay",
      image: nzcb,
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic aliquam eaque nobis impedit ullam incidunt harum possimus minus odio, aut, officiis sequi reprehenderit expedita, delectus voluptates? Accusamus amet nihil mollitia!",
      link: ROUTERS.PROJECT_MISSIONBAY,
    },
    {
      address: "Queen Street",
      image: nzcb,
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic aliquam eaque nobis impedit ullam incidunt harum possimus minus odio, aut, officiis sequi reprehenderit expedita, delectus voluptates? Accusamus amet nihil mollitia!",
      link: ROUTERS.PROJECT_QUEENSTREET,
    },
  ];

  return (
    <div className="renovation">
      <div className="page-header">Home Renovations</div>

      <div className="renovation-title">
        We Create Exceptional Living Spaces
      </div>
      <div className="renovation-subtitle">
        You, your home and the World, we recognise the importance of a beautiful
        home, and the role it plays on our happiness and wellbeing, which is why
        we work tirelessly to achieve the highest standards.
      </div>

      <div className="renovation-text">
        Whether you’re looking to refurbish one or two rooms, or need to
        completely renovate your property, our extensive experience of
        refurbishing London homes means we can design, build and manage the
        entire process to help you create a better version of your home. We also
        work alongside estate agents and clients looking to sell their property
        or rent it out, as well as with insurance companies to restore
        properties after flood or fire damage.
        <br />
        We are able to undertake your project from start to finish, as we employ
        a full-time staff of skilled tradesmen including carpenters, joiners,
        plumbers, tilers, electricians and decorators. They are supported by our
        dedicated team of customer service co-ordinators, project managers and
        surveyors.
      </div>

      <Samples samples={samples}></Samples>
      <WhyChooseUs></WhyChooseUs>
    </div>
  );
};

export default HomeRenovationsService;
