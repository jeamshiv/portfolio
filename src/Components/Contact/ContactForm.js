import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import SyncLoader from "react-spinners/SyncLoader";
import WOW from "wowjs";

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUserName] = useState("");

  useEffect(() => {
    new WOW.WOW({
      live: false,
    }).init();
  }, []);

  const renderContactCard = (icon, title, des) => {
    return (
      <div className="col-12 mt-3 wow">
        <div className="d-flex py-3">
          <div className="mx-3 align-self-center">
            <i className={icon}></i>
          </div>
          <div>
            <h5 className="mb-2">{title}</h5>
            <p>{des}</p>
          </div>
        </div>
      </div>
    );
  };

  const sendMessageHandler = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    localStorage.setItem("userName", username);
  };

  // useEffect(() => {
  //   console.log('getting username', username)
  // }, [username])

  return (
    <>
      <section className="contact container py-5 my-5" id="contact">
        <div className="text-center mb-3">
          <h5>Get in Touch</h5>
          <h1 className="style-title">Contact Me</h1>
        </div>

        <div className="row">
          <div className="col-lg-8 my-3 mb-lg-5 wow bounceInUp">
            <div className="wrapper p-4">
              <p>
                <b>SAY SOMETHING</b>
              </p>

              <form
                method="POST"
                name="PortfolioContactForm"
                className="PortfolioContactForm"
                action="/thank-you"
              >
                <input
                  type="hidden"
                  name="form-name"
                  value="PortfolioContactForm"
                />

                <TextField
                  className="form-control mt-3"
                  name="name"
                  label="Your Name"
                  required
                  onChange={(e) => setUserName(e.target.value)}
                />

                <TextField
                  className="form-control mt-3"
                  name="email"
                  label="Your Email"
                  type="email"
                  required
                />

                <TextField
                  className="form-control mt-3"
                  name="phone"
                  label="Your Phone"
                  type="number"
                  // inputProps={{ maxLength: 10 }}
                  onInput={(e) => {
                    e.target.value = Math.max(0, parseInt(e.target.value))
                      .toString()
                      .slice(0, 10);
                  }}
                  required
                />

                <TextField
                  className="form-control mt-3"
                  label="Message"
                  name="message"
                  multiline
                  rows={4}
                  required
                />

                <div className="mt-5">
                  {isLoading ? (
                    <button className="primary-button px-5">
                      Sending <SyncLoader color="white" size={10} margin={3} />
                    </button>
                  ) : (
                    <button
                      className="primary-button"
                      onClick={() => sendMessageHandler()}
                    >
                      Send Message
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="row px-4">
              {renderContactCard(
                "fas fa-map-marker-alt",
                "My Address",
                "Faridabad Haryana"
              )}
              {renderContactCard(
                "fas fa-phone-alt",
                "My Phone",
                "+91 8750303073"
              )}
              {renderContactCard(
                "far fa-envelope-open",
                "My Email",
                "jeamshiv@gmail.com"
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
