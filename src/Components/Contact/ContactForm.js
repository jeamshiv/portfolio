import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import SyncLoader from "react-spinners/SyncLoader";
import WOW from 'wowjs'

export default function ContactForm() {

    const[isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        new WOW.WOW({
            live: false
        }).init();
    }, [])
    


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
        )
    }

    return (
        <>
            <section className="contact container py-5 my-5">
                <div className="text-center mb-3">
                    <h5>Get in Touch</h5>
                    <h1 className="style-title">Contact Me</h1>
                </div>

                <div className="row">
                    <div className="col-lg-8 my-3 mb-lg-5 wow bounceInUp">

                        <div className="wrapper p-4">

                            <p><b>SAY SOMETHING</b></p>

                            <form method="POST" name='PortfolioContactForm' className='PortfolioContactForm' action='/confirmation-page'>

                                <input type="hidden" name="form-name" value="PortfolioContactForm" />

                                <TextField className="form-control mt-3" name="name" label="Your Name" />

                                <TextField className="form-control mt-3" name="email" label="Your Email" />

                                <TextField className="form-control mt-3" name="phone" label="Your Phone" inputProps={{ maxLength: 10 }} />

                                <TextField
                                    className="form-control mt-3"
                                    label="Message"
                                    name="message"
                                    multiline
                                    rows={4}
                                />


                                <div className="mt-5">
                                    {isLoading ? 
                                    (<button className="primary-button" >&nbsp;<SyncLoader color="white" size={12} margin={3} /></button>) : 
                                    (<button className="primary-button" onClick={() => setIsLoading(true)}>Send Message</button>)}
                                </div>

                            </form>

                        </div>

                    </div>
                    <div className="col-lg-4">
                        <div className="row px-4">

                            {renderContactCard('fas fa-map-marker-alt', 'My Address', 'Faridabad Haryana')}
                            {renderContactCard('fas fa-phone-alt', 'My Phone', '+91 8750303073')}
                            {renderContactCard('far fa-envelope-open', 'My Email', 'jeamshiv@gmail.com')}

                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
