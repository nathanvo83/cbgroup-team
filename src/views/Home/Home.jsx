import React from "react";
import OurProjects from "./components/OurProjects/OurProjects";
import ProcessStep from "./components/ProcessStep/ProcessStep";
import Request from "../../components/Request/Request";
import Slogan from "./components/Slogan/Slogan";
import "./Home.css";

function Home() {
  const requestText =
    "UNDERSTAND WHAT GOES INTO A BUILDING PROJECT BEFORE YOU START";

  return (
    <div className="home">
      <Slogan></Slogan>
      <Request text={requestText}></Request>
      <ProcessStep></ProcessStep>
      <OurProjects></OurProjects>
    </div>
  );
}

export default Home;
