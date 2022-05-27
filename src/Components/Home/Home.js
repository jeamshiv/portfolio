import React, { Component } from "react";
import { getAllBlogs } from "../../ApiConnection/Blog/Blog";
import { NavLink } from "react-router-dom";
// import Slider from "react-slick";
import FeaturedWork from "../Project/FeaturedWork";
import ContactForm from "../Contact/ContactForm";
import { AllProjectsData } from "../../MemoryData/ProjectsData";

import WOW from "wowjs";
import { Link } from "react-router-dom";

export default class Home extends Component {
  state = {
    isLoading: false,
    yourName: "",
    portfolioData: [],
  };

  componentDidMount() {
    getAllBlogs(this.getAllBlogsCallback);

    this.setState({ portfolioData: AllProjectsData });

    new WOW.WOW({
      live: false,
    }).init();
  }

  getAllBlogsCallback = (latestPost) => {
    if (latestPost.status === 200) {
      // response.json().then(data=>{
      console.log("getting blog data", latestPost);
      // })
    } else {
      console.log("unable to gett the data");
    }
  };

  renderWhatIDo = (icon, title, des) => {
    return (
      <div className="col-lg-6 d-flex mt-3 align-items-center justify-content-center">
        <div>
          <img src={icon} className="img-responsive" alt="What I do" />
        </div>
        <div className="ml-3">
          <h4>{title}</h4>
          <p>{des}</p>
        </div>
      </div>
    );
  };

  renderExperience = (company, duration, des, animeDuration) => {
    return (
      <div
        className="col-12 mt-3 wow bounceInLeft"
        data-wow-duration={animeDuration}
      >
        <div className="d-flex py-3">
          <div className="mx-4 align-self-center">
            <i className="fas fa-code"></i>
          </div>
          <div className="pr-1 pr-sm-2">
            <h5>{company}</h5>
            <p className="text-secondary mb-1">{duration}</p>
            <p className="pr-lg-4">{des}</p>
          </div>
        </div>
      </div>
    );
  };

  renderTimeline = (duration, title, des) => {
    return (
      <li className="event" data-date={duration}>
        <h3>{title}</h3>
        <p>{des}</p>
      </li>
    );
  };

  renderServicesCard = (classname, icon, title, des, animeDelay) => {
    return (
      <div className="col-lg-4 wow fadeInUp" data-wow-delay={animeDelay}>
        <div className={classname}>
          <img src={icon} className="img-fluid pb-2" alt="Services" />
          <h4>{title}</h4>
          <p>{des}</p>
        </div>
      </div>
    );
  };

  render() {
    // const protfolioSlick = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     // centerMode: true,
    //     autoplay: true,
    //     autoplaySpeed: 3000,
    //     arrows: false,
    //   };

    return (
      <>
        <section className="container-fluid" id="head">
          <div id="head2"></div>
          <div className="row">
            <div
              className="col-lg-6 col-md-6 text-center align-self-center order-sm-2 wow bounceInDown"
              data-wow-delay="0.6s"
            >
              <img
                src="../assets/boywithcomputerpink.png"
                className="img-fluid banner-image mt-5 mt-sm-0"
                alt="jeamshiv portfolio header"
              />
            </div>

            <div
              className="col-lg-6 col-md-6 align-self-center order-sm-1 wow fadeInLeft"
              data-wow-delay="1s"
            >
              <div className="pb-5 pl-2 pl-lg-5 pt-lg-5 mt-sm-5">
                <h5 className="pb-0">
                  HELLO, IM JEAMSHIV{" "}
                  <span className="wave">
                    <img src="../assets/hand.png" width="40px" alt="" />
                  </span>
                </h5>
                <h1>Web Developer</h1>
                <p>I am React Developer and React Native App Developer.</p>
                <button className="primary-button">
                  <Link
                    to="/#contact"
                    className="txt-ffffff text-decoration-none"
                  >
                    Contact Me
                  </Link>
                </button>{" "}
                &nbsp;
                <a
                  href="/assets/resume.pdf"
                  download="Shivam Resume"
                  className="alternative-button text-light"
                >
                  Get CV
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="container my-5 py-4 bg-light" style={{borderRadius: 12}}>
                <div className="text-center mb-5">
                    <h5>WHAT I DO</h5>
                    <h1 className="style-title">SPECILIZING IN</h1>
                </div>
                <div className="row px-lg-5 px-2">

                    {this.renderWhatIDo('https://via.placeholder.com/80x80.png?text=ICON', 'Web Design', 'Landing Pages, User Flow, Wireframing. Prototyping. Mobile App Design.')}
                    {this.renderWhatIDo('https://via.placeholder.com/80x80.png?text=ICON', 'Development', 'Landing Pages, User Flow, Wireframing. Prototyping. Mobile App Design.')}
                    {this.renderWhatIDo('https://via.placeholder.com/80x80.png?text=ICON', 'Clean Code', 'Landing Pages, User Flow, Wireframing. Prototyping. Mobile App Design.')}
                    {this.renderWhatIDo('https://via.placeholder.com/80x80.png?text=ICON', 'Free SEO', 'Landing Pages, User Flow, Wireframing. Prototyping. Mobile App Design.')}
                    {this.renderWhatIDo('https://via.placeholder.com/80x80.png?text=ICON', 'Fully Responsive', 'Landing Pages, User Flow, Wireframing. Prototyping. Mobile App Design.')}
                    {this.renderWhatIDo('https://via.placeholder.com/80x80.png?text=ICON', 'Custome Support', 'Landing Pages, User Flow, Wireframing. Prototyping. Mobile App Design.')}
                    
                </div>
            </section> */}

        <section className="container my-5 qualification">
          <div className="text-center mb-3">
            <h5>QUALIFICATION</h5>
            <h1 className="style-title">MY EDUCATION</h1>
          </div>
          <div className="row">
            <div className="col-md-6 pr-lg-5 pr-md-5 pt-4">
              <div className="text-center mt-5">
                <h3>My Experience</h3>
              </div>
              <div className="row my-4 experience_card">
                {this.renderExperience(
                  "ScaleupAlly",
                  "Jr. Software Engineer | Dec 2021 - Present",
                  "The passionate mind behind MERN Stack.",
                  "0.3s"
                )}
                {this.renderExperience(
                  "Cyberflow",
                  "Web Developer | May - Dec 2021",
                  "Working with lastest technologies, UI, React, and React Native app development.",
                  "0.6s"
                )}
                {this.renderExperience(
                  "Innovatia",
                  "Web Developer | Oct - Nov 2020",
                  "I was Working there as PHP , WordPress & Frontend Web Developer.",
                  "1.2s"
                )}
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-body pt-4">
                  <div id="content">
                    <ul className="timeline">
                      {this.renderTimeline(
                        "2018-2021",
                        "BA Graduation",
                        "I have recently completed by Graduation from IGNOU"
                      )}
                      {this.renderTimeline(
                        "2018-2020",
                        "It-Expert | Diploma in IT",
                        "I Joined Arth Institute to get the fundamental knowledge of Web development."
                      )}
                      {this.renderTimeline(
                        "2018",
                        "12th Passed | CBSE Board",
                        "I have completed by 12th from Government School"
                      )}
                      {this.renderTimeline(
                        "2016",
                        "10th Passed | CBSE Board",
                        "I have completed by 10th from same Government School"
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container services">
          <div className="text-center mb-3">
            <h5>Good Skills in</h5>
            <h1 className="style-title">Services</h1>
          </div>
          <div className="row text-center">
            {this.renderServicesCard(
              "service1 p-5 m-4",
              "assets/logo-branding.png",
              "UI/UX Design",
              "Design is an important aspect in todays digital era and the design of your website or app can help your brand or businesss. We help our clients with UI and UX Design Growth Marketing Mobile & Web Apps.",
              "0.6s"
            )}
            {this.renderServicesCard(
              "service2 p-5 m-4",
              "assets/web-develpment.png",
              "Web Development",
              "Our custom web development services include both front-end and back-end development. Whether it is enhancing an existing application or new one, my developers team are available.",
              "0.7s"
            )}
            {this.renderServicesCard(
              "service3 p-5 m-4",
              "assets/app-develpment.png",
              "App Development",
              "We develop mobile apps. My spelialised team of android app development team will come up with the product that user will love to use. We create mobile apps using React Native.",
              "0.8s"
            )}
          </div>
        </section>

        <FeaturedWork />

        <section className="px-3 pt-5">
          <div className="text-center mb-3">
            <h5>Portfolio</h5>
            <h1 className="style-title">My Projects</h1>
          </div>
          <div className="row">
            {this.state.portfolioData.map((item, key) => (
              <div
                key={key}
                className="col-lg-4 col-md-6 portfolioInfoCardWrapper mt-3 wow fadeInUp"
                data-wow-delay={key / 2 + 0.2 + "s"}
              >
                <div style={{ position: "relative" }}>
                  <img src={item.headerImage} className="img-fluid" alt="" />
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

        <section className="container-fluid technologies my-5 py-5 ">
          <div className="text-center mb-3">
            <h5>I love latest</h5>
            <h1 className="style-title">Technologies</h1>
          </div>
          <div className="row text-center">
            <div className="col-lg-2 col-md-2 col-4 offset-lg-1 offset-md-1 align-self-center">
              <div className="mt-4">
                <img
                  src="assets/technologies/react.png"
                  className="img-fluid"
                  alt="ReactJs"
                />
              </div>
            </div>

            <div className="col-lg-2 col-md-2 col-4 align-self-center">
              <div className="mt-4">
                <img
                  src="assets/technologies/nodejs.png"
                  className="img-fluid"
                  alt="NodeJs"
                />
              </div>
              <div className="mt-4">
                <img
                  src="assets/technologies/mongodb.png"
                  className="img-fluid"
                  alt="Mongodb"
                />
              </div>
            </div>

            <div className="col-lg-2 col-md-2 col-4 align-self-center">
              <div className="mt-4">
                <img
                  src="assets/technologies/html.png"
                  className="img-fluid"
                  alt="html5"
                />
              </div>
              <div className="mt-4">
                <img
                  src="assets/technologies/css.png"
                  className="img-fluid"
                  alt="css"
                />
              </div>
              <div className="mt-4">
                <img
                  src="assets/technologies/jquery.png"
                  className="img-fluid"
                  alt="jQuery"
                />
              </div>
            </div>

            <div className="col-lg-2 col-md-2 col-4 align-self-center nagetivemargin120">
              <div className="mt-4">
                <img
                  src="assets/technologies/php.png"
                  className="img-fluid"
                  alt="Php"
                />
              </div>
              <div className="mt-4">
                <img
                  src="assets/technologies/mysql.png"
                  className="img-fluid"
                  alt="MySql"
                />
              </div>
            </div>

            <div className="col-lg-2 col-md-2 col-4 align-self-center nagetivemargin120">
              <div className="mt-4">
                <img
                  src="assets/technologies/wordpress.png"
                  className="img-fluid"
                  alt="Wordpress"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="container py-5 my-5">
          <div className="text-center mb-3">
            <h5>Latest Blog</h5>
            <h1 className="style-title">My Blog</h1>
          </div>
          <div className="row" id="blogdata">
            <p style={{ margin: "0 auto" }}>Oops! Connection Error.</p>
          </div>
        </section>

        <ContactForm />
      </>
    );
  }
}
