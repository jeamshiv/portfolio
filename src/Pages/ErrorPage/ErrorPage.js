import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ErrorPage extends Component {
  render() {
    return (
      <>
        <div className="contaier-fluid px-3" style={{ marginTop: 120 }}>
          <div className="container bg-f05d7b px-4 py-5 borderRadius30">
            <div className="text-center">
              <h1 className="display-2 txt-ffffff font-weight-bold">404</h1>
            </div>

            <div className="text-center">
              <h1 className="display-4 font-weight-bold txt-ffffff">Ooops! Page Not Found</h1>
              <h4 className="mt-5 txt-ffffff">Sorry! The Page Your're Looking For Was Not Found or Contact Us.</h4>
              <Link to="/">
                <button className="btn primary-button mt-4">Back Home</button>
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}
