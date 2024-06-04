import * as actionTypes from './uiActionTypes';

export const login = (email, password) => {
    return {
        type: actionTypes.LOGIN,
        user: {
            email: email,
            password: password,
        },
    }
};

export const logout = () => {
    return { type: actionTypes.LOGOUT }
};

export const displayNotificationDrawer = () => {
    return { type: actionTypes.DISPLAY_NOTIFICATION_DRAWER };
}

export const hideNotificationDrawer = () => {
    return { type: actionTypes.HIDE_NOTIFICATION_DRAWER };
};