import React, { Component } from 'react';

class Register extends Component {
    render() {
        return (
            <div className="sign">
                <div className="login_box">
                    <a href="javscript:void" onClick={this.props.close} className="close_pop">
                        <i className="fa fa-times" />
                    </a>
                    <h2>Register New Account</h2>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label className="control-label">Your Name</label>
                                <input type="text" className="form-control" placeholder="Enter your name" />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <label className="control-label">Email Address</label>
                                <input type="text" className="form-control" placeholder="Enter your email" />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <label className="control-label">Password</label>
                                <input type="password" className="form-control" placeholder="Enter your password" />
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <p className="href_link">
                                    Already registered account?. <a href="">Login now</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Register;
