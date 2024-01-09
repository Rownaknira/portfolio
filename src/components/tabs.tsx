import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import WorkHistoryRoundedIcon from "@mui/icons-material/WorkHistoryRounded";
import StarsRoundedIcon from "@mui/icons-material/StarsRounded";
import { Avatar, Paper, Typography, Link } from "@mui/material";
import styled from "styled-components";
import { FeatureList } from "./List";
import { device } from "../styles/breakpoints";
import infodigita from "../images/infodigita.jpeg";
import bitfountain from "../images/bitfountain.jpeg";
import bcc from "../images/bcc.jpeg";
import framgia from "../images/framgia.jpeg";
import infosys from "../images/infosys.png";
import smef from "../images/smef.png";
import era from "../images/era.png";
import isqi from "../images/isqi.jpg";

const paperStyle = {
  margin: "1rem",
  padding: "1rem",
};

const certificationPaperStyle = {
  margin: "1rem",
  padding: "1rem",
  display: "flex",
};

const avatarStyle = {
  border: "1rem solid #ea484a",
};

export default function IconLabelTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <StyledContainer>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="icon label tabs example"
      >
        <Tab
          icon={<WorkHistoryRoundedIcon />}
          label="EXPERIENCE"
          sx={{ color: "#ea484a", marginLeft: "2rem" }}
        />
        <Tab
          icon={<SchoolRoundedIcon />}
          label="EDUCATION"
          sx={{ color: "#ea484a", marginLeft: "2rem" }}
        />
        <Tab
          icon={<StarsRoundedIcon />}
          label="CERTIFICATION"
          sx={{ color: "#ea484a", marginLeft: "2rem" }}
        />
      </Tabs>
      {value === 0 && (
        <StyledExperienceContainer>
          <Paper sx={certificationPaperStyle}>
            <Avatar
              alt="infodigita"
              src={infodigita}
              sx={{ avatarStyle }}
            ></Avatar>
            <div style={{ paddingLeft: "1rem" }}>
              <Typography variant="h6">
                <Link href="https://infodigita.com/" underline="none">
                  InfoDigita Technologies
                </Link>
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                Senior Software engineer
              </Typography>
              <Typography variant="body2">
                {" "}
                January, 2023 - September, 2023{" "}
              </Typography>
              <Typography variant="body2">
                <b>Project:</b>{" "}
                <Link href="https://zytrack.ch" underline="none">
                  https://zytrack.ch/
                </Link>
              </Typography>
              <Typography variant="body2">
                <b>Responsibilities:</b>
                <FeatureList
                  text="Implement new features for web app using Ruby on rails,
              Stimulus.js, JQuery, PostgreSQL and Bootstrap CSS"
                />
                <FeatureList
                  text="Bug
              fixing of existing features"
                />
                <FeatureList text="Integrate Bexio with Zytrack" />
              </Typography>
            </div>
          </Paper>

          <Paper sx={certificationPaperStyle}>
            <Avatar
              alt="bitfountain"
              src={bitfountain}
              sx={{ avatarStyle }}
            ></Avatar>
            <div style={{ paddingLeft: "2rem" }}>
              <Typography variant="h6">
                <Link href="https://bitfountain.co/" underline="none">
                  Bitfountain Inc
                </Link>
              </Typography>
              <br />
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                Technical Lead
              </Typography>
              <Typography variant="body2">
                {" "}
                March, 2021 - December, 2022{" "}
              </Typography>
              <Typography variant="body2">
                <b>Client: Relic Co., Ltd. (Relic Inc.)</b>(
                <Link href="https://relic.co.jp" underline="none">
                  https://relic.co.jp
                </Link>
                )
              </Typography>
              <Typography variant="body2">
                <b>Project: </b>
                <Link
                  href="https://relic.co.jp/services/booster"
                  underline="none"
                >
                  https://relic.co.jp/services/booster
                </Link>
              </Typography>
              <Typography variant="body2">
                <b>Responsibilities:</b>

                <FeatureList text="Led software development initiative and primary point-of-contact for project management staff." />
                <FeatureList text="Collaborated with management, internal and development partners regarding software application design status and project progress." />
                <FeatureList text="Provided guidance and mentored less-experienced staff members." />
                <FeatureList text="Provided direction and guidance to process improvements" />
                <FeatureList text="Integrated third-party tools and components into applications i.e., Shopify, Sendgrid" />
                <FeatureList text="Developed automation tool to perform all microservices automatically to up and running new clients" />
                <FeatureList text="Deployed application using Capistrano" />
                <FeatureList text="Used different Amazon web services like Redshift, RDS, S3, EC2, Amplify" />
              </Typography>
              <br />
              <br />
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                Senior software engineer
              </Typography>
              <Typography variant="body2">
                {" "}
                March, 2020 to February, 2021{" "}
              </Typography>
              <Typography variant="body2">
                <b>Client: ZENKIGEN, Inc.</b>(
                <Link href="https://zenkigen.co.jp" underline="none">
                  https://zenkigen.co.jp
                </Link>
                )
              </Typography>
              <Typography variant="body2">
                <b>Project: </b>
                <Link href="https://harutaka.jp" underline="none">
                  https://harutaka.jp
                </Link>
              </Typography>
              <Typography variant="body2">
                <b>Responsibilities:</b>

                <FeatureList
                  text="Analyze requirement of assigned tasks and implementation
                planning"
                />
                <FeatureList text="Develop frontend with React JS, Redux, Typescript and Material-UI." />
                <FeatureList text="Implement Restful API using Ruby on Rails with MySQL." />
                <FeatureList text="Write unit test cases using Rspec" />
                <FeatureList
                  text="Document API request and response using Swagger – OpenAPI
                Specification."
                />
                <FeatureList text="Provided guidance and mentored less-experienced staff members." />
              </Typography>
            </div>
          </Paper>

          <Paper sx={certificationPaperStyle}>
            <Avatar alt="bcc" src={bcc} sx={{ avatarStyle }}></Avatar>
            <div style={{ paddingLeft: "2rem" }}>
              <Typography variant="h6">
                <Link href="https://bcc.gov.bd/" underline="none">
                  Bangladesh Computer Council
                </Link>
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                Programmer
              </Typography>
              <Typography variant="body2">
                {" "}
                April, 2017 to June, 2019{" "}
              </Typography>
              <Typography variant="body2">
                <b>Responsibilities:</b>
                <FeatureList text="Led software testing team and primary point-of-contact for project management staff." />
                <FeatureList text="Prepare Test plan & Risk management procedure" />
                <FeatureList text="Test case authoring and execution" />
                <FeatureList text="Provided guidance and mentored less-experienced staff members." />
                <FeatureList text="Conduct Retrospective and contribute to process improvement" />
                <FeatureList
                  text="Conduct Security testing based on OWASP top 10 security
                vulnerabilities"
                />
                <FeatureList
                  text="Conduct Performance Testing using HP Loadrunner &
                JMeter"
                />
                <FeatureList text="Developed and maintained in-house software for organization" />
              </Typography>
            </div>
          </Paper>

          <Paper sx={certificationPaperStyle}>
            <Avatar alt="framgia" src={framgia} sx={{ avatarStyle }}></Avatar>
            <div style={{ paddingLeft: "2rem" }}>
              <Typography variant="h6">
                <Link href="https://en.sun-asterisk.com/" underline="none">
                  Framgia Bangladesh Ltd
                </Link>
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                System Development Engineer
              </Typography>
              <Typography variant="body2">
                September 2015 to March 2017
              </Typography>
              <Typography variant="body2">
                <b>Responsibilities:</b>
                <FeatureList text="Requirement analysis, system & database design" />
                <FeatureList
                  text="Software development with continuous remote communication with
Vietnamese and Japanese engineers and clients"
                />
                <FeatureList text="Write unit test cases using Rspec" />
              </Typography>
            </div>
          </Paper>

          <Paper sx={certificationPaperStyle}>
            <Avatar alt="infosys" src={infosys} sx={{ avatarStyle }}></Avatar>
            <div style={{ paddingLeft: "2rem" }}>
              <Typography variant="h6">
                <Link href="https://www.infosys.com/" underline="none">
                  Infosys Limited
                </Link>
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                Intern
              </Typography>
              <Typography variant="body2">
                January 2015 to March 2015
              </Typography>
              <Typography variant="body2">
                <b>Training Title:</b>
                Development & Maintenance of Java-based Applications
                <br />
                <b>Topic: </b> Java, Oracle, JPA, JSP, JSF, JUnit Testing
              </Typography>
            </div>
          </Paper>

          <Paper sx={certificationPaperStyle}>
            <Avatar alt="smef" src={smef} sx={{ avatarStyle }}></Avatar>
            <div style={{ paddingLeft: "2rem" }}>
              <Typography variant="h6">
                <Link href="http://www.smef.gov.bd/" underline="none">
                  SME Foundation
                </Link>
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                Assistant Program Officer
              </Typography>
              <Typography variant="body2">
                January 2014 to December 2014
              </Typography>
              <Typography variant="body2">
                <b>Responsibilities:</b>
                <FeatureList text="Web development following SDLC using CakePHP, JQuery and Bootstrap CSS" />
                <FeatureList text="Customize e-Commerce website using WordPress and WooCommerce" />
              </Typography>
            </div>
          </Paper>

          <Paper sx={certificationPaperStyle}>
            <Avatar alt="ERA" src={era} sx={{ avatarStyle }}></Avatar>
            <div style={{ paddingLeft: "2rem" }}>
              <Typography variant="h6">
                <Link href="https://www.erainfotechbd.com/" underline="none">
                  ERA InfoTech Limited
                </Link>
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                Trainee Programmer
              </Typography>
              <Typography variant="body2">
                July 2013 to December 2013
              </Typography>
              <Typography variant="body2">
                <b>Responsibilities:</b>
                <FeatureList text="Develop large scale web application using Oracle Web Application Express(ApEx) in Banking domain" />
                <FeatureList text="Write stored procedures and functions in PL/SQL for application" />
              </Typography>
            </div>
          </Paper>
        </StyledExperienceContainer>
      )}

      {value === 1 && (
        <StyledEducationContainer>
          <Paper sx={paperStyle}>
            <Typography variant="h6">
              <Link href="https://mist.ac.bd/" underline="none">
                Military Institute of Science & Technology (MIST)
              </Link>
            </Typography>
            <Typography variant="body2">
              Bachelor of Science in Computer Science & Engineering
            </Typography>
            <Typography variant="body2">
              February, 2009 ~ April, 2013
            </Typography>
            <Typography variant="body2">
              <b>CGPA: </b> 3.4
            </Typography>
          </Paper>
        </StyledEducationContainer>
      )}

      {value === 2 && (
        <StyledCertificationContainer>
          <Paper sx={certificationPaperStyle}>
            {/* <StyledImageContainer> */}
            <Avatar
              alt="Infosys Limited"
              src={infosys}
              sx={{ avatarStyle }}
            ></Avatar>
            {/* </StyledImageContainer> */}
            <div style={{ paddingLeft: "2rem" }}>
              <Typography variant="h6">
                Development and Maintenance of Java-based Applications
              </Typography>
              <Typography variant="body2">
                <b>CERTIFICATION AUTHORITY: </b>
                <Link href="https://www.infosys.com/" underline="none">
                  Infosys Limited
                </Link>
              </Typography>
            </div>
          </Paper>
          <Paper sx={certificationPaperStyle}>
            <Avatar alt="ISTQB" src={isqi} sx={{ avatarStyle }}></Avatar>
            <div style={{ paddingLeft: "2rem" }}>
              <Typography variant="h6">
                ISTQB® Certified Tester Foundation Level
              </Typography>
              <Typography variant="body2">
                <b>CERTIFICATION AUTHORITY: </b>
                <Link
                  href="https://isqi.org/en/content/32-istqb"
                  underline="none"
                >
                  iSQI
                </Link>
              </Typography>
            </div>
          </Paper>
          <Paper sx={certificationPaperStyle}>
            <Avatar alt="ISTQB" src={isqi} sx={{ avatarStyle }}></Avatar>
            <div style={{ paddingLeft: "2rem" }}>
              <Typography variant="h6">
                ISTQB® Certified Tester Foundation Level – Extension, Agile
                Tester
              </Typography>
              <Typography variant="body2">
                <b>CERTIFICATION AUTHORITY: </b>
                <Link
                  href="https://isqi.org/en/content/32-istqb"
                  underline="none"
                >
                  iSQI
                </Link>
              </Typography>
            </div>
          </Paper>
          <Paper sx={certificationPaperStyle}>
            <Avatar alt="ISTQB" src={isqi} sx={{ avatarStyle }}></Avatar>
            <div style={{ paddingLeft: "2rem" }}>
              <Typography variant="h6">
                ISTQB® Certified Tester Advanced Level, Test Analyst
              </Typography>
              <Typography variant="body2">
                <b>CERTIFICATION AUTHORITY: </b>
                <Link
                  href="https://isqi.org/en/content/32-istqb"
                  underline="none"
                >
                  iSQI
                </Link>
              </Typography>
            </div>
          </Paper>
          <Paper sx={certificationPaperStyle}>
            <Avatar alt="ISTQB" src={isqi} sx={{ avatarStyle }}></Avatar>
            <div style={{ paddingLeft: "2rem" }}>
              <Typography variant="h6">
                CMAP© Certified Mobile App Professional Foundation Level, Test
                Automation
              </Typography>
              <Typography variant="body2">
                <b>CERTIFICATION AUTHORITY: </b>
                <Link
                  href="https://isqi.org/en/content/32-istqb"
                  underline="none"
                >
                  iSQI
                </Link>
              </Typography>
            </div>
          </Paper>
          <Paper sx={certificationPaperStyle}>
            <Avatar alt="ISTQB" src={isqi} sx={{ avatarStyle }}></Avatar>
            <div style={{ paddingLeft: "2rem" }}>
              <Typography variant="h6">
                CMAP© Certified Mobile App Professional Performance Testing
              </Typography>
              <Typography variant="body2">
                <b>CERTIFICATION AUTHORITY: </b>
                <Link
                  href="https://isqi.org/en/content/32-istqb"
                  underline="none"
                >
                  iSQI
                </Link>
              </Typography>
            </div>
          </Paper>
        </StyledCertificationContainer>
      )}
    </StyledContainer>
  );
}

const StyledContainer = styled.div``;

const StyledExperienceContainer = styled.div`
  padding: 2rem;
  @media ${device.sm} {
    padding: 0.5rem;
  }
`;

const StyledEducationContainer = styled.div`
  padding: 2rem;
  @media ${device.sm} {
    padding: 0.5rem;
  }
`;

const StyledCertificationContainer = styled.div`
  padding: 2rem;
  @media ${device.sm} {
    padding: 0.5rem;
  }
`;

// const StyledImageContainer = styled.div`
//   width: 3.75rem;
//   height: 3.75rem;
// `;
