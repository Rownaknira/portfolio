import { Typography, Divider, IconButton, Button, Link } from "@mui/material";
import styled from "styled-components";
import { device } from "../styles/breakpoints";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import FileDownloadRoundedIcon from "@mui/icons-material/FileDownloadRounded";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import avatar from "../images/avatar4.png";

const titleStyle = {
  color: "#ea484a",
  marginBottom: "0.5rem",
};

const dividerStyle = {
  margin: "1.5rem 0",
};

const downloadButtonStyle = {
  backgroundColor: "#ea484a",
  fontWeight: 800,
  "&:hover": {
    backgroundColor: "#d1344b",
  },
};

export const AboutMyself = () => {
  return (
    <StyledMyselfContainer>
      <StyledDescription>
        <Typography variant="h5" sx={titleStyle}>
          ABOUT MYSELF
        </Typography>
        <Typography variant="body2">I'm a Full Stack Web Developer</Typography>
        <Divider sx={dividerStyle} />
        <Typography variant="body2">
          Hi there. I am Rownak Jahan, a full stack web developer having
          specialization in Ruby on Rails, React JS and Typescript. I have 9
          years of experience in Web Development. I Love to learn something new
          which might contribute to improve myself in a very consistent and
          constructive way. Looking for a challenging role in the IT industry,
          which offers a competitive, performance based environment, nourishes
          the talents, and explores inherent abilities. Strong desire to lead an
          honest life with dignity.
        </Typography>
        <StyledDetails>
          <StyledInfo>
            <IconButton
              aria-label="avatar"
              sx={{ color: "#ea484a" }}
              className="icon-button"
            >
              <AccountCircleSharpIcon />
            </IconButton>
            <Typography variant="body2" sx={{ paddingLeft: "0.5rem" }}>
              Name: Rownak Jahan
            </Typography>
          </StyledInfo>
          <StyledInfo>
            <IconButton
              aria-label="avatar"
              sx={{ color: "#ea484a" }}
              className="icon-button"
            >
              <CalendarMonthRoundedIcon />
            </IconButton>
            <Typography variant="body2" sx={{ paddingLeft: "0.5rem" }}>
              Date of Birth: 30 December, 1991
            </Typography>
          </StyledInfo>
          <StyledInfo>
            <IconButton
              aria-label="avatar"
              sx={{ color: "#ea484a" }}
              className="icon-button"
            >
              <EmailRoundedIcon />
            </IconButton>
            <Typography variant="body2" sx={{ paddingLeft: "0.5rem" }}>
              Email: rownaknira@gmail.com
            </Typography>
          </StyledInfo>
          <StyledInfo>
            <IconButton
              aria-label="avatar"
              sx={{ color: "#ea484a" }}
              className="icon-button"
            >
              <LocalPhoneRoundedIcon />
            </IconButton>
            <Typography variant="body2" sx={{ paddingLeft: "0.5rem" }}>
              Contact No.: +880 1997557571
            </Typography>
          </StyledInfo>
          <StyledInfo>
            <IconButton
              aria-label="avatar"
              sx={{ color: "#ea484a" }}
              className="icon-button"
            >
              <LinkedInIcon />
            </IconButton>
            <Typography variant="body2" sx={{ paddingLeft: "0.5rem" }}>
              LinkedIn:
              <Link
                href="https://www.linkedin.com/in/rownak-jahan-9a9a1782/"
                underline="none"
              >
                https://www.linkedin.com/in/rownak-jahan-9a9a1782
              </Link>
            </Typography>
          </StyledInfo>

          <StyledInfo>
            <IconButton
              aria-label="avatar"
              sx={{ color: "#ea484a" }}
              className="icon-button"
            >
              <GitHubIcon />
            </IconButton>
            <Typography variant="body2" sx={{ paddingLeft: "0.5rem" }}>
              Github:
              <Link href="https://github.com/Rownaknira" underline="none">
                https://github.com/Rownaknira
              </Link>
              <br />
              <Link href="https://github.com/Rownak-jahan" underline="none">
                https://github.com/Rownak-jahan
              </Link>
            </Typography>
          </StyledInfo>
          <StyledInfo>
            <IconButton
              aria-label="avatar"
              sx={{ color: "#ea484a" }}
              className="icon-button"
            >
              <LocationOnRoundedIcon />
            </IconButton>
            <Typography variant="body2" sx={{ paddingLeft: "0.5rem" }}>
              Location: Dhaka, Bangladesh
            </Typography>
          </StyledInfo>
          <StyledInfo>
            <IconButton
              aria-label="avatar"
              sx={{ color: "#ea484a" }}
              className="icon-button"
            >
              <SchoolRoundedIcon />
            </IconButton>
            <Typography variant="body2" sx={{ paddingLeft: "0.5rem" }}>
              Degree: BSc. in Computer Science & Engineering
            </Typography>
          </StyledInfo>
        </StyledDetails>
        <Button
          variant="contained"
          endIcon={<FileDownloadRoundedIcon />}
          sx={downloadButtonStyle}
          href="Curriculum vitae - Rownak Jahan.pdf"
          target="_blank"
        >
          DOWNLOAD CV
        </Button>
      </StyledDescription>
      <StyledImageContainer>
        {/* <StyledBackgroundDiv></StyledBackgroundDiv> */}
        <StyledImage src={avatar}></StyledImage>
      </StyledImageContainer>
    </StyledMyselfContainer>
  );
};

const StyledMyselfContainer = styled.div`
  width: 70%;
  margin: auto;
  display: flex;
  @media ${device.sm} {
    width: 100%;
    flex-direction: column;
  }
`;

const StyledImage = styled.img`
  width: 30rem;
  height: 28rem;

  @media ${device.sm} {
    width: 22rem;
    height: 16.25rem;
  }
`;

// const StyledBackgroundDiv = styled.div`
//   width: 22rem;
//   height: 28rem;
//   margin-top: 1.5rem;
//   position: absolute;
//   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
// `;

const StyledImageContainer = styled.div`
  margin: 2rem;

  @media ${device.sm} {
    height: 17rem;
  }
`;

const StyledDescription = styled.div`
  margin: 2rem;
`;

const StyledDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 1rem;
`;

const StyledInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1.5rem;
  margin-bottom: 1.5rem;
`;
