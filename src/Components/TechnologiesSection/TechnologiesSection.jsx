import React from 'react';

export default function TechnologiesSection() {
  return (
    <section className="container-fluid technologies my-5 py-5">
      <div className="text-center mb-3">
        <h5>I love latest</h5>
        <h1 className="style-title">Technologies</h1>
      </div>
      <div className="row text-center">
        <div className="col-lg-2 col-md-2 col-4 offset-lg-1 offset-md-1 align-self-center">
          <div className="mt-4">
            <img src="assets/technologies/react.png" className="img-fluid" alt="ReactJs" />
          </div>
        </div>

        <div className="col-lg-2 col-md-2 col-4 align-self-center">
          <div className="mt-4">
            <img src="assets/technologies/nodejs.png" className="img-fluid" alt="NodeJs" />
          </div>
          <div className="mt-4">
            <img src="assets/technologies/mongodb.png" className="img-fluid" alt="Mongodb" />
          </div>
        </div>

        <div className="col-lg-2 col-md-2 col-4 align-self-center">
          <div className="mt-4">
            <img src="assets/technologies/html.png" className="img-fluid" alt="html5" />
          </div>
          <div className="mt-4">
            <img src="assets/technologies/css.png" className="img-fluid" alt="css" />
          </div>
          <div className="mt-4">
            <img src="assets/technologies/jquery.png" className="img-fluid" alt="jQuery" />
          </div>
        </div>

        <div className="col-lg-2 col-md-2 col-4 align-self-center nagetivemargin120">
          <div className="mt-4">
            <img src="assets/technologies/php.png" className="img-fluid" alt="Php" />
          </div>
          <div className="mt-4">
            <img src="assets/technologies/mysql.png" className="img-fluid" alt="MySql" />
          </div>
        </div>

        <div className="col-lg-2 col-md-2 col-4 align-self-center nagetivemargin120">
          <div className="mt-4">
            <img src="assets/technologies/wordpress.png" className="img-fluid" alt="Wordpress" />
          </div>
        </div>
      </div>
    </section>
  );
}
