import React from "react";
import ProcessStep from "./Components/ProcessStep/ProcessStep";
import Request from "./Components/Request/Request";
import Slogan from "./Components/Slogan/Slogan";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      {/* <div className="page-header">Home</div> */}
      <Slogan></Slogan>
      <Request></Request>
      <ProcessStep></ProcessStep>
    </div>
  );
}

export default Home;
