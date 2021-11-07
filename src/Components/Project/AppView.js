import React, { Component } from 'react'
import ContactForm from '../Contact/ContactForm'
import {Redirect} from 'react-router-dom'
import {AllProjectsData} from '../../MemoryData/ProjectsData'
import Slider from "react-slick";


export default class AppView extends Component {


    state = {
        AppData : [],
        features: [],
        mainContent: [],
        isRedirect : false,
    }


    componentDidMount=()=>{

        let AppDataFind = AllProjectsData.find((item => item.projectId == this.props.match.params.id))
        this.setState({AppData: AppDataFind, features: AppDataFind.features, mainContent: AppDataFind.mainContent},()=>{
            console.log('getting app data', this.state.AppData)
            if(AppDataFind.type == "Website"){
                this.setState({isRedirect: true})
            }

        })
        
    }


    render() {


        var slicksettings = {
            dots: true,
            arrows: false,
            infinite: true,
            speed: 600,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
	        autoplaySpeed: 3000,
            responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            }, {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1
                }
            }] 
          };
      

        return (
            <>

             {this.state.isRedirect ?(
                <Redirect to={"/website/"+this.props.match.params.id} />
            ):(null)}

            <section className="container-fluid" id="head" style={{marginTop:80}}>
                <div id="head2"></div>
                <div className="row py-5">
                    
                    <div className="col-lg-6 col-md-6 text-center align-self-center px-3 px-lg-5 mb-lg-0 mb-md-0 mb-5 order-sm-2">
                        <img src={this.state.AppData.headerImage}  className="img-fluid banner-image mt-5 mt-sm-0" alt="jeamshiv portfolio header" />
                    </div>


                    <div className="col-lg-6 col-md-6 align-self-center order-sm-1">
                        <div className="pb-5 pl-2 pl-lg-5 pt-lg-5 mt-sm-5">
                            <h1>{this.state.AppData.title}</h1>
                            <p className="mb-4">{this.state.AppData.description}</p>
                            <a href={this.state.AppData.link} target="_blank" rel="noreferrer"  className="primary-button"><span className="text-light">Download for Test</span></a> &nbsp; 
                        </div>
                    </div>

                </div>
            </section>


            <section className="mt-5">
                <div className="text-center mb-3">
                    <h5>Key Features</h5>
                    <h1 className="style-title">App Features</h1>
                </div>

                <div className="container">
                    <div className="row my-3">

                    {this.state.features.map((item, index) =>
                        <div className="col-lg-3 col-md-6 col-10 offset-lg-0 offset-md-0 offset-1">
                                <div className="shadow-normal py-3 px-2 bg-ffffff mt-4 text-center borderRadius12" key={index}>
                                    <i class="fab fa-sketch display-4 mb-3 txt-ffffff gradientBackgroundPrimary p-2 rounded-circle"></i>
                                    <h4>{item.title}</h4>
                                    <p style={{fontSize:14}}>{item.description}</p>
                                </div>
                        </div>
                         )}
                        
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
                                    Most Probably You Are Getting Best App Ever
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
                            <p className="text-light">DOWNLOAD APP</p>
                            <h1 className="text-light">
                                Lets Get Your Free Copy From Apple and Play Store
                            </h1>
                            <p className="text-light">
                                Instant free download from store Cloud based storage for your data backup just log in with your mail account from play store and using whatever you want for your business purpose orem ipsum dummy text.
                            </p>
                            <div className="row mb-5">

                                <div className="col-lg-6 col-md-6 col-10 mt-4">
                                    <div className="d-flex align-items-center bg-ffffff px-4 py-2 rounded playStoreBtn">
                                        <div className="mr-3">
                                            <img src="../assets/IconPlayStore.png" alt="" />
                                        </div>
                                        <div>
                                            <p className="mb-0">Get It On</p>
                                            <h5>Google Play</h5>
                                        </div>
                                    </div>
                                </div>

                               <div className="col-lg-6 col-md-6 col-10 mt-4">
                                    <div className="d-flex align-items-center bg-ffffff px-4 py-2 rounded playStoreBtn">
                                        <div className="mr-3">
                                            <img src="../assets/IconAppleStore.png" alt="" />
                                        </div>
                                        <div>
                                            <p className="mb-0">Get It On</p>
                                            <h5>Apple Play</h5>
                                        </div>
                                    </div>
                               </div>

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

            </section>


            <section className="container mt-5">
                <div className="text-center mb-4">
                    <h5>APP SCREENS</h5>
                    <h1 className="style-title">All App Screenshots</h1>
                </div>
                

               
                    <Slider {...slicksettings}>
                        <div className="px-2">
                            <img src="../assets/demoSceen1.jpg" className="img-fluid" alt="" />
                        </div>
                        <div className="px-2">
                            <img src="../assets/demoSceen1.jpg" className="img-fluid" alt="" />
                        </div>
                        <div className="px-2">
                            <img src="../assets/demoSceen2.jpg" className="img-fluid" alt="" />
                        </div>
                        <div className="px-2">
                            <img src="../assets/demoSceen2.jpg" className="img-fluid" alt="" />
                        </div>
                        <div className="px-2">
                            <img src="../assets/demoSceen1.jpg" className="img-fluid" alt="" />
                        </div>
                        <div className="px-2">
                            <img src="../assets/demoSceen2.jpg" className="img-fluid" alt="" />
                        </div>
                          
                    </Slider>
                    
               

            </section>




            <ContactForm />  



            </>
        )
    }
}
