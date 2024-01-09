import * as React from "react";
// import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
// import CardActions from "@mui/material/CardActions";
// import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
// import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link, Tooltip, Grid, List } from "@mui/material";
import { FeatureList } from "./List";
import rails from "../images/rails.png";
import reactjs from "../images/reactjs2.png";
import github from "../images/github.png";
import swagger from "../images/swagger.png";
import mysql from "../images/mysql.jpg";
import mui from "../images/mui.png";
import shopify from "../images/shopify.png";
import ec2 from "../images/ec2.png";
import redshift from "../images/redshift2.png";
import s3 from "../images/s3.png";
import tsc from "../images/typescript.png";
import amplify from "../images/amplify.png";
import pg from "../images/pg.png";
import stimulus from "../images/stimulus.png";
import jquery from "../images/jQuery.png";
import nextjs from "../images/nextjs.png";
import bootstrap from "../images/boostrap5.png";

const cardStyle = {
  // minWidth: "24rem",
  // maxWidth: "40rem",
  // width: "50rem",
  flexBasis: "100%",
  flexShrink: 0,
  margin: "0 2rem 2rem 0",
};

const avatarStyle = {
  border: "1px solid white",
  width: "3rem",
  height: "3rem",
  margin: "0.25rem",
};

const descStyle = {
  paddingTop: "1.5rem",
  whiteSpace: "pre-wrap",
  // whiteSpace: "-moz-pre-wrap",
  // whiteSpace: "-pre-wrap",
  // whiteSpace: "-o-pre-wrap",
  wordWrap: "break-word",
};

// interface ExpandMoreProps extends IconButtonProps {
//   expand: boolean;
// }

// const ExpandMore = styled((props: ExpandMoreProps) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
//   marginLeft: "auto",
//   transition: theme.transitions.create("transform", {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

type Props = {
  avatarName: string;
  projectName: string;
  projectTitle: string;
  projectImageName: string;
  projectDescription: string;
  projectLink: string;
};

export const MyCard = (props: Props) => {
  // const [expanded, setExpanded] = React.useState(false);

  // const handleExpandClick = () => {
  //   setExpanded(!expanded);
  // };

  return (
    <Card sx={cardStyle}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="project">
            {props.avatarName}
          </Avatar>
        }
        title={props.projectName}
        subheader={props.projectTitle}
        sx={{ marginBottom: 3 }}
      />
      <CardMedia
        component="img"
        height="350"
        image={props.projectImageName}
        alt={props.projectImageName}
        sx={{ objectFit: "fill" }}
      />

      <CardContent>
        <Typography variant="body2" color="text.primary" sx={descStyle}>
          {props.projectDescription}
        </Typography>
      </CardContent>
      {/* <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions> */}
      {/* <Collapse in={expanded} timeout="auto" unmountOnExit> */}
      <CardContent>
        <Typography paragraph>
          <Typography
            variant="body2"
            sx={{ color: "#ea484a", fontWeight: 700 }}
          >
            PROJECT:
          </Typography>
          <Link href={props.projectLink} underline="none">
            {props.projectLink}
          </Link>
        </Typography>

        <Typography
          variant="body2"
          sx={{ color: "#ea484a", fontWeight: 700, marginBottom: "0.5rem" }}
        >
          TECHNOLOGY STACK:
        </Typography>
        <Typography component="div">
          {props.projectName === "Zytrack" && (
            <Typography
              component="div"
              sx={{ display: "flex", flexWrap: "wrap" }}
            >
              <Tooltip title="Ruby on Rails">
                <Avatar
                  alt="Ruby on Rails"
                  src={rails}
                  sx={avatarStyle}
                ></Avatar>
              </Tooltip>
              <Tooltip title="PostgreSQL">
                <Avatar alt="PostgreSQL" src={pg} sx={avatarStyle}></Avatar>
              </Tooltip>
              <Tooltip title="Boostrap CSS">
                <Avatar
                  alt="Bootstrap CSS"
                  src={bootstrap}
                  sx={avatarStyle}
                ></Avatar>
              </Tooltip>
              <Tooltip title="Github">
                <Avatar alt="Github" src={github} sx={avatarStyle}></Avatar>
              </Tooltip>
              <Tooltip title="Stimulus js">
                <Avatar
                  alt="Stimulus js"
                  src={stimulus}
                  sx={avatarStyle}
                ></Avatar>
              </Tooltip>
              <Tooltip title="jQuery">
                <Avatar alt="jQuery" src={jquery} sx={avatarStyle}></Avatar>
              </Tooltip>
            </Typography>
          )}
          {props.projectName === "Booster" && (
            <Typography
              component="div"
              sx={{ display: "flex", flexWrap: "wrap" }}
            >
              <Tooltip title="Ruby on Rails">
                <Avatar
                  alt="Ruby on Rails"
                  src={rails}
                  sx={avatarStyle}
                ></Avatar>
              </Tooltip>
              <Tooltip title="React.js">
                <Avatar alt="React.js" src={reactjs} sx={avatarStyle}></Avatar>
              </Tooltip>
              <Tooltip title="Typescript">
                <Avatar alt="Typescript" src={tsc} sx={avatarStyle}></Avatar>
              </Tooltip>
              <Tooltip title="Next.js">
                <Avatar alt="Next.js" src={nextjs} sx={avatarStyle}></Avatar>
              </Tooltip>
              <Tooltip title="Material UI">
                <Avatar alt="Material UI" src={mui} sx={avatarStyle}></Avatar>
              </Tooltip>
              <Tooltip title="Shopify">
                <Avatar alt="Shopify" src={shopify} sx={avatarStyle}></Avatar>
              </Tooltip>
              <Tooltip title="MySQL">
                <Avatar alt="mysql" src={mysql} sx={avatarStyle}></Avatar>
              </Tooltip>
              <Tooltip title="Amazon Redshift">
                <Avatar alt="redshift" src={redshift} sx={avatarStyle}></Avatar>
              </Tooltip>
              <Tooltip title="Amazon Amplify">
                <Avatar alt="Amplify" src={amplify} sx={avatarStyle}></Avatar>
              </Tooltip>
              <Tooltip title="Amazon EC2">
                <Avatar alt="ec2" src={ec2} sx={avatarStyle}></Avatar>
              </Tooltip>
              <Tooltip title="Amazon S3">
                <Avatar alt="S3" src={s3} sx={avatarStyle}></Avatar>
              </Tooltip>
              <Tooltip title="Github">
                <Avatar alt="Github" src={github} sx={avatarStyle}></Avatar>
              </Tooltip>
            </Typography>
          )}
          {props.projectName === "Harutaka" && (
            <Typography
              component="div"
              sx={{ display: "flex", flexWrap: "wrap" }}
            >
              <Tooltip title="Ruby on Rails">
                <Avatar
                  alt="Ruby on Rails"
                  src={rails}
                  sx={avatarStyle}
                ></Avatar>
              </Tooltip>
              <Tooltip title="React.js">
                <Avatar alt="React.js" src={reactjs} sx={avatarStyle}></Avatar>
              </Tooltip>
              <Tooltip title="Typescript">
                <Avatar alt="Typescript" src={tsc} sx={avatarStyle}></Avatar>
              </Tooltip>
              <Tooltip title="Material UI">
                <Avatar alt="Material UI" src={mui} sx={avatarStyle}></Avatar>
              </Tooltip>
              <Tooltip title="MySQL">
                <Avatar alt="mysql" src={mysql} sx={avatarStyle}></Avatar>
              </Tooltip>
              <Tooltip title="Swagger Open API">
                <Avatar alt="swagger" src={swagger} sx={avatarStyle}></Avatar>
              </Tooltip>
              <Tooltip title="Github">
                <Avatar alt="Github" src={github} sx={avatarStyle}></Avatar>
              </Tooltip>
            </Typography>
          )}
          <Typography
            variant="body2"
            sx={{ color: "#ea484a", fontWeight: 700, marginTop: "1rem" }}
          >
            FEATURES:
          </Typography>
          {props.projectName === "Zytrack" && (
            <Grid item xs={12} md={6}>
              <List>
                <FeatureList text="Organization can track work and break time of the employees" />
                <FeatureList text="Organizational project management" />
                <FeatureList text="Convenient absence management" />
                <FeatureList text="Expense management" />
                <FeatureList text="Automatically feed and backfeed Bexio data" />
              </List>
            </Grid>
          )}
          {props.projectName === "Booster" && (
            <Grid item xs={12} md={6}>
              <List>
                <FeatureList text="Automatic email delivery based on predefined schedule. Manual email delivery support is also available" />
                <FeatureList text="LINE message delivery to target customers" />
                <FeatureList text="Optimized SQL support to reach the target customers" />
                <FeatureList text="Shopify booster app for shopify merchandizers to boost sales" />
              </List>
            </Grid>
          )}
          {props.projectName === "Harutaka" && (
            <Grid item xs={12} md={6}>
              <List>
                <FeatureList text="Video screening and online interviews" />
                <FeatureList text="Different organizations can set different questionnaires for their candidates" />
                <FeatureList text="Automatic recording collection" />
                <FeatureList text="Post interview feedback report" />
              </List>
            </Grid>
          )}
        </Typography>
      </CardContent>
      {/* </Collapse> */}
    </Card>
  );
};
