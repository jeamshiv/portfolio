import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'


import WOW from 'wowjs'

export default class Footer extends Component {


    // componentDidMount() {
    //     new WOW.WOW({
    //         live:false
    //     }).init();
    // }

    render() {
        return (
            <>
              <div className="mt-lg-5" style={{position: 'relative'}}>
                <svg xmlns="http://www.w3.org/2000/svg" style={{marginBottom: '-20px'}} viewBox="0 0 1440 260">
                <path fill="#5f19dd" fillOpacity="1" d="M0,128L80,149.3C160,171,320,213,480,208C640,203,800,149,960,128C1120,107,1280,117,1360,122.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                </svg>


                <footer className="container-fluid py-5">
                    


                    <div className="row text-right pr-lg-4 pr-md-4">
                        <div className="col-lg-6 col-md-6 offset-lg-6 offset-md-6">
                            <h1>Jeamshiv</h1>

                            <div className="my-4">
                                <NavLink to="/" className="mr-2">Home</NavLink>
                                <a href="" className="mr-2">About me</a>
                                <a href="" className="mr-2">Service</a>
                            </div>


                            <div>
                                <i className="fab fa-facebook mr-3"></i>
                                <i className="fab fa-instagram mr-3"></i>
                                <i className="fab fa-linkedin mr-3"></i>
                                <i className="fab fa-github mr-3"></i>
                                <i className="fab fa-blogger mr-3"></i>
                            </div>
                        </div>
                    </div>
                    


                </footer>


                <img src="../assets/education.png" className="img-fluid footerimg" width="50%" alt="Image" />

            </div>
                <div className="container-fluid gradientBackgroundPrimary py-1">

            </div> 
            </>
        )
    }
}
