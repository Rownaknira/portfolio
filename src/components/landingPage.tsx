import styled from "styled-components";
import { device } from "../styles/breakpoints";
import { Avatar, Typography } from "@mui/material";
import { deepOrange } from "@mui/material/colors";

const nameStyle = {
  color: "#ea484a",
  fontSize: "1.5rem",
  fontWeight: 800,
  margin: "2rem 0 1rem 0",
};

function stringAvatar(name: string) {
  return {
    sx: {
      border: "1rem solid white",
      width: 150,
      height: 150,
      bgcolor: deepOrange[500],
    },
    // children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    children: `${name.split(" ")[0]}`,
  };
}

export const LandingPage = () => {
  return (
    <StyledLandingPageContainer>
      <Avatar alt="Rownak Jahan" {...stringAvatar("Rownak Jahan")}></Avatar>
      <Typography variant="h1" sx={nameStyle}>
        ROWNAK JAHAN
      </Typography>
      <Typography>Full Stack Web Developer</Typography>
    </StyledLandingPageContainer>
  );
};

const StyledLandingPageContainer = styled.div`
  position: relative;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  height: 50rem;
  background-color: #efefef;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${device.sm} {
    height: 40rem;
  }
`;
