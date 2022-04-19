import React from "react";
import "../CSS/MySocialLinks.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Box from "@mui/material/Box";
import GitHubIcon from "@mui/icons-material/GitHub";
import MyContactModal from "./MyContactModal.js";

function MySocialLinks() {
  return (
      <div className="SocialLinks">
        <Box
          component="form"
          className={"OutterIconBox"}
          sx={{ "& > :not(style)": { width: "80px" } }}
        >
          <Box className={"InnerIconBox"}>
            <LinkedInIcon
              color="primary"
              sx={{ fontSize: 50, margin: "5px" }}
            />
            <a
              className="IndividualLinks"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/seanfitzgerald1996/"
            >
              LinkedIn
            </a>
          </Box>
          <Box className={"InnerIconBox"}>
            <GitHubIcon sx={{ fontSize: 50, margin: "5px" }} />
            <a className="IndividualLinks" 
              target="_blank"
              rel="noreferrer"
              href="https://github.com/seanfitz96">
              GitHub
            </a>
          </Box>
          <Box className={"InnerIconBox"}>
            <img
              style={{ width: "35px", margin: "7px" }}
              src={require("../Images/resumeIcon.jpg")}
              alt="resume-Icon"
            />
            <a className="IndividualLinks" 
              target="_blank"
              href="/Sean_Fitzgerald_Resume.pdf">
              Resume
            </a>
          </Box>
          <Box className={"InnerIconBox"}>
            <img
              style={{ width: "50px", margin: "5px", marginTop: "18px" }}
              src={require("../Images/contactIcon.png")}
              alt="contact-Icon"
            />
            <MyContactModal/>
          </Box>
        </Box>
      </div>
  );
}

export default MySocialLinks;
