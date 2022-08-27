import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { AllProjectsData } from "../../MemoryData/ProjectsData";

import WOW from "wowjs";

export default class Portfolio extends Component {
  state = {
    portfolioData: [],
  };

  componentDidMount() {
    new WOW.WOW({
      live: false,
    }).init();

    this.setState({ portfolioData: AllProjectsData });
  }

  render() {
    return (
      <>
        <div
          className="container-fluid gradientBackgroundPrimary p-4 py-5"
          style={{ marginTop: 80 }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 wow fadeInLeft">
                <p className="text-light">Recent Projects</p>
                <h1 className="text-light display-4 font-weight-bold">
                  Portfolio Projects
                </h1>
                <p className="text-light mt-4">
                  Here are my some of Projects which are created by me. I always
                  love the modern technologies.
                </p>
                <div className="text-center my-4">
                  <button
                    className="wow heartBeat btn primary-button"
                    data-wow-delay="1s"
                  >
                    Let's Talk Now
                  </button>
                </div>
              </div>

              <div
                className="col-lg-6 wow fadeInRight"
                data-wow-delay="0.6s"
                style={{
                  backgroundImage: "url(../assets/verticaleSquareShape.png)",
                  backgroundPosition: "right",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="text-center px-4">
                  <img
                    src="../assets/1.png"
                    className="img-fluid"
                    alt="banner screen"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="px-3 mt-5 py-5">
          <div className="text-center mb-3">
            <h5>Portfolio</h5>
            <h1 className="style-title">My Projects</h1>
          </div>
          <div className="row">
            {this.state.portfolioData.map((item, key) => (
              <div
                key={key}
                className="col-lg-4 col-md-6 portfolioInfoCardWrapper mt-3 wow fadeInUp"
                data-wow-duration={key + 0.2 + "s"}
              >
                <div style={{ position: "relative" }}>
                  <img
                    src={item.headerImage}
                    className="img-fluid"
                    alt="header "
                  />
                </div>
                <div className="py-2 w-75 borderRadius12 portfolioInfoCard">
                  <p className="text-secondary mb-1 text-center">{item.type}</p>

                  <NavLink to={"/website/" + item.projectId}>
                    <h4 className="text-center txt-595959">{item.title}</h4>
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        </section>
      </>
    );
  }
}
