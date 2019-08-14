import React, { Component } from 'react';
import { isValidEmail, apiBASE } from '../../utils/common.js';
import axios from 'axios';
import { connect } from 'react-redux';
import { USER_AUTHENTICATED } from '../../store.js';
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: {},
            isSuccess: false
        };
    }

    doHandle = async () => {
        let errors = {};
        let validForm = true;
        if (!this.refs.name.value) {
            errors['name'] = 'Name is required';
            validForm = false;
        }
        if (!this.refs.email.value) {
            errors['email'] = 'Email is required';
            validForm = false;
        } else {
            if (isValidEmail(this.refs.email.value) == false) {
                errors['email'] = 'Email is invalid';
                validForm = false;
            }
        }
        if (!this.refs.password.value) {
            errors['password'] = 'Password is required';
            validForm = false;
        } else {
            if (this.refs.name.value.length < 5) {
                errors['password'] = 'Password is required min 5 chars';
                validForm = false;
            }
        }

        if (validForm == false) {
            this.setState({
                errors: errors
            });
        } else {
            this.setState({
                errors: {}
            });

            let postData = {
                name: this.refs.name.value,
                email: this.refs.email.value,
                password: this.refs.password.value
            };

            await axios
                .post(apiBASE + 'register', postData)
                .then(response => {
                    if (response.status == 200) {
                        const authUser = {
                            token: response.data.token,
                            user: response.data.user
                        };
                        this.props.authenticated(authUser);
                        this.setState({
                            isSuccess: true
                        });
                    }
                })
                .catch(error => {
                    let errors = {
                        invalid: error.response.data.error
                    };
                    this.setState({
                        errors: errors
                    });
                });
        }
    };
    render() {
        let invalidError = (
            <div className="col-md-12">
                <div className="form-group has-error">
                    <span className="help-block error">{this.state.errors.invalid ? this.state.errors.invalid : ''}</span>
                </div>
            </div>
        );
        return (
            <div className="sign">
                <div className="login_box">
                    <a href="#" onClick={this.props.close} className="close_pop">
                        <i className="fa fa-times" />
                    </a>
                    {!this.state.isSuccess ? (
                        <div>
                            <h2>Register New Account</h2>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className={this.state.errors.name ? 'form-group has-error' : 'form-group'}>
                                        <label className="control-label">Your Name</label>
                                        <input ref="name" type="text" className="form-control" placeholder="Enter your name" />
                                        {this.state.errors.name ? <span className="help-block error">{this.state.errors.name}</span> : ''}
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className={this.state.errors.email ? 'form-group has-error' : 'form-group'}>
                                        <label className="control-label">Email Address</label>
                                        <input ref="email" type="text" className="form-control" placeholder="Enter your email" />
                                        {this.state.errors.email ? <span className="help-block error">{this.state.errors.email}</span> : ''}
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className={this.state.errors.password ? 'form-group has-error' : 'form-group'}>
                                        <label className="control-label">Password</label>
                                        <input ref="password" type="password" className="form-control" placeholder="Enter your password" />
                                        {this.state.errors.password ? <span className="help-block error">{this.state.errors.password}</span> : ''}
                                    </div>
                                </div>
                                {this.state.errors.invalid ? invalidError : ''}
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <button onClick={this.doHandle} className="btn btn-primary">
                                            Register
                                        </button>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <p className="href_link">
                                            Already registered account?.{' '}
                                            <a href="#" onClick={this.props.showLog}>
                                                Login now
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="row">
                            <div className="col-md-12">
                                <h2 className="success_msg">Registered successfully.</h2>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        authenticated: authuser => {
            dispatch({ type: USER_AUTHENTICATED, user: authuser });
        }
    };
};
export default connect(
    null,
    mapDispatchToProps
)(Register);
