import styled from "styled-components";
import { MyCard } from "./Card";
import { Typography } from "@mui/material";
import { device } from "../styles/breakpoints";

const titleStyle = {
  color: "#ea484a",
  // marginBottom: "0.5rem",
  margin: "2rem",
};

export const WorkPortfolio = () => {
  return (
    <StyledWorkPortfolioContainer>
      <Typography variant="h5" sx={titleStyle}>
        WORK PORTFOLIO
      </Typography>
      <StyledPortfolio>
        <MyCard
          avatarName="Z"
          projectName="Zytrack"
          projectTitle="Time Tracking App"
          projectImageName="zytrack.png"
          projectDescription="This software is specially used for tracking time. Any company willing to track work hours of its employees can use this app. Apart from time tracking, this app can be used for leave management, extra hours and overtime management, project management, integration with other applications like Bexio and so on."
          projectLink="https://zytrack.ch/"
        />
        <MyCard
          avatarName="B"
          projectName="Booster"
          projectTitle="Marketing App"
          projectImageName="booster-shopify2.png"
          projectDescription="This app has been mainly built to boost sales of e-commerce solutions. Through its intelligence, it finds out its target customers and specific time at which there is a high possibility of buying products and sends different promotional SMS and email to those customers. Email and SMS can be both manually and automatically triggered"
          projectLink="https://relic.co.jp/services/booster/"
        />
        <MyCard
          avatarName="H"
          projectName="Harutaka"
          projectTitle="Recruitment Management App"
          projectImageName="harutaka.png"
          projectDescription="Harutaka is a recruitment management system. Basically it is used for candidate management, interview scheduling and exam question preparation, online interview, interview assessment and so on. Interview can also be recorded for future analysis."
          projectLink="https://harutaka.jp/"
        />
      </StyledPortfolio>
    </StyledWorkPortfolioContainer>
  );
};

const StyledWorkPortfolioContainer = styled.div`
  width: 70%;
  margin: auto;

  @media ${device.sm} {
    width: 100%;
  }
`;

const StyledPortfolio = styled.div`
  display: flex;
  margin: 1rem;
  padding: 1rem;
  justify-content: space-between;
  flex-wrap: wrap;

  @media ${device.sm} {
    flex-direction: column;
  }
`;
