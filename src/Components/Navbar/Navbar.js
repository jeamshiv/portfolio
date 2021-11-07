import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


import WOW from 'wowjs'

export default class Navbar extends Component {

    componentDidMount() {
        new WOW.WOW({
            live:false
        }).init();
    }

    render() {
        return (
            <header className="container-fluid">
		

                <nav className="navbar navbar-expand-lg fixed-top navbar-dark py-3">
                <NavLink to="/" className="navbar-brand">Jeamshiv</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <NavLink to="/" className="nav-link">Home <span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Services</a>
                    </li>

                    <li className="nav-item">
                        <NavLink to="/portfolio" className="nav-link">Portfolio</NavLink>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="#">Blog</a>
                    </li>


                    </ul>
                    <div className="my-2 my-lg-0">
                    <button className="btn primary-button">Contact Me</button>
                    </div>
                </div>
                </nav>


            </header>
        )
    }
}
