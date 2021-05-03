import React from "react";
import * as ROUTES from "../constants/routes";
import { Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import AboutUs from "./AboutUs/AboutUs";
import ContactUs from "./ContactUs/ContactUs";
import Partners from "./Partners/Partners";
import Projects from "./Projects/Projects";
import Services from "./Services/Services";
import Testimonials from "./Testimonials/Testimonials";

const Main = () => {
  return (
    <Switch>
      <Route path={ROUTES.HOME} exact>
        <Home></Home>
      </Route>
      <Route path={ROUTES.ABOUTUS}>
        <AboutUs></AboutUs>
      </Route>
      <Route path={ROUTES.CONTACTUS}>
        <ContactUs></ContactUs>
      </Route>
      <Route path={ROUTES.PARTNERS}>
        <Partners></Partners>
      </Route>
      <Route path={ROUTES.PROJECTS}>
        <Projects></Projects>
      </Route>
      <Route path={ROUTES.SERVICES}>
        <Services></Services>
      </Route>
      <Route path={ROUTES.TESTIMONIALS}>
        <Testimonials></Testimonials>
      </Route>
    </Switch>
  );
};

export default Main;
