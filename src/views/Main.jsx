import React from "react";
import * as ROUTES from "../constants/routes";
import { Switch, Route } from "react-router-dom";
import Home from "./Home/Home";
import AboutUs from "./AboutUs/AboutUs";

import Services from "./Services/Services";
import HomeRenovationsService from "./Services/HomeRenovationsService";
import InteriorExtoriorService from "./Services/InteriorExtoriorService";
import NewBuildService from "./Services/NewBuildsService";

import Projects from "./Projects/Projects";
import QueenStreetProject from "./Projects/QueenStreetProject";
import AlbanyProject from "./Projects/AlbanyProject";
import MissionBayProject from "./Projects/MissionBayProject";

import Testimonials from "./Testimonials/Testimonials";
import Partners from "./Partners/Partners";
import ContactUs from "./ContactUs/ContactUs";

const Main = () => {
  return (
    <Switch>
      <Route path={ROUTES.HOME} exact>
        <Home></Home>
      </Route>
      <Route path={ROUTES.ABOUTUS} exact>
        <AboutUs></AboutUs>
      </Route>
      <Route path={ROUTES.SERVICES} exact>
        <Services></Services>
      </Route>
      <Route path={ROUTES.SERVICE_HOME_REMOVATIONS} exact>
        <HomeRenovationsService></HomeRenovationsService>
      </Route>
      <Route path={ROUTES.SERVICE_INTERIOR_EXTORIOR} exact>
        <InteriorExtoriorService></InteriorExtoriorService>
      </Route>
      <Route path={ROUTES.SERVICE_NEW_BUILDS} exact>
        <NewBuildService></NewBuildService>
      </Route>
      <Route path={ROUTES.PROJECTS} exact>
        <Projects></Projects>
      </Route>
      <Route path={ROUTES.PROJECT_QUEENSTREET} exact>
        <QueenStreetProject></QueenStreetProject>
      </Route>
      <Route path={ROUTES.PROJECT_ALBANY} exact>
        <AlbanyProject></AlbanyProject>
      </Route>
      <Route path={ROUTES.PROJECT_MISSIONBAY} exact>
        <MissionBayProject></MissionBayProject>
      </Route>

      <Route path={ROUTES.TESTIMONIALS} exact>
        <Testimonials></Testimonials>
      </Route>
      <Route path={ROUTES.PARTNERS} exact>
        <Partners></Partners>
      </Route>
      <Route path={ROUTES.CONTACTUS} exact>
        <ContactUs></ContactUs>
      </Route>
    </Switch>
  );
};

export default Main;
