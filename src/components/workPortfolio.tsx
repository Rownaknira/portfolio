import styled from "styled-components";
import { MyCard } from "./Card";
import { Typography } from "@mui/material";
import { device } from "../styles/breakpoints";
import zytrack from "../images/zytrack.png";
import booster from "../images/booster-shopify2.png";
import harutaka from "../images/harutaka.png";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const titleStyle = {
  color: "#ea484a",
  // marginBottom: "0.5rem",
  margin: "2rem",
};

export const WorkPortfolio = () => {
  const slideLeft = () => {
    const slider = document.getElementById("slider");
    if (slider !== null) {
      if (document.documentElement.clientWidth > 1920) {
        slider.scrollLeft = slider?.scrollLeft - 1000;
      } else if (document.documentElement.clientWidth > 1440) {
        slider.scrollLeft = slider?.scrollLeft - 750;
      } else {
        slider.scrollLeft = slider?.scrollLeft - 360;
      }
    }
  };

  const slideRight = () => {
    const slider = document.getElementById("slider");
    if (slider !== null) {
      if (document.documentElement.clientWidth > 1920) {
        slider.scrollLeft = slider?.scrollLeft + 1000;
      } else if (document.documentElement.clientWidth > 1440) {
        slider.scrollLeft = slider?.scrollLeft + 750;
      } else {
        slider.scrollLeft = slider?.scrollLeft + 360;
      }
    }
  };

  return (
    <StyledFullWidthContainer>
      <StyledWorkPortfolioContainer>
        <Typography variant="h5" sx={titleStyle}>
          WORK PORTFOLIO
        </Typography>
        <StyledPortfolio>
          <ChevronLeftIcon
            onClick={slideLeft}
            sx={{
              fontSize: 30,
              borderRadius: 10,
              backgroundColor: "#ea484a",
              color: "white",
            }}
            style={{ cursor: "pointer" }}
          />
          <StyledSlider id="slider" className="slider">
            <MyCard
              avatarName="Z"
              projectName="Zytrack"
              projectTitle="Time Tracking App"
              projectImageName={zytrack}
              projectDescription="This software is specially used for tracking time. Any company willing to track work hours of its employees can use this app. Apart from time tracking, this app can be used for leave management, extra hours and overtime management, project management, integration with other applications like Bexio and so on."
              projectLink="https://zytrack.ch/"
            />
            <MyCard
              avatarName="B"
              projectName="Booster"
              projectTitle="Marketing App"
              projectImageName={booster}
              projectDescription="This app has been mainly built to boost sales of e-commerce solutions. Through its intelligence, it finds out its target customers and specific time at which there is a high possibility of buying products and sends different promotional SMS and email to those customers. Email and SMS can be both manually and automatically triggered"
              projectLink="https://relic.co.jp/services/booster/"
            />
            <MyCard
              avatarName="H"
              projectName="Harutaka"
              projectTitle="Recruitment Management App"
              projectImageName={harutaka}
              projectDescription="Harutaka is a recruitment management system. Basically it is used for candidate management, interview scheduling and exam question preparation, online interview, interview assessment and so on. Interview can also be recorded for future analysis."
              projectLink="https://harutaka.jp/"
            />
          </StyledSlider>

          <ChevronRightIcon
            onClick={slideRight}
            sx={{
              fontSize: 30,
              borderRadius: 10,
              backgroundColor: "#ea484a",
              color: "white",
            }}
            color="primary"
            style={{ cursor: "pointer" }}
          />
        </StyledPortfolio>
      </StyledWorkPortfolioContainer>
    </StyledFullWidthContainer>
  );
};

const StyledSlider = styled.div`
  width: 68%;
  margin: auto;
  white-space: nowrap;
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  @media ${device.sm} {
    width: 90%;
  }
`;

const StyledFullWidthContainer = styled.div`
  background-color: #fafafa;
  width: 100%;
`;

const StyledWorkPortfolioContainer = styled.div`
  width: 70%;
  margin: auto;
  padding-top: 2rem;

  @media ${device.sm} {
    width: 100%;
  }
`;

const StyledPortfolio = styled.div`
  width: 100%;
  margin: 1rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${device.sm} {
    margin: 0;
    padding: 0;
  }
`;

// const StyledPortfolio = styled.div`
//   display: flex;
//   margin: 1rem;
//   padding: 1rem;
//   justify-content: space-between;
//   flex-wrap: wrap;

//   @media ${device.sm} {
//     flex-direction: column;
//   }
// `;
