import React from "react";
import "../CSS/Experience.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Divider from "@mui/material/Divider";

function Experience() {
  return (
    <div>
      <div className="ExperienceHeading">Professional Experience</div>
      <div className="listOfJobs">
        <Card sx={{ border: "solid", borderRadius: "5px" }}>
          <CardMedia
            component="img"
            sx={{ objectFit: "fill" }}
            height="150"
            src={require("../Images/krogerLogo.jpg")}
            alt="kroger"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              style={{ textAlign: "center" }}
            >
              IT Operations
            </Typography>
            <div className="dividerExperience">
                <Divider />
            </div>
            <Typography variant="body2" color="text.primary">
              - Worked on the Promotions team which monitored numerous Dynatrace
              and Echo dashboards that oversaw the company's: sales/discounts,
              code endpoints, server health, customer's loyalty points, and
              more.
            </Typography>
            <br/>
            <Typography variant="body2" color="text.primary">
              - Gained leadership experience by being promoted to a Team Lead.
              Duties included: training new employees, completing advanced
              documentation, and attending critical meetings with numerous
              teams.
            </Typography>         
          </CardContent>
          <br/>
          <Typography
              variant="body2"
              color="text.secondary"
              style={{ textAlign: "end", margin: "10px" }}
            >
              August 2021 - Present
            </Typography>
        </Card>
        <Card sx={{ border: "solid", borderRadius: "5px" }}>
          <CardMedia
            component="img"
            sx={{ objectFit: "fill" }}
            height="150"
            src={require("../Images/tcsLogo.png")}
            alt="tcs"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              style={{ textAlign: "center" }}
            >
              Software Engineer
            </Typography>
            <div className="dividerExperience">
                <Divider />
            </div>
            <Typography variant="body2" color="text.primary">
              - Excelled in the company's intensive three-month Initial Learning
              Program where modern programming concepts were learned such as new
              software, frameworks, tools, and technologies.
            </Typography>
            <br/><br/><br/><br/><br/><br/>
          </CardContent>
          <Typography
              variant="body2"
              color="text.secondary"
              style={{ textAlign: "end", margin: "14px" }}
            >
              April 2021 - Present
            </Typography>
        </Card>
        <Card sx={{ border: "solid", borderRadius: "5px" }}>
          <CardMedia
            component="img"
            sx={{ objectFit: "fill" }}
            height="150"
            src={require("../Images/discoverLogo.png")}
            alt="discover"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              style={{ textAlign: "center" }}
            >
              Software Developer Intern
            </Typography>
            <div className="dividerExperience">
                <Divider />
            </div>
            <Typography 
                variant="body2" 
                color="text.primary"
            >
              - Built web-based full-stack applications using various
              programming languages and frameworks by pulling data from public
              APIs.
            </Typography>
            <br/>
            <Typography 
                variant="body2" 
                color="text.primary"
            >
              - Discussed requirements with users, wrote clean code, and tested
              the functionality of the application by participating in daily
              stand-ups with teams to fully optimize projects.
            </Typography>
            <br/><br/><br/>
          </CardContent>
          <Typography
              variant="body2"
              color="text.secondary"
              style={{ textAlign: "end", margin: "12px" }}
            >
              January 2020 - August 2020
            </Typography>
        </Card>
      </div>
    </div>
  );
}

export default Experience;
