import React, { Component } from 'react';
import FeaturedWork from '../../Components/FeaturedWork/FeaturedWork';
import ContactForm from '../../Components/Contact/ContactForm';

import WOW from 'wowjs';
import Blog from '../../Components/Blog/Blog';
import HeroSection from '../../Components/HeroSection/HeroSection';
import ServicesCard from '../../Components/ServicesCard/ServicesCard';
import ProjectsList from '../../Components/ProjectsList/ProjectsList';
import TechnologiesSection from '../../Components/TechnologiesSection/TechnologiesSection';
import ExperienceCard from '../../Components/ExperienceCard/ExperienceCard';

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
            <ExperienceCard />
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
