import * as actionTypes from './uiActionTypes';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
const fetch = require('node-fetch');


const dispatch = useDispatch;
export const login = (email, password) => {
    return {
        type: actionTypes.LOGIN,
        user: {
            email: email,
            password: password,
        },
    }
};

export const boundLogin = bindActionCreators(login, dispatch);

export const logout = () => {
    return { type: actionTypes.LOGOUT }
};

export const boundLogout  = bindActionCreators(logout, dispatch);

export const displayNotificationDrawer = () => {
    return { type: actionTypes.DISPLAY_NOTIFICATION_DRAWER };
}

export const boundDisplayNotificationDrawer = bindActionCreators(displayNotificationDrawer, dispatch);

export const hideNotificationDrawer = () => {
    return { type: actionTypes.HIDE_NOTIFICATION_DRAWER };
};

export const boundHideNotificationDrawer = bindActionCreators(hideNotificationDrawer, dispatch);

export const loginSuccess = (data) => {
    return { type: actionTypes.LOGIN_SUCCESS,
             data: data
        };
}

export const loginFailure = () => {
    return { type: actionTypes.LOGIN_FAILURE};
}

export const loginRequest = (email, password) => {
    return async (dispatch) => {
        dispatch(login(email, password));

        try {
            const response = await fetch('../../dist/login-success.json');
            if (!response.ok) {
                throw new RouterProvider("I am not OK!");
            }
            const data = await response.json();


            dispatch(loginSuccess(data));
        } catch (error) {
              dispatch(loginFailure());
        }
    }
}