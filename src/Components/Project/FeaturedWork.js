import React, { Component } from 'react'
import {FeaturedWordData} from '../../MemoryData/ProjectsData'
import {Link} from 'react-router-dom'
import WOW from 'wowjs'

export default class FeaturedWork extends Component {


    componentDidMount() {
        new WOW.WOW({
            live:false
        }).init();

    }

    render() {
        return (
            <>
                <section className="container-fluid my-5">

                    <div className="row align-items-center justify-content-center">

                        <div className="col-lg-6 col-md-6 pt-5 pt-lg-0 pt-md-0 mt-5 mt-lg-0 mt-md-0 px-lg-5 wow fadeInLeft">
                            <h1 className="font-weight-bold style-title text-center">Featured Work!</h1>
                            <p className="mt-3 fontSize-20">
                                {FeaturedWordData.description}
                            </p>
                            <div className="text-center mt-5 mb-5">
                                <Link to={FeaturedWordData.projectLink} className="primary-button">Read More!</Link>                     
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 wow fadeInRight">
                            <img src={FeaturedWordData.bannerImg} className="img-fluid" alt="Image" />
                        </div>

                    </div>

                </section>  
            </>
        )
    }
}
