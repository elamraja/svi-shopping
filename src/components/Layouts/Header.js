import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Header extends Component {
    render() {
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
                            <div className="col-md-6">
                                <ul>
                                    <li>
                                        <a href="#">Login / Register</a>
                                    </li>
                                </ul>
                            </div>
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
                                        <a href="#">
                                            <i className="fa fa-shopping-basket" /> <span>0 item's</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Header;
