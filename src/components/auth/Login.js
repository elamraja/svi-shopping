import React, { Component } from 'react';
import axios from 'axios';
import { isValidEmail, apiBASE } from '../../utils/common.js';
import { connect } from 'react-redux';
import { USER_AUTHENTICATED } from '../../store.js';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: {}
        };
    }
    handleLogin = async () => {
        let errorForm = true;
        let errors = {};
        if (!this.refs.email.value) {
            errorForm = false;
            errors['email'] = 'Email is required';
        } else {
            if (isValidEmail(this.refs.email.value) == false) {
                errorForm = false;
                errors['email'] = 'Email is invalid';
            }
        }
        if (!this.refs.password.value) {
            errorForm = false;
            errors['password'] = 'Password is required';
        }

        if (errorForm == false) {
            this.setState({
                errors: errors
            });
            console.log(errors);
        } else {
            this.setState({
                errors: {}
            });
            let postData = {
                email: this.refs.email.value,
                password: this.refs.password.value
            };
            await axios
                .post(apiBASE + 'login', postData)
                .then(response => {
                    if (response.status == 200) {
                        const authUser = {
                            token: response.data.token,
                            user: response.data.user
                        };
                        this.props.authenticated(authUser);
                        this.props.close();
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
            <div className="login">
                <div className="login_box">
                    <a href="#" onClick={this.props.close} className="close_pop">
                        <i className="fa fa-times" />
                    </a>
                    <h2>Login to your Account</h2>
                    <div className="row">
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
                                <button onClick={this.handleLogin} className="btn btn-primary">
                                    Login
                                </button>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-group">
                                <p className="href_link">
                                    Don't have you account?.{' '}
                                    <a href="#" onClick={this.props.showRegist}>
                                        Register now
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
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
)(Login);
