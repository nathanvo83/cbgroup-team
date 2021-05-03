import * as ROUTES from "../constants/routes";

export const menuData = [
  { text: "home", link: ROUTES.HOME },
  { text: "about us", link: ROUTES.ABOUTUS },
  {
    text: "services",
    link: "",
    subs: [
      { text: "serv01", link: ROUTES.SERVICES },
      { text: "serv02", link: ROUTES.SERVICES },
      { text: "serv03", link: ROUTES.SERVICES },
    ],
  },
  {
    text: "projects",
    link: "",
    subs: [
      { text: "proj01", link: ROUTES.PROJECTS },
      { text: "proj02", link: ROUTES.PROJECTS },
      { text: "proj03", link: ROUTES.PROJECTS },
    ],
  },
  { text: "testimonials", link: ROUTES.TESTIMONIALS },
  { text: "partners", link: ROUTES.PARTNERS },
  { text: "contact us", link: ROUTES.CONTACTUS },
];
