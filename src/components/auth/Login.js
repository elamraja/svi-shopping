import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div className="login">
                <div className="login_box">
                    <a href="javscript:void" onClick={this.props.close} className="close_pop">
                        <i className="fa fa-times" />
                    </a>
                    <h2>Login to your Account</h2>
                    <div className="row">
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
                                    Don't have you account?. <a href="">Register now</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Login;
