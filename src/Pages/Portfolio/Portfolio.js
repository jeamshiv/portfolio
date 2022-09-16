import React, { Component } from 'react';
import WOW from 'wowjs';
import ProjectsList from '../../Components/ProjectsList/ProjectsList';

export default class Portfolio extends Component {
  componentDidMount() {
    new WOW.WOW({
      live: false
    }).init();
  }

  render() {
    return (
      <>
        <div className="container-fluid gradientBackgroundPrimary p-4 py-5" style={{ marginTop: 80 }}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 wow fadeInLeft">
                <p className="text-light">Recent Projects</p>
                <h1 className="text-light display-4 font-weight-bold">Portfolio Projects</h1>
                <p className="text-light mt-4">
                  Here are my some of Projects which are created by me. I always love the modern technologies.
                </p>
                <div className="text-center my-4">
                  <button className="wow heartBeat btn primary-button" data-wow-delay="1s">
                    Let's Talk Now
                  </button>
                </div>
              </div>

              <div
                className="col-lg-6 wow fadeInRight"
                data-wow-delay="0.6s"
                style={{
                  backgroundImage: 'url(../assets/verticaleSquareShape.png)',
                  backgroundPosition: 'right',
                  backgroundRepeat: 'no-repeat'
                }}>
                <div className="text-center px-4">
                  <img src="../assets/1.png" className="img-fluid" alt="banner screen" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <ProjectsList />
      </>
    );
  }
}
