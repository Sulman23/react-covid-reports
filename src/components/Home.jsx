import React from "react";
import covid from "../images/covid.gif";
import logo from "../images/logo.png";

const Home = () => {
  return (
    <>
      <div className="row">
        <div className="col-md-12 mx-auto text-center mt-3">
          <h1>
            <span className="text-info">SA</span> Lab
          </h1>
          <h3>Put on Mask and Stay Away</h3>
          <img className="home-logo" src={logo} alt="logo" />
          {/* <img src={covid} alt="covid" /> */}
        </div>
      </div>
    </>
  );
};

export default Home;
