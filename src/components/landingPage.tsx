import styled from "styled-components";
import { device } from "../styles/breakpoints";
import { Avatar, Typography } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import rownak from "../images/rownak.jpg";
import bg from "../images/bg.jpg";

const nameStyle = {
  color: "#ea484a",
  fontSize: "1.5rem",
  fontWeight: 800,
  margin: "2rem 0 1rem 0",
  letterSpacing: "0.5em",
};

// function stringAvatar(name: string) {
//   return {
//     sx: {
//       border: "1rem solid white",
//       width: 150,
//       height: 150,
//       bgcolor: deepOrange[500],
//     },
//     // children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
//     children: `${name.split(" ")[0]}`,
//   };
// }

export const LandingPage = () => {
  return (
    <StyledLandingPageContainer>
      {/* <Avatar alt="Rownak Jahan" {...stringAvatar("Rownak Jahan")}></Avatar> */}
      <StyledBackground></StyledBackground>
      <StyledContent>
        <Avatar
          alt="Rownak Jahan"
          src={rownak}
          sx={{
            width: 150,
            height: 150,
            border: "1rem solid white",
            bgcolor: deepOrange[500],
          }}
        ></Avatar>
        <Typography sx={nameStyle}>ROWNAK JAHAN</Typography>
        <Typography
          sx={{ color: "#fff", fontSize: "1.25rem", fontWeight: 800 }}
        >
          Full Stack Web Developer
        </Typography>
      </StyledContent>
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

  @media ${device.sm} {
    height: 40rem;
  }
`;

const StyledBackground = styled.div`
  height: 50rem;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(5px);

  @media ${device.sm} {
    height: 40rem;
  }
`;

const StyledContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;
  height: 50rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${device.sm} {
    height: 40rem;
  }
`;

// background-color: #efefef;
// filter: blur(10px);

// width: 100%;
//   height: 50rem;
//   position: absolute;
//   top: 0;
//   left: 0;
//   right: 0;
//   z-index: 1;
