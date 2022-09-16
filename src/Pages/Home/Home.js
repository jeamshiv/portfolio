import React, { Component } from 'react';
import FeaturedWork from '../../Components/FeaturedWork/FeaturedWork';
import ContactForm from '../../Components/Contact/ContactForm';

import WOW from 'wowjs';
import Blog from '../../Components/Blog/Blog';
import HeroSection from '../../Components/HeroSection/HeroSection';
import ServicesCard from '../../Components/ServicesCard/ServicesCard';
import ProjectsList from '../../Components/ProjectsList/ProjectsList';
import TechnologiesSection from '../../Components/TechnologiesSection/TechnologiesSection';

export default class Home extends Component {
  state = {
    isLoading: false,
    yourName: ''
  };

  componentDidMount() {
    new WOW.WOW({
      live: false
    }).init();
  }

  renderExperience = (company, duration, des, animeDuration) => {
    return (
      <div className="col-12 mt-3 wow bounceInLeft" data-wow-duration={animeDuration}>
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
        <HeroSection image="../assets/boywithcomputerpink.png" />

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
                  'ScaleupAlly',
                  'Jr. Software Engineer | Dec 2021 - Present',
                  'The passionate mind behind MERN Stack.',
                  '0.3s'
                )}
                {this.renderExperience(
                  'Cyberflow',
                  'Web Developer | May - Dec 2021',
                  'Working with lastest technologies, UI, React, and React Native app development.',
                  '0.6s'
                )}
                {this.renderExperience(
                  'Innovatia',
                  'Web Developer | Oct - Nov 2020',
                  'I was Working there as PHP , WordPress & Frontend Web Developer.',
                  '1.2s'
                )}
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-body pt-4">
                  <div id="content">
                    <ul className="timeline">
                      {this.renderTimeline(
                        '2018-2021',
                        'BA Graduation',
                        'I have recently completed by Graduation from IGNOU'
                      )}
                      {this.renderTimeline(
                        '2018-2020',
                        'It-Expert | Diploma in IT',
                        'I Joined Arth Institute to get the fundamental knowledge of Web development.'
                      )}
                      {this.renderTimeline(
                        '2018',
                        '12th Passed | CBSE Board',
                        'I have completed by 12th from Government School'
                      )}
                      {this.renderTimeline(
                        '2016',
                        '10th Passed | CBSE Board',
                        'I have completed by 10th from same Government School'
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
            <ServicesCard
              classname="service1"
              icon="assets/logo-branding.png"
              title="UI/UX Design"
              des="Design is an important aspect in todays digital era and the design of your website or app can help your brand or businesss. We help our clients with UI and UX Design Growth Marketing Mobile & Web Apps."
              animeDelay="0.6s"
            />

            <ServicesCard
              classname="service2"
              icon="assets/web-develpment.png"
              title="Web Development"
              des="Our custom web development services include both front-end and back-end development. Whether it is enhancing an existing application or new one, my developers team are available."
              animeDelay="0.7s"
            />

            <ServicesCard
              classname="service3"
              icon="assets/app-develpment.png"
              title="App Development"
              des="We develop mobile apps. My spelialised team of android app development team will come up with the product that user will love to use. We create mobile apps using React Native."
              animeDelay="0.6s"
            />
          </div>
        </section>

        <FeaturedWork />
        <ProjectsList />
        <TechnologiesSection />
        <Blog />
        <ContactForm />
      </>
    );
  }
}
