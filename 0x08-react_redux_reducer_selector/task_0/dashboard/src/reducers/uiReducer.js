import * as actionTypes from '../actions/uiActionTypes';

const initialState = {
    isNotificationDrawerVisible: true,
    isUserLoggedIn: false,
    user: {}
};

export default function uiReducer(state=initialState, action) {
    switch (action.type) {
        case actionTypes.DISPLAY_NOTIFICATION_DRAWER: {
            return {
                ...state,
                isNotificationDrawerVisible: true,
            }
        };

        case actionTypes.HIDE_NOTIFICATION_DRAWER: {
            return {
                ...state,
                isNotificationDrawerVisible: false,
            }
        }

        case actionTypes.LOGIN_SUCCESS: {
            return {
                ...state,
                isUserLoggedIn: true,
            }
        }

        case actionTypes.LOGIN_FAILURE: {
            return {
                ...state,
                isUserLoggedIn: false,
            }
        }

        case actionTypes.LOGIN: {
            return {
                ...state,
                isUserLoggedIn: false,
            }
        }

        default:
            return state
    }
}