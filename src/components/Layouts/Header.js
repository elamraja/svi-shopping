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
                                    <div className="quick_cart">
                                        <div class="cart-item-list">
                                            <img src="img/index/cart-item-1.jpg" alt="" />
                                            <a href="index-new.html#">
                                                <h3>Beats Classic Headphone</h3>
                                            </a>
                                            <b>
                                                <a href="index-new.html#">X</a>
                                            </b>
                                            <p>
                                                $88.00 <del>$120.00</del>
                                            </p>
                                        </div>
                                        <div class="cart-item-list">
                                            <img src="img/index/cart-item-2.jpg" alt="" />
                                            <a href="index-new.html#">
                                                <h3>Samsung Classic Tablet</h3>
                                            </a>
                                            <b>
                                                <a href="index-new.html#">X</a>
                                            </b>
                                            <p>
                                                $90.00 <del>$122.00</del>
                                            </p>
                                        </div>
                                        <div class="border" />
                                        <div class="cart-total">
                                            <h6>Total Price</h6> <p>$178.00</p>
                                            <div class="clearfix" />
                                            <a href="index-new.html#" class="cart-view">
                                                View all
                                            </a>
                                            <a href="check-out.html" class="cart-checkout">
                                                Check out
                                            </a>
                                        </div>
                                    </div>
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
