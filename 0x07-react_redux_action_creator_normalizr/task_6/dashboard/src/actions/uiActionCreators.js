import * as actionTypes from './uiActionTypes';
import { bindActionCreators } from 'redux';
import { dispatch } from 'react-redux';

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