import styled from "styled-components";
import { device } from "../styles/breakpoints";
import { Typography } from "@mui/material";
import IconLabelTabs from "./tabs";

const titleStyle = {
  color: "#ea484a",
  margin: "2rem",
};

export const MyEducation = () => {
  return (
    <StyledContainer>
      <Typography variant="h5" sx={titleStyle}>
        MORE ABOUT OF ME
      </Typography>
      <IconLabelTabs />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 70%;
  margin: auto;
  @media ${device.sm} {
    width: 100%;
  }
`;
