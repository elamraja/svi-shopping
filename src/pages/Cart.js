import React, { Component } from 'react';
import Header from '../components/Layouts/Header.js';
import Footer from '../components/Layouts/Footer.js';
import axios from 'axios';
import { connect } from 'react-redux';
import { CART_REMOVE } from '../store.js';
import { apiBASE, mediaURL, cnCurrency } from '../utils/common.js';
class Cart extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let totalAmount = 0;
        this.props.cartitems.map(item => {
            totalAmount += item.qty * item.price;
        });
        return (
            <React.Fragment>
                <Header />
                <section className="inner-banner">
                    <div className="container">
                        <h2>CART ITEMS</h2>
                    </div>
                </section>
                <section className="latest_products">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <table className="table table-bordered table-striped cart_table">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Name of Item</th>
                                            <th>Price</th>
                                            <th className="text-center">Quantity</th>
                                            <th className="text-right">Amount</th>
                                            <th width="25px" />
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.props.cartitems.map(item => {
                                            return (
                                                <tr>
                                                    <td>
                                                        <img src={mediaURL + item.id + '.jpg'} />
                                                    </td>
                                                    <td>{item.name}</td>
                                                    <td>{cnCurrency(item.price)}</td>
                                                    <td className="text-center">{item.qty}</td>
                                                    <td className="text-right">{cnCurrency(item.qty * item.price)}</td>
                                                    <td className="text-center">
                                                        <a onClick={() => this.props.removeCart(item)} href="#">
                                                            <i className="fa fa-times" />
                                                        </a>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                        <tr>
                                            <td colspan="4" className="text-right">
                                                <strong>Total Amount</strong>
                                            </td>
                                            <td className="text-right">
                                                <strong>{cnCurrency(totalAmount)}</strong>
                                            </td>
                                            <td />
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <a className="btn btn-dark btn-link">Continue Shopping</a>
                            </div>
                            <div className="col-md-6 text-right">
                                <a className="btn btn-primary  btn-link">Checkout</a>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </React.Fragment>
        );
    }
}
const mapStateToProps = state => {
    return {
        cartitems: state.user.cartItems
    };
};

const mapDispatchToProps = dispatch => {
    return {
        removeCart: item => {
            dispatch({ type: CART_REMOVE, item: item });
        }
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Cart);
