import "./App.css";
import { LandingPage } from "./components/landingPage";
import BackToTop from "./components/backToTop";
import React from "react";
import { AboutMyself } from "./components/aboutMyself";
import { MyEducation } from "./components/myEducation";
import { WorkPortfolio } from "./components/workPortfolio";

function App() {
  return (
    <BackToTop>
      <React.Fragment>
        <LandingPage />
        <AboutMyself />
        <MyEducation />
        <WorkPortfolio />
      </React.Fragment>
    </BackToTop>
  );
}

export default App;
