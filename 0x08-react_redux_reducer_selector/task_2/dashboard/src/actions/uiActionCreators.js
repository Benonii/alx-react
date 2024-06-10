import * as actionTypes from './uiActionTypes';
import { bindActionCreators } from 'redux';
import { dispatch } from 'react-redux';
import { fetchMock } from 'fetch-mock';

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

export const loginSuccess = () => {
    return { type: actionTypes.LOGIN_SUCCESS};
}

export const loginFailure = () => {
    return { type: actionTypes.LOGIN_FAILURE};
}

export const loginRequest = (email, password) => {
    return async (dispatch) => {
        dispatch(login(email, password));

        try {
            dispatch(loginSuccess());
        } catch (error) {
              dispatch(loginFailure());
        }
    }
}