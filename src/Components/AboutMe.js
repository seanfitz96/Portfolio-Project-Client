import React from "react";
import "../CSS/AboutMe.css";

function AboutMe() {
  return (
      <div>
      <div className="AboutMeHeading">About Me</div>
      <div className="AboutMeHome">
        <img
          className="SeanPics"
          src={require("../Images/SeanCollage1.png")}
          alt="PicturesOfMe"
        />
        <img
          className="SeanPics"
          src={require("../Images/SeanCollage2.png")}
          alt="PicturesOfMe"
        />
        <div className="aboutMeText">
          I am a software engineer who has a passion for developing software as
          well as making strong and lasting team relationships. My passion for
          development sparked when I had the opportunity to work at Discover
          Financial Services as a software engineer intern. What keeps me driven
          is the idea that it's impossible to learn everything that the software
          development world has to offer. Rather than scare me, it excites me
          knowing that there is always something new to learn. 
        </div>
        <div className="aboutMeText">
          The opportunity
          to work in teams strongly appeals to me because I love being able to
          bounce ideas and concepts off one another in order to solve problems.
          I have a social personality which makes communication easy for me and
          I have the proven ability to be a leader. Being early in my career, I
          know I have so much room for growth as a developer. I am enthusiastic
          to see where my future takes me and that enthusiasm is what makes me
          strive for greatness.
        </div>
      </div>
      </div>
      
  );
}

export default AboutMe;
