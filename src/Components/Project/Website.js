import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import ContactForm from '../Contact/ContactForm'
import {AllProjectsData} from '../../MemoryData/ProjectsData'

export default class Website extends Component {

    state = {
        WebsiteData : [],
        features: [],
        mainContent: [],
        isRedirect : false,
    }


    componentDidMount=()=>{

        let WebDataFind = AllProjectsData.find((item => item.projectId === this.props.match.params.id))
        this.setState({WebsiteData: WebDataFind, features: WebDataFind.features, mainContent: WebDataFind.mainContent},()=>{

            // console.log('yeh web ka data hai', this.state.WebsiteData)
            if(WebDataFind.type === "App"){
                this.setState({isRedirect: true})
            }

        })
       
    }

    render() {
        return (
            <>

            {this.state.isRedirect ?(
                <Redirect to={"/app/"+this.props.match.params.id} />
            ):(null)}

            <section className="container-fluid" id="head" style={{marginTop:80}}>
                <div id="head2"></div>
                <div className="row py-5">
                    
                    <div className="col-lg-6 col-md-6 text-center align-self-center px-3 px-lg-5 mb-lg-0 mb-md-0 mb-5 order-sm-2">
                        <img src={this.state.WebsiteData.headerImage}  className="img-fluid banner-image mt-5 mt-sm-0" alt="jeamshiv portfolio header" />
                    </div>


                    <div className="col-lg-6 col-md-6 align-self-center order-sm-1">
                        <div className="pb-5 pl-2 pl-lg-5 pt-lg-5 mt-sm-5">
                            <h1>{this.state.WebsiteData.title}</h1>
                            <p className="mb-4 pr-4">{this.state.WebsiteData.description}</p>
                            <a href={this.state.WebsiteData.link} target="_blank" rel="noreferrer"  className="primary-button"><span className="text-light">Live Preview</span></a> &nbsp; 
                        </div>
                    </div>

                </div>
            </section>


            <div className="container mt-5 pb-5">
                <div className="text-center mb-3">
                    <h5>Key Features</h5>
                    <h1 className="style-title">Website Features</h1>
                </div>

                <div className="container">
                    <div className="row my-3">

                    {this.state.features.map((item, index) =>
                        <div className="col-lg-3 col-md-6 col-10 offset-lg-0 offset-md-0 offset-1">
                                <div className="shadow-normal py-3 px-2 bg-ffffff mt-4 text-center borderRadius12" key={index}>
                                    <h1>
                                        <i class="fas fa-rocket mb-3 txt-ffffff gradientBackgroundPrimary p-3 rounded-circle"></i>
                                    </h1>
                                    <h4>{item.title}</h4>
                                    <p style={{fontSize:14}}>{item.description}</p>
                                </div>
                        </div>
                         )}
                        
                    </div>
                </div>
            </div>


            <div className="container-fluid" style={{backgroundImage: "url(../assets/blobBanner.jpg)", backgroundPosition: 'center', backgroundSize: 'cover'}}>

                <div className="container mt-5">
                    <div className="row align-items-center">

                        <div className="col-lg-6 order-sm-2">
                            <div>
                                <img src="../assets/mobile-12.png" className="img-fluid" alt="" />
                            </div>
                        </div>
                        
                        <div className="col-lg-6 mt-5 order-sm-1">

                            <div>
                                <h2>
                                    Most Probably You Are Getting Best Website Ever
                                </h2>
                                <p className="mt-4 mb-5">
                                    Cloud based storage for your data backup just log in with your mail account from play store and using whatever you want for your business purpose orem ipsum dummy text. Never missyour chance its just began.
                                </p>
                            </div>
                            
                            {this.state.mainContent.map((item, index)=>
                            <div>
                                <h3>{item.heading}</h3>
                                <p>{item.body}</p>
                            </div>
                            )}
                        </div>

                    </div>
                </div>
            </div>


                <div className="container-fluid gradientBackgroundPrimary p-4 py-5 mt-5">
                    <div className="container">
                      <div className="row align-items-center">
                        <div className="col-lg-6">
                            <p className="text-light">Hire Us</p>
                            <h1 className="text-light">
                                Have A Project For Us? Let’s Talk About It!
                            </h1>
                            <p className="text-light">
                                We are here to provide you the best services with the latest technologies.
                            </p>
                            <div className="text-center mt-4 mb-5">
                                <button className="alternative-button">Let's Talk Now</button>
                            </div>
                           
                        </div>

                        <div className="col-lg-6" style={{backgroundImage: "url(../assets/verticaleSquareShape.png)", backgroundPosition: 'right', backgroundRepeat: 'no-repeat',}} >
                            <div className="text-center px-4">
                                <img src="../assets/1.png" className="img-fluid" alt="" />
                            </div>
                        </div>

                      </div>
                    </div>
                   
                </div>


            <section className="container py-5 my-5">
                <div className="text-center mb-3">
                    <h5>Latest Blog</h5>
                    <h1 className="style-title">My Blog</h1>
                </div>
                <div className="row" id="blogdata">
                    <p style={{margin: '0 auto'}}>Oops! Connection Error.</p>
                </div>
            </section>


            <ContactForm />

            </>
        )
    }
}
