import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="top">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="logo">
                                    <h2>SVI Shopping</h2>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="address">
                                    <h2>
                                        No 12, Main Street, South Nagar,
                                        <br />
                                        Main City, Tamilnadu, India.
                                    </h2>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="contact">
                                    <h2>
                                        +91 9004544342 &nbsp;&nbsp; <i className="fa fa-phone" />
                                    </h2>
                                    <h2>
                                        email@website.com &nbsp;&nbsp; <i className="fa fa-envelope" />
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <p>
                                        All rights reserved. <a href="#">Svi Technologies</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
