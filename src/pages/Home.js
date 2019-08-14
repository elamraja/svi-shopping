import React, { Component } from 'react';
import Header from '../components/Layouts/Header.js';
import Footer from '../components/Layouts/Footer.js';
import axios from 'axios';
import { apiBASE } from '../utils/common.js';
import ProductGrid from '../components/ProductGrid.js';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listproducts: {}
        };
        this.getProducts();
    }

    getProducts = async () => {
        await axios
            .get(apiBASE + 'products')
            .then(response => {
                if (response.status == 200) {
                    this.setState({
                        listproducts: response.data.products
                    });
                }
            })
            .catch(error => {
                console.log(error);
            });
    };

    render() {
        return (
            <React.Fragment>
                <Header />
                <div className="slider">
                    <img src={'assets/images/banner.jpg'} />
                </div>
                <section className="latest_products">
                    <div className="container">
                        <h2 className="title">Latst Products :-</h2>
                        <div className="row">{this.state.listproducts.length > 0 ? <ProductGrid list={this.state.listproducts} /> : ''}</div>
                    </div>
                </section>
                <Footer />
            </React.Fragment>
        );
    }
}
export default Home;
