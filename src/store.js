import * as redux from 'redux';
export const USER_AUTHENTICATED = 'user/loggined';
export const USER_SIGNOUT = 'user/logout';
export const CART_ADD = 'cart/add';
export const CART_UPDATE = 'cart/update';
export const CART_REMOVE = 'cart/remove';
export const CART_CLEAR = 'cart/clear';

const userInitialState = {
    isUserAuthenticated: false,
    authUser: [],
    isRedirectHome: false,
    cartItems: []
};

const userReducer = (state = userInitialState, action) => {
    switch (action.type) {
        case USER_AUTHENTICATED: {
            window.sessionStorage.setItem('authuser', JSON.stringify(action.user));
            state.authUser = action.user;
            state.isUserAuthenticated = true;
            return state;
            break;
        }
        case USER_SIGNOUT: {
            window.sessionStorage.removeItem('authuser');
            state.isUserAuthenticated = false;
            state.authUser = [];
            state.isRedirectHome = true;
            return state;
            break;
        }
        case CART_ADD: {
            var newCart = [];
            var newsCart = JSON.parse(window.sessionStorage.getItem('cart_items'));
            if (newsCart) {
                let noUpdated = false;
                newCart = newsCart.map(item => {
                    if (item.id == action.item.id) {
                        item.qty = item.qty + 1;
                        noUpdated = true;
                        return item;
                    } else {
                        return item;
                    }
                });

                if (noUpdated == false) {
                    newCart.push(action.item);
                }
            } else {
                newCart.push(action.item);
            }
            console.log('item:', action.item);
            window.sessionStorage.setItem('cart_items', JSON.stringify(newCart));
            state.cartItems = newCart;
            console.log(state.cartItems);
            return state;
            break;
        }
        case CART_UPDATE: {
            var newCart = [];
            var newsCart = JSON.parse(window.sessionStorage.getItem('cart_items'));
            if (newsCart) {
                newCart = newsCart.map(item => {
                    if (item.id == action.item.id) {
                        if (action.status == 'inc') {
                            item.qty = item.qty + 1;
                        } else {
                            if (item.qty > 1) {
                                item.qty = item.qty - 1;
                            }
                        }
                    }
                    return item;
                });
            }
            console.log('item:', action.item);
            window.sessionStorage.setItem('cart_items', JSON.stringify(newCart));
            state.cartItems = newCart;
            console.log(state.cartItems);
            return state;
            break;
        }
        case CART_REMOVE: {
            var newCart = [];
            var newsCart = JSON.parse(window.sessionStorage.getItem('cart_items'));
            if (newsCart) {
                newCart = newsCart.filter(item => {
                    return item.id != action.item.id;
                });
            }
            if (newCart.length <= 0) {
                newCart = [];
            }
            console.log('item:', action.item);
            window.sessionStorage.setItem('cart_items', JSON.stringify(newCart));
            state.cartItems = newCart;
            console.log(state.cartItems);
            return state;
            break;
        }
        case CART_CLEAR: {
            window.sessionStorage.removeItem('cart_items');
            state.cartItems = [];
            return state;
            break;
        }
        default: {
            if (window.sessionStorage.getItem('authuser')) {
                state.isUserAuthenticated = true;
                state.isRedirectHome = false;
                state.authUser = JSON.parse(window.sessionStorage.getItem('authuser'));
            }
            if (window.sessionStorage.getItem('cart_items')) {
                state.cartItems = JSON.parse(window.sessionStorage.getItem('cart_items'));
            }
            return state;
        }
    }
};

const rootReducer = (state = [], action) => {
    return {
        user: userReducer(state.user, action)
    };
};

const store = redux.createStore(rootReducer);
export default store;
