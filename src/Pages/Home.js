import React from "react";
import "../CSS/Home.css";
import MySocialLinks from "../Components/MySocialLinks.js";
import Divider from "@mui/material/Divider";
import AboutMe from "../Components/AboutMe";
import Experience from "../Components/Experience";
import SkillSet from "../Components/SkillSet";

function Home() {
  return (
    <div className="wholeHomePage">
      <div className="WelcomeTitle">Welcome to Sean Fitzgerald's Portfolio</div>
      <div className="SeansFace">
        <img
          className="FaceAvatar"
          src={require("../Images/MyFace.PNG")}
          alt="MyFaceHomePage"
        />
      </div>
      <MySocialLinks />
      <div className="dividerHome">
        <Divider />
      </div>
      <AboutMe />
      <div className="dividerHome">
        <Divider />
      </div>
      <Experience />
      <div className="dividerHome">
        <Divider />
      </div>
      <SkillSet />
    </div>
  );
}

export default Home;
