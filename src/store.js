import * as redux from 'redux';
export const USER_AUTHENTICATED = 'user/loggined';
export const USER_SIGNOUT = 'user/logout';

const userInitialState = {
    isUserAuthenticated: false,
    authUser: [],
    isRedirectHome: false
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
        default: {
            if (window.sessionStorage.getItem('authuser')) {
                state.isUserAuthenticated = true;
                state.isRedirectHome = false;
                state.authUser = JSON.parse(window.sessionStorage.getItem('authuser'));
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
