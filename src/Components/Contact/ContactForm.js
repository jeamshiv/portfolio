import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import ClipLoader from "react-spinners/ClipLoader";
import {contactRequest} from '../../ApiConnection/Contact'
import WOW from 'wowjs'

export default class ContactForm extends Component {

    state = {
        isLoading: false,
    }

    componentDidMount() {
        new WOW.WOW({
            live:false
        }).init();
    }


    renderContactCard=(icon, title, des)=>{
        return(
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
        )
    }


    changeHandler=(e)=>{
        console.log(e.target.name, e.target.value)
        console.log('getting contact at contactfomr')
        this.setState({
            [e.target.name]: e.target.value
        })

    }


    clickHandler=()=>{
        console.log('show all on click', this.state)
        this.setState({isLoading: true})
        alert('Sorry!, contact me directly.')
        this.setState({isLoading: false})
        contactRequest(this.state.name, this.state.email, this.state.phone, this.state.message, this.contactCallback)
    }

    contactCallback=(response)=>{
        if(response.status == 200){
            response.json().then(data =>
                {   
                   console.log('check status now')
                   
                })
        }
        this.setState({isLoading: false})
    }


    

    render() {
        return (
            <>
            <section className="contact container pt-5 mt-5">
                <div className="text-center mb-3">
                    <h5>Get in Touch</h5>
                    <h1 className="style-title">Contact Me</h1>
                </div>

                <div className="row">
                    <div className="col-lg-8 my-3 mb-lg-5 wow bounceInUp">

                        <div className="wrapper p-4">
                            
                            <p><b>SAY SOMETHING</b></p>
                           
                            <TextField className="form-control mt-3" name="name" label="Your Name" onChange={(e)=>this.changeHandler(e)} />

                            <TextField className="form-control mt-3" name="email" label="Your Email" onChange={(e)=>this.changeHandler(e)} />

                            <TextField className="form-control mt-3" name="phone" label="Your Phone" onChange={(e)=>this.changeHandler(e)} inputProps={{ maxLength: 10 }} />
                            
                            <TextField
                                className="form-control mt-3"
                                label="Message"
                                name="message"
                                multiline
                                rows={4}
                                onChange={(e)=>this.changeHandler(e)}
                                />


                            <div className="mt-5">
                                {this.state.isLoading?(<button className="primary-button" >&nbsp;<ClipLoader color="white" loading="MoonLoader" style={{paddingLeft: 40, paddingRight: 40}} size={18} /></button>):(<button className="primary-button" onClick={() => this.clickHandler()}>Send Message</button>)}
                            </div>

                        </div>

                    </div>
                    <div className="col-lg-4">
                        <div className="row px-4">

                            {this.renderContactCard('fas fa-map-marker-alt', 'My Address', 'Faridabad Haryana')}
                            {this.renderContactCard('fas fa-phone-alt', 'My Phone', '+91 8750303073')}
                            {this.renderContactCard('far fa-envelope-open', 'My Email', 'jeamshiv@gmail.com')}
                            
                        </div>
                    </div>
                </div>
                
            </section>  
            </>
        )
    }
}
