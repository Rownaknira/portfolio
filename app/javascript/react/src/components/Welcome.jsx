import * as React from "react";
import { createRoot } from "react-dom/client";

const Welcome = () => {
  return (
    <div className="container p-3 mb-2 bg-light text-dark">
      <div className="row align-items-center">
        <div className="col-5">
          <img
            src="images/mine.jpg"
            className="rounded-circle mx-auto d-block"
            alt="Rownak"
          />
        </div>
        <div className="col-7">
          <h1>ROWNAK JAHAN</h1>
          <h4>Web Developer</h4>
        </div>
      </div>
    </div>
  );
};

const container = document.getElementById("welcome");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Welcome />
  </React.StrictMode>
);

export default Welcome;
