import React, { Component } from 'react';
import { trancateTitle, cnCurrency } from '../utils/common.js';
class ProductGrid extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                {this.props.list.map(item => {
                    return (
                        <div key={item.id} className="col-md-3">
                            <div className="product">
                                <div className="image">
                                    <img src={'http://127.0.0.1:8000/uploads/products/' + item.id + '.jpg'} />
                                </div>
                                <div className="title_price">
                                    <a href="#" className="title">
                                        {trancateTitle(item.name, 25)}
                                    </a>
                                    <span className="price">{cnCurrency(item.price)}</span>
                                    <button className="btn btn-cart">
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
export default ProductGrid;
