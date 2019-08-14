import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CART_REMOVE } from '../store.js';
import { cnCurrency, trancateTitle, mediaURL } from '../utils/common.js';
class Quickcart extends Component {
    removeCart = item => {
        this.props.cartRemoved(item);
    };
    render() {
        let totalPrice = 0;
        this.props.cartitems.map(item => {
            totalPrice += item.price * item.qty;
        });
        return (
            <div className="quick_cart">
                <a onClick={this.props.close} className="close_pop" href="#">
                    <i className="fa fa-times" />
                </a>
                {this.props.cartitems.map(item => {
                    return (
                        <div key={item.id} className="cart-item-list">
                            <img src={mediaURL + item.id + '.jpg'} alt="" />
                            <a href="#">
                                <h3>{trancateTitle(item.name, 30)}</h3>
                            </a>
                            <b>
                                <a onClick={() => this.removeCart(item)} href="#">
                                    X
                                </a>
                            </b>
                            <p>
                                <strong className="qty_label">{item.qty}</strong> X {cnCurrency(item.price)}
                            </p>
                        </div>
                    );
                })}
                <div className="border" />
                <div className="cart-total">
                    <h6>Total Price</h6> <p>{cnCurrency(totalPrice)}</p>
                    <div className="clearfix" />
                    <Link to="cart/" className="cart-view">
                        View all
                    </Link>
                    <Link to="/checkout/" className="cart-checkout">
                        Check out
                    </Link>
                </div>
            </div>
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
        cartRemoved: item => {
            dispatch({ type: CART_REMOVE, item: item });
        }
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Quickcart);
