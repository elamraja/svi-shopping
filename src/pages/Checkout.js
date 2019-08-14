import React, { Component } from 'react';
import Header from '../components/Layouts/Header.js';
import Footer from '../components/Layouts/Footer.js';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CART_CLEAR } from '../store.js';
import { apiBASE, mediaURL, cnCurrency, trancateTitle } from '../utils/common.js';
class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: {},
            isSuccess: false
        };
    }

    formSubmit = async () => {
        let validForm = true;
        let errors = {};
        if (!this.refs.first_name.value.length) {
            validForm = false;
            errors['first_name'] = 'First Name is required';
        }
        if (!this.refs.last_name.value) {
            validForm = false;
            errors['last_name'] = 'Last Name is required';
        }
        if (!this.refs.address_1.value) {
            validForm = false;
            errors['address_1'] = 'Address is required';
        }
        if (!this.refs.city.value) {
            validForm = false;
            errors['city'] = 'City is required';
        }
        if (!this.refs.postal_code.value) {
            validForm = false;
            errors['postal_code'] = 'Postal Code is required';
        }
        if (!this.refs.mobile.value) {
            validForm = false;
            errors['mobile'] = 'Mobile is required';
        }
        if (!this.refs.payment.value) {
            validForm = false;
            errors['payment'] = 'Payment is required';
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
                user_id: this.props.userData.user.id,
                first_name: this.refs.first_name.value,
                last_name: this.refs.last_name.value,
                address_1: this.refs.address_1.value,
                address_2: this.refs.address_2.value,
                city: this.refs.city.value,
                postal_code: this.refs.postal_code.value,
                last_name: this.refs.last_name.value,
                payment: this.refs.payment.value,
                mobile: this.refs.mobile.value,
                items: this.props.cartitems
            };

            await axios
                .post(apiBASE + 'order', postData, {
                    headers: {
                        Accept: 'application/json',
                        Authorization: 'Bearer ' + this.props.userData.token
                    }
                })
                .then(response => {
                    if (response.status == 200) {
                        this.props.clearCart();
                        this.setState({
                            isSuccess: true
                        });
                    }
                })
                .catch(error => {
                    console.log('Error:', error);
                });
        }
    };
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
                        <h2>CHECKOUT</h2>
                    </div>
                </section>
                <section className="latest_products">
                    <div className="container">
                        {!this.state.isSuccess ? (
                            <div className="row">
                                <div className="col-md-6">
                                    <h2 className="title_chkt">Billing Details</h2>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className={this.state.errors.first_name ? 'form-group has-error' : 'form-group'}>
                                                <label className="control-label">First Name</label>
                                                <input ref="first_name" type="text" className="form-control" />
                                                {this.state.errors.first_name ? <span className="help-block error">{this.state.errors.first_name}</span> : ''}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className={this.state.errors.last_name ? 'form-group has-error' : 'form-group'}>
                                                <label className="control-label">Last Name</label>
                                                <input ref="last_name" type="text" className="form-control" />
                                                {this.state.errors.last_name ? <span className="help-block">{this.state.errors.last_name}</span> : ''}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className={this.state.errors.address_1 ? 'form-group has-error' : 'form-group'}>
                                                <label className="control-label">Address</label>
                                                <input ref="address_1" type="text" className="form-control" placeholder="Door / Apartment Plot / Street No" />
                                                {this.state.errors.address_1 ? <span className="help-block">{this.state.errors.address_1}</span> : ''}
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <input ref="address_2" type="text" className="form-control" placeholder="Street Address" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className={this.state.errors.city ? 'form-group has-error' : 'form-group'}>
                                                <label className="control-label">Town / City</label>
                                                <input ref="city" type="text" className="form-control" placeholder="Town / City" />
                                                {this.state.errors.city ? <span className="help-block">{this.state.errors.city}</span> : ''}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className={this.state.errors.mobile ? 'form-group has-error' : 'form-group'}>
                                                <label className="control-label">Postal Code</label>
                                                <input ref="postal_code" type="text" className="form-control" placeholder="Postal Code" />
                                                {this.state.errors.mobile ? <span className="help-block">{this.state.errors.mobile}</span> : ''}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className={this.state.errors.mobile ? 'form-group has-error' : 'form-group'}>
                                                <label className="control-label">Mobile No</label>
                                                <input ref="mobile" type="text" className="form-control" placeholder="Mobile No" />
                                                {this.state.errors.mobile ? <span className="help-block">{this.state.errors.mobile}</span> : ''}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <h2 className="title_chkt">Your Order Details</h2>
                                    <table className="table table-bordered table-striped cart_table">
                                        <thead>
                                            <tr>
                                                <th>Name of Item</th>
                                                <th>Price</th>
                                                <th className="text-center">Quantity</th>
                                                <th className="text-right">Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.props.cartitems.map(item => {
                                                return (
                                                    <tr key={item.id}>
                                                        <td>{trancateTitle(item.name, 20)}</td>
                                                        <td>{cnCurrency(item.price)}</td>
                                                        <td className="text-center">{item.qty}</td>
                                                        <td className="text-right">{cnCurrency(item.qty * item.price)}</td>
                                                    </tr>
                                                );
                                            })}
                                            <tr>
                                                <td colSpan="3" className="text-right">
                                                    <strong>Total Amount</strong>
                                                </td>
                                                <td className="text-right">
                                                    <strong>{cnCurrency(totalAmount)}</strong>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <h2 className="title_chkt">Payment Method</h2>
                                    <div className="funkyradio">
                                        <div className="funkyradio-success">
                                            <input ref="payment" type="radio" name="payment" value="bank" id="radio1" />
                                            <label htmlFor="radio1">Bank Transfer</label>
                                        </div>
                                        <div className="funkyradio-success">
                                            <input ref="payment" type="radio" name="payment" value="cod" id="radio2" defaultChecked />
                                            <label htmlFor="radio2">Cash On Delivery</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12 text-right">
                                            <button onClick={this.formSubmit} type="button" className="btn btn-primary">
                                                Place Order
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="row">
                                <div className="col-md-12 text-centert">
                                    <h2 className="success_msg text-center">
                                        Order Placed successfully. Click to redirect &nbsp;&nbsp;&nbsp;
                                        <Link to="/" className="">
                                            HOME
                                        </Link>
                                        &nbsp;&nbsp;&nbsp; page
                                    </h2>
                                </div>
                            </div>
                        )}
                    </div>
                </section>
                <Footer />
            </React.Fragment>
        );
    }
}
const mapStateToProps = state => {
    return {
        cartitems: state.user.cartItems,
        userData: state.user.authUser
    };
};

const mapDispatchToProps = dispatch => {
    return {
        clearCart: () => {
            dispatch({ type: CART_CLEAR });
        }
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Checkout);
