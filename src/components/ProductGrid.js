import React, { Component } from 'react';
import { trancateTitle, cnCurrency } from '../utils/common.js';
import { connect } from 'react-redux';
import { CART_ADD } from '../store.js';
import { mediaURL } from '../utils/common.js';
class ProductGrid extends Component {
    constructor(props) {
        super(props);
    }
    cardAdd = item => {
        let sitem = {
            id: item.id,
            name: item.name,
            price: item.price,
            qty: 1
        };
        this.props.addCart(sitem);
    };
    render() {
        return (
            <React.Fragment>
                {this.props.list.map(item => {
                    return (
                        <div key={item.id} className="col-md-3">
                            <div className="product">
                                <div className="image">
                                    <img src={mediaURL + item.id + '.jpg'} />
                                </div>
                                <div className="title_price">
                                    <a href="#" className="title">
                                        {trancateTitle(item.name, 25)}
                                    </a>
                                    <span className="price">{cnCurrency(item.price)}</span>
                                    <button onClick={() => this.cardAdd(item)} className="btn btn-cart">
                                        <i className="fa fa-shopping-basket" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </React.Fragment>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addCart: item => {
            dispatch({ type: CART_ADD, item: item });
        }
    };
};
export default connect(
    null,
    mapDispatchToProps
)(ProductGrid);
