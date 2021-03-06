import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './store.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home.js';
import Cart from './pages/Cart.js';
import Checkout from './pages/Checkout.js';
function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <div className="wrapper">
                    <Router>
                        <Route path="/" exact component={Home} />
                        <Route path="/cart/" exact component={Cart} />
                        <Route path="/checkout/" exact component={Checkout} />
                    </Router>
                </div>
            </div>
        </Provider>
    );
}

export default App;
