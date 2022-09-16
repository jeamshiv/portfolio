import React from 'react';

export default function HeroSection(props) {
  return (
    <section className="container-fluid" id="head">
      <div id="head2"></div>
      <div className="row">
        <div
          className="col-lg-6 col-md-6 text-center align-self-center order-sm-2 wow bounceInDown js-tilt"
          data-tilt
          data-wow-delay="0.6s">
          <img src={props.image} className="img-fluid banner-image mt-5 mt-sm-0" alt="jeamshiv portfolio header" />
        </div>

        <div className="col-lg-6 col-md-6 align-self-center order-sm-1 wow fadeInLeft" data-wow-delay="1s">
          <div className="pb-5 pl-2 pl-lg-5 pt-lg-5 mt-sm-5">
            <h5 className="pb-0">
              HELLO, IM JEAMSHIV{' '}
              <span className="wave">
                <img src="../assets/hand.png" width="40px" alt="" />
              </span>
            </h5>
            <h1>Web Developer</h1>
            <p>I am React Developer and React Native App Developer.</p>
            <a href="#contact">
              <button className="secondary-button borderRadius30">Contact Me</button>
            </a>
            &nbsp;
            <a href="/assets/resume.pdf" download="Shivam Resume" className="primary-button-outline borderRadius30">
              Get CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
