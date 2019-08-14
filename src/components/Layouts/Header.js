import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { USER_SIGNOUT } from '../../store.js';
import Login from '../auth/Login.js';
import Register from '../auth/Register.js';
import Quickcart from '../Quickcart.js';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowRegisteration: false,
            isShowLogin: false,
            isShowQuick: false
        };
    }

    showLogin = what => {
        this.setState({
            isShowLogin: what
        });
        if (what == true) {
            this.setState({
                isShowRegisteration: false
            });
        }
    };
    showRegisteration = what => {
        this.setState({
            isShowRegisteration: what
        });
        if (what == true) {
            this.setState({
                isShowLogin: false
            });
        }
    };
    showQuick = () => {
        if (this.state.isShowQuick == true) {
            this.setState({
                isShowQuick: false
            });
        } else {
            this.setState({
                isShowQuick: true
            });
        }
    };
    render() {
        let topLink = '';
        if (this.props.userAuthenticated) {
            topLink = (
                <ul>
                    <li>
                        <span>
                            <i className="fa fa-user" /> {this.props.userData.user.name}
                        </span>
                    </li>
                    <li>
                        <a onClick={this.props.logout} href="#">
                            Logout
                        </a>
                    </li>
                </ul>
            );
        } else {
            topLink = (
                <ul>
                    <li>
                        <a onClick={() => this.showLogin(true)} href="#">
                            Login
                        </a>
                        /
                        <a onClick={() => this.showRegisteration(true)} href="#">
                            Register
                        </a>
                    </li>
                </ul>
            );
        }
        const login = (
            <div className="auth_pop">
                <Login showRegist={() => this.showRegisteration(true)} close={() => this.showLogin(false)} />
            </div>
        );

        const registeration = (
            <div className="reg_pop">
                <Register showLog={() => this.showLogin(true)} close={() => this.showRegisteration(false)} />
            </div>
        );
        return (
            <div className="header">
                <div className="header-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="logo">
                                    <h2>SVI Shopping</h2>
                                </div>
                            </div>
                            <div className="col-md-6">{topLink}</div>
                        </div>
                    </div>
                </div>
                <div className="menu">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <ul className="menu_box">
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <a href="#">About us</a>
                                    </li>
                                    <li>
                                        <a href="#">Products</a>
                                    </li>
                                    <li>
                                        <a href="#">Contact</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <ul className="cart_box">
                                    <li className="cart">
                                        <a onClick={this.showQuick} href="#">
                                            <i className="fa fa-shopping-basket" /> <span>{this.props.cartitems.length} item(s)</span>
                                        </a>
                                    </li>
                                    {this.state.isShowQuick ? <Quickcart close={() => this.showQuick(false)} /> : ''}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {this.state.isShowLogin ? login : ''}
                {this.state.isShowRegisteration ? registeration : ''}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        userAuthenticated: state.user.isUserAuthenticated,
        userData: state.user.authUser,
        cartitems: state.user.cartItems
    };
};
const mapDispatchToProps = dispatch => {
    return {
        logout: function() {
            dispatch({ type: USER_SIGNOUT });
        }
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);
