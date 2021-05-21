import * as ROUTES from "../constants/routes";

export const menuData = [
  { text: "home", link: ROUTES.HOME },
  { text: "about us", link: ROUTES.ABOUTUS },
  {
    text: "services",
    link: "",
    subs: [
      { text: "home renovations", link: ROUTES.SERVICE_HOME_REMOVATIONS },
      { text: "interior & exterior", link: ROUTES.SERVICE_INTERIOR_EXTERIOR },
      { text: "new builds", link: ROUTES.SERVICE_NEW_BUILDS },
    ],
  },
  {
    text: "projects",
    link: "",
    subs: [
      { text: "queen street", link: ROUTES.PROJECT_QUEENSTREET },
      { text: "albany", link: ROUTES.PROJECT_ALBANY },
      { text: "mission bay", link: ROUTES.PROJECT_MISSIONBAY },
    ],
  },
  { text: "testimonials", link: ROUTES.TESTIMONIALS },
  { text: "partners", link: ROUTES.PARTNERS },
  { text: "contact us", link: ROUTES.CONTACTUS },
];
