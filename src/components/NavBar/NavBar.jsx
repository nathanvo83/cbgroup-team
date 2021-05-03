import React from "react";
import * as ROUTES from "../../constants/routes";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <NavLink to={ROUTES.HOME}>HOME</NavLink> /{" "}
      <NavLink to={ROUTES.ABOUTUS}>ABOUT-US</NavLink> /{" "}
      <NavLink to={ROUTES.SERVICES}>SERVICES</NavLink> /{" "}
      <NavLink to={ROUTES.PROJECTS}>PROJECTS</NavLink> /{" "}
      <NavLink to={ROUTES.TESTIMONIALS}>TESTIMONIAL</NavLink> /{" "}
      <NavLink to={ROUTES.PARTNERS}>PARTNERS</NavLink> /{" "}
      <NavLink to={ROUTES.CONTACTUS}>CONTACT-US</NavLink>
      <hr />
    </div>
  );
};

export default NavBar;
